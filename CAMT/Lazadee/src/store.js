const store = {
    state: {
        token:null,
        shopIds:''
    },

    setToken(tokens){
        this.state.token = tokens
    },
}

export default store