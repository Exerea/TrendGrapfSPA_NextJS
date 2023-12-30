'use client'
import React from 'react'
import Highcharts, { SeriesOptionsType, Options } from "highcharts"
import HighchartsReact, { HighchartsReactProps } from 'highcharts-react-official';


/**
 * ChartOptionを構築する
 * @param targetID 反映先要素ID
 * @returns 構築済Chartオプション
 */
function createOptions(values: SeriesOptionsType[]): Options {
  return {
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
 * Graphフォーム
 * {@link SelectionForm}のチェックボックスのtoggle状況で再レンダーする
 * @returns 構築済みフォーム
*/
function GraphForm({ values }: { values: SeriesOptionsType[] }) {

  const options: Options = createOptions(values);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default GraphForm