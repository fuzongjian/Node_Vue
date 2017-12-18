<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{ seller.name }}</span>
				</div>
				<div class="description">
					{{ seller.description }}/{{ seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon"></span>
					<span class="text">{{ seller.supports[0].description }}</span>
				</div>
			</div>
			<div v-if="seller.supports" class="support-count">
				<span class="count">{{ seller.supports.length }}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper">
			<span class="bulletin-title"></span>
			<span class="bulletin-text">{{ seller.bulletin }}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
	</div>
</template>
<script>
export default{
	props:{
		seller:{
			type: Object
		}
	},
	created(){
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
	},
	data(){
		return {
			msg: ''
		}
	}
}
</script>
<style>
.header{
	color: #fff;
	background: #999;
}
.header .content-wrapper{
	position: relative;
	padding:24px 12px 18px 24px;
	/*解决字体与图片之间的缝隙*/
	font-size: 0;
}
.header .content-wrapper .avatar{
	display: inline-block;
	vertical-align: top;
}
.header .content-wrapper .avatar img{
	border-radius: 2px;
}
.header .content-wrapper .content{
	display: inline-block;
	font-size: 14px;
	margin-left: 14px;
}
.header .content-wrapper .content .title{
	margin: 2px 0 8px 0;
}
.header .content-wrapper .content .title .brand{
	display: inline-block;
	width: 30px;
	height: 18px;
	vertical-align: top;
	background-image: url('brand@2x.png');
	background-size: 30px 18px;
	background-repeat: no-repeat;
}
.header .content-wrapper .content .title .name{
	margin-left: 6px;
	font-size: 16px;
	line-height: 18px;
	font-weight: bold;
}
.header .content-wrapper .content .description{
	margin-bottom: 10px;
	line-height: 12px;
	font-size: 12px;
}
.header .content-wrapper .content .support .icon{
	display: inline-block;
	/*vertical-align: top;*/
	width: 12px;
	height: 12px;
	margin-right: 6px;
	background: url('decrease_1@2x.png');
	background-size: 12px 12px;
	background-repeat: no-repeat;
	
}
.header .content-wrapper .content .support .decrease{
	display: inline-block;
	width: 12px;
	height: 12px;
	vertical-align: top;
	margin-right: 4px;
	background: url('decrease_1@2x.png');
	background-size: 12px 12px;
	background-repeat: no-repeat;
}
.header .content-wrapper .content .support .discount{
	background: url('discount_2@2x.png');
}
.header .content-wrapper .content .support .guarantee{
	background: url('guarantee_2@2x.png');
}
.header .content-wrapper .content .support .invoice{
	background: url('invoice_2@2x.png');
}
.header .content-wrapper .content .support .special{
	background: url('special_2@2x.png');
}
.header .content-wrapper .content .support .text{
	line-height: 12px;
	font-size: 10px;
	vertical-align: top;
}
.header .content-wrapper .support-count{
	position: absolute;
	right: 12px;
	bottom: 14px;
	padding: 0 8px;
	height: 24px;
	line-height: 24px;
	border-radius: 14px;
	background: rgba(0,0,0,0.2);
	text-align: center;
}
.header .content-wrapper .support-count .count{
	vertical-align: top;
	font-size: 10px;
}
.header .content-wrapper .support-coun .icon-keyboard_arrow_right{
	margin-left: 2px;
	line-height: 24px;
	font-size: 10px;
}
.bulletin-wrapper{
	position: relative;
	height: 28px;
	line-height: 28px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	background: rgba(7,17,27,0.2);
}
.bulletin-wrapper .bulletin-title{
	display: inline-block;
	vertical-align: top;
	margin-top: 8px;
	margin-left: 5px;
	width: 22px;
	height: 12px;
	background: url('bulletin@2x.png');
	background-size: 22px 12px;
	background-repeat: no-repeat;
}
.bulletin-wrapper .bulletin-text{
	vertical-align: top;
	margin: 0 4px;
	font-size: 10px;
}
.bulletin-wrapper .background{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	filter: blur(10px);
}
</style>