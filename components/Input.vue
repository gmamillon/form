<template lang="pug">
.input
    label(v-if="inputprops.label.length !== 0") {{inputprops.label}}
    input(:type="inputprops.type" class="input__field" :placeholder="inputprops.placeholder")
    .underline(v-if="['text', 'number'].includes(inputprops.type)")
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Input from '@/types/Input'

export default defineComponent({
    name: 'Input',
    data() {
        return {

        }
    },
    props: {
        inputprops: Object as PropType<Input>
    }
})
</script>

<style lang="scss">
.input {
    display: flex;
    flex-direction: column;
    gap: 5px;
    &__field {
        padding-bottom: 5px;
        padding-left: 5px;
        background-color: #FFFFFF00;
        border: 0;
        /* border-bottom: 1px solid; */
        font-size: 20px;
        font-family: 'Inter-medium';
        &:focus-visible {
            outline: none;
        }
        &::placeholder {
            font-family: 'Inter-light';
            color:  #333;
            font-size: 20px;
        }
        &:focus {
            color: #FFF;
            &::placeholder {
                color: #DDD;
            }
            &+.underline {
                background-color: #FFF;
                width: calc(100% - 10px);
            }
        }
    }
}
.underline {
    margin-left: 5px;
    margin-right: 5px;
    height: 1px;
    width: calc(85% - 10px);
    background-color: #000;
    transition: 250ms ease-out;
}
</style>