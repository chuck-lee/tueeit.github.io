(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6419],{6101:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/proposal/what-rookie-engineers-need-to-know",function(){return r(9575)}])},9575:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return k}});var t=r(7294),l=r(3905),n=r(9008),m=r(4651),i=r(6052),o=r(4592),d=r(6450);function s(e,a){if(null==e)return{};var r,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var x=["name","getInitials"],u=["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],c=(0,i.Gp)((function(e,a){var r=p({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,i.yK)().badge);return t.createElement(i.m$.div,p({ref:a},e,{className:(0,o.cx)("chakra-avatar__badge",e.className),__css:r}))}));function g(e){var a=e.split(" "),r=a[0],t=a[1];return r&&t?""+r.charAt(0)+t.charAt(0):r.charAt(0)}o.Ts&&(c.displayName="AvatarBadge");var h=function(e){var a=e.name,r=e.getInitials,l=s(e,x),n=(0,i.yK)();return t.createElement(i.m$.div,p({role:"img","aria-label":a},l,{__css:n.label}),a?null==r?void 0:r(a):null)},f=function(e){return t.createElement(i.m$.svg,p({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),t.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),t.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},b={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},N=(0,i.Gp)((function(e,a){var r=(0,i.jC)("Avatar",e),l=(0,i.Lr)(e),n=l.src,m=l.name,d=l.showBorder,x=l.borderRadius,c=void 0===x?"full":x,h=l.onError,N=l.getInitials,v=void 0===N?g:N,y=l.icon,j=void 0===y?t.createElement(f,null):y,C=l.iconLabel,_=void 0===C?" avatar":C,k=l.loading,O=l.children,E=l.borderColor,T=l.ignoreFallback,B=s(l,u),A=p({borderRadius:c,borderWidth:d?"2px":void 0},b,r.container);return E&&(A.borderColor=E),t.createElement(i.m$.span,p({ref:a},B,{className:(0,o.cx)("chakra-avatar",e.className),__css:A}),t.createElement(i.Fo,{value:r},t.createElement(w,{src:n,loading:k,onError:h,getInitials:v,name:m,borderRadius:c,icon:j,iconLabel:_,ignoreFallback:T}),O))}));o.Ts&&(N.displayName="Avatar");var w=function(e){var a=e.src,r=e.onError,l=e.getInitials,n=e.name,o=e.borderRadius,d=e.loading,s=e.iconLabel,p=e.icon,x=void 0===p?t.createElement(f,null):p,u=e.ignoreFallback,c=(0,m.d9)({src:a,onError:r,ignoreFallback:u});return!a||!("loaded"===c)?n?t.createElement(h,{className:"chakra-avatar__initials",getInitials:l,name:n}):t.cloneElement(x,{role:"img","aria-label":s}):t.createElement(i.m$.img,{src:a,alt:n,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:o}})};o.Ts&&(w.displayName="AvatarImage");var v=["children","borderColor","max","spacing","borderRadius"],y=(0,i.Gp)((function(e,a){var r=(0,i.jC)("Avatar",e),l=(0,i.Lr)(e),n=l.children,m=l.borderColor,x=l.max,u=l.spacing,c=void 0===u?"-0.75rem":u,g=l.borderRadius,h=void 0===g?"full":g,f=s(l,v),N=(0,d.WR)(n),w=x?N.slice(0,x):N,y=null!=x&&N.length-x,j=w.reverse().map((function(a,r){var l,n={marginEnd:0===r?0:c,size:e.size,borderColor:null!=(l=a.props.borderColor)?l:m,showBorder:!0};return t.cloneElement(a,(0,o.YU)(n))})),C=p({borderRadius:h,marginStart:c},b,r.excessLabel);return t.createElement(i.m$.div,p({ref:a,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},f,{className:(0,o.cx)("chakra-avatar__group",e.className)}),y>0&&t.createElement(i.m$.span,{className:"chakra-avatar__excess",__css:C},"+"+y),j)}));o.Ts&&(y.displayName="AvatarGroup");var j=r(8527);function C(e,a){if(null==e)return{};var r,t,l=function(e,a){if(null==e)return{};var r,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var _={};function k(e){var a=e.components,r=C(e,["components"]);return(0,l.mdx)("wrapper",Object.assign({},_,r,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",null,"\u79d1\u6280\u696d\u8077\u6daf\u5f15\u8def\uff1a\u83dc\u9ce5\u5de5\u7a0b\u5e2b\u6c42\u8077\u9808\u77e5"),(0,l.mdx)(n.default,{mdxType:"Head"},(0,l.mdx)("meta",{property:"og:title",content:"\u79d1\u6280\u696d\u8077\u6daf\u5f15\u8def\uff1a\u83dc\u9ce5\u5de5\u7a0b\u5e2b\u6c42\u8077\u9808\u77e5 - \u53f0\u7063\u96fb\u5b50\u96fb\u6a5f\u8cc7\u8a0a\u7522\u696d\u5de5\u6703"}),(0,l.mdx)("meta",{property:"og:description",content:"2022 \u6821\u5712\u5de1\u8ff4\u5ba3\u8b1b\uff0c\u9080\u96c6\u4e00\u7fa4\u8cc7\u6df1\u53c8\u4e0d\u5931\u71b1\u60c5\u7684\u79d1\u6280\u696d\u5de5\u7a0b\u5e2b\uff0c\u56de\u5230\u5b78\u6821\uff0c\u8ddf\u76f8\u95dc\u79d1\u7cfb\u6216\u60f3\u6295\u5165\u76f8\u95dc\u7522\u696d\u7684\u540c\u5b78\u5011\u804a\u4e00\u804a"}),(0,l.mdx)("meta",{property:"og:type",content:"website"})),(0,l.mdx)("h2",null,"2022 \u6821\u5712\u5de1\u8ff4\u5ba3\u8b1b"),(0,l.mdx)("p",null,"\u672c\u6d3b\u52d5\u70ba\u52de\u52d5\u90e8\u300e111 \u5e74\u5ea6\u5927\u5c08\u6821\u9662\u96fb\u8cc7\u76f8\u95dc\u79d1\u7cfb\u52de\u6b0a\u624e\u6839\u8b1b\u5ea7\u300f"),(0,l.mdx)("p",null,"\u6211\u5011\u662f\u53f0\u7063\u96fb\u5b50\u96fb\u6a5f\u8cc7\u8a0a\u7522\u696d\u5de5\u6703\u3002\u6211\u5011\u9080\u96c6\u4e00\u7fa4\u8cc7\u6df1\u53c8\u4e0d\u5931\u71b1\u60c5\u7684\u79d1\u6280\u696d\u5de5\u7a0b\u5e2b\uff0c\u56de\u5230\u5b78\u6821\uff0c\u8ddf\u76f8\u95dc\u79d1\u7cfb\u6216\u60f3\u6295\u5165\u76f8\u95dc\u7522\u696d\u7684\u540c\u5b78\u5011\u804a\u4e00\u804a\uff0c\u544a\u8a34\u4ed6\u5011\uff1a"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"\u9032\u5165\u8077\u5834\u5f8c\u7acb\u5373\u9762\u5c0d\u7684\u696d\u754c\u751f\u614b"),(0,l.mdx)("li",{parentName:"ol"},"\u5982\u4f55\u5beb\u51fa\u4e00\u4efd\u4eae\u773c\u7684\u5c65\u6b77\u3001\u9032\u884c\u4e00\u6b21\u8868\u73fe\u512a\u826f\u7684\u9762\u8a66"),(0,l.mdx)("li",{parentName:"ol"},"\u600e\u9ebc\u767c\u5c55\u3001\u52a0\u5f37\u81ea\u5df1\u7684\u5c08\u696d\u80fd\u529b\u3002")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",null,"\u76ee\u524d\u5834\u6b21"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"/news/20220405"}),"4 \u6708 8 \u65e5 \u5143\u667a\u5927\u5b78 - \u838a\u5bb6\u5180\u5148\u751f \u4e3b\u8b1b")),(0,l.mdx)("li",{parentName:"ul"},"10 \u6708 6 \u65e5 \u81fa\u5317\u79d1\u6280\u5927\u5b78 -\u9127\u5fd7\u4ec1\u5148\u751f \u4e3b\u8b1b"),(0,l.mdx)("li",{parentName:"ul"},"10 \u6708 7 \u65e5 \u6e05\u83ef\u5927\u5b78 - \u6c88\u76df\u667a\u5148\u751f \u4e3b\u8b1b"),(0,l.mdx)("li",{parentName:"ul"},"10 \u6708 12 \u65e5 \u967d\u660e\u4ea4\u901a\u5927\u5b78\u5149\u5fa9\u6821\u5340 \u912d\u5b97\u5bf0\u5148\u751f \u4e3b\u8b1b"),(0,l.mdx)("li",{parentName:"ul"},"10 \u6708 20 \u65e5 \u81fa\u7063\u5927\u5b78 - \u9673\u67cf\u4efb\u5148\u751f \u4e3b\u8b1b"),(0,l.mdx)("li",{parentName:"ul"},"11 \u6708 10 \u65e5 \u81fa\u7063\u79d1\u6280\u5927\u5b78 \u9127\u5fd7\u4ec1\u5148\u751f \u4e3b\u8b1b")),(0,l.mdx)("p",null,"\u9678\u7e8c\u589e\u52a0\u4e2d..."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",null,"\u8b1b\u5e2b\u9663\u5bb9"),(0,l.mdx)(j.xu,{padding:"24px",marginBottom:"16px",borderLeft:"16px solid #DC3B45",mdxType:"Box"},(0,l.mdx)(j.Ug,{justifyContent:"space-between",alignItems:"center",spacing:"16px",pb:"16px",mdxType:"HStack"},(0,l.mdx)("h3",null,"\u8b1b\u5e2b\uff1a\u9673\u67cf\u4efb"),(0,l.mdx)(N,{size:"2xl",name:"\u9673\u67cf\u4efb",src:"/images/proposal/speaker-01.jpeg",showBorder:!0,mdxType:"Avatar"})),(0,l.mdx)("h4",null,"\u7d93\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u73fe\u4efb ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.tueeit.org.tw/"}),"\u96fb\u8cc7\u5de5\u6703")," \u7406\u4e8b\u9577"),(0,l.mdx)("li",{parentName:"ul"},"\u73fe\u4efb ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.splashtop.com/"}),"\u7f8e\u5546\u6d6a\u6a4b")," \u6280\u8853\u7d93\u7406"),(0,l.mdx)("li",{parentName:"ul"},"\u66fe\u4efb ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.udicommerce.com/"}),"\u806f\u5408\u667a\u7db2")," \u8cc7\u6df1\u5de5\u7a0b\u5e2b"),(0,l.mdx)("li",{parentName:"ul"},"\u66fe\u4efb ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.tagtoo.com/"}),"\u5854\u5716\u79d1\u6280")," \u524d\u7aef\u5de5\u7a0b\u5e2b")),(0,l.mdx)("h4",null,"\u5b78\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u6210\u529f\u5927\u5b78 \u8cc7\u8a0a\u5de5\u7a0b\u7cfb \u5b78\u58eb"))),(0,l.mdx)(j.xu,{padding:"24px",marginBottom:"16px",borderLeft:"16px solid #4C769B",mdxType:"Box"},(0,l.mdx)(j.Ug,{justifyContent:"space-between",alignItems:"center",spacing:"16px",pb:"16px",mdxType:"HStack"},(0,l.mdx)("h3",null,"\u8b1b\u5e2b\uff1a\u674e\u58eb\u660c"),(0,l.mdx)(N,{size:"2xl",name:"\u674e\u58eb\u660c",src:"/images/proposal/speaker-02.jpeg",mdxType:"Avatar"})),(0,l.mdx)("h4",null,"\u7d93\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Project Lead, ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.moxa.com/"}),"MOXA"),", April 2015 -"),(0,l.mdx)("li",{parentName:"ul"},"Software Engineer, ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.mozilla.org/zh-TW/"}),"Mozilla Taiwan"),", Oct 2012 - Nov 2014"),(0,l.mdx)("li",{parentName:"ul"},"Senior Software Engineer, ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.moxa.com/"}),"MOXA"),", May 2008 - Sep 2012")),(0,l.mdx)("h4",null,"\u5b78\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u4ea4\u901a\u5927\u5b78 \u96fb\u63a7\u5de5\u7a0b\u7814\u7a76\u6240 \u78a9\u58eb"),(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u4ea4\u901a\u5927\u5b78 \u96fb\u6a5f\u5de5\u7a0b\u5b78\u7cfb \u5b78\u58eb"))),(0,l.mdx)(j.xu,{padding:"24px",marginBottom:"16px",borderLeft:"16px solid #DC3B45",mdxType:"Box"},(0,l.mdx)(j.Ug,{justifyContent:"space-between",alignItems:"center",spacing:"16px",pb:"16px",mdxType:"HStack"},(0,l.mdx)("h3",null,"\u8b1b\u5e2b\uff1a\u912d\u5b97\u5bf0"),(0,l.mdx)(N,{size:"2xl",name:"\u912d\u5b97\u5bf0",src:"/images/proposal/speaker-03.jpeg",mdxType:"Avatar"})),(0,l.mdx)("h4",null,"\u7d93\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u73fe\u4efb ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.mediatek.tw/"}),"\u806f\u767c\u79d1\u6280")," \u6280\u8853\u526f\u7406\uff08\u7121\u7dda\u901a\u8a0a\u7522\u54c1\u958b\u767c\uff09"),(0,l.mdx)("li",{parentName:"ul"},"\u66fe\u4efb ",(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.nbl.org.tw/"}),"\u5de5\u7814\u9662\u4ea4\u5927\u7db2\u8def\u6e2c\u8a66\u4e2d\u5fc3")," \u7d04\u8058\u5de5\u7a0b\u5e2b\uff08\u771f\u5be6\u6d41\u91cf\u6e2c\u8a66\u7cfb\u7d71\u958b\u767c\uff09")),(0,l.mdx)("h4",null,"\u5b78\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u4ea4\u901a\u5927\u5b78 \u8cc7\u8a0a\u5de5\u7a0b\u7814\u7a76\u6240 \u78a9\u58eb"),(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u4ea4\u901a\u5927\u5b78 \u8cc7\u8a0a\u79d1\u5b78\u7cfb \u5b78\u58eb"))),(0,l.mdx)(j.xu,{padding:"24px",marginBottom:"16px",borderLeft:"16px solid #4C769B",mdxType:"Box"},(0,l.mdx)(j.Ug,{justifyContent:"space-between",alignItems:"center",spacing:"16px",pb:"16px",mdxType:"HStack"},(0,l.mdx)("h3",null,"\u8b1b\u5e2b\uff1a\u9127\u5fd7\u4ec1"),(0,l.mdx)(N,{size:"2xl",name:"\u9127\u5fd7\u4ec1",src:"/images/proposal/speaker-04.jpeg",mdxType:"Avatar"})),(0,l.mdx)("h4",null,"\u5de5\u4f5c\u5c08\u9577"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u904a\u6232\u8edf\u9ad4\u958b\u767c\uff08\u5927\u578b\u96fb\u73a9\u3001\u624b\u904a\u3001\u7db2\u9801\u904a\u6232\uff09")),(0,l.mdx)("h4",null,"\u5de5\u4f5c\u7d93\u9a57"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.cootek.com/"}),"CooTek"),", Aug 2021 - Nov 2021"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://kooapps.com/"}),"Kooapps"),", Oct 2020 - Mar 2021"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.ubisoft.com/"}),"Ubisoft"),", Mar 2018 - Apr 2020")),(0,l.mdx)("h4",null,"\u5b78\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u6210\u529f\u5927\u5b78\u8cc7\u8a0a\u5de5\u7a0b\u7cfb \u78a9\u58eb"))),(0,l.mdx)(j.xu,{padding:"24px",marginBottom:"32px",borderLeft:"16px solid #DC3B45",mdxType:"Box"},(0,l.mdx)(j.Ug,{justifyContent:"space-between",alignItems:"center",spacing:"16px",pb:"16px",mdxType:"HStack"},(0,l.mdx)("h3",null,"\u8b1b\u5e2b\uff1a\u838a\u5bb6\u5180"),(0,l.mdx)(N,{size:"2xl",name:"\u838a\u5bb6\u5180",src:"/images/proposal/speaker-05.jpeg",mdxType:"Avatar"})),(0,l.mdx)("h4",null,"\u5de5\u4f5c\u7d93\u9a57"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u64d4\u4efb 5 \u5e74\u4ee5\u4e0a IT \u5de5\u7a0b\u5e2b")),(0,l.mdx)("h4",null,"\u5b78\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u570b\u7acb\u4e2d\u592e\u5927\u5b78\u8cc7\u8a0a\u96fb\u6a5f\u5b78\u9662 \u78a9\u58eb")),(0,l.mdx)("h4",null,"\u7d93\u6b77"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"\u6843\u5712\u5e02\u65b0\u5bcc\u5ba2\u5bb6\u6587\u5316\u5354\u6703\u7e3d\u5e79\u4e8b"),(0,l.mdx)("li",{parentName:"ul"},"\u975c\u5b9c\u5927\u5b78\u5fae\u5b78\u5206\u8de8\u57df\u8a2d\u8a08\u8b1b\u5e2b"),(0,l.mdx)("li",{parentName:"ul"},"\u53f0\u7063\u591a\u5143\u6587\u5316\u767c\u5c55\u5354\u6703\u7406\u4e8b"),(0,l.mdx)("li",{parentName:"ul"},"\u6843\u5712\u5e02\u9752\u5e74\u8aee\u8a62\u59d4\u54e1"),(0,l.mdx)("li",{parentName:"ul"},"\u53bb\u6fb3\u6d32\u6253\u5de5\u5ea6\u5047\uff0c\u4e0d\u5de7\u88ab\u96c7\u4e3b\u6b20\u85aa\uff0c\u5b78\u6703\u8de8\u570b\u8a0e\u85aa\u6c34\u7684\u7279\u6b8a\u6280\u80fd"))),(0,l.mdx)("h2",null,"\u806f\u7d61\u65b9\u5f0f"),(0,l.mdx)("p",null,"\u96fb\u5b50\u90f5\u4ef6\uff1a ",(0,l.mdx)("a",Object.assign({parentName:"p"},{href:"mailto:tueeit@tueeit.org.tw"}),"tueeit@tueeit.org.tw")),(0,l.mdx)("p",null,"\u6211\u5011\u662f\u975e\u71df\u5229\u7d44\u7e54\uff0c\u4ea4\u901a\u8cbb\u7528\u7531\u672c\u6703\u6703\u8cbb\u652f\u61c9\u3002\u4e5f\u6b61\u8fce\u5408\u4f5c\u5718\u9ad4\u8d0a\u52a9\u8b1b\u5e2b\u4ea4\u901a\u8cbb\u3002"),(0,l.mdx)("h2",null,"\u95dc\u65bc\u672c\u6703"),(0,l.mdx)("p",null,"\u53f0\u7063\u96fb\u5b50\u96fb\u6a5f\u8cc7\u8a0a\u7522\u696d\u5de5\u6703\uff08\u4ee5\u4e0b\u7c21\u7a31\u96fb\u8cc7\u5de5\u6703\uff09\u6210\u7acb\u65bc 2011 \u5e74 5 \u6708 1 \u65e5\uff0c\u524d\u8eab\u70ba 2009 \u5e74\u53f0\u7a4d\u96fb\u88ab\u88c1\u54e1\u5de5\u81ea\u6551\u6703\uff0c\u8a72\u4e8b\u4ef6\u662f\u79d1\u6280\u696d\u52de\u5de5\u9996\u6b21\u5617\u8a66\u5927\u898f\u6a21\u7d44\u7e54\u884c\u52d5\uff0c\u4e5f\u70ba\u5f8c\u7e8c\u5de5\u6703\u767c\u5c55\u5960\u5b9a\u4e86\u57fa\u790e\u3002\u5728 2011 \u5e74\u6625\u5929\uff0c\u4e00\u4f4d\u5b8f\u9054\u96fb\u5de5\u7a0b\u5e2b\u904e\u52de\u6b7b\u7684\u65b0\u805e\u5f15\u8d77\u5f9e\u696d\u4eba\u54e1\u95dc\u6ce8\uff1b\u4e00\u7fa4\u5148\u884c\u8005\u6709\u611f\u65bc\u79d1\u6280\u696d\u52de\u5de5\u610f\u8b58\u4e0d\u8db3\uff0c\u767c\u8d77\u7d44\u7e54\u96fb\u8cc7\u5de5\u6703\u3002"),(0,l.mdx)("p",null,"\u96fb\u8cc7\u5de5\u6703\u6210\u7acb\u5951\u6a5f\u662f\u79d1\u6280\u696d\u904e\u52de\u4e8b\u4ef6\uff0c\u56e0\u6b64\u6700\u521d\u884c\u52d5\u4fbf\u6307\u5411\u904e\u52de\u7684\u7d50\u69cb\u6027\u56e0\u7d20\u4e4b\u4e00\uff1a\u52de\u57fa\u6cd5\u7b2c 84-1 \u689d\u3002\u9019\u9805\u6cd5\u5f8b\u898f\u5b9a\u4f7f\u7279\u5b9a\u5de5\u4f5c\u8005\u4e0d\u53d7\u6cd5\u5b9a\u5de5\u6642\u4fdd\u969c\uff0c\u589e\u52a0\u52de\u5de5\u904e\u52de\u7684\u98a8\u96aa\u3002\u96fb\u8cc7\u5de5\u6703\u65bc\u6210\u7acb\u5f8c\u767c\u8d77\u4e0d\u53ea\u4e00\u6b21\u884c\u52d5\uff0c\u8981\u6c42\u5ee2\u9664\u8a72\u689d\u6587\uff0c\u4e26\u53c3\u8207\u4fee\u6cd5\u76f8\u95dc\u8aee\u8a62\u6703\u8b70\u3002\u5118\u7ba1\u5c1a\u672a\u6210\u529f\u5ee2\u6b62\u8a72\u6cd5\u6848\uff0c\u6211\u5011\u7684\u884c\u52d5\u4ecd\u559a\u8d77\u5927\u773e\u5c0d\u65bc\u904e\u52de\u8b70\u984c\u7684\u91cd\u8996\u3002"),(0,l.mdx)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u96fb\u8cc7\u5de5\u6703\u4e5f\u7a4d\u6975\u53c3\u8207\u5176\u4ed6\u793e\u6703\u8b70\u984c\u3002\u4f8b\u5982\u5728\u65e5\u6708\u5149\u6392\u653e\u5de5\u696d\u5ee2\u6c34\u4e8b\u4ef6\u4e2d\uff0c\u96fb\u8cc7\u5de5\u6703\u8207\u5730\u7403\u516c\u6c11\u57fa\u91d1\u6703\u7b49\u74b0\u4fdd\u5718\u9ad4\u5408\u4f5c\uff0c\u9664\u8b74\u8cac\u65e5\u6708\u5149\u88fd\u9020\u6c59\u67d3\u5916\uff0c\u4e5f\u8981\u6c42\u65e5\u6708\u5149\u505c\u5de5\u6642\u8981\u7167\u5e38\u7d66\u4ed8\u52de\u5de5\u85aa\u6c34\uff0c\u4e0d\u80fd\u4fb5\u5bb3\u52de\u5de5\u6b0a\u76ca\u3002\u53e6\u5916\u6211\u5011\u9084\u767c\u8d77\u6e96\u6642\u4e0a\u4e0b\u73ed\u904b\u52d5\u3001\u554f\u984c\u5c65\u6b77\u8868\u52df\u96c6\uff1b\u4e5f\u5728\u53cd\u5c0d\u52de\u57fa\u6cd5\u4fee\u60e1\u3001\u52de\u6b0a\u516c\u6295\u7b49\u884c\u52d5\u4e2d\u7a4d\u6975\u53c3\u8207\u3002"),(0,l.mdx)("p",null,"\u793e\u6703\u904b\u52d5\u4ee5\u5916\uff0c\u96fb\u8cc7\u5de5\u6703\u5b9a\u671f\u8fa6\u7406\u52de\u5de5\u6559\u80b2\uff0c\u6301\u7e8c\u63a8\u5ee3\u52de\u6b0a\u610f\u8b58\uff0c\u4e5f\u63d0\u4f9b\u52de\u52d5\u6cd5\u4ee4\u8aee\u8a62\u670d\u52d9\u3002\u5de5\u6703\u6210\u7acb\u81f3\u4eca\u5df2\u8d85\u904e\u5341\u5e74\uff0c\u6211\u5011\u5e0c\u671b\u6301\u7e8c\u5438\u6536\u65b0\u8840\u3001\u7a69\u5b9a\u8301\u58ef\uff0c\u7e7c\u7e8c\u70ba\u53f0\u7063\u7684\u52de\u52d5\u74b0\u5883\u8ca2\u737b\u5fc3\u529b\u3002"))}k.isMDXComponent=!0}},function(e){e.O(0,[9774,2888,179],(function(){return a=6101,e(e.s=a);var a}));var a=e.O();_N_E=a}]);