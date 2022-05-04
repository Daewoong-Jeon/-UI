<template>
    <div>
        <b-card-group deck>
            <div style="width: 25%;"><CardCom step="Step1" :process="process" :index="0"/></div>
            <div style="width: 25%;"><CardCom step="Step2" :process="process" :index="1"/></div>
            <div style="width: 25%;"><CardCom step="Step3" :process="process" :index="2"/></div>
            <div style="width: 25%;"><CardCom step="Step4" :process="process" :index="3"/></div>
        </b-card-group>
        <b-card-group deck>
            <div style="width: 25%;"><CardCom step="Step5" :process="process" :index="4"/></div>
            <div style="width: 25%;"><CardCom step="Step6" :process="process" :index="5"/></div>
            <div style="width: 25%;"><CardCom step="Step7" :process="process" :index="6"/></div>
        </b-card-group>
    </div>
</template>
<script>
import CardCom from '../components/CardCom.vue';

export default {
    components: {
        CardCom
    },
    props: [
        'process'
    ]
}
</script>