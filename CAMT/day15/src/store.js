const store = {
    state: {
        todoList: [
            'สวัสดีโย่ว',
            'Meopec apple lover',
        ]
    },
    addTodo(todo){
        this.state.todoList.push(todo)
        //store ข้อมูลไว้ใน broswer ใช้ได้แค่ในเครื่องเท่านั้น
        localStorage.setItem('myTodoApp', JSON.stringify(this.state))
    },
    //เก็บข้อมูลไว้ที่ local storage ของ browser
    init(){
        const savedState = localStorage.getItem('myTodoApp')
        if(savedState){
            this.state = JSON.parse(savedState)
        }
    }
}

store.init()


export default store