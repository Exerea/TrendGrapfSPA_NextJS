import { render, screen } from "@testing-library/react";
import TitleHeader from "@/components/Header/TitleHeader";


describe("Header Test", () => {
    test("タイトル表示", async () => {

        //Given : Nothing

        //When
        render(<TitleHeader />);

        //Then
        const title: HTMLElement = screen.getByText("RESAS API 人口構成");
        expect(title).toBeInTheDocument();
    });
});
