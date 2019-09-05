## 背景

由于技术更迭比较快，部分公司的项目没有实现前后端分离开发，因此，页面数据的渲染工作还是主要由后端人员进行处理。但是，大部分后端开发者习惯使用jQuery.js进行数据的渲染工作，由于jQuery主打DOM操作，因此渲染数据的时候，会有大量的字符串拼接，时日一长，代码的可读性变得十分差，代码维护工作也变得越来越困难。由于Vue.js出色的虚拟dom操作，使得代码可以十分优雅的表现出来，因此，这里提出Vue.js

## *jQuery.js*
前端的一个曾经很流行，现在依然很流行的web前端js库；jQuery是基于链式的DOM操作，jQuery是使用选择器（$）选取DOM对象，对其进行赋值、取值、事件绑定等操作，其实和原生的HTML的区别只在于可以更方便的选取和操作DOM对象，而数据和界面是在一起的。<br/>

## *Vue.js*
Vue.js是基于虚拟DOM操作的；Vue则是通过Vue对象将数据和View完全分离开来了。对数据进行操作不再需要引用相应的DOM对象，可以说数据和View是分离的，他们通过Vue对象这个vm实现相互的绑定。这就是传说中的MVVM。<br>

## *两者对比*
两种语言，一种是基于DOM、一种是基于虚拟DOM，两者着力点不一样，因此，两种语言没有可比性，各有各的优点；<br>


本教程**只讲用法，不讲原理**