<template>
    <!-- <div>Hello {{name}}</div> -->
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <p>
            <img :src='image' style="width:817px;">
            <!-- <img src="./images/123.png" style="width:817px;"> -->
        </p>
    </div>
</template>
<script>
// 导入组件
import vTitle from './title.vue';
import vButton from './button.vue';
import image from './images/123.png';
export default {
    data (){
        return {
            name: 'Vue.js',
            image: image
        }
    },
    components: {
        vTitle,
        vButton
    },
    methods: {
        handleClick(e){
            console.log(e);
        }
    }
}
</script>
<style scoped>
div{
    color: #f60;
    font-size: 24px;
}
</style>