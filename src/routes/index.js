import VueRouter from "vue-router";
import Vue from "vue";
import UserView from '../views/UserView.vue'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import bus from "../utils/eventBus";
import { store } from '../store/index'
// import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            // path: url 주소
            path: '/news',
            name: 'news',
            // component: url 주소로 갔을 때 표시 될 컴포넌트
            component: NewsView,
            // component: createListView('NewsView')
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner')
                        next();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                // console.log('to', to);
                // console.log('from', from);
                // console.log('next', next);
            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            // component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())
                    .catch((error) => {
                        console.log(error)
                    })
            }
            // component: createListView('JobsView')
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView
        }
    ]
})
