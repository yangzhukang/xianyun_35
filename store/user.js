export const mutations = {
    // 保存用户信息到state
    setUserInfo(state, data){
        state.userInfo = data;
    },
};

export const actions = {
    // 登录
    login({commit}, data){
        return this.$axios({
            url: "/accounts/login",
            method: "POST",
            data: data
        }).then(res => {
            const data = res.data;
            // 保存到state
            commit("setUserInfo", data);
            return data;
        })
    }
};