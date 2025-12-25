// Vue 3 建構
const app = Vue.createApp({
	data() {
		return {
			msg: "this is vue 2 msg data str"
		}
	}
});
console.log(app);

// 全域錯誤處理 
app.config.errorHandler = (err, instance, info) => {
	console.error("捕捉到錯誤：", err);
	console.log("發生錯誤的元件：", instance);
	console.log("錯誤資訊：", info);
};

// 註冊到 window 全域
window.vue3ObjApp = app
