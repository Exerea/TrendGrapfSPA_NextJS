import { useCheckBox } from "@/hooks/useCheckBox";
import React from "react";

/**
 * チェックボックス (個別) を作成します。
 * @param param0
 * @returns 構築済チェックボックス
 */
const CheckBox: React.FC<CreateCheckBoxProps> = ({
  prefacture,
}: CreateCheckBoxProps) => {
  const { isChecked, setValues } = useCheckBox();

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setValues(prefacture)}
      />
      {prefacture.prefName}
    </label>
  );
};

export default CheckBox;
