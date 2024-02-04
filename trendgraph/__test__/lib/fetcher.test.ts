import fetcher, { requestInit } from "@/api/fetcher";

beforeEach(() => {
    process.env.NEXT_PUBLIC_RESAS_API_KEY = "DUMMY_APU_KEY";
});

describe("Create Request test", () => {
    test("APIKeyが未設定 > エラーが正しく発生するか", () => {
        delete process.env.NEXT_PUBLIC_RESAS_API_KEY;
        expect(requestInit).rejects.toThrow;
    });

    test("APIKeyを設定 > APIKEYを含んだRequest内容が構築されるか", () => {
        expect(requestInit).toHaveBeenCalledWith("x-api-key", process.env.NEXT_PUBLIC_RESAS_API_KEY);
    });
});
