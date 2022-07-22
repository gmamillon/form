<template lang="pug">
.sBuilder
    .sBuilder__title 
        .sBuilder__fieldName {{title}}
        input(type="text", class="sBuilder__field" placeholder="Section Title")
        .sBuilder__line
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SectionBuilder',
    data() {
        return {
            title: 'Section Title',
            inputs: []
        }
    },
    computed: {
        
    }
})
</script>

<style scoped lang="scss">
.sBuilder {
    width: calc(100vw - 30px);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: #3E3E3E;
    color: #FFF;
    padding: 15px 15px 25px 15px;
    border-radius: 5px 5px 0 0;
    gap: 15px;
    &__title {
        max-width: 450px;
        font-family: 'Inter-bold';
        font-size: 20px;
    }
    &__fieldName {
        padding: 0 0 10px 5px;
    }
    &__field {
        max-width: 450px;
        padding-bottom: 5px;
        padding-left: 5px;
        background-color: #FFFFFF00;
        border: 0;
        color: #FFF;
        font-size: 20px;
        font-family: 'Inter-medium';
        &:focus-visible {
            outline: none;
        }
        &::placeholder {
            font-family: 'Inter-light';
            color:  #DDD;
            font-size: 20px;
        }
        &:focus+.sBuilder__line {
            background-color: #FFF;
            width: calc(100% - 25px);
        }
    }
    &__line {
        margin-left: 5px;
        margin-right: 5px;
        height: 1px;
        width: calc(85% - 25px);
        background-color: #FFF;
        transition: 250ms ease-out;
    }
}
</style>