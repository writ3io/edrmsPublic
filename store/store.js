import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/AuthService'
import { getAllDocs, getDocById, getUserDocs, getTrailList } from '../services/DocsService'
import { getRecord, getAllRecords, getRequest, getAllRequests } from '../services/RecordService'
import { getAllUsers } from '../services/UserService';
import { getSeries, getSubSeries } from '../services/FileplanService';

Vue.use(Vuex)

export default new Vuex.Store({
    state: function() {
        return {
            isLoggedIn: false,
            apiUrl: 'http://edrms.co.za:5000/api' , //TODO add 'http://edrms.co.za:5000/api' ? http://156.38.140.58:5000 as base URL
            user: null,
            docs: [],
            doc: {
                author: Object
            },
            trail: [],
            users: [],
            filePlan: [],
            series: []
        }
    },

    mutations: {
        authenticate(state) {
            state.isLoggedIn = auth.isLoggedIn();
            if (state.isLoggedIn) {
                state.user = auth.getUser();
            } else {
                state.user = null;
            }
        },
        getDocs(state, q) {
            getAllDocs(q).then(res => state.docs = res.data.docs.reverse())
        },
        getUDocs(state, q) {
            getUserDocs(q).then(res => state.docs = res.data.docs.reverse())
        },
        getDoc(state, id) {
            getDocById(id).then(res => state.doc = res.data.doc)
        },
        getUsers(state) {
            getAllUsers().then(res => state.users = res.data)
        },
        getFileplan(state) {
            getSeries().then(res => state.filePlan = res.data.docs)
        },
        getSeriesList(state, { fileplan, id }) {
            getSubSeries({ fileplan, id }).then(res => state.series = res.data)
        },
        getTrail(state, id) {
            getTrailList(id).then(res => state.trail = res.data.list)
        },
        getRecordById(state, id) {
            getRecord(id).then(res => state.doc = res.data.record)
        },
        getRecords(state, id) {
            getAllRecords(id).then(res => state.docs = res.data.records)
        },
        getRequestById(state, id) {
            getRequest(id).then(res => state.doc = res.data.doc)
        },
        getRequests(state, id) {
            getAllRequests(id).then(res => state.docs = res.data.records)
        }

    },
    actions: {
        authenticate(context) {
            context.commit('authenticate');
        },
        getAllDocs(context, q) {
            context.commit('getDocs', q)
        },
        getUserDocs(context, q) {
            context.commit('getUDocs', q)
        },
        getDocById(context, id) {
            context.commit('getDoc', id)
        },
        getAllUsers(context) {
            context.commit('getUsers')
        },
        getFileplan(context) {
            context.commit('getFileplan')
        },
        getSeries(context, { fileplan, id }) {
            context.commit('getSeriesList', { fileplan, id })
        },
        getTrail(context, id) {
            context.commit('getTrail', id)
        },
        getRecord(context, id) {
            context.commit('getRecordById', id)
        },
        getAllRecords(context, id) {
            context.commit('getRecords', id)
        },
        getRequest(context, id) {
            context.commit('getRequestById', id)
        },
        getAllRequests(context, id) {
            context.commit('getRequests', id)
        }
    }
})