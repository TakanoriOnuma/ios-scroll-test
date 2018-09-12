# iOSのスクロールテスト
iOSで中スクロールすると時々スクロールできなくなることがあるのでそれを調査する。  

[デモページ](https://takanorionuma.github.io/ios-scroll-test/)

## 動作状況
今回中スクロールの要素は`position: absolute; -webkit-overflow-scrolling: touch;`にしている。  
この時中スクロールはしているが、一度終端までスクロールした後少し待ってから再度スクロールするとdocument要素自体がスクロールしていた。  
`position: absolute;`にしているためdocumentがスクロールした際に移動されるが、`position: fixed;`にした場合はdocumentがスクロールしていても同じ位置にいるためこの現象に気付きにくい。

## 結論
スクロールがフリーズする原因はdocument自体のスクロールイベントに持っていかれてしまうことだと思われる。  
この実験では`position: absolute;`にしているが、`position: fixed;`にした場合はdocumentがスクロールされていても変化がないため、これがフリーズしているように見える。  
原因は分かったが、この問題を解消する方法までは分からなかった。

## ローカル開発
```
$ yarn install
$ yarn start
```
