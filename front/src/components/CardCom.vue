<template>
    <b-card
        :title="step"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
        {{ process.step[index].name }}
            <ol type=1>
                <li v-for="( row, index ) in process.step[index].subTitle" v-bind:key="index">
                    {{ row.sub }}
                </li>
            </ol>
        </b-card-text>
    </b-card>
</template>
<script>
export default {
    props: [
        'step',
        'process',
        'index'
    ],
    data() {
        return {
            
        }
    }
}
</script>