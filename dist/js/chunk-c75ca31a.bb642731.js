(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c75ca31a"],{"0260":function(t,e,n){},"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:t.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},a=[],i={name:"Header",data:function(){return{user:{userImg:this.$store.state.user.userImg,userName:this.$store.state.user.userName,isAuthorize:!1}}},created:function(){console.log(this.user.userName)},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},s=i,c=(n("cdf2"),n("2877")),o=Object(c["a"])(s,r,a,!1,null,"ac52970c",null);e["a"]=o.exports},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"221d":function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"k",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return o})),n.d(e,"i",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return p}));var r="https://gitee.com/api/v5/user",a="/v1/cla",i="/v1/getClaInfo",s="https://gitee.com/api/v5/user/orgs",c="/v1/linkRepository",o="/v1/unLinkRepository",l="/v1/signCla",u="/v1/getLinkedRepositories",f="/v1/getPersonalRepositories",d="/v1/getCompanyRepositories",p="/v1/getCompanyPersonRepositories"},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,i=n("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),s=n("50c4"),c=n("a691"),o=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=r.REPLACE_KEEPS_$0,y=m?"$":"$0";return[function(n,r){var a=o(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!m&&x||"string"===typeof r&&-1===r.indexOf(y)){var i=n(e,t,this,r);if(i.done)return i.value}var o=a(t),p=String(this),v="function"===typeof r;v||(r=String(r));var g=o.global;if(g){var C=o.unicode;o.lastIndex=0}var b=[];while(1){var A=u(o,p);if(null===A)break;if(b.push(A),!g)break;var _=String(A[0]);""===_&&(o.lastIndex=l(p,s(o.lastIndex),C))}for(var S="",w=0,R=0;R<b.length;R++){A=b[R];for(var I=String(A[0]),$=f(d(c(A.index),p.length),0),N=[],k=1;k<A.length;k++)N.push(h(A[k]));var T=A.groups;if(v){var L=[I].concat(N,$,p);void 0!==T&&L.push(T);var P=String(r.apply(void 0,L))}else P=E(I,p,$,N,T,r);$>=w&&(S+=p.slice(w,$)+P,w=$+I.length)}return S+p.slice(w)}];function E(t,n,r,a,s,c){var o=r+t.length,l=a.length,u=g;return void 0!==s&&(s=i(s),u=v),e.call(c,u,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=p(u/10);return 0===f?e:f<=l?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),i=function(t){return function(e,n){var i,s,c=String(a(e)),o=r(n),l=c.length;return o<0||o>=l?t?"":void 0:(i=c.charCodeAt(o),i<55296||i>56319||o+1===l||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):i:t?c.slice(o,o+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},8996:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.createCLAClass,attrs:{id:"createCLA"}},[n("v-header"),n("div",{attrs:{id:"section"}},[n("el-col",{attrs:{offset:6,span:12}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[n("span",[t._v("Edit your CLA")]),n("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.languageOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},model:{value:t.claText,callback:function(e){t.claText=e},expression:"claText"}}),n("p",[t._v("Edit your metaData")]),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},model:{value:t.metaData,callback:function(e){t.metaData=e},expression:"metaData"}}),n("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[n("el-input",{staticStyle:{"margin-right":"2rem"},attrs:{placeholder:"请输入cla名称"},model:{value:t.claName,callback:function(e){t.claName=e},expression:"claName"}}),n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{disabled:!t.verifyNotNull(),type:"primary"},on:{click:function(e){return t.uploadCla()}}},[t._v("create CLA")])],1)],1)],1),n("v-footer")],1)},a=[],i=(n("ac1f"),n("5319"),n("498a"),n("0418")),s=n("fd2d"),c=n("615a"),o=n("221d"),l={name:"CreateCLA",components:{"v-header":i["a"],"v-footer":s["a"]},data:function(){return{fullscreenLoading:!1,claName:"",value:"0",languageOptions:[{value:"0",label:"english"},{value:"1",label:"chinese"}],claText:"test",metaData:"test",createCLAClass:{height:""},user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{verifyNotNull:function(){return this.claText.trim()&&this.claName.trim()},uploadCla:function(){var t=this;this.fullscreenLoading=!0;var e={name:this.claName,text:this.claText,language:"EN",user:this.user.userName};this.verifyClaAndMeta()&&this.$axios({url:"/api"+o["k"],method:"post",data:e}).then((function(e){console.log(e),200===e.status?(t.fullscreenLoading=!1,t.$message.success("succeed"),setTimeout((function(){this.$router.replace("/home")}),1e3)):(t.fullscreenLoading=!1,t.$message.error("failed"))})).catch((function(t){console.log(t)}))},verifyClaAndMeta:function(){return""!==this.claText&&""!==this.metaData},setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(c["a"]()),console.log(document.getElementById("createCLA").offsetHeight),c["a"]()>document.getElementById("createCLA").offsetHeight?t.createCLAClass.height=c["a"]()+"px":t.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var t=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(t),this.metaData=t}},created:function(){},mounted:function(){this.setClientHeight()}};window.onresize=function(){c["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=c["a"]()+"px")};var u=l,f=(n("efeb"),n("2877")),d=Object(f["a"])(u,r,a,!1,null,"265cad5c",null);e["default"]=d.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,c=i,o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||l;f&&(c=function(t){var e,n,a,c,f=this,d=l&&f.sticky,p=r.call(f),v=f.source,g=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",p)),u&&(n=new RegExp("^"+v+"$(?!\\s)",p)),o&&(e=f.lastIndex),a=i.call(d?n:f,h),d?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:o&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&s.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a431:function(t,e,n){},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bdd3:function(t,e,n){},c8d2:function(t,e,n){var r=n("d039"),a=n("5899"),i="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||i[t]()!=i||a[t].name!==t}))}},cdf2:function(t,e,n){"use strict";var r=n("0260"),a=n.n(r);a.a},ce2b:function(t,e,n){"use strict";var r=n("a431"),a=n.n(r);a.a},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),s=n("9263"),c=n("9112"),o=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=i(t),g=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),h=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!g||!h||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var m=/./[v],x=n(v,""[t],(function(t,e,n,r,a){return e.exec===s?g&&!a?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=x[0],E=x[1];r(String.prototype,t,y),r(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},efeb:function(t,e,n){"use strict";var r=n("bdd3"),a=n.n(r);a.a},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2015 SAP SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at SAP ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},a=[],i={name:"Footer"},s=i,c=(n("ce2b"),n("2877")),o=Object(c["a"])(s,r,a,!1,null,"fc237f52",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-c75ca31a.bb642731.js.map