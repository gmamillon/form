import { defineStore } from 'pinia'

export const useForm = defineStore({
    id: 'form-store',
    state: () => {
        return {
            sections: [
                {
                    title: 'Example Section',
                    inputs: [
                        {
                            name: 'Name',
                            type: 'text'
                        },
                        {
                            name: 'Phone n°',
                            type: 'number'
                        }
                    ]
                }
            ],
        }
    },
    actions: {
        newSection() {
            this.sections = [...this.sections, this.sections[0]]
            console.log(this.sections)
        }
    },
    getters: {

    }
})