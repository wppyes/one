<template>
  <div id="app">    
  	<div class="header content">
			<div class="logo float_left">
				<a href="index.html"><img src="./assets/logo.png"/></a>
			</div>
			<div class="nav float_right">
				<ul class="clear">
					<li><router-link to="/">首页</router-link></li>
					<li><router-link to="/case">品牌全案</router-link></li>
					<li><router-link to="/yunying">微信代运营</router-link></li>
					<li><router-link to="/quanjing">全景</router-link></li>
					<li><router-link to="/yunfuwu">叮当云服务</router-link></li>
				</ul>
			</div>
		</div>
    <router-view></router-view>    
		<div class="footer">
			<div class="clear content">				
				<div class="float_left foot-left">				
					<img src="./assets/ewm.jpg" />
				</div>
				<div class="float_left foot-right">				
					<p>版权所有 河南叮当信息科技有限公司 </p>
					<p>Tel：0371-55013128</p>
					<p>地址：郑州市金水区商务内环商务东三街万达期货大厦1单元501</p>
					<p><a href="http://www.miitbeian.gov.cn" target="_blank">豫ICP备17018159号</a></p>
				</div>
			</div>
		</div>
		<div class="backtop display_none"></div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
	.router-link-exact-active{background:url(assets/nav-bg.png) no-repeat left top;}
</style>
