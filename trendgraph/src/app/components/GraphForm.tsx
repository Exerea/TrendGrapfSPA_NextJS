import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { option, useGraphForm } from "@/hooks/useGraphForm";

/**
 * Graphを構築します。
 * - データがまだロードされていない / 未選択 の場合は、別途メッセージを表示します。
 * - {@link SelectionForm} のチェックボックスの状態変化に応じてコンポーネントを再レンダリングします。
 * @returns {React.FC} 選択データのグラフ or 非表示メッセージ のコンポーネント
 */
const Graph: React.FC = () => {
    const { seriesOptionsType, categories } = useGraphForm();

    return seriesOptionsType.length == 0 ? (
        <div>未選択</div>
    ) : (
        <HighchartsReact key={"resas_chart"} highcharts={Highcharts} options={option(seriesOptionsType, categories)} />
    );
};

/**
 * Graphフォームを構築します。
 * @returns {React.FC} グラフフォーム
 */
const GraphForm: React.FC = () => {
    return (
        <div>
            <Graph></Graph>
        </div>
    );
};

export default GraphForm;
