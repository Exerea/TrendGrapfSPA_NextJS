
import fetcher from '@/api/fetcher';
import { prefacturesState } from '@/recoil/atoms/checkstate';
import useSWR from 'swr';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

interface CreateCheckBoxProps {
  prefacture: Prefacture;
}

const CreateCheckBox: React.FC<CreateCheckBoxProps> = ({ prefacture}) => {

  const [prefactures, setPrefactures] = useRecoilState(prefacturesState);
  const [isChecked, setIsChecked] = useState(false);

  //チェックボックス押下時のデータを保持する
  function handleValues(prefacture: Prefacture) {

    //チェック状態の管理
    const newChecked: boolean = !isChecked;
    setIsChecked(newChecked);


    //表示都道府県の管理
    const newPrefactures: Prefacture[] = newChecked
      ? [...prefactures, prefacture]
      : prefactures.filter((e) => e !== prefacture);
    setPrefactures(newPrefactures);
  }
  return (
    <label>
      <input type='checkbox' checked={isChecked} onChange={() => handleValues(prefacture)} />
      {prefacture.prefName}
    </label>
  );
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

    if (data) {
      //CheckBoxを作成していく
      const prefactures: Prefacture[] | [] = data.result
      return (
        <>
          {prefactures.map((prefacture:Prefacture) => (
            <CreateCheckBox key={prefacture.prefCode} prefacture={prefacture} />
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
      <Form></Form>
    </div>
  );
};

export default SelectionForm;