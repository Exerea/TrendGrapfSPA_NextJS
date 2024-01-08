"use client"
import { RecoilRoot } from "recoil";
import TitleHeader from "./components/TitleHeader";
import SelectionForm from "./components/SelectionForm";
import GraphForm from "./components/GraphForm";
import React from "react";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main>
      <TitleHeader></TitleHeader>
      <RecoilRoot>
        <SelectionForm></SelectionForm>
        <GraphForm></GraphForm>
      </RecoilRoot>
    </main>
  );
};

export default Page;
