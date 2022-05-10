<template>
    <b-card
        :id="index"
        tag="article"
        style="width: 30%; height: 160px; border: 2px solid rgb(19, 215, 203);"
        class="card"
    >
        <b-card-text>
        <div v-b-tooltip.hover :title="process.step[index].description" style="text-align: center; color: red; font-size: 14px; text-decoration: underline;">{{ process.step[index].name }}</div>
        <div v-if="this.startDate[index] !== this.endDate[index]" style="text-align: center; font-size: 8px;">{{ this.startDate[index] }}<br>~{{ this.endDate[index] }}</div>
        <div v-if="this.startDate[index] === this.endDate[index]" style="text-align: center; font-size: 8px;">{{ this.startDate[index] }}</div>

        <button v-if="index === 5" id="test" style="cursor: hand; padding-inline-start: 0px; background-color: white; color: black; font-size: 12px; border: solid white;" @click="handleSubtask()">
        + SubTask
        </button>

        <div v-if="index === 5" id="plain" style="display: none">
            <ol type=1 style="padding-inline-start: 0px;">
                <li v-for="( row, index ) in process.step[index].subTitle" v-bind:key="index" style="border: 2px solid transparent; font-size: 12px; text-align: left;">
                    <div v-b-tooltip.hover :title="row.description" style="text-decoration: underline;">{{ row.sub }}</div>
                </li>
            </ol>
        </div>
        
        </b-card-text>
        <template #footer>
            <div v-if="statusFlag === '1'" style="border: 2px solid transparent; background-color: red; color: white; font-size: 16px; text-align: center;">대기</div>
            <div v-if="statusFlag === '2'" style="border: 2px solid transparent; background-color: blue; color: white; font-size: 16px; text-align: center;">진행중</div>
            <div v-if="statusFlag === '3'" style="border: 2px solid transparent; background-color: green; color: white; font-size: 16px; text-align: center;">완료</div>
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
        },
        handleSubtask: function() {
            let plain = document.getElementById('plain');
            let test = document.getElementById('test');
            let card = document.getElementById('5');

            if (plain.style.display=="none") {
                plain.style.display="";
                test.innerText = "- SubTask";
                card.style.height="250px";
            } else {
                plain.style.display = "none";
                test.innerText = "+ SubTask";
                card.style.height="160px";
            }
        }
    },
    created() {
        this.compareDate(this.process.step[this.index].startDate, this.process.step[this.index].endDate);
        this.getDate(this.process);
    }
}
</script>