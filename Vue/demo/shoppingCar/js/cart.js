var vm = new Vue({
	el:"#app",
	data:{
		
	},
	// 过滤器
	filters:{

	},
	mounted:function () {
		this.cartView();
	},
	methods:{
		cartView:function () {
			this.$http.get("www.baidu.com").then(res=>{
				console.log('hello world')
			})
		}
	}
})