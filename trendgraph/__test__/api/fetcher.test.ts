// 必要なモックとライブラリをインポート
import fetcher, { requestInit } from '@/api/fetcher';
// global.fetch = require('jest-fetch-mock');

// describe('リクエスト内容の構築', () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//   });

//   it('環境変数にRESAS APIキーが設定されていない場合、エラーを投げる', () => {
//     delete process.env.RESAS_APIKEY;
//     expect(createRequestInit).toThrow("RESAS API key is undefined. Please check your environment variables.");
//   });

//   it('正しいリクエスト設定が構築される', () => {
//     process.env.RESAS_APIKEY = 'dummy_api_key';
//     const expectedHeader = new Headers({
//       "X-API-KEY": 'dummy_api_key',
//     });

//     expect(createRequestInit()).toEqual({
//       method: "GET",
//       headers: expectedHeader,
//     });
//   });
// });

// describe('SWRフェッチャー構築', () => {
//   beforeEach(() => {
//     fetch.resetMocks();
//     process.env.RESAS_APIKEY = 'dummy_api_key';
//   });

//   it('リクエストが成功した場合、JSONレスポンスを返す', async () => {
//     const mockResponse = { data: 'test' };
//     fetch.mockResponseOnce(JSON.stringify(mockResponse));

//     const response = await fetcher('dummy_url');
//     expect(response).toEqual(mockResponse);
//   });

//   it('リクエストが失敗した場合、エラーをキャッチしてログに記録する', async () => {
//     const consoleSpy = jest.spyOn(console, 'error');
//     fetch.mockReject(new Error('fake error'));

//     await fetcher('dummy_url');
//     expect(consoleSpy).toHaveBeenCalledWith("[ERROR] : ", expect.any(Error));
//   });
// });
