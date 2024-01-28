import { useEffect, useState } from "react";
import arrayFetcher from "@/api/populationFetcher";
import { prefacturesState } from "@/recoil/atoms/checkstate";
import { useRecoilValue } from "recoil";
import { SeriesOptionsType } from "highcharts";

/**
 * グラフ描画のオプションを構築します
 * @param val 統計データ
 * @param categories 年度
 * @returns 描画データ
 */
export function createOption(val: SeriesOptionsType[], categories: number[]) {
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

/**
 * 都道府県コードからURLコード群に変換します
 * NOTE:RESASは1クエリ条件1precodeのため
 * @param prefactures 都道府県コード
 * @returns {AccessPrefacture[]}アクセスデータセット
 */
function createAccessPrefacture(prefactures: Prefacture[]): AccessPrefacture[] {
    const accessPrefactures: AccessPrefacture[] = prefactures.map((prefacture) => {
        const URL: string = "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

        const accessData: AccessPrefacture = {
            preName: prefacture.prefName,
            url: `${URL}?prefCode=${prefacture.prefCode}`,
        };
        return accessData;
    });
    return accessPrefactures;
}

/**
 * API取得データからグラフ表示データへ成形します。
 * @param data APIレスポンス
 * @param accessData API都道府県アクセス情報
 * @returns {ViewValues} グラフ表示データ
 */
function convertToViewValues(data: resasApiResponse[], accessData: AccessPrefacture[]): ViewValues {
    // オプション変換
    const series: SeriesOptionsType[] = [];
    for (let i = 0; i < data.length; i++) {
        const getData: allPopulationData[] = data[i].result.data;
        const record: PrefactureRecord[] = getData[0].data;
        const values: string[] = record.map((val: PrefactureRecord) => val.value);

        //線形グラフ
        const val: SeriesOptionsType = {
            name: accessData[i].preName,
            data: values,
            type: "line",
        };
        series.push(val);
    }

    // グラフラベル構築
    const record: PrefactureRecord[] = data[0].result.data[0].data;
    const years: number[] = record.map((val: PrefactureRecord) => val.year);

    // 構築データ
    return {
        series: series,
        years: years,
    };
}

export const useGraphForm = () => {
    const prefactures: Prefacture[] = useRecoilValue(prefacturesState);
    const [seriesOptionsType, setSeriesOptionsType] = useState<SeriesOptionsType[]>([]);
    const [categories, setCategories] = useState<number[]>([]);

    //表示データを構築
    function handleValue(prefactures: Prefacture[]) {
        const accessPrefactures: AccessPrefacture[] = createAccessPrefacture(prefactures);
        const data: Promise<resasApiResponse[]> = arrayFetcher(accessPrefactures);
        data.then((data) => {
            const value: ViewValues = convertToViewValues(data, accessPrefactures);
            setSeriesOptionsType(value.series);
            setCategories(value.years);
        }).catch(() => {
            setSeriesOptionsType([]);
            setCategories([]);
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
