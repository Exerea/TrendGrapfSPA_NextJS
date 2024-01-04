"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { requestInit } from "@/api/fetcher";
import { prefCodesState } from "@/recoil/atoms/checkstate";
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
  const name: string = `this is ${1}`;

  const preCodes: number[] = useRecoilValue(prefCodesState);

  const [seriesOptionsType, setSeriesOptionsType] = useState<
    SeriesOptionsType[]
  >([]);
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
  const arrayFetcher = useCallback(async (preCodes: number[]) => {
    console.log("error fetching");
    //都道府県コードからURLコード群に変換
    //NOTE:RESASは1クエリ条件1precodeのため
    const urls: string[] = preCodes.map((code) => {
      const URL = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";
      return `${URL}?prefCode=${code}`;
    });

    //レスポンスからデータ抽出
    try {
      //取得データ
      const responses = await Promise.all(
        urls.map((url) => fetch(url, requestInit))
      );
      const data = await Promise.all(
        responses.map((response) => response.json())
      );

      //オプション変換
      const series: SeriesOptionsType[] = [];
      for (const value of data) {
        const record: record[] = value.result.data[0].data;
        const values: string[] = record.map((val: record) => val.value);
        const val: SeriesOptionsType = {
          name: name,
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
  }, [preCodes]);

  //preCodesが変更されるたび再構築
  useEffect(() => {
    arrayFetcher(preCodes);
  }, [preCodes]);

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
