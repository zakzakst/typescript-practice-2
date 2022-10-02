# 参考など

## @types/nodeについて
Node.jsの型定義ファイルを用意しておきます。TypeScriptだけだとNode.jsのモジュールにどんなメソッドや変数があるかという情報を持っていないため、コンパイルが通りません。型定義ファイルを読み込むとTypeScriptに対応したエディターでコード補完が効くメリットもあります。
https://ics.media/entry/4682/

## TypeScriptプレイグラウンド
https://www.typescriptlang.org/ja/play

## TypeScript PlaygroundでLOG(ログ)をクリアするには？
https://www.choge-blog.com/programming/typescript-playgroundlogclear/


# 本の内容覚えておく
``` typescript
// readonly
const data:readonly number[] = [10, 20, 30]

// タプル型
let:me:[string, number]
me = ['taro', 39]

// enum型
enum janken {goo, choki, paa}

// typeで型を定義
type name = string
type mail = string
type age = number
type person = [name, mail, age]

// 条件型
type message = 'hello' | 'bye'
type id = number | string

// ユーティリティ型
type data = [string, number]
type ReqData = Readonly<data>

// nullかもしれない値
type data = [name:string, age?:number]

// 絶対nullではない値
type data = name!:string
```