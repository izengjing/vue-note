(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{191:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vue实例化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue实例化","aria-hidden":"true"}},[s._v("#")]),s._v(" vue实例化")]),s._v(" "),e("p",[s._v("每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var vm = new Vue({\n  // options\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("br"),s._v("\n注： 本教程只讲解如下几个方法\n"),e("hr"),s._v(" "),e("h2",{attrs:{id:"el"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#el","aria-hidden":"true"}},[s._v("#")]),s._v(" el")]),s._v(" "),e("p",[s._v("解释： 为vue实例提供挂载元素，值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数。（本实例挂载到html上面）。"),e("br")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("html")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div id="app"></div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var vm = new Vue({\n  el: '#app'\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[s._v("#")]),s._v(" data")]),s._v(" "),e("p",[s._v("解释： 当Vue 实例被创建时，它将 data 对象中的所有的属性加入到 Vue 的响应式系统中。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。(注意的是只有当实例被创建时就已经存在于 data 中的属性才是响应式的。)")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("html")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<div id="app">{{ msg }}</div>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("js代码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var vm = new Vue({\n  data: {\n    msg: 'hello Vue.js!'\n  }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("页面显示结果")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hello Vue.js!\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"mounted-function"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mounted-function","aria-hidden":"true"}},[s._v("#")]),s._v(" mounted (function)")]),s._v(" "),e("p",[s._v("解释： vue生命周期之一，不需要仔细研究，只需要知道：在页面加载以后，mounted函数会自动执行里面的函数进行了")]),s._v(" "),e("ul",[e("li",[s._v("js代码"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var vm = new Vue({\n  mounted () {\n    //you code here       \n  }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[s._v("#")]),s._v(" methods")]),s._v(" "),e("p",[s._v("解释： 所有的函数体都写在这个里面")]),s._v(" "),e("ul",[e("li",[s._v("js代码"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var vm = new Vue({\n  methods: {\n    //you functions here       \n  }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])])])},[],!1,null,null,null);a.default=t.exports}}]);