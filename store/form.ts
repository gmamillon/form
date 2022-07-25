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
                            label: '',
                            placeholder: 'Name',
                            type: 'text'
                        },
                        {
                            label: '',
                            placeholder: 'Phone n°',
                            type: 'number'
                        },
                        {
                            label: '',
                            placeholder: 'Address',
                            type: 'text'
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