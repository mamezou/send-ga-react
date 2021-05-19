# React で GoogleAnalytics の設定をする【UA, GA4 対応版】のサンプルコード

[記事](https://zenn.dev/mamezou/articles/4d0d7b79b639d5)のサンプルコード

## 状態

CRA を TypeScript で行い、react-router-dom をインストール。
その後、トラッキングの設定を行っている。
最低限トップページとアバウトページを用意した。

## インストール

```
git clone git@github.com:mamezou/send-ga-react.git
cd send-ga-react
yarn
yarn start

```

## 設定方法

最低限以下ファイルの UA と G から始まる箇所を変更すれば使える。
なお、env ファイルで管理する方法もあるが省略。
public/index.html
src/router/router.tsx
