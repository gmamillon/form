<template lang="pug">
.form
    form(method="post" class="form__form")
        Section(v-for="section in sections", :key="section.title", :sectionData="section")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useForm } from '../store/form'

export default defineComponent({
    name: 'Form',
    setup() {
        const form = useForm()
        return form
    },
    data() {
        return {

        }
    },
    computed: {
    }
})
</script>

<style scoped lang="scss">
.form {
    &__form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
}
</style>