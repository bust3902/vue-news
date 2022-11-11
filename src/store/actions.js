import {
    // fetchAskList,
    // fetchJobsList,
    // fetchNewsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from "@/api";

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error))
    // },
    // FETCH_ASK(context) {
    //     fetchAskList()
    //         .then(response => context.commit('SET_ASK', response.data))
    //         .catch(error => console.log(error))
    // },
    // // FETCH_JOBS({ commit })는 context.commit과 같다. commit을 바로 받아서 사용.
    // // 마찬가지로 then에서 response의 data를 바로 받아 사용.
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => commit('SET_JOBS', data))
    //         .catch(error => console.log(error))
    // },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data)
            })
            .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => console.log(error));
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error));
    }
}
