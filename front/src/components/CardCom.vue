<template>
    <b-card
        :title="step"
        tag="article"
        style="max-width: 20rem;"
        class="card"
    >
        <b-card-text>
        {{ process.step[index].name }}
        <ol type=1>
            <li v-for="( row, index ) in process.step[index].subTitle" v-bind:key="index">
                {{ row.sub }}
            </li>
        </ol>
        <div style="color: white; font-size: 2em;">
            <p v-if="statusFlag === '1'" style="background-color: red">대기</p>
            <p v-if="statusFlag === '2'" style="background-color: blue">진행중</p>
            <p v-if="statusFlag === '3'" style="background-color: green">완료</p>
        </div>
        </b-card-text>
    </b-card>
</template>
<script>
import moment from "moment";

export default {
    props: [
        'step',
        'process',
        'index'
    ],
    data() {
        return {
            statusFlag: "1" // 1 : 진행전, 2 : 진행중, 3 : 완료
        }
    },
    methods: {
        compareDate: function(startDate, endDate) {
            const today = moment().format("YYYY-MM-DD");
            startDate = moment(startDate).format("YYYY-MM-DD");
            endDate = moment(endDate).format("YYYY-MM-DD");

            if (moment(startDate).isAfter(today) && moment(endDate).isAfter(today))
                this.statusFlag = "1";
            else if (moment(startDate).isBefore(today) && moment(endDate).isAfter(today))
                this.statusFlag = "2";
            else if (moment(startDate).isBefore(today) && moment(endDate).isBefore(today))
                this.statusFlag = "3";
        }
    },
    created() {
        this.compareDate(this.process.step[this.index].startDate, this.process.step[this.index].endDate);
    }
}
</script>