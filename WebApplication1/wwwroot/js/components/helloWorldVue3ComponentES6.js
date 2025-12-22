/*透過 module 匯出*/
const helloWorld = {
    // 模板 
    template: ` <div>
            <p>{{ message }}</p>
            <p>父元件傳來的：{{ msg }}</p>
            <button @click="sayHello">點我</button>
         </div> `,
    // 資料必須是函式 
    data() {
        return {
            message: 'Hello Vue 2 Component!'
        }
    },
    // 接收父元件的 props 
    props: ['msg'],
    // 方法
    methods: {
        sayHello() {
            alert('Hello from child component!')
        }
    },
    // 生命週期鉤子 
    mounted() {
        console.log('hello-world component 已經掛載完成')
    }
}

export default helloWorld;