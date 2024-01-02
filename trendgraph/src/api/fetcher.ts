/**
 * リクエスト内容の構築
 * @returns 構築済リクエスト内容
 */
function createRequestInit() {
  //HTTPメソッドタイプ
  //NOTE:RESASから読み取るだけなのでGET固定
  const TYPE: string = "GET";

  //exists API_KEY?
  const RESAS_API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY;
  if (!RESAS_API_KEY) {
    throw new Error(
      "RESAS API key is undefined. Please check your environment variables."
    );
  }

  //header構築
  const header: Headers = new Headers({
    "X-API-KEY": RESAS_API_KEY,
  });

  //ReauestInit構築
  return {
    method: TYPE,
    headers: header,
  };
}

export const requestInit =  createRequestInit();

/**
 * SWR fetcher構築
 * @param url  リクエストURL:RESAS URL
 * @param init リクエスト内容
 * @returns Fetchハンドラ
 */
function fetcher(url: string){
  return fetch(url, createRequestInit())
    .then((response) => response.json())
    .catch((error) => console.error("[ERROR] : ", error));
}

export default fetcher;
