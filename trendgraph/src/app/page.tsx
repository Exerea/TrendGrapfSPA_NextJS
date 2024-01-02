
"use client"
import { RecoilRoot } from 'recoil'
import TitleHeader from "./components/TitleHeader";
import SelectionForm from "./components/SelectionForm";
import GraphForm from "./components/GraphForm";
import React from "react";



/**
* 仮データ
*/
const values: SeriesOptionsType[] = [
  {
    name: 'Installation & Developers',
    data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
    type: 'line'
  },
  {
    name: 'Installation & Developers2',
    data: [40000, 48000, 65000, 81000, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
    type: 'line'
  },
];

function Page() {
  return (
    <main>
      <TitleHeader></TitleHeader>
      <RecoilRoot>
        <SelectionForm></SelectionForm>
        <GraphForm values={values} ></GraphForm>
      </RecoilRoot>
    </main>
  );
}

export default Page;