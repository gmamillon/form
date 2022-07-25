<template lang="pug">
.iBuilder
    Input(:inputprops="inputprops")
    .iBuilder__settings
        input(type="text" class="iBuilder__field" placeholder="Label" v-model="label")
        .underline
        input(type="text" class="iBuilder__field" placeholder="PlaceHolder" v-model="placeholder")
        .underline
        input(type="text" class="iBuilder__field" placeholder="Type" v-model="type")
        .underline
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Input from '@/types/Input'

export default defineComponent({
    name: 'InputBuilder',
    data() {
        return {
            label: '',
            placeholder: '',
            type: ''
        }
    },
    props: {
        iBuilderprops: Object as PropType<Input>
    },
    computed: {
        inputprops() {
            return {
                label: this.label,
                placeholder: this.placeholder,
                type: this.type
            }
        }
    }
})
</script>

<style lang="scss">
.iBuilder {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__settings {
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
    }
    &__field {
        padding-bottom: 5px;
        padding-left: 5px;
        background-color: #FFFFFF00;
        border: 0;
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