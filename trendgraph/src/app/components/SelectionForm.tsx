
import fetcher from '@/api/fetcher';
import { prefCodesState } from '@/recoil/atoms/checkstate';
import useSWR from 'swr';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

type PrefactureResponse = {
  prefCode: number,
  prefName: string
}

type PrefactureResponses = {
  prefParams: PrefactureResponse[] | []
}

type CheckboxParams = {
  prefacture: PrefactureResponse;
  checked?: boolean;
};


function CheckBox(param: CheckboxParams) {
  const [prefCodes, setPredCodes] = useRecoilState(prefCodesState);
  const [isChecked, setIsChecked] = useState(false);


  function handleValues(prefCode: number) {

    //チェック状態の管理
    const newChecked: boolean = !isChecked;
    setIsChecked(newChecked);


    //表示都道府県の管理
    const newCodes: number[] = newChecked
      ? [...prefCodes, prefCode]
      : prefCodes.filter((code) => code !== prefCode);
    setPredCodes(newCodes);

    console.log("this is" + newCodes + ":" + newChecked);
  }


  return (
    <label key={param.prefacture.prefCode}>
      <input type='checkbox' key={param.prefacture.prefCode} checked={isChecked} onChange={() => handleValues(param.prefacture.prefCode)} />
      {param.prefacture.prefName}
    </label>
  );
}

function createBox(prefacture: PrefactureResponse) {
  const params: CheckboxParams = {
    prefacture: prefacture,
    checked: false
  };
  return CheckBox(params)
}






const Form: React.FC = () => {

  const URL: string = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const { data, error } = useSWR(URL, fetcher);

  //リクエスト失敗
  if (error) {
    return <div>リクエスト失敗</div>;
  }

  //リクエスト成功
  else {
    return data
      ? <CheckBoxes prefParams={data.result}></CheckBoxes>
      : <div>データ読み込み中</div>;
  }

};

const CheckBoxes = (prefactures: PrefactureResponses) => {

  const createBoxes = (prefactures: PrefactureResponse[]) => {
    return prefactures.map(prefacture => createBox(prefacture));
  }

  return createBoxes(prefactures.prefParams);
};





/**
 * 選択フォーム
 * @param prefParams
 * @returns 
 */
const SelectionForm: React.FC = () => {
  return (
    <div>
      <Form></Form>
    </div>
  );
};



export default SelectionForm;