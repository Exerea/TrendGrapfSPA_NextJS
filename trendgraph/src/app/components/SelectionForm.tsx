import fetcher from "@/api/fetcher";
import useSWR from "swr";
import React from "react";
import CheckBox from "./CheckBox";

const CheckBoxes: React.FC = () => {
  const URL: string = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const { data, error } = useSWR(URL, fetcher);

  //リクエスト失敗
  if (error) {
    return <div>リクエスト失敗</div>;
  }

  //リクエスト成功
  else {
    if (data) {
      //CheckBoxを作成していく
      const prefactures: Prefacture[] | [] = data.result;
      return (
        <>
          {prefactures.map((prefacture: Prefacture) => (
            <CheckBox key={prefacture.prefCode} prefacture={prefacture} />
          ))}
        </>
      );
    }

    return <div>データ読み込み中</div>;
  }
};

/**
 * 選択フォーム
 * @param prefParams
 * @returns
 */
const SelectionForm: React.FC = () => {
  return (
    <div>
      <h3>都道府県</h3>
      <CheckBoxes></CheckBoxes>
    </div>
  );
};

export default SelectionForm;
