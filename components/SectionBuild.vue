<template lang="pug">
.section
    h2 {{title}}
    Input(v-for="input in inputs", :inputprops="input")
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Input from '@/types/Input'

export default defineComponent({
    name: 'SectionBuild',
    data() {
        return {
            title: ''
        }
    },
    props: {
        inputs: Array as PropType<Input[]>
    },
    computed: {
        
    }
})
</script>