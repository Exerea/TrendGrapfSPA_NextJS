import { render, screen } from "@testing-library/react";
import TitleHeader from "@/components/Header/TitleHeader";
import React from "react";

describe("Header Test", () => {
    test("タイトル表示", () => {

        //Given : Nothing
        //When
        render(<TitleHeader />);

        //Then
        const title = screen.getByText("RESAS API 人口構成");
        expect(title).toBeInTheDocument();
    });
});
