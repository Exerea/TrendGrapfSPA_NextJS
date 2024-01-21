import fetcher from "@/api/fetcher";
import useSWR from "swr";
import React from "react";
import CheckBox from "../CheckBox/CheckBox";
import styles from "./SelectionForm.module.css"

/**
 * チェックボックスフォームを作成します。
 * - 表示データが取得できない場合は、別途メッセージを表示します。
 * - 取得できた場合は各都道府県の{@link @/CheckBox}を表示します。
 * @returns {React.ReactElement} チェックボックスフォーム
 */
const CheckBoxes: React.FC = () => {
    const URL: string = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
    const { data, error, isLoading } = useSWR(URL, fetcher);

    //リクエスト失敗
    if (error) {
        return <div>リクエスト失敗</div>;
    }

    //ローディング中
    if (isLoading) {
        return <div>データ読み込み中</div>;
    }

    //チェックボックス群
    const prefactures: Prefacture[] | [] = data.result;
    return (
        <>
            {prefactures.map((prefacture: Prefacture) => (
                <CheckBox key={prefacture.prefCode} prefacture={prefacture} />
            ))}
        </>
    );
};

/**
 * 選択フォームを構築します。
 * @returns {React.ReactElement} 選択フォーム
 */
const SelectionForm: React.FC = () => {
    return (
        <>
            <div>
                <h3>都道府県</h3>
                <div className={styles.container}>
                    <CheckBoxes></CheckBoxes>
                </div>
            </div>
        </>
    );
};

export default SelectionForm;
