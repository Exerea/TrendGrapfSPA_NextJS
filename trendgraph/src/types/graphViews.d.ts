/**
 * 都道府県コードとネームセット
 */
type Prefacture = {
    prefCode: number;
    prefName: string;
};

/**
 * Graph表示の１データの形式
 */
type ViewValues = {
    series: SeriesOptionsType[];
    years: number[];
};

/**
 * 選択都道府県アクセスデータ形式
 */
type AccessPrefacture = {
    preName: string;
    url: string;
};
