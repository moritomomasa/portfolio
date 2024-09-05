<!-- Please remove this file from your project -->
<template>
    <div class="bookshelf">
        {{ res }}
        <div class="inner-space">
            <BookTemplate
                v-for="i in books.length"
                :key="i"
                :data="books[i - 1]"
                :is-reading="i == selectingId"
                @update-selection="
                    () => {
                        selectingId = i
                        $emit('update-selection', selectingId)
                    }
                "
            />
        </div>
    </div>
</template>

<script>
import { list } from 'postcss'
import BookComponent from './BookTemplate.vue'

export default {
    name: 'BookShelf',
    component: {
        BookComponent,
    },
    props: {
        books: {
            type: list,
            required: true,
        },
    },
    data() {
        return {
            data: {
                date: '2024-5～',
                title: 'フューチャー',
                tag: 'アルバイト',
            },
            selectingId: 1,
        }
    },
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
}
</script>

<style>
.bookshelf {
    min-height: calc(2 * v-bind(bookHeight) + 3 * v-bind(shelfBoardHeight));
    width: 100%;
    background: 
        /* 横方向 */ repeating-linear-gradient(
            90deg,
            #7e3c1e 0px v-bind(sidePlateWidth),
            #ffffff00 v-bind(sidePlateWidth) calc(100% - v-bind(sidePlateWidth)),
            #7e3c1e calc(100% - v-bind(sidePlateWidth)) 100%
        ),
        /* 縦方向 */
            repeating-linear-gradient(
                180deg,
                #7e3c1e 0px v-bind(shelfBoardHeight),
                #4d1717c6 v-bind(shelfBoardHeight),
                #671f1fc6 calc(v-bind(shelfBoardHeight) + 10px)
                    calc(v-bind(shelfBoardHeight) + v-bind(bookHeight) - 10px),
                #4d1717c6 calc(v-bind(shelfBoardHeight) + v-bind(bookHeight))
            );
}

.inner-space {
    display: flex;
    width: calc(100% - 2 * v-bind(sidePlateWidth));
    position: relative;
    top: v-bind(shelfBoardHeight);
    left: v-bind(sidePlateWidth);
    flex-wrap: wrap;
}
</style>
