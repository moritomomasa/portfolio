<!-- Please remove this file from your project -->
<template>
    <div
        class="book"
        @click="
            () => {
                $emit('update-selection')
            }
        "
    >
        <div class="content-top content">{{ data.term }}</div>
        <div class="content-middle content">{{ data.title }}</div>
        <div class="content-bottom content">
            <div class="tag-color"></div>
            {{ data.tag }}
        </div>
        <div v-if="isReading" class="book-belt content">立ち読み中</div>
    </div>
</template>

<script>
export default {
    name: 'BookTemplate',
    props: {
        data: {
            type: Object,
            required: true,
        },
        // 選択中の本か
        isReading: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        shelfBoardHeight() {
            return `${this.$SHELF_BOARD_HEIGHT}px`
        },
        bookHeight() {
            return `${this.$BOOK_HEIGHT}px`
        },
        bookWidth() {
            return `${this.$BOOK_WIDTH}px`
        },
        tagColor() {
            return this.$TAG_COLOR[this.data.tag] || 'black'
        },
        bookBeltColor() {
            return this.$BOOK_BELT_COLOR
        },
    },
}
</script>

<style>
.book {
    position: relative;
    height: v-bind(bookHeight);
    width: v-bind(bookWidth);
    margin-left: 1px;
    margin-bottom: v-bind(shelfBoardHeight);
}
.book:hover {
    background-color: aqua;
    font-weight: bold;
}
.content {
    display: flex;
    width: 100%;
    align-items: center;
    writing-mode: vertical-rl;
    background: linear-gradient(
        90deg,
        rgba(153, 153, 153, 0.693) 5%,
        rgba(230, 230, 230, 0.693) 45%,
        rgba(178, 178, 178, 0.81)
    );
    user-select: none;
}
.content-top {
    height: calc(0.25 * v-bind(bookHeight));
    font-size: 0.7rem;
    justify-content: center;
    background: linear-gradient(90deg, rgb(218, 217, 217), white, rgb(233, 233, 233));
}
.content-middle {
    height: calc(0.5 * v-bind(bookHeight));
    padding-top: 1rem;
    font-weight: bold;
}
.content-bottom {
    height: calc(0.25 * v-bind(bookHeight));
    font-size: 0.8rem;
}
.tag-color {
    height: 10px;
    width: 10px;
    margin-bottom: 5px;
    border-radius: 2px;
    background-color: v-bind(tagColor);
}
.book-belt {
    position: absolute;
    height: calc(0.2 * v-bind(bookHeight));
    top: calc(0.8 * v-bind(bookHeight));
    font-size: 0.7rem;
    justify-content: center;
    background-color: v-bind(bookBeltColor);
}
</style>
