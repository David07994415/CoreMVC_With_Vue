// Note：註冊 component 要早於 new Vue
Vue.component("vue2-component", {
    // Note：template 最外層 不能放入 <template>
    // template: ` <div><div>this is Vue2Component</div> <p>{{ componentStr }}</p></div> `,
    template: `#templateScriptId`, // 透過 id 綁定
    props: {
        value: {
            type: Object,
            default() {
                return {
                }
            }
        }
    },
    data() {
        return {
            componentStr: "Vue2Component data Str",
            someDataStr: "",
        }
    },
    mounted() {
        console.log("Vue2Component mount");
        this.someDataStr = this.value.valueStr;
    }
})