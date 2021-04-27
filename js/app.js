Vue.createApp({
    data: () => ({
        valueInput: '',
        needDoList: [],
        compliteList: [],
    }),
    methods: {
        handlyInput(event) {
            this.valueInput = event.target.value;
        },
        addTask() {
            if (this.valueInput === '') { return; }

            this.needDoList.push({
                id: Math.random(),
                title: this.valueInput,
            })

            this.valueInput = ''
        },
        doCheck(index, type) {
            if (type === 'need') {
                const compliteMask = this.needDoList.splice(index, 1);
                this.compliteList.push(...compliteMask);
            } else {
                const noCompliteMask = this.compliteList.splice(index, 1);
                this.needDoList.push(...noCompliteMask);
            }
        },
        removeMask(index, type) {
            const todoList = type === 'need' ? this.needDoList : this.compliteList;
            todoList.splice(index, 1);
        }
    }
}).mount('#app');