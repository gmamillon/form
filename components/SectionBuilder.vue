<template lang="pug">
.sBuilder
    .sBuilder__title(contenteditable="true" @input="titleChange") {{title}}
    InputBuilder(v-for="input in inputs", :inputprops="input")
    .sBuilder__addInput(@click.prevent="addInput")
        i(class="mdi mdi-plus" aria-hidden="true")
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
        
    },
    methods: {
        titleChange(e: Event) {
            const input = e.target as HTMLElement
            console.log(input.innerText)
            return this.title = input.innerText
        },
        addInput() {
            this.inputs.push({ name: 'input', type: 'text' })
        }
    }
})
</script>

<style scoped lang="scss">
.sBuilder {
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
        &:focus-visible {
            outline: none;
        }
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
        }
        &:deep(input:not(:focus) + .underline) {
            background-color: #BBB;
        }
    }
    &__addInput {
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #11AAFFAA;
        border-radius: 5px;
        font-size: 25px;
        font-weight: bold;
        color: #000;
        transition: 130ms ease-out;
        &:hover {
            cursor: pointer;
            background-color: #148;
            color: #FFF;
        }
    } 
}
</style>