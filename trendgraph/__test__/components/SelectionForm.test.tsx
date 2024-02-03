import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import SelectionForm from "@/components/SelectionForm/SelectionForm";

//swr無効化
const mockUseSWR = jest.fn();
jest.mock("swr", () => ({
    __esModule: true,
    default: () => mockUseSWR(),
}));

describe("SelectionForm Test", () => {
    test("Error", () => {
        //Given
        const mockData = { isLoading: undefined, error: true, data: undefined };
        mockUseSWR.mockReturnValue(mockData);

        //When
        render(<SelectionForm />);

        //Then
        const status = screen.getByText("リクエスト失敗");
        expect(status).toBeInTheDocument();
    });

    test("Loading", () => {
        //Given
        const mockData = { isLoading: true, error: undefined, data: undefined };
        mockUseSWR.mockReturnValue(mockData);

        //When
        render(<SelectionForm />);

        //Then
        const status = screen.getByText("データ読み込み中");
        expect(status).toBeInTheDocument();
    });

    test("Success", () => {
        //Given
        const TEST_PREFACTURE1: Prefacture = {
            prefCode: 1,
            prefName: "Tokyo",
        };
        const TEST_PREFACTURE2: Prefacture = {
            prefCode: 2,
            prefName: "Osaka",
        };
        const TEST_PREFACTURES: Prefacture[] = [TEST_PREFACTURE1, TEST_PREFACTURE2];
        const TEST_RESPONSE = {
            message: null,
            result: TEST_PREFACTURES
        };

        const mockData = { isLoading: undefined, error: undefined, data: TEST_RESPONSE };
        mockUseSWR.mockReturnValue(mockData);

        //When
        render(
            <RecoilRoot>
                <SelectionForm />
            </RecoilRoot>
        );

        //Then
        const tokyo = screen.getByText("Tokyo");
        expect(tokyo).toBeInTheDocument();

        const osaka = screen.getByText("Osaka");
        expect(osaka).toBeInTheDocument();
    });
});
