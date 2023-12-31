
import React, { useState } from 'react';










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
  const [bool, setBool] = useState(false);

  const toggle = () => {
    setBool(!bool);
  };

  return (
    <label>
      <input type='checkbox' key={param.prefacture.prefCode} checked={param.checked = false} onClick={toggle}/>
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
const SelectionForm: React.FC<PrefactureResponses> = (props: PrefactureResponses) => {
  return (
    <div>
      {CheckBoxes(props)}
    </div>
  );
};

export default SelectionForm;