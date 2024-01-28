import { requestInit } from "./fetcher";

/**
 * SWR arrayFetcher構築
 * @param accessData 選択した都道府県アクセス情報
 * @returns {resasApiResponse} レスポンスデータ
 */
export default async function arrayFetcher(accessData: AccessPrefacture[]): Promise<resasApiResponse[]> {
    //取得データ
    const data: resasApiResponse[] = await Promise.all(
        accessData.map(async (data) => {
            const response = await fetch(data.url, requestInit);
            return response.json();
        }),
    );

    return data;
}
