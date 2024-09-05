// 側板の横幅 (px)
const SIDE_PLATE_WIDTH = 25

// 棚板の縦幅 (px)
const SHELF_BOARD_HEIGHT = 10

// 本のサイズ (px)
const BOOK_HEIGHT = 350
const BOOK_WIDTH = 70

// タグに対応する色
const TAG_COLOR = {
    アルバイト: 'red',
    インターン: 'yellow',
    趣味: 'green',
    研究: 'blue',
}

// ブックベルト（帯）の色
const BOOK_BELT_COLOR = 'orange'

export default (context, inject) => {
    inject('SIDE_PLATE_WIDTH', SIDE_PLATE_WIDTH)
    inject('SHELF_BOARD_HEIGHT', SHELF_BOARD_HEIGHT)
    inject('BOOK_HEIGHT', BOOK_HEIGHT)
    inject('BOOK_WIDTH', BOOK_WIDTH)
    inject('TAG_COLOR', TAG_COLOR)
    inject('BOOK_BELT_COLOR', BOOK_BELT_COLOR)
}
