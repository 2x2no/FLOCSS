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
* Block 、または Element で横幅を管理している