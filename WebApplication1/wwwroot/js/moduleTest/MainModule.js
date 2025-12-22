
import helloComponentObject from '/js/components/helloworldvue3componentes6.js';

console.log(helloComponentObject)

// 建立 Vue 3
// Option API，使用 Vue.createApp，並透過 module
const app = Vue.createApp({
	// Vue 3 Options API 當中，data 必須是一個函式，回傳物件
	data() {
		return {
			message: 'Hello from Vue 3',
			user: {
				name: '',
				age: null
			},
			fruits: ["apple", "banana", "grava"]
		}
	},
	methods: {
		changeMessage() {
			this.message = 'Message changed!'
		}
	},
	mounted() {
		// 在元件掛載完成後執行
		console.log('Vue App 已經掛載完成');
		this.message = 'Vue App mounted successfully!';
	},
	watch: {
		// 監聽 user 物件的變化，deep:true 表示深度監聽
		user: {
			handler(newVal, oldVal) {
				console.log('User data changed:', newVal);
			},
			deep: true
		},
		// 監聽 message 的變化
		message(newVal, oldVal) {
			console.log(`Message changed from "${oldVal}" to "${newVal}"`);
		}
	},

	computed: {
		// 會根據 message 和 user.name 自動更新
		combineStr() {
			return this.message + ' ' + this.user.name
		},
	}

});

// 進行元件註冊(要早於 mount)
app.component("hello-world", helloComponentObject);

// 進行元件掛載到特定元素
app.mount('#vueAppDiv');