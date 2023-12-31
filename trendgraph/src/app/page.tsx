"use client"

import TitleHeader from "./components/TitleHeader";
import SelectionForm from "./components/SelectionForm";
import GraphForm from "./components/GraphForm";
import React, { useEffect, useState } from "react";
import { SeriesOptionsType } from "highcharts";

const pres = {
  "message": null,
  "result": [{
    "prefCode": 1,
    "prefName": "北海道"
  }, {
    "prefCode": 2,
    "prefName": "青森県"
  }, {
    "prefCode": 3,
    "prefName": "岩手県"
  }, {
    "prefCode": 4,
    "prefName": "宮城県"
  }, {
    "prefCode": 5,
    "prefName": "秋田県"
  }, {
    "prefCode": 6,
    "prefName": "山形県"
  }, {
    "prefCode": 7,
    "prefName": "福島県"
  }, {
    "prefCode": 8,
    "prefName": "茨城県"
  }, {
    "prefCode": 9,
    "prefName": "栃木県"
  }, {
    "prefCode": 10,
    "prefName": "群馬県"
  }, {
    "prefCode": 11,
    "prefName": "埼玉県"
  }, {
    "prefCode": 12,
    "prefName": "千葉県"
  }, {
    "prefCode": 13,
    "prefName": "東京都"
  }, {
    "prefCode": 14,
    "prefName": "神奈川県"
  }, {
    "prefCode": 15,
    "prefName": "新潟県"
  }, {
    "prefCode": 16,
    "prefName": "富山県"
  }, {
    "prefCode": 17,
    "prefName": "石川県"
  }, {
    "prefCode": 18,
    "prefName": "福井県"
  }, {
    "prefCode": 19,
    "prefName": "山梨県"
  }, {
    "prefCode": 20,
    "prefName": "長野県"
  }, {
    "prefCode": 21,
    "prefName": "岐阜県"
  }, {
    "prefCode": 22,
    "prefName": "静岡県"
  }, {
    "prefCode": 23,
    "prefName": "愛知県"
  }, {
    "prefCode": 24,
    "prefName": "三重県"
  }, {
    "prefCode": 25,
    "prefName": "滋賀県"
  }, {
    "prefCode": 26,
    "prefName": "京都府"
  }, {
    "prefCode": 27,
    "prefName": "大阪府"
  }, {
    "prefCode": 28,
    "prefName": "兵庫県"
  }, {
    "prefCode": 29,
    "prefName": "奈良県"
  }, {
    "prefCode": 30,
    "prefName": "和歌山県"
  }, {
    "prefCode": 31,
    "prefName": "鳥取県"
  }, {
    "prefCode": 32,
    "prefName": "島根県"
  }, {
    "prefCode": 33,
    "prefName": "岡山県"
  }, {
    "prefCode": 34,
    "prefName": "広島県"
  }, {
    "prefCode": 35,
    "prefName": "山口県"
  }, {
    "prefCode": 36,
    "prefName": "徳島県"
  }, {
    "prefCode": 37,
    "prefName": "香川県"
  }, {
    "prefCode": 38,
    "prefName": "愛媛県"
  }, {
    "prefCode": 39,
    "prefName": "高知県"
  }, {
    "prefCode": 40,
    "prefName": "福岡県"
  }, {
    "prefCode": 41,
    "prefName": "佐賀県"
  }, {
    "prefCode": 42,
    "prefName": "長崎県"
  }, {
    "prefCode": 43,
    "prefName": "熊本県"
  }, {
    "prefCode": 44,
    "prefName": "大分県"
  }, {
    "prefCode": 45,
    "prefName": "宮崎県"
  }, {
    "prefCode": 46,
    "prefName": "鹿児島県"
  }, {
    "prefCode": 47,
    "prefName": "沖縄県"
  }]
}

function Page() {


  /**
 * 仮データ
 */
  const values: SeriesOptionsType[] = [
    {
      name: 'Installation & Developers',
      data: [43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
      type: 'line'
    },
    {
      name: 'Installation & Developers2',
      data: [40000, 48000, 65000, 81000, 112143, 142383, 171533, 165174, 155157, 161454, 154610],
      type: 'line'
    },
  ];
  const values2: SeriesOptionsType[] = [
    {
      name: '2kome',
      data: [20000, 20000, 20000, 20000, 20000, 20000, 171533, 165174, 155157, 161454, 154610],
      type: 'line'
    },
    {
      name: 'はいこれ2個目ね',
      data: [40000, 48000, 65000, 81000, 40000, 40000, 171533, 165174, 155157, 161454, 154610],
      type: 'line'
    },
  ];



  const [value, setValue] = useState(values);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    setValue(bool ? values : values2);
  }, [bool]);


  const toggle = () => {
    console.log(bool);
    setBool(!bool);
    console.log(bool);
  };

  type PrefactureResponse = {
    prefCode: number,
    prefName: string
  }

  const result: PrefactureResponse[] = pres.result;


  return (
    <main>
      <TitleHeader></TitleHeader>
      <SelectionForm prefParams={result}></SelectionForm>
      <GraphForm values={value} ></GraphForm>
      <button onClick={toggle}>グラフを表示</button>
    </main>
  );
}
// hi guys maina
export default Page;