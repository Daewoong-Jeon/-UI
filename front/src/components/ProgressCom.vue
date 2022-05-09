<template>
    <div style="border: 8px solid transparent;">
        <b-card-group deck style="border: 8px solid transparent;">
            <CardCom step="Step1" :process="process" :index="0"/>
            <CardCom step="Step2" :process="process" :index="1"/>
            <CardCom step="Step3" :process="process" :index="2"/>
            <CardCom step="Step4" :process="process" :index="3"/>
        </b-card-group>
        <b-card-group deck style="border: 8px solid transparent;">
            <CardCom step="Step5" :process="process" :index="4"/>
            <CardCom step="Step6" :process="process" :index="5"/>
            <CardCom step="Step7" :process="process" :index="6"/>
            <div style="width: 25%"></div>
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