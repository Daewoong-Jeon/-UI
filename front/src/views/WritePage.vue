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
            <!-- <tr>
                <th>subTitle1</th>
                <td><input type="text" v-model="subTitle"/></td>
            </tr>
            <tr>
                <th>subTitle2</th>
                <td><input type="text" v-model="subTitle"/></td>
            </tr> -->
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 1</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle1.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle1.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle1.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle1.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 2</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle2.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle2.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle2.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle2.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 3</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle3.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle3.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle3.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle3.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 4</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle4.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle4.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle4.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle4.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 5</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle5.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle5.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle5.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle5.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 6</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle6.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle6.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle6.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle6.subTitle)">Add row</button>
            </div>
        </table>
        <table class="table">
            <thead>
                <tr>
                <td><strong>Step 7</strong></td>
                <td></td>
                <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Step Name</td>
                    <td><input type="text" v-model="subTitle7.name"></td>
                    <td></td>
                </tr>
                <tr v-for="( row, index ) in subTitle7.subTitle" v-bind:key="index">
                    <td>{{index + 1}}</td>
                    <td><input type="text" v-model="row.sub"></td>
                    <td><button @click="removeRow(index, subTitle7.subTitle)">Remove</button></td>
                </tr>
            </tbody>
            <div>
                <button class="button btn-primary" @click="addRow(subTitle7.subTitle)">Add row</button>
            </div>
        </table>
        <div class="btnWrap">
			<button href="javascript:;" @click="fnAddProc">등록</button>
		</div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            title: '',
            subTitle1: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            subTitle2: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            subTitle3: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            subTitle4: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            subTitle5: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            subTitle6: {
                name: "",
                subTitle: [
                    { sub: "" }
                ]
            },
            subTitle7: {
                name: "",
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
            // let size = this.subTitle.length;
            subTitle.push({ sub: "" });
        },
        removeRow: function(index, subTitle){
            // console.log(index);
            subTitle.splice(index, 1);
        },
        fnAddProc: async function() { 
            // this.url = "/data/process.json";
            // const formData = new FormData();
            // let subTitle = [];
            // formData.append("title", this.title);
            // for (let data in this.subTitle)
            //     subTitle.push(data);
            // console.log(subTitle);
            // formData.append("subTitle", subTitle);
            // console.log(subTitle);

            let subTitle = [];
            subTitle.push(this.subTitle1);
            subTitle.push(this.subTitle2);
            subTitle.push(this.subTitle3);
            subTitle.push(this.subTitle4);
            subTitle.push(this.subTitle5);
            subTitle.push(this.subTitle6);
            subTitle.push(this.subTitle7);

            const res = await axios({
                method: "post",
                url: "http://localhost:5000/process",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    title: this.title,
                    subTitle: subTitle
                }
            });
            console.log(res);
        }
    }
}
</script>