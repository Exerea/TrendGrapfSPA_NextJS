describe("fetcher", () => {
  beforeEach(jest.resetModules);

  test("ステータス正常か？", async () => {
    const header: Headers = new Headers({
      "X-API-KEY": "api_key",
    });
    const RESAS_URL = "https://api.resas-portal.go.jp/v1/prefectures";
    //data fetch
    async function get() {
      fetch(RESAS_URL, { headers: header })
        .then((response) => response.json())
        .catch((error) => console.error("[ERROR] : ", error));
    }

    await expect(get()).rejects.toThrow();
  });

});
