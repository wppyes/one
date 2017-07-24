<template>
	<div class="quanjing">
		<div class="detail-banner">
			<img src="../assets/all.jpg" />
		</div>
		<!--全景-->
		<div class="panorama content clear">
			<div class="panorama-left float_left">
				<img src="../assets/gyqj1.jpg" />
				<img src="../assets/gyqj2.jpg" />
				<img src="../assets/gyqj_bar.png" />
				<span>About  Panorama</span>
			</div>
			<div class="panorama-right float_right">
				<p>关于全景</p>
				零距离的视觉呈现，打造720°商业全景，给您更真实的体验<br/>与用户更深入的交互，完美展现自我的商业品质<br/>搭配全景的完美营销，用创意赢得用户
			</div>
		</div>
		<div class="panorama-title">全景案例展示</div>
		<div class="content case-list">
			<ul class="clear">
				<li v-for="item in List">
					<router-link :to="{path:'/Hello',query: {Id: item.Id,category:3}}">
						<img v-bind:src="item.Img" />
						<span v-text="item.Title"></span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="more-bth" v-show="showpage==true">更多精彩</div>
	</div>
</template>

<script>
	export default {
		name: 'quanjing',
		data () {
		    return {
		      	List:[],
				showpage:false
		    }
		},	  
		created:function(){		
			this.getList();
		},
		methods:{				
			getList:function(){
				var _this=this;				
				this.$ajax.get('http://www.tintonesoft.com/api/official/Category?Category=3').then(function(res){
					_this.List=res.data.List;
					if(_this.List.length>10){
						_this.showpage=true;
					};
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	}
</script>
