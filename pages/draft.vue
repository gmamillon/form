<template lang="pug">
.draft
    Form(:inputs="inputs")
</template>

<script lang="ts">
export default defineComponent({
    data() {
        return {
            inputs: [
                {
                    name: 'easy',
                    type: 'text'
                },
                {
                    name: 'button',
                    type: 'submit'
                }
            ]
        }
    }
})
</script>