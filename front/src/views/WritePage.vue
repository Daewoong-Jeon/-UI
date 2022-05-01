<template>
    <div>
        <h1>새로 만들기</h1>

        <table class="tbAdd">
            <colgroup>
                <col width="15%" />
                <col width="*" />
            </colgroup>
            <tr>
                <th>제목</th>
                <td><input type="text" v-model="title"/></td>
            </tr>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 1</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step1.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step1.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step1.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step1.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step1.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step1.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 2</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step2.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step2.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step2.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step2.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step2.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step2.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 3</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step3.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step3.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step3.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step3.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step3.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step3.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 4</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step4.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step4.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step4.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step4.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step4.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step4.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 5</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step5.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step5.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step5.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step5.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step5.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step5.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 6</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step6.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step6.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step6.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step6.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step6.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step6.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 7</strong></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="step7.name"></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td><DatePicker v-model="step7.startDate"/></td>
                    <td>End Date</td>
                    <td><DatePicker v-model="step7.endDate"/></td>
                </tr>
                <tr v-for="( row, index ) in step7.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, step7.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(step7.subTitle)">Add row</button>
            </div>
        </table>
        <div class="btnWrap">
			<button href="javascript:;" @click="fnAddProc">등록</button>
		</div>
    </div>
</template>
<script>
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
                subTitle: [
                    { sub: "" }
                ]
            },
            step2: {
                name: "",
                startDate: "",
                endDate: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            step3: {
                name: "",
                startDate: "",
                endDate: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            step4: {
                name: "",
                startDate: "",
                endDate: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            step5: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            step6: {
                name: "",
                startDate: "",
                endDate: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            step7: {
                name: "",
                startDate: "",
                endDate: "",
                subTitle: [
                    { sub: "" }
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
                        console.log("test");
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
                alert("생성되었습니다.");
                location.replace('/');
                console.log(res);
            } catch (error) {
                alert("에러가 발생하였습니다.");
                console.log(error);
                return ;
            }
        }
    }
}
</script>