import { prefacturesState } from "@/recoil/atoms/checkstate";
import { useState } from "react";
import { useRecoilState } from "recoil";

type UpdatedValues = {
    isChecked: boolean;
    viewPrefactures: Prefacture[];
};

/**
 * チェック状況と表示データを更新します。
 * @param isChecked チェックボックスの現在チェック状況
 * @param prefacture 更新対象の都道府県情報
 * @param nowViewPrefactures 現在表示中の都道府県データ群
 * @returns {UpdatedValues} 更新後 チェック状況と表示データ
 */
function updateValues(isChecked: boolean, prefacture: Prefacture, nowViewPrefactures: Prefacture[]): UpdatedValues {
    //更新値
    const newValue: UpdatedValues = {
        //チェック状態の管理
        isChecked: !isChecked,
        //表示都道府県の管理
        viewPrefactures: !isChecked
            ? [...nowViewPrefactures, prefacture]
            : nowViewPrefactures.filter((e) => e !== prefacture),
    };

    return newValue;
}

/**
 * チェックボックスの挙動を制御するカスタムフックを構築します。
 * @returns チェックボックスのカスタムフック
 */
export const useCheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [prefactures, setPrefactures] = useRecoilState(prefacturesState);

    //更新値をセットする
    function setValues(prefacture: Prefacture) {
        const value: UpdatedValues = updateValues(isChecked, prefacture, prefactures);
        setIsChecked(value.isChecked);
        setPrefactures(value.viewPrefactures);
    }
    return {
        isChecked,
        setValues,
    };
};
