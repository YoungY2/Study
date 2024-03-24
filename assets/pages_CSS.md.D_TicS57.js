import{_ as a,c as e,o as t,a3 as o}from"./chunks/framework.BI06Adbe.js";const r="/assets/2.CSDkYIFs.png",b=JSON.parse('{"title":"CSS","description":"","frontmatter":{},"headers":[],"relativePath":"pages/CSS.md","filePath":"pages/CSS.md"}'),l={name:"pages/CSS.md"},i=o('<h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="src与href的区别" tabindex="-1">src与href的区别 <a class="header-anchor" href="#src与href的区别" aria-label="Permalink to &quot;src与href的区别&quot;">​</a></h2><ul><li>src用于指定外部资源的地址，href用于指定超链接的目标资源的地址；</li><li>src通常用于img标签、script标签、audio标签和video标签等，href属性通常用于a标签、link标签和@import指令等；</li><li>src属性指向的资源会被浏览器立即加载并解析</li></ul><h2 id="盒子模型" tabindex="-1">盒子模型 <a class="header-anchor" href="#盒子模型" aria-label="Permalink to &quot;盒子模型&quot;">​</a></h2><blockquote><p>分为IE模型和标准模型。主要区别是元素的总宽高是否包括外边距，标准盒子模型总宽高包括了内容、内边距、边框和外边距，而IE盒子模型不包括外边距。</p></blockquote><h2 id="css选择器优先级" tabindex="-1">css选择器优先级 <a class="header-anchor" href="#css选择器优先级" aria-label="Permalink to &quot;css选择器优先级&quot;">​</a></h2><blockquote><p>!important &gt; 行内样式&gt;ID选择器 &gt; 类选择器 &gt; 标签 &gt; 通配符 &gt; 继承</p></blockquote><h2 id="如何居中div-常用3种" tabindex="-1">如何居中div(常用3种) <a class="header-anchor" href="#如何居中div-常用3种" aria-label="Permalink to &quot;如何居中div(常用3种)&quot;">​</a></h2><blockquote><ol><li>利用定位+margin: auto 子绝父相定位，子元素的top、bottom、left、right都设置为0，再设置margin为auto</li><li>利用定位+transform 子绝父相定位，子元素设置top为50%，left为50%，再设置 transform: translate(-50%, -50%); 位移自己宽度和高度的一半</li><li>flex弹性布局 父元素开启display: flex;主轴和侧轴都居中justify-content: center;align-items: center;</li></ol></blockquote><h2 id="flex布局的属性" tabindex="-1">flex布局的属性 <a class="header-anchor" href="#flex布局的属性" aria-label="Permalink to &quot;flex布局的属性&quot;">​</a></h2><p><img src="'+r+'" alt="image-20230830010311300"></p><h2 id="重排与重绘" tabindex="-1">重排与重绘 <a class="header-anchor" href="#重排与重绘" aria-label="Permalink to &quot;重排与重绘&quot;">​</a></h2><blockquote><p>重排就是当修改了dom几何属性，比如宽高，这时候浏览器就需要重新计算元素的几何属性，同时也会影响到其他几何属性的位置，这时候就会重新构造渲染dom树，这个过程就是重排</p><p>重绘就是比如我们更改了color，没有涉及到几何属性的，这就会引起重绘。</p><p>总的来说就是改变dom对象大小或者添加删除都会导致重排，改变颜色等属性会导致重绘，重排一定会重绘，重绘不会重排，重排还会影响性能，所以尽量避免引起重排的操作。大小位置可以用scale和transform</p></blockquote><h2 id="rgba-和-opacity-的透明效果有什么不同" tabindex="-1">rgba() 和 opacity 的透明效果有什么不同？ <a class="header-anchor" href="#rgba-和-opacity-的透明效果有什么不同" aria-label="Permalink to &quot;rgba() 和 opacity 的透明效果有什么不同？&quot;">​</a></h2><blockquote><ol><li><p>opacity 作用于元素，以及元素内的所有内容的透明度-占据空间</p></li><li><p>rgba()作用于元素的颜色或背景色，子元素不继承透明效果-占据空间</p></li><li><p>display: none 完全隐藏，不占据空间</p></li><li><p>overflow: hidden：当内容溢出时，裁剪（隐藏）溢出的部分，不显示滚动条。</p></li></ol></blockquote>',15),s=[i];function c(n,h,d,p,u,f){return t(),e("div",null,s)}const _=a(l,[["render",c]]);export{b as __pageData,_ as default};
