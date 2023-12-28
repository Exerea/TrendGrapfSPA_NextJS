import React from 'react';

type CheckboxParams = {
  label: string;
  checked?: boolean;
};

//todo:storybook
const CheckBox: React.FC<CheckboxParams> = ({ label, checked = false }) => {
  return (
    <label>
      <input type='checkbox' defaultChecked={checked} />
      {label}
    </label>
  );
}

type PrefactureResponse =  {
  prefCode: number,
  prefName: string
}

type PrefactureResponses =  {
  prefParams: PrefactureResponse[]
}


/**
 * 選択フォーム
 * @param prefParams
 * @returns 
 */
const SelectionForm: React.FC<PrefactureResponses> = ({ prefParams }) => {
  return (
    <div>
      {prefParams.map((prefParam) => {
        return <CheckBox key={prefParam.prefCode} label={`${prefParam.prefName}`} />;
      })}
    </div>
  );
};

export default SelectionForm;