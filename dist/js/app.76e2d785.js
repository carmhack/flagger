(function(t){function e(e){for(var a,l,s=e[0],i=e[1],c=e[2],d=0,f=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=r[0]))}return t}var a={},o={app:0},n=[];function l(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=a,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(r,a,function(e){return t[e]}.bind(null,a));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2ae8":function(t,e,r){"use strict";var a=r("82a7"),o=r.n(a);o.a},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),o=r("289d"),n=(r("5abe"),r("2fac"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Hero"),r("Flagger",{attrs:{width:t.width,height:t.height,colors:t.colors,images:t.images}}),r("AppFooter")],1)}),l=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section has-text-centered"},[r("FlagParams",{attrs:{colors:t.colors,flag:t.flag},on:{save:t.onSave}}),r("VueP5",t._g({},{preload:t.preload,setup:t.setup,draw:t.draw}))],1)},i=[],c=r("e25d"),u=r.n(c);class d{constructor(t=null){this.type=t,this.background="#FCD116"}draw(t){t.background(this.background)}isTricolor(){return"Tricolor"===this.type}isStriped(){return"Striped"===this.type}static save(t,e){t.saveCanvas(e,"myFlag","png")}}class f extends d{constructor(t){super("Tricolor"),this.tricolor={bands:["#009246","#F1F2F1","#CE2B37"],coatOfArms:"",orientation:"Vertical",images:t,showCoatOfArms:"Show",currentImageIndex:0}}get currentImage(){return this.tricolor.images[this.tricolor.currentImageIndex].src}changeCoat(t){const e=this.tricolor.images;this.tricolor.currentImageIndex=e.findIndex(e=>e.name===t)}updateBandColor({newColor:t,index:e}){this.tricolor.bands.splice(e,1,t)}showCoatOfArms(){return"Show"===this.tricolor.showCoatOfArms}draw(t,e,r){super.draw(t);const a=this.tricolor.bands,o=this.tricolor.orientation,n=200,l=100;for(let s=0;s<a.length;s+=1){const i=a[s];if(t.fill(i),t.noStroke(),"Vertical"===o?t.rect(n*s,0,n,r):t.rect(0,l*s,e,l),this.showCoatOfArms()){const a=this.currentImage.width/5,o=this.currentImage.height/5;t.image(this.currentImage,e/2-a/2,r/2-o/2,a,o)}}}}var h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"Flag type"}},[r("b-switch",{attrs:{disabled:"","true-value":"Tricolor","false-value":"Striped"},model:{value:t.flag.type,callback:function(e){t.$set(t.flag,"type",e)},expression:"flag.type"}},[t._v(" "+t._s(t.flag.type)+" ")])],1),r("b-field",{attrs:{label:"Orientation"}},[r("b-switch",{attrs:{"true-value":"Vertical","false-value":"Horizontal"},model:{value:t.flag.tricolor.orientation,callback:function(e){t.$set(t.flag.tricolor,"orientation",e)},expression:"flag.tricolor.orientation"}},[t._v(" "+t._s(t.flag.tricolor.orientation)+" ")])],1)],1)],1),r("div",{staticClass:"column"},[t.flag.isTricolor?r("b-field",{attrs:{grouped:""}},t._l(t.flag.tricolor.bands,(function(e,a){return r("b-field",{key:a,attrs:{label:"#"+(a+1)}},[r("swatches",{attrs:{value:e,colors:t.colors,"row-length":"7","show-fallback":"","show-border":"","popover-to":"right"},on:{input:function(e){return t.onUpdateTricolorBand(e,a)}}})],1)})),1):t._e(),t.flag.isTricolor?r("p",{staticClass:"content"},[t._v(" The colors are divided in three groups: "),r("strong",[t._v("european")]),t._v(", "),r("strong",[t._v("pan-african")]),t._v(" and "),r("strong",[t._v("pan-slavic")]),t._v(". "),r("br"),t._v(" However, you are free to pick up your color by entering an hexadecimal. ")]):t._e()],1),r("div",{staticClass:"column"},[t.flag.isTricolor?r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"Show coat of arms"}},[r("b-switch",{attrs:{"true-value":"Show","false-value":"Don't show"},model:{value:t.flag.tricolor.showCoatOfArms,callback:function(e){t.$set(t.flag.tricolor,"showCoatOfArms",e)},expression:"flag.tricolor.showCoatOfArms"}},[t._v(" "+t._s(t.flag.tricolor.showCoatOfArms)+" ")])],1),t.flag.showCoatOfArms?r("b-field",{attrs:{label:"Coat of arms"}},[r("b-select",{attrs:{placeholder:"Choose one"},on:{input:t.onChangeCoat}},t._l(t.flag.tricolor.images,(function(e,a){return r("option",{key:a,domProps:{value:e.name}},[t._v(" "+t._s(e.text)+" ")])})),0)],1):t._e()],1):t._e()],1),r("div",{staticClass:"column"},[r("b-button",{attrs:{type:"is-dark"},on:{click:t.onSave}},[t._v("Export to PNG")])],1)])},p=[],g=r("468d"),m=r.n(g),v={name:"FlagParams",components:{Swatches:m.a},props:{colors:{type:Array,default:()=>[]},flag:{type:Object,default:()=>{}}},computed:{bands(){return this.flag.bands}},methods:{onSave(){this.$emit("save")},onChangeCoat(t){this.flag.changeCoat(t)},onUpdateTricolorBand(t,e){this.flag.updateBandColor({newColor:t,index:e})}}},b=v,w=(r("2ae8"),r("2877")),_=Object(w["a"])(b,h,p,!1,null,"35ee4e94",null),y=_.exports,C={name:"Flagger",components:{VueP5:u.a,FlagParams:y},props:{width:{type:Number,default:600},height:{type:Number,default:300},colors:{type:Array,default:()=>[]},images:{type:Array,default:()=>[]}},created(){this.flag=new f(this.images)},data(){return{canvas:null,sketch:null,flag:null}},methods:{preload(t){const e=this.images;for(let r=0;r<e.length;r+=1){const a=e[r];a.src=t.loadImage(`assets/${a.name}.png`)}},setup(t){const e=this.width,r=this.height;this.sketch=t,this.canvas=t.createCanvas(e,r)},draw(t){this.flag.draw(t,this.width,this.height)},onSave(){d.save(this.sketch,this.canvas)}}},x=C,O=Object(w["a"])(x,s,i,!1,null,null,null),k=O.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero is-dark is-medium"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v(" Flagger ")]),r("h2",{staticClass:"subtitle"},[t._v(" Made with love by Adriano Grimaldi aka carmhack ")])])])])}],A={name:"Hero",props:{title:{type:String,default:"Flag Generator"},subtitle:{type:String,default:""}}},j=A,P=Object(w["a"])(j,S,F,!1,null,null,null),T=P.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("p",[t._v(" Made by "),r("a",{attrs:{href:"https://github.com/carmhack"}},[t._v("Adriano Grimaldi")]),t._v(". This is an open source project. ")])])])}],I={name:"AppFooter"},M=I,B=Object(w["a"])(M,E,$,!1,null,null,null),H=B.exports,V={name:"App",components:{AppFooter:H,Hero:T,Flagger:k},data(){return{width:600,height:300,colors:[["#009246","#F1F2F1","#CE2B37","#0055A4","#F77F00","#002664","#000000"],["#00843E","#E31C23","#FCD116"],["#ff0000","#ffffff","#0093dd","#171796","#f7db17"]],images:[{name:"lion-silver",text:"Silver Lion",src:null},{name:"lion-gold",text:"Gold Lion",src:null},{name:"wolf",text:"Wolf",src:null},{name:"unicorn",text:"Unicorn",src:null},{name:"double-headed-eagle",text:"Double Headed Eagle",src:null},{name:"dragon",text:"Dragon",src:null},{name:"urss",text:"URSS",src:null},{name:"vatican",text:"Vatican",src:null},{name:"skull",text:"Skull",src:null},{name:"palm",text:"Palm",src:null},{name:"moro",text:"Moro",src:null},{name:"leafs",text:"Leafs",src:null},{name:"crown",text:"Crown",src:null}]}}},D=V,G=(r("5c0b"),Object(w["a"])(D,n,l,!1,null,null,null)),U=G.exports;a["a"].use(o["a"]),a["a"].config.productionTip=!1,new a["a"]({render:t=>t(U)}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),o=r.n(a);o.a},"82a7":function(t,e,r){},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.76e2d785.js.map