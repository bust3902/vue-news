import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from "@/api";

export default {
    // promise
    /*
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
                return response;
            })
            .catch(error => console.log(error))
    },
     */// async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    // FETCH_JOBS({ commit })는 context.commit과 같다. commit을 바로 받아서 사용.
    // 마찬가지로 then에서 response의 data를 바로 받아 사용.
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error)
        }
    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList()
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        console.log(4);
        commit('SET_LIST', response.data);
        return response;
    }
}
