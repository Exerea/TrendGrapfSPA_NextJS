import { useCheckBox } from "@/hooks/useCheckBox";
import React from "react";
import styles from "./CheckBox.module.css"



type CreateCheckBoxProps = {
    prefacture: Prefacture;
}

/**
 * チェックボックス (個別) を作成します。
 * @param prefacture 都道府県データ
 * @returns {React.ReactElement} チェックボックス
 */
const CheckBox: React.FC<CreateCheckBoxProps> = ({
    prefacture
}): React.ReactElement => {
    const { isChecked, setValues } = useCheckBox();

    return (
        <label className={styles.label}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={isChecked}
                onChange={() => setValues(prefacture)}
            >
            </input>
            {prefacture.prefName}
        </label>
    );
};

export default CheckBox;
