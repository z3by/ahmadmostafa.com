(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{285:function(t,n,e){},303:function(t,n,e){"use strict";var o=e(285);e.n(o).a},322:function(t,n,e){"use strict";e.r(n);e(98),e(99),e(63);var o=e(27),c={components:{GithubIcon:o.d,FacebookIcon:o.c,TwitterIcon:o.h,YoutubeIcon:o.i,InstagramIcon:o.e,LinkedinIcon:o.f},methods:{getIconComponentName:function(t){switch(t){case"github":return"GithubIcon";case"facebook":return"FacebookIcon";case"twitter":return"TwitterIcon";case"instagram":return"InstagramIcon";case"linkedin":return"LinkedinIcon";case"youtube":return"YoutubeIcon";default:return""}}},computed:{contact:function(){var t=this;return(this.$themeConfig.footer&&this.$themeConfig.footer.contact||[]).map((function(n){var e=n.type,o=n.link;return{iconComponent:t.getIconComponentName(e),link:o}})).filter((function(t){return t.iconComponent}))},copyright:function(){return this.$themeConfig.footer&&this.$themeConfig.footer.copyright||[]}}},i=(e(303),e(3)),a=Object(i.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-container",[e("el-main",[e("el-card",{staticClass:"card",attrs:{align:"center","body-style":"padding: 0"}},[e("div",{staticClass:"card-header"},[e("img",{staticClass:"card-img",attrs:{src:t.$withBase(t.$themeConfig.about.image),alt:t.$themeConfig.about.fullName}}),t._v(" "),e("h1",[t._v(t._s(t.$themeConfig.about.fullName))])]),t._v(" "),e("p",[t._v(t._s(t.$themeConfig.about.bio))]),t._v(" "),e("hr"),t._v(" "),t.contact?e("ul",{staticClass:"contact"},t._l(t.contact,(function(n){return e("li",{key:n.text,staticClass:"contact-item"},[e("NavLink",{attrs:{link:n.link}},[e(n.iconComponent,{tag:"component"}),t._v("\n            "+t._s(n.text)+"\n          ")],1)],1)})),0):t._e()])],1)],1)}),[],!1,null,"0b455423",null);n.default=a.exports}}]);