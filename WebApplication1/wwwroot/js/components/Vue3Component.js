// Vue 3 元件註冊
window.vue3ObjApp.component("vue3-component", {
	// Note：template 最外層 不能放入 <template>
	// template: ` <div><div>this is Vue3Component</div> <p>{{ componentStr }}</p></div> `,
	template: `#templateScriptId`, // 透過 id 綁定
	props: {
		value: {
			type: Object,
			default() {
				return {
				}
			}
		},
		inProp: {
			type: String,
		}
	},
	data() {
		return {
			componentStr: "Vue3Component data Str",
			someDataStr: "",
		}
	},
	mounted() {
		console.log("Vue3Component mount");
		console.log(this.value.valueStr)
		this.someDataStr = this.value.valueStr;
		console.log(this.someDataStr)
		console.log(this.inProp)
		this.someDataStr = this.inProp

	}

})
