<template>
    <b-card
        :title="step"
        tag="article"
        style="width: 25%; height: 300px; border: 2px solid rgb(19, 215, 203);"
        class="card"
    >
        <b-card-text>
        <div v-b-tooltip.hover :title="process.step[index].description" style="text-align: center; color: red; font-size: x-large; text-decoration: underline;">{{ process.step[index].name }}</div>
        <div v-if="this.startDate[index] !== this.endDate[index]" style="text-align: center; font-size: 12px;">{{ this.startDate[index] }}~{{ this.endDate[index] }}</div>
        <div v-if="this.startDate[index] === this.endDate[index]" style="text-align: center; font-size: 12px;">{{ this.startDate[index] }}</div>
        <ol type=1>
            <li v-for="( row, index ) in process.step[index].subTitle" v-bind:key="index" style="border: 2px solid transparent;">
                {{ row.sub }}
            </li>
        </ol>
        </b-card-text>
        <template #footer>
            <div v-if="statusFlag === '1'" style="border: 2px solid transparent; background-color: red; color: white; font-size: 1.5em; text-align: center;">대기</div>
            <div v-if="statusFlag === '2'" style="border: 2px solid transparent; background-color: blue; color: white; font-size: 1.5em; text-align: center;">진행중</div>
            <div v-if="statusFlag === '3'" style="border: 2px solid transparent; background-color: green; color: white; font-size: 1.5em; text-align: center;">완료</div>
        </template>
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
            statusFlag: "1", // 1 : 진행전, 2 : 진행중, 3 : 완료
            startDate: [],
            endDate: []
        }
    },
    methods: {
        compareDate: function(startDate, endDate) {
            const today = moment().format("YYYY-MM-DD");
            startDate = moment(startDate).format("YYYY-MM-DD");
            endDate = moment(endDate).format("YYYY-MM-DD");

            if (moment(startDate).isAfter(today) && moment(endDate).isAfter(today))
                this.statusFlag = "1";
            else if (moment(startDate).isBefore(today) && moment(endDate).isAfter(today)
                || moment(startDate).isSame(today) || moment(endDate).isSame(today))
                this.statusFlag = "2";
            else if (moment(startDate).isBefore(today) && moment(endDate).isBefore(today))
                this.statusFlag = "3";
        },
        getDate: function(process) {
            let startTemp;
            let endTemp;

            for (let i = 0; i < process.step.length; i++) {
                startTemp = moment(this.process.step[i].startDate).format("YYYY-MM-DD");
                endTemp = moment(this.process.step[i].endDate).format("YYYY-MM-DD");

                this.startDate.push(startTemp);
                this.endDate.push(endTemp);
            }
        }
    },
    created() {
        this.compareDate(this.process.step[this.index].startDate, this.process.step[this.index].endDate);
        this.getDate(this.process);
    }
}
</script>