# TrendGraphSPA_NextJS

都道府県別の総人口推移グラフを表示する SPA を構築する

## Overview

RESAS(地域経済分析システム) API を用いて、各都道府県の人口構成を表示するアプリケーションを構築する。
画面上部ではユーザーが選択できるチェックボックス群を API から都道府県を取得し、構築する。
画面下部では選択した都道府県の情報を API から取得し、グラフにしてすべて表示する。

また、本件は[フロントエンドコーディング試験](https://notion.yumemi.co.jp/%E6%8E%A1%E7%94%A8%E9%96%A2%E9%80%A3%E8%B3%87%E6%96%99%E5%85%AC%E9%96%8B/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A9%A6%E9%A8%93)を題材にしたアプリケーションです。

## Tech

### Frontend Development

- React (Next.js)
- TypeScript
- HighChart
- SWR

### API

- RESAS API

### Others

- ESLint
- Jest
- Prettier
- pnpm

### Deployment

- Vercel

#### ■ [公開先 : Trend Graph](https://trend-graph.vercel.app/)

## Sample Image

![SampleView](/docs/resas_api.png)
