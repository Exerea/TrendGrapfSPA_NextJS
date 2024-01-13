import { useEffect, useState } from "react";
import { requestInit } from "@/api/fetcher";
import { prefacturesState } from "@/recoil/atoms/checkstate";
import { useRecoilValue } from "recoil";
import { SeriesOptionsType } from "highcharts";

/**
 * Graphフォーム
 * {@link SelectionForm}のチェックボックスのtoggle状況で再レンダーする
 * @returns 構築済みフォーム
 */
export function option(val: SeriesOptionsType[], categories: number[]) {
    return {
        title: {
            text: "都道府県別の総人口推移",
            align: "left",
        },
        subtitle: {
            text: '<a href="https://opendata.resas-portal.go.jp/" style="color: blue;">from : 地域経済分析システム</a>',
            align: "left",
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

type record = {
    year: number;
    value: string;
};

type Pres = {
    preName: string;
    url: string;
};

type result = {
    series: SeriesOptionsType[];
    years: number[];
};

/**
 * SWR arrayFetcher構築
 * @param prefactures 選択済み都道府県データ群
 * @returns
 */
async function arrayFetcher(prefactures: Prefacture[]): Promise<result> {
    //都道府県コードからURLコード群に変換
    //NOTE:RESASは1クエリ条件1precodeのため
    const accessData: Pres[] = prefactures.map((prefacture) => {
        const URL = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

        const pres: Pres = {
            preName: prefacture.prefName,
            url: `${URL}?prefCode=${prefacture.prefCode}`,
        };
        return pres;
    });

    //レスポンスからデータ抽出
    try {
        //取得データ
        const data = await Promise.all(
            accessData.map(async (data) => {
                const response = await fetch(data.url, requestInit);
                return response.json();
            }),
        );

    

        //オプション変換
        const series: SeriesOptionsType[] = [];
        for (let i = 0; i < data.length; i++) {
            const record: record[] = data[i].result.data[0].data;
            const values: string[] = record.map((val: record) => val.value);

            const val: SeriesOptionsType = {
                name: accessData[i].preName,
                data: values,
                type: "line",
            };
            series.push(val);
        }

        const record: record[] = data[0].result.data[0].data;
        const years: number[] = record.map((val: record) => val.year);

        const result: result = {
            series: series,
            years: years,
        };
        return result;
    
    } catch (error) {
        
        //データなし
        const result: result = {
            series: [],
            years: [],
        };
        return result;
    }
}

export const useGraphForm = () => {
    const prefactures: Prefacture[] = useRecoilValue(prefacturesState);
    const [seriesOptionsType, setSeriesOptionsType] = useState<SeriesOptionsType[]>([]);
    const [categories, setCategories] = useState<number[]>([]);

    function handleValue(prefactures: Prefacture[]) {
        const data: Promise<result> = arrayFetcher(prefactures);
        data.then((data) => {
            setSeriesOptionsType(data.series);
            setCategories(data.years);
        });
    }

    //preCodesが変更されるたび再構築
    useEffect(() => {
        handleValue(prefactures);
    }, [prefactures]);

    return {
        seriesOptionsType,
        categories,
    };
};
