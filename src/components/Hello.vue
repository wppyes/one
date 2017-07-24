<template>
  <div class="hello">    		
		<!--banner-->
		<div class="detail-banner">
			<img src="../assets/news_banner.jpg" />
		</div>
		<div id="detail">			
			<h1 v-text="List.Title"></h1>
			<div class="detail clear content">
				<div class="float_left detail-nav">
					<ul>
						<li><router-link to="/">首页</router-link></li>
						<li><router-link to="/case">品牌全案</router-link></li>
						<li><router-link to="/yunying">微信代运营</router-link></li>
						<li><router-link to="/quanjing">全景</router-link></li>
						<li><router-link to="/yunfuwu">叮当云服务</router-link></li>
					</ul>
				</div>
				<div class="float_right">
					<div class="details" v-html="List.Content"></div>
					<div class="hrefbth" v-if="category==3">
						<a v-bind:href="List.Url">全景详情</a>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      List:[],
			category:''
    }
	},
	created:function(){		
		this.getList();	
		this.category=this.$route.query.category;
	},
	methods:{				
		getList:function(){
			var _this=this;			
			this.$ajax.post('http://www.tintonesoft.com/api/official/Article_Id?Id='+this.$route.query.Id).then(function(res){
				_this.List=res.data.List;
			}).catch(function(err){
				console.log(err);
			});
		}
	}
}
</script>

