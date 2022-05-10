<template>
    <div style="border: 16px solid rgb(19, 215, 203);">
        <v-calendar is-expanded :attributes='attributes'>
            <template slot='day-content' slot-scope="props">
                <div class="day-cell text-center" v-if="props.day.inMonth">
                    <div>{{props.day.day}}</div>
                    <div v-for="(dayEvent, index) in props.attributesMap" v-bind:key="index">
                        <span class="event-badge badge badge-pill" :style="'background-color: ' + dayEvent.customData.colour ">
                            {{dayEvent.customData.name}}
                        </span>
                    </div>
                </div>
            </template>
        </v-calendar>
    </div>
</template>
<script>
import moment from "moment";

export default {
    props: [
        'process'
    ],
    data() {
        return {
            weekend: false,
            attributes: []
                // { sample
                //     highlight: false,
                //     dot: false,
                //     bar: false,
                //     content: 'red',
                //     popover: { },
                //     customData: {
                //         colour: "red", // need
                //         icon: "",
                //         eventUrl: "",
                //         showOrg: "",
                //         orgShortName: "test2",
                //         name: "test", // need (달력 표시 라벨명)
                //         location: "",
                //         description: "hello!" // need
                //     },
                //     dates: "2022-05-07", // need
                //     excludeDates: null,
                //     order: 0
                // }
            // ]
        }
    },
    methods: {
        inputData: function(step) {
            let inputTemp = {};
            let curDate, endDate, dateTemp;
            let bgColor = ["gray", "teal", "orange", "purple", "green", "blue", "red"];

            for (let i = 0; i < 7; i++) {
                dateTemp = [];
                curDate = moment(step[i].startDate).format("YYYY-MM-DD");
                endDate = moment(step[i].endDate).format("YYYY-MM-DD");

                while (moment(endDate).isAfter(curDate)) {
                    dateTemp.push(curDate);
                    curDate = moment(curDate).add(1, 'days').format("YYYY-MM-DD");
                }
                dateTemp.push(curDate);
                inputTemp = {
                    highlight: false,
                    dot: false,
                    bar: false,
                    customData: {
                        colour: bgColor[i],
                        name: step[i].name,
                        description: "test"
                    },
                    dates: dateTemp,
                }
                this.attributes.push(inputTemp);
            }
        }
    },
    created() {
        this.inputData(this.process.step);
    }
}
</script>
<style scoped>
.custom_calendar .vc-day {
    border-right: 1px solid #AAA;
    border-bottom: 1px solid #AAA;
    padding: 3px;
}
.custom_calendar .on-top {
    border-top: 1px solid #AAA;
}
.custom_calendar .on-left {
    border-left: 1px solid #AAA;
}
.custom_calendar .event {
    word-wrap: break-word;
    word-break: break-all;
}
.custom_calendar .event-badge {
    white-space: normal;
    border-radius: 5px;
    margin-top: 2px;
    text-align: left;
}
.event-badge {
    color: rgb(255, 255, 255);
}
</style>