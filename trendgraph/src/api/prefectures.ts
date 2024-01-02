// import useSWR from "swr";

// type Prefecture = {
//   prefCode: number;
//   prefName: string;
// };

// //exists API_KEY?
// const RESAS_API_KEY = process.env.RESAS_APIKEY;
// if (!RESAS_API_KEY) {
//   throw new Error(
//     "RESAS API key is undefined. Please check your environment variables."
//   );
// }

// // SWR fetcher
// const fetcher = (url: string): Promise<Prefecture[]> => {
//   //header
//   const header: Headers = new Headers({
//     "X-API-KEY": RESAS_API_KEY,
//   });

//   //data fetch
//   return fetch(url, { headers: header })
//     .then((response) => response.json())
//     .catch((error) => console.error("[ERROR] : ", error));
// };

// const RESAS_URL = "https://api.resas-portal.go.jp/v1/prefectures";
// export default function handler() {
//   const { data, error } = useSWR(RESAS_URL, fetcher);
//   return { data, error };
// }
