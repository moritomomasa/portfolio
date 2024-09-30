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
        } catch (e) {
            console.log(e)
        }
        // 0番目の要素はObserverが入るため削除
        this.books.shift()

        const _getCookieValue = (key: string) => {
            const cookies = document.cookie.split(';')
            const foundCookie = cookies.find((cookie) => cookie.split('=')[0].trim() === key.trim())
            if (foundCookie) {
                const cookieValue = decodeURIComponent(foundCookie.split('=')[1])
                return cookieValue
            }
            return ''
        }

        try {
            const res: any = await fetch('http://localhost:8081/greeting')
            const res1_5: any = await fetch('http://localhost:8081/logout')
        } catch (e) {
            console.log(e)
        }
        fetch('http://localhost:8081/csrf', { method: 'post' }).then((res1) => {
            res1.json().then((data) => {
                const res2: any = fetch('http://localhost:8081/logintest', {
                    method: 'post',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-XSRF-TOKEN': _getCookieValue('XSRF-TOKEN'), // data.token,
                    },
                    body: JSON.stringify('mori'),
                })
            })
        })
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
