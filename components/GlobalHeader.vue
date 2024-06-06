<template>
    <div class="header">
        <div class="header-container">森 友雅のポートフォリオ</div>
    </div>
</template>

<script>
import BookComponent from './BookTemplate.vue'

export default {
    name: 'GlobalHeader',
    component: {
        BookComponent,
    },
    data: () => ({
        data: {
            date: '2024-5～',
            title: 'フューチャー',
            tag: 'アルバイト',
        },
        a: 15,
    }),
    computed: {
        sidePlateWidth() {
            return `${this.$SIDE_PLATE_WIDTH}px`
        },
        shelfBoardHeight() {
            return `${this.$SHELF_BOARD_HEIGHT}px`
        },
        bookHeight() {
            return `${this.$BOOK_HEIGHT}px`
        },
    },
    methods: {
        addPixel(x) {
            return `${x}px`
        },
    },
}
</script>

<style>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.header-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
}
</style>
