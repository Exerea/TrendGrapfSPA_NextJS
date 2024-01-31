import React from "react";
import CheckBox from "@/components/CheckBox/CheckBox";
import { render, screen } from "@testing-library/react";

describe("CheckBox Test", () => {
    test("都道府県ラベルが表示されるか", () => {
        //Given
        const TEST_PREFACTURE: Prefacture = {
            prefCode: 1,
            prefName: "Tokyo",
        };

        //When
        render(<CheckBox key={TEST_PREFACTURE.prefCode} prefacture={TEST_PREFACTURE} />);

        //Then
        const label: HTMLElement = screen.getByLabelText("Tokyo");
        expect(label).toBeInTheDocument();
    });
});
