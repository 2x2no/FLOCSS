# 設計手法について

[FLOCSS](https://github.com/hiloki/flocss)ベースで設計し、一部オリジナルルールを適応

## オリジナルルールについて

Component と Project の分類について

### Component

* 固有の幅を持たない（BEMのBlockにあたる部分）
* 外に影響するプロパティを持たない（marginとか）
* Project に入れて使用する（width: 100%; でも）

### Project

* Componentを内包する
* Block または Element で横幅を管理している

# その他

* ページレイアウトには CSS Grid Layout を使用
  * footer の最下部固定（コンテンツが短くても最下部）
  * Autoprefixer が IE11 にも対応したため
* font-size 管理は rem を採用
