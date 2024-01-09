"use client";
import React, { useCallback, useEffect, useState } from "react";
import Highcharts, { SeriesOptionsType } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { requestInit } from "@/api/fetcher";
import { prefacturesState } from "@/recoil/atoms/checkstate";
import { useRecoilValue } from "recoil";
import { useGraphForm } from "@/hooks/useGraphForm";

/**
 * Graphフォーム
 * {@link SelectionForm}のチェックボックスのtoggle状況で再レンダーする
 * @returns 構築済みフォーム
 */
const Graph: React.FC = () => {
  
  const options = useGraphForm();

  return (
    <HighchartsReact
      key={"resas_chart"}
      highcharts={Highcharts}
      options={options}
    />
  );
};

const GraphForm: React.FC = () => {

  return (
    <div>
      <Graph></Graph>
    </div>
  );
};

export default GraphForm;
