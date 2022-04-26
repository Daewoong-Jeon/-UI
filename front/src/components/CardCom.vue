<template>
    <b-card
        :title="step"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
        {{ process.subTitle[index].name }}
            <ol type=1>
                <li v-for="( row, index ) in process.subTitle[index].subTitle" v-bind:key="index">
                    {{ row.sub }}
                </li>
            </ol>
        </b-card-text>

        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
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