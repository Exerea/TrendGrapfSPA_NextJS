import { prefacturesState } from "@/recoil/atoms/checkstate";
import { useState } from "react";
import { useRecoilState } from "recoil";

type ChangeValues = {
  isChecked: boolean;
  viewPrefactures: Prefacture[];
};

function changeValue(
  isChecked: boolean,
  prefacture: Prefacture,
  nowViewPrefactures: Prefacture[]
): ChangeValues {
  //更新値
  const newValue: ChangeValues = {
    //チェック状態の管理
    isChecked: !isChecked,
    //表示都道府県の管理
    viewPrefactures: !isChecked
      ? [...nowViewPrefactures, prefacture]
      : nowViewPrefactures.filter((e) => e !== prefacture),
  };

  return newValue;
}

export const useCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [prefactures, setPrefactures] = useRecoilState(prefacturesState);

  //更新値をセットする
  function setValues(prefacture: Prefacture) {
    const value: ChangeValues = changeValue(isChecked, prefacture, prefactures);
    setIsChecked(value.isChecked);
    setPrefactures(value.viewPrefactures);
  }
  return {
    isChecked,
    setValues,
  };
};
