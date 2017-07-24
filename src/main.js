// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../static/style.css'
import '../static/js/public.js'
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
//回到顶部
$(window).scroll(function() {
		$(window).scrollTop() > $(window).height() + 100 ? $(".backtop").removeClass("display_none") : $(".backtop").addClass("display_none")
});
$(".backtop").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 800)
});