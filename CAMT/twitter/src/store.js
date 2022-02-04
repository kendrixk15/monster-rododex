const store = {
    state: {
        token:null,
        isLogin: false,
        isFollowed: false,
        getUserId:null,
        currentUserId:null,
    },

    //function
    setToken(tokens){
        this.state.token = tokens
    }
}



export default store