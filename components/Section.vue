<template lang="pug">
.section
    .section__title {{sectionData.title}}
    Input(v-for="input in sectionData.inputs", :inputprops="input")
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
//import Input from '@/types/Input'

export default defineComponent({
    name: 'Section',
    data() {
        return {}
    },
    props: {
        sectionData: Object
    },
    computed: {

    }
})
</script>

<style lang="scss">
.section {
    display: flex;
    flex-direction: column;
    background-color: #11AAFFAA;
    color: #111;
    padding: 15px 15px 25px;
    border-radius: 5px;
    gap: 15px;
    transition: 130ms ease-out;
    &__title {
        font-family: 'Inter-bold';
        font-size: 25px;
    }
    &:focus-within {
        background-color: #148;
        color: #FFF;
        & * {
            &::placeholder {
                color: #DDD;
            }
            &:not(:placeholder-shown) {
                color: #FFF;
            }
            &:is(:focus) + .underline {
                background-color: #FFF;
            }
        }
        & .underline {
            background-color: #BBB;
        }
    }
}
</style>