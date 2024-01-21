"use client"
import { RecoilRoot } from "recoil";
import TitleHeader from "../components/Header/TitleHeader";
import SelectionForm from "../components/SelectionForm/SelectionForm";
import GraphForm from "../components/GraphForm/GraphForm";
import React from "react";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <main>
      <TitleHeader></TitleHeader>
      <RecoilRoot>
        <SelectionForm ></SelectionForm>
        <GraphForm></GraphForm>
      </RecoilRoot>
    </main>
  );
};

export default Page;
