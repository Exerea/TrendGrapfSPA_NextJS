'use client'
import React, { useEffect } from 'react'
import Highcharts, { ChartCallbackFunction, SeriesOptionsType, Options } from "highcharts"

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
/**
 * ChartOptionを構築する
 * @param targetID 反映先要素ID
 * @returns 構築済Chartオプション
 */
function createOptions(targetID: string): Options {
  return {
    chart: {
      renderTo: targetID // ターゲット要素を指定
    },

    title: {
      text: '都道府県別の総人口推移',
      align: 'left'
    },

    subtitle: {
      text: 'By <a href="https://resas.go.jp/#/13/13101">地域経済分析システム RESAS</a>',
      align: 'left'
    },

    yAxis: {
      title: {
        text: '人口'
      }
    },

    xAxis: {
      accessibility: {
        rangeDescription: '年度'
      }
    },

    series: values,

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2000
      }
    },


    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }
}

/**
 * Chartの構築
 * @param targetID 構築先要素ID
 */
function createChart(targetID: string) {

  //Chart Option構築
  const options: Options = createOptions(targetID);

  //作成後のコールバック 何もしない
  const callback: ChartCallbackFunction = () => { };

  //create Chart
  Highcharts.chart(options, callback);
}


/**
 * Graphフォーム
 * {@link SelectionForm}のチェックボックスのtoggle状況で再レンダーする
 * @returns 構築済みフォーム
 */
function GraphForm() {

  useEffect(() => {
    createChart('chart-container');
  }, []);

  return (
    <div id="chart-container"></div>
  )
}

export default GraphForm