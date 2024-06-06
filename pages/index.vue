<template>
    <div>
        <GlobalHeader />
        <div class="main">
            <div class="pos-left">
                <HistoryNote :book="books[selectingId - 1]" />
            </div>
            <div class="pos-right">
                <BookShelf
                    :books="books"
                    @update-selection="
                        (id) => {
                            selectingId = id
                        }
                    "
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'IndexPage',
    data() {
        return {
            books: [{}],
            selectingId: 1,
        }
    },
    async mounted() {
        try {
            for (let i = 1; i < 100; i++) {
                const res: { data: {} } = await import(`~/books/book (${i}).json`)
                this.books.push(res)
            }
        } catch {
            // 最初の要素にObserverが入っていて、関係がないため削除
            this.books.shift()
        }
    },
})
</script>

<style>
.main {
    display: flex;
    position: relative;
    top: 50px;
}
.pos-left {
    display: flex;
    width: 49%;
    justify-content: center;
}
.pos-right {
    width: 49.5%;
}
</style>
