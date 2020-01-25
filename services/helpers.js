export function signatureHelpers() {
    return {
        clearAuthorSignature() {
            this.$refs.signaturePad.clearSignature();
            this.signature = null;
            this.doc.body.authorSignature = null;
            console.log(this.signature);
        },
        setAuthorSignature() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
            this.doc.body.authorSignature = data;
            console.log("=== End ===", this.doc.body);
        },
        setSignature(ref, target) {
            const { isEmpty, data } = this.$refs[ref].saveSignature();
            this.doc.body[target] = data;
            console.log("=== End ===");
        },
    }
}
export function stringUtils(id) {
    return null
}