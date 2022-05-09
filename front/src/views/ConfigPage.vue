<template>
    <div>
        <h1 style="border: 16px solid transparent;">Config Page</h1>

        <table class="tbAdd" style="border: 16px solid transparent;">
            <colgroup>
                <col width="15%" />
                <col width="*" />
            </colgroup>
            <tr>
                <th>제목</th>
                <td style="border-left: 16px solid transparent;"><input type="text" v-model="title" disabled/></td>
            </tr>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 1</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step1.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step1.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step1.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step1.endDate" value-type="format"/></td>
                </tr>
                <!-- <tr v-for="( row, index ) in step1.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step1.subTitle)">Remove</button></td>
                </tr> -->
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step1.subTitle)">Add row</button>
            </div> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 2</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step2.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step2.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step2.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step2.endDate" value-type="format"/></td>
                </tr>
                <!-- <tr v-for="( row, index ) in step2.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step2.subTitle)">Remove</button></td>
                </tr> -->
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step2.subTitle)">Add row</button>
            </div> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 3</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step3.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step3.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step3.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step3.endDate" value-type="format"/></td>
                </tr>
                <!-- <tr v-for="( row, index ) in step3.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step3.subTitle)">Remove</button></td>
                </tr> -->
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step3.subTitle)">Add row</button>
            </div> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 4</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step4.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step4.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step4.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step4.endDate" value-type="format"/></td>
                </tr>
                <!-- <tr v-for="( row, index ) in step4.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step4.subTitle)">Remove</button></td>
                </tr> -->
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step4.subTitle)">Add row</button>
            </div> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 5</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step5.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step5.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step5.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step5.endDate" value-type="format"/></td>
                </tr>
                <!-- <tr v-for="( row, index ) in step5.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step5.subTitle)">Remove</button></td>
                </tr> -->
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step5.subTitle)">Add row</button>
            </div> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 6</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step6.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step6.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step6.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step6.endDate" value-type="format"/></td>
                </tr>
                <tr v-for="( row, index ) in step6.subTitle" v-bind:key="index">
                    <td style="border: solid transparent;">Sub Task {{index + 1}}</td>
                    <td style="border: solid transparent;"><input type="text" v-model="row.sub" disabled></td>
                    <!-- <td><button @click="removeRow(index, step6.subTitle)">Remove</button></td> -->
                    <td v-if="index === 0" style="border: solid transparent;">ITSM 릴리즈 번호</td>
                    <td v-if="index !== 0" style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="row.description"></td>
                </tr>
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step6.subTitle)">Add row</button>
            </div> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td style="border-color: rgb(19, 215, 203)"><strong>Step 7</strong></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                <td style="border-color: rgb(19, 215, 203)"></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border: solid transparent;">Step Name</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step7.name" disabled></td>
                    <td style="border: solid transparent;">Description</td>
                    <td style="border: solid transparent;"><input type="text" v-model="step7.description"></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step7.startDate" value-type="format"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step7.endDate" value-type="format"/></td>
                </tr>
                <!-- <tr v-for="( row, index ) in step7.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step7.subTitle)">Remove</button></td>
                </tr> -->
            </tbody>
            <!-- <div>
                <button class="button btn-primary" @click="addRow(step7.subTitle)">Add row</button>
            </div> -->
        </table>
        <div style="border: 16px solid transparent;" align="center">
            <b-button href="javascript:;" style="width: 25%;" @click="fnAddProc">등록</b-button>
			<!-- <button href="javascript:;" @click="fnAddProc">등록</button> -->
		</div>
    </div>
</template>
<script>
import process from "../../../data/process.json";
import axios from "axios";
import DatePicker from "vue2-datepicker";

import 'vue2-datepicker/index.css';

export default {
    components: {
        DatePicker
    },
    data() {
        return {
            title: '',
            step1: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            step2: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            step3: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            step4: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            step5: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            step6: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            step7: {
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                subTitle: [
                    { sub: "", description: "" }
                ]
            },
            form: '',
            url: ''
        }
    },
    methods: {
        addRow: function(subTitle){
            subTitle.push({ sub: "" });
        },
        removeRow: function(index, subTitle){
            subTitle.splice(index, 1);
        },
        fnAddProc: async function() { 
            let step = [];
            step.push(this.step1);
            step.push(this.step2);
            step.push(this.step3);
            step.push(this.step4);
            step.push(this.step5);
            step.push(this.step6);
            step.push(this.step7);

            for (let i = 0; i < step.length; i++) {
                if (step[i].name === "" ||
                    step[i].startDate === "" ||
                    step[i].endDate === "") {
                        alert("빈칸에 내용을 채워주세요.");
                        return ;
                    }
                else if (step[i].subTitle.length > 0) {
                    for (let j = 0; j < step[i].subTitle.length; i++) {
                        if (step[i].subTitle[j].sub === "") {
                            alert("빈칸에 내용을 채워주세요.");
                            return ;
                        }
                    }
                }
            }
            
            try {
                const res = await axios({
                    method: "post",
                    url: "http://localhost:5000/process",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: {
                        title: this.title,
                        step: step
                    }
                });
                alert("수정되었습니다.");
                location.replace('/');
                console.log(res);
            } catch (error) {
                alert("에러가 발생하였습니다.");
                console.log(error);
                return ;
            }
        }
    },
    created() {
        console.log(process);
        this.title = process.title;
        this.step1 = process.step[0];
        this.step2 = process.step[1];
        this.step3 = process.step[2];
        this.step4 = process.step[3];
        this.step5 = process.step[4];
        this.step6 = process.step[5];
        this.step7 = process.step[6];
    }
}
</script>
<style>
input {
    border: 2px solid rgb(19, 215, 203);
    border-radius: 1em 1em 1em 1em;
}
input:disabled {
    background: rgb(161, 159, 159);
}
</style>