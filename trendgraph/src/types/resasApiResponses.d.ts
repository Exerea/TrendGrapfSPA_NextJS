/**
 * RESAS API　レスポンスのグラフ表示用タイプ
 */

type PrefactureRecord = {
    year: number;
    value: string;
};

type allPopulationData = {
    label: "総人口";
    data: PrefactureRecord[];
};

type resasApiResponse = {
    result: {
        boundaryYear: number;
        data: allPopulationData[];
    };
};
