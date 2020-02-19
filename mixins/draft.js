import store from "~/store/store";
import { mapState } from 'vuex';
export const draftMixin = {
    created: async function() {
        console.log(this.$route.params);
        this.doc.body = {}
        this.doc.ref = this.$route.params.ref
        if (this.$route.params.docId) {
            await store.dispatch("getDocById", this.$route.params.docId)
            console.log('draft dispatch', store.state.doc)
        }
    }
}