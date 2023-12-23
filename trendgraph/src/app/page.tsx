import TitleHeader from "./components/TitleHeader";
import SelectionForm from "./components/SelectionForm";
import GraphForm from "./components/GraphForm";
import React from "react";

function Page() {

  const tsx = (
    <main>
      <TitleHeader></TitleHeader>
      <SelectionForm></SelectionForm>
      <GraphForm></GraphForm>
    </main>
  );

  return tsx;
}

export default Page;