import { useCheckBox } from "@/hooks/useCheckBox";
import React from "react";

/**
 * チェックボックス (個別) を作成します。
 * @param prefacture 都道府県データ
 * @returns {React.ReactElement} チェックボックス
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
            >
            </input>
            {prefacture.prefName}
        </label>
    );
};

export default CheckBox;
