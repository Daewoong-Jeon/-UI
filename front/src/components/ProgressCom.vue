<template>
    <div style="border: 8px solid transparent;">
        <b-card-group deck style="border: 8px solid transparent;">
            <CardCom step="Step1" :process="process" :index="0"/>
            <div class="img_area"><img src="../assets/fast-forward.png" alt="fast-forward"></div>
            <CardCom step="Step2" :process="process" :index="1"/>
            <div class="img_area"><img src="../assets/fast-forward.png" alt="fast-forward"></div>
            <CardCom step="Step3" :process="process" :index="2"/>
            <div class="img_area"><img src="../assets/fast-forward.png" alt="fast-forward"></div>
            <CardCom step="Step4" :process="process" :index="3"/>
            <div class="img_area"><img src="../assets/fast-forward.png" alt="fast-forward"></div>
            <CardCom step="Step5" :process="process" :index="4"/>
            <div class="img_area"><img src="../assets/fast-forward.png" alt="fast-forward"></div>
            <CardCom step="Step6" :process="process" :index="5"/>
            <div class="img_area"><img src="../assets/fast-forward.png" alt="fast-forward"></div>
            <CardCom step="Step7" :process="process" :index="6"/>
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
<style>
    .img_area {
        height:160px;
        line-height:160px;
    }
    .img_area img {
        width: 100%;
        height: 10%;
        vertical-align: middle;
    }
</style>