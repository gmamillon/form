<template lang="pug">
.page
    h1(class="page__title") Kolect Form
    button(v-if="!newForm" @click.prevent="newForm = true") New form
    .builder(v-if="newForm")
        Form
        .builder__addSection(@click.prevent="addField")
            i(class="mdi mdi-plus", aria-hidden="true")
</template>

<script lang="ts">
import { useForm } from "~~/store/form"
import { storeToRefs } from "pinia"

export default defineComponent({
    setup() {
        const store = useForm()
        const { sections } =  storeToRefs(store)
        const { newSection } = store
        return {
            sections,
            newSection,
        }
    },
    data() {
        return {
            newForm: false
        }
    },
    methods: {
        addField() {
            this.newSection()
        }
    }
})
</script>

<style scoped lang="scss">
.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 96vw;
    max-width: 480px;
    padding: 0 2vw;
    &__title {
        margin-left: 0px;
    }
}
.builder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    &__addSection {
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