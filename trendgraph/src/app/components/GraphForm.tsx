"use client";
import React, { useCallback, useEffect, useState } from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { requestInit } from "@/api/fetcher";
import { prefacturesState } from "@/recoil/atoms/checkstate";
import { useRecoilValue } from "recoil";

/**
 * Graphフォーム
 * {@link SelectionForm}のチェックボックスのtoggle状況で再レンダーする
 * @returns 構築済みフォーム
 */
function option(val: SeriesOptionsType[], categories: number[]) {
  return {
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "人口",
      },
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    series: val,
  };
}

const Graph: React.FC = () => {
  

  const prefacture: Prefacture[] = useRecoilValue(prefacturesState);

  const [seriesOptionsType, setSeriesOptionsType] = useState<SeriesOptionsType[]>([]);
  const [categories, setCategories] = useState<number[]>([]);

  type record = {
    year: number;
    value: string;
  };

  /**
   * SWR arrayFetcher構築
   * @param urlArr
   * @returns
   */
  const arrayFetcher = useCallback(async (prefactures: Prefacture[]) => {
    
    type Pres = {
      preName : string,
      url : string,
    }
    
    //都道府県コードからURLコード群に変換
    //NOTE:RESASは1クエリ条件1precodeのため
    const graph: Pres[] = prefactures.map((prefacture) => {
      const URL = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";
      
      const pres : Pres = {
        preName : prefacture.prefName,
        url : `${URL}?prefCode=${prefacture.prefCode}`
      };
      return pres;
    });

    //レスポンスからデータ抽出
    try {


      //取得データ
      const responses = await Promise.all(
        graph.map((data) => fetch(data.url, requestInit))
      );
      const data = await Promise.all(
        responses.map((response) => response.json())
      );


      //オプション変換
      const series: SeriesOptionsType[] = [];
      for (let i = 0; i < data.length; i++) {
        const record: record[] =  data[i].result.data[0].data;
        const values: string[] = record.map((val: record) => val.value);
        const val: SeriesOptionsType = {
          name: graph[i].preName,
          data: values,
          type: "line",
        };
        series.push(val);
      }
      setSeriesOptionsType(series);

      const record: record[] = data[0].result.data[0].data;
      const years: number[] = record.map((val: record) => val.year);
      setCategories(years);
    } catch (error) {
      console.log("error fetching");
    }
  }, [prefacture]);

  //preCodesが変更されるたび再構築
  useEffect(() => {
    arrayFetcher(prefacture);
  }, [prefacture]);

  return (
    <HighchartsReact
      key={"resas_chart"}
      highcharts={Highcharts}
      options={option(seriesOptionsType, categories)}
    />
  );
};

const GraphForm: React.FC = () => {

  return (
    <div>
      <Graph></Graph>
    </div>
  );
};

export default GraphForm;
