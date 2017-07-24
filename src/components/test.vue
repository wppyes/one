<template>
  <div class="test">
    <!--轮播-->
		<div class="banner">
			<div class="hd">
				<ul><li v-for="(item,index) in bannerList" v-text=""></li></ul>
			</div>
			<div class="bd">
				<ul>
					<li v-for="item in bannerList"><img v-bind:src="item.Images" v-bind:alt="item.Title"></li>
				</ul>
			</div>
		</div>
		<!--品牌-->
		<div class="indexcase">
			<div class="indextitle">
				品牌全案
				<p>Brand whole case</p>
			</div>
			<div class="content indexcase-top clear">
				<div class="float_left indexcase-left">
					<img src="../assets/caseimg.png" />
				</div>
				<div class="float_right indexcase-right">
					<p>全方位的品牌策划，帮企业摸清品牌管理存在的问题，并提供创造性的解决方案</p>
					<p>差异化的品牌定位，提升企业软实力，增强品牌竞争力</p>
					<p>多渠道精准传播，效率高，转化率更高</p>
				</div>
			</div>
		</div>
		<!--微信代运营-->
		<div class="indexweixin">
			<div class="indextitle">
				微信代运营
				<p>WeChat operation</p>
			</div>
			<div class="content indexweixin-top clear indexbg1">
				<div class="float_left indexweixin-left">
					<p>量身定制，打造专属您的个性平台、创意商城、原创内容</p>
					<p>小而美，大而广的营销活动，为您带来粉丝的裂变式增长</p>
					<p>精准的品牌定位分析，高效的资源整合推广，助您打造强势品牌</p>
				</div>
			</div>
		</div>
		<!--全景-->
		<div class="index-all">			
			<div class="indextitle">
				全景
				<p>Panorama</p>
			</div>
			<div class="content indexcase-top clear">
				<div class="float_left indexcase-left">
					<img src="../assets/qj.png" />
				</div>
				<div class="float_right indexcase-right">
					<p>零距离的视觉呈现，打造720°商业全景，给您更真实的体验</p>
					<p>与用户更深入的交互，完美展现自我的商业品质</p>
					<p>搭配全景的完美营销，用创意赢得用户</p>
				</div>
			</div>
		</div>
		<!--叮当云服务-->
		<div class="indexweixin">
			<div class="indextitle">
				叮当云服务
				<p>Cloud services</p>
			</div>
			<div class="content indexweixin-top clear indexbg2">
				<div class="float_left indexweixin-left">
					<p>基于云计算的营销解决方案，为您提供低成本、免维护、易使用的营销工具</p>
					<p>从企业站、电商平台、微信小程序到H5，全面覆盖您的需求</p>
					<p>告别传统繁琐运营，一站式解决微营销</p>
					<p>不仅仅是营销工具，而是完整解决方案</p>
				</div>
			</div>
		</div>	
		<!--新闻-->
			<div class="indextitle">
				新闻中心
				<p>News</p>
			</div>
			<div class="content indexnew-top clear">
				<div class="float_left indexnew-left">
					<div class="index-bgnew">						
						<img v-bind:src="newimage" />
					</div>
				</div>
				<div class="float_right indexnew-right">
					<ul>
						<li v-for="item in newList" @mouseover="changeimg(item)">
							<router-link :to="{path:'/Hello',query: {Id: item.Id}}">
								<p v-text="item.Title"></p>
								<span v-text="item.Desc"></span>
								<img :src="item.Img" class="display_none" />
							</router-link></li>
					</ul>
				</div>
			</div>
		</div>
</template>
<script>
import '../../static/js/jquery.SuperSlide.2.1.1.js'
export default {
  name: 'test',
  data () {
    return {
      bannerList:[],
			flinkList:[],
			newList:[],
			newimage:''
    }
  },  
	created:function(){			
		var _this=this;		
		this.$ajax.get('http://www.tintonesoft.com/api/official/BannerList').then(function(res){
			_this.bannerList=res.data.List;
			_this.$nextTick(function() {
				//轮播图								
				$(".banner").slide( { 
					mainCell:".bd ul", 
					effect:'leftLoop',
					autoPlay:true,
					delayTime:1000
				});
			});
		}).catch(function(err){
			console.log(err)
		});
		this.getFlink();
		this.getnewList();
	},
	methods:{
		getFlink:function(){
			var _this=this;
			this.$ajax.get('http://www.tintonesoft.com/api/official/FriendshiplinkList').then(function(res){
				_this.flinkList=res.data.List;
			}).catch(function(err){
				console.log(err);
			});
		},
		getnewList:function(){
			var _this=this;			
			this.$ajax.get('http://www.tintonesoft.com/api/official/Category?Category=5').then(function(res){
				_this.newList=res.data.List;
				_this.newimage=res.data.List[0].Img;
			}).catch(function(err){
				console.log(err);
			});			
		},
		changeimg:function(item){
			this.newimage=item.Img;
		}
	}
}
</script>

