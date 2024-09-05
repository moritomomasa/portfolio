<!-- Please remove this file from your project -->
<template>
    <div class="history-note-container">
        <div class="title">～　{{ book?.title }}　～</div>
        <div class="timeline-container">
            <div v-if="book?.skills" class="timeline-skills">使用技術：{{ book?.skills }}</div>
            <div class="timeline-abst">概要　　：{{ book?.abst }}</div>
            <div v-for="(itemValue, itemKey) in book?.timeline" :key="itemKey" class="item">
                <div class="item-term">{{ itemKey }}</div>
                <div class="item-desc">{{ itemValue }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryNote',
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            title: 'フューチャー',
        }
    },
}
</script>

<style>
.history-note-container {
    min-height: 80vh;
    width: 35vw;
    margin-top: 6rem;
    text-align: center;
}
.title {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}
.timeline-container {
    text-align: left;
}
.timeline-abst {
    margin-bottom: 1rem;
    font-size: 1rem;
}
.item {
    display: flex;
    margin-bottom: 0.65rem;
    font-size: 0.9rem;
}
.item-term {
    min-width: 5rem;
}
</style>
