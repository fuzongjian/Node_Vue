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
			this.$http.get("http://www.baidu.com").then(function (res) {
				console.log(res.body)
			});
		}
	}
})