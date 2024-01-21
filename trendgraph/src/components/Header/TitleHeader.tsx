import React from "react";
import styles from "./TitleHeader.module.css"

/**
 * アプリケーションタイトルヘッダーを作成します。
 * @returns {React.ReactElement} タイトルヘッダー
 */
function TitleHeader(): React.ReactElement {
    return <header className={styles.header}>RESAS API 人口構成</header>;
}

export default TitleHeader;
