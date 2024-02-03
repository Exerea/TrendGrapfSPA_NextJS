
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import CheckBox from "@/components/CheckBox/CheckBox";

describe("CheckBox Test", () => {
    test("都道府県ラベルが表示されるか", () => {
        //Given
        const TEST_PREFACTURE: Prefacture = {
            prefCode: 1,
            prefName: "Tokyo",
        };

        //When
        render(
            <RecoilRoot>
                <CheckBox key={TEST_PREFACTURE.prefCode} prefacture={TEST_PREFACTURE} />
            </RecoilRoot>
        );

        //Then
        const label: HTMLElement = screen.getByLabelText("Tokyo");
        expect(label).toBeInTheDocument();
    });
});
