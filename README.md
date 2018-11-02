# 設計手法について

[FLOCSS](https://github.com/hiloki/flocss)ベースで設計し、一部オリジナルルールを適応

## オリジナルルールについて

Component と Project の分類について

### Component

* 固有の幅を持たない（BEMのBlockにあたる部分）
* 外に影響するプロパティを持たない（marginとか）
* Project に入れて使用する（width: 100%; でも）

### Project

* 固有の幅を持つ（BEMのBlockにあたる部分）
* Componentを内包する

# その他

* ページレイアウトには CSS Grid Layout を使用
  * footer の最下部固定（コンテンツが短くても最下部）
  * Autoprefixer が IE11 にも対応したため
* font-size 管理は rem を採用

# ややこしい例

* カード型で横幅固定化されたものと、可変のものはどうするか？
  * 可変のものを Component
  * 固定化のものを Project に定義する
  * sass の機能を使って統一化するかもしれないがファイルとしては別管理とする
  * 別物として扱いたい場合はにコード重複させる
