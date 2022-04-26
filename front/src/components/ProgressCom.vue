<template>
    <div>
        <div style="display: flex">
            <CardCom step="Step1" :process="process" :index="0"/>
            <CardCom step="Step3" :process="process" :index="1"/>
            <CardCom step="Step2" :process="process" :index="2"/>
            <CardCom step="Step4" :process="process" :index="3"/>
        </div>
        <div style="display: flex">
            <CardCom step="Step5" :process="process" :index="4"/>
            <CardCom step="Step6" :process="process" :index="5"/>
            <CardCom step="Step7" :process="process" :index="6"/>
        </div>
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