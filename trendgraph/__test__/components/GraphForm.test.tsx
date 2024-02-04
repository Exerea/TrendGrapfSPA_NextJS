import { render, screen } from "@testing-library/react";
import GraphForm from "@/components/GraphForm/GraphForm";
import { RecoilRoot } from "recoil";

const mockUseGraphForm = jest.fn();

describe("GraphForm Test", () => {
    test("未選択", () => {
        //Given
        const mockData = { seriesOptionsType: [], categories: [] };
        mockUseGraphForm.mockReturnValue(mockData);

        //When
        render(
            <RecoilRoot>
                <GraphForm />
            </RecoilRoot>,
        );

        //Then
        const label = screen.getByText("都道府県を選択してください");
        expect(label).toBeInTheDocument();
    });
});
