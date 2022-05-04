<template>
    <div>
        <h1>{{ process.title }}</h1>

        <ProgressCom :process="this.process"/>
        <CalendarCom :process="this.process"/>
    </div>
</template>
<script>
import process from "../../../data/process.json";
import ProgressCom from '../components/ProgressCom.vue';
import CalendarCom from '../components/CalendarCom.vue';

export default {
    data () {
        return {
            process: process
        };
    },
    watch: {
        input1() {
            console.log(this.input1);
        }
    },
    components: {
        ProgressCom,
        CalendarCom
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1 = "12345";
        },
        changeRegion() {
            alert(this.region);
        }
    },
    beforeCreate() {
        console.log("beforeCreate");
        console.log(this.process);
    },
    created() {
        console.log("created");
        console.log(this.process.title);
    },
    beforeMount() {
        console.log("beforeMount");
        console.log(this.process);
    },
    mounted() {
        console.log("mounted");
        console.log(this.process);
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy");
    },
    destroyed() {
        console.log("destroyed");
    }
}
</script>