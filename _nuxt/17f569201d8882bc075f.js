(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{181:function(t,e,r){"use strict";r.d(e,"a",function(){return n});r(29);var n={mounted:function(){"localhost"!==window.location.hostname&&null!==this.$route.name&&(window.location="/404.html")}}},183:function(t,e,r){var content=r(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("a5a31970",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";var n=r(183);r.n(n).a},225:function(t,e,r){(t.exports=r(71)(!1)).push([t.i,".btn-clip:hover .tooltip{visibility:visible}",""])},227:function(t,e,r){"use strict";r.r(e);r(54),r(23),r(19),r(30),r(41),r(109),r(110),r(14),r(55);var n=r(28),o=r(67);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var d={data:function(){return{bin:"",month:"",year:"",cvv:"",quantity:10,isDateEnabled:!0,isCvvEnabled:!0,length:16,months:["January","Febuary","March","April","May","June","July","August","September","October","November","December"]}},watch:{isDateEnabled:function(t){t?this.unexclude("expiration_date"):this.exclude("expiration_date")},isCvvEnabled:function(t){t?this.unexclude("cvv"):this.exclude("cvv")}},computed:c({},Object(o.c)({formats:"creditcards/formats",getFormat:"creditcards/format",cardTypes:"creditcards/types"}),{format:{set:function(t){this.setFormat(t)},get:function(){return this.getFormat}}}),methods:c({},Object(o.b)({clearResult:"creditcards/clear",pushData:"creditcards/add",setFormat:"creditcards/setFormat",exclude:"creditcards/exclude",unexclude:"creditcards/unexclude"}),{generate:function(){if(!(this.bin.length<6)){this.clearResult();for(var t=0;t<this.quantity;t++)this.pushData({card_number:this.generateCreditCardNumber(),expiration_date:"".concat(this.generateMonth(),"/").concat(this.generateYear()),cvv:this.generateCvv()})}},generateCreditCardNumber:function(){var t=this,e="";this.bin.split("").forEach(function(r,n){e.length<t.length-1&&("x"===r.toLowerCase()?e+=t.rand(0,9).toString():e+=r.toString())});for(var r=0,n=0,o=this.reverseString(e);n<this.length-1;){var l=2*o[n];l>9&&(l-=9),r+=l,n!=this.length-2&&(r+=parseInt(o[n+1])),n+=2}var c=(10*(Math.floor(r/10)+1)-r)%10;return e+=isNaN(c)?"":c.toString()},generateMonth:function(){return""!==this.month?this.pad(this.month,2):this.pad(this.rand(1,12),2)},generateYear:function(){return""!==this.year?this.year:parseInt((new Date).getFullYear())+parseInt(this.rand(2,5))},generateCvv:function(){return this.cvv?this.cvv:this.generateRandomNumberByLength(15===this.length?4:3)},generateRandomNumberByLength:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.length===t?e:this.generateRandomNumberByLength(t,e+this.rand(0,9).toString())},formatPlaceholder:function(t){var e="";if(!(event.target.value.length<6)){this.bin=this.bin.replace(/\s+/g,""),/^3/.exec(this.bin)?this.length=15:this.length=16,this.bin=this.bin.replace(/X/g,"x").replace(/[^0-9x]/g,"");for(var r=0;r<this.length-this.bin.length;r++)e+="x";this.bin+=e}},rand:function(t,e){return 0==t?Math.floor(Math.random()*e+0):Math.floor(Math.random()*(e-t+1))+t},reverseString:function(t){return t.split("").reverse().join("")},pad:function(t,e){var r="0"+t;return r.substr(r.length-e)}})},m=r(6),v=Object(m.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{action:"/",method:"post"},on:{submit:function(e){return e.preventDefault(),t.generate(e)}}},[r("div",[r("label",{staticClass:"block cursor-pointer relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("BIN")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.bin,expression:"bin"}],staticClass:"form-input block w-full",attrs:{placeholder:"549627"},domProps:{value:t.bin},on:{blur:t.formatPlaceholder,input:function(e){e.target.composing||(t.bin=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"flex -mx-2 items-center"},[r("div",{staticClass:"px-2 mt-6"},[r("label",{staticClass:"flex items-center cursor-pointer"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isDateEnabled,expression:"isDateEnabled"}],staticClass:"form-checkbox text-teal-700 cursor-pointer",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isDateEnabled)?t._i(t.isDateEnabled,null)>-1:t.isDateEnabled},on:{change:function(e){var r=t.isDateEnabled,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.isDateEnabled=r.concat([null])):l>-1&&(t.isDateEnabled=r.slice(0,l).concat(r.slice(l+1)))}else t.isDateEnabled=o}}}),t._v(" "),r("span",{staticClass:"ml-2 text-xs font-medium"},[t._v("DATE")])])]),t._v(" "),r("div",{staticClass:"mt-6 w-full sm:w-1/2 px-2"},[r("label",{staticClass:"block cursor-pointer relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("MONTH")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],staticClass:"form-select block w-full",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.month=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("Random")]),t._v(" "),t._l(t.months,function(e,n){return r("option",{key:n,domProps:{value:n+1}},[t._v("\n                        "+t._s(e)+"\n                    ")])})],2)])]),t._v(" "),r("div",{staticClass:"mt-6 w-full sm:w-1/2 px-2"},[r("label",{staticClass:"block cursor-pointer relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("YEAR")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"form-select block w-full",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.year=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("Random")]),t._v(" "),r("option",{domProps:{value:(new Date).getFullYear()}},[t._v(t._s((new Date).getFullYear()))]),t._v(" "),t._l(8,function(e){return r("option",{domProps:{value:(new Date).getFullYear()+e}},[t._v(t._s((new Date).getFullYear()+e))])})],2)])])]),t._v(" "),r("div",{staticClass:"flex -mx-2 items-center"},[r("div",{staticClass:"px-2 mt-6"},[r("label",{staticClass:"flex items-center cursor-pointer"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isCvvEnabled,expression:"isCvvEnabled"}],staticClass:"form-checkbox text-teal-700 cursor-pointer",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isCvvEnabled)?t._i(t.isCvvEnabled,null)>-1:t.isCvvEnabled},on:{change:function(e){var r=t.isCvvEnabled,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=t._i(r,null);n.checked?l<0&&(t.isCvvEnabled=r.concat([null])):l>-1&&(t.isCvvEnabled=r.slice(0,l).concat(r.slice(l+1)))}else t.isCvvEnabled=o}}}),t._v(" "),r("span",{staticClass:"ml-2 text-xs font-medium"},[t._v("CVV")])])]),t._v(" "),r("div",{staticClass:"mt-6 w-full sm:w-1/2 px-2"},[r("label",{staticClass:"block cursor-pointer relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("CVV")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cvv,expression:"cvv"}],staticClass:"form-input block w-full",attrs:{placeholder:"Leave blank to randomize"},domProps:{value:t.cvv},on:{input:function(e){e.target.composing||(t.cvv=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"mt-6 w-full sm:w-1/2 px-2"},[r("label",{staticClass:"block cursor-pointer relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("QUANTITY")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.quantity,expression:"quantity",modifiers:{number:!0}}],staticClass:"form-input block w-full",attrs:{type:"text"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),t._v(" "),r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block cursor-pointer relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("FORMAT")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],staticClass:"form-select block w-full",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.format=e.target.multiple?r:r[0]}}},t._l(t.formats,function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v("\n                    "+t._s(e.toUpperCase())+"\n                ")])}),0)])]),t._v(" "),r("div",{staticClass:"mt-6"},[r("button",{staticClass:"flex items-center justify-center shadow-md bg-teal-600 text-white font-medium w-full rounded py-3 hover:bg-teal-500 focus:bg-teal-700 focus:outline-none",attrs:{type:"submit"}},[r("svg",{staticClass:"fill-current w-6 h-6 mr-1",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M6.80003 3.45C7.67003 2.93 8.62003 2.53 9.63003 2.28C9.79674 2.77655 10.1152 3.2082 10.5404 3.514C10.9657 3.81981 11.4762 3.98432 12 3.98432C12.5238 3.98432 13.0344 3.81981 13.4596 3.514C13.8849 3.2082 14.2033 2.77655 14.37 2.28C15.38 2.53 16.33 2.93 17.19 3.45C16.9519 3.92008 16.8683 4.45341 16.9513 4.9738C17.0344 5.4942 17.2797 5.97505 17.6524 6.34768C18.025 6.7203 18.5058 6.96565 19.0262 7.04868C19.5466 7.13171 20.0799 7.04817 20.55 6.81C21.07 7.67 21.47 8.61 21.72 9.63C21.2235 9.7967 20.7918 10.1152 20.486 10.5404C20.1802 10.9657 20.0157 11.4762 20.0157 12C20.0157 12.5238 20.1802 13.0343 20.486 13.4596C20.7918 13.8848 21.2235 14.2033 21.72 14.37C21.47 15.38 21.07 16.33 20.55 17.19C20.0799 16.9518 19.5466 16.8683 19.0262 16.9513C18.5058 17.0343 18.025 17.2797 17.6524 17.6523C17.2797 18.025 17.0344 18.5058 16.9513 19.0262C16.8683 19.5466 16.9519 20.0799 17.19 20.55C16.33 21.07 15.39 21.47 14.37 21.72C14.2033 21.2234 13.8849 20.7918 13.4596 20.486C13.0344 20.1802 12.5238 20.0157 12 20.0157C11.4762 20.0157 10.9657 20.1802 10.5404 20.486C10.1152 20.7918 9.79674 21.2234 9.63003 21.72C8.62003 21.47 7.67003 21.07 6.81003 20.55C7.0482 20.0799 7.13174 19.5466 7.04871 19.0262C6.96568 18.5058 6.72034 18.025 6.34771 17.6523C5.97508 17.2797 5.49423 17.0343 4.97383 16.9513C4.45344 16.8683 3.92011 16.9518 3.45003 17.19C2.91713 16.3159 2.52248 15.3646 2.28003 14.37C2.77658 14.2033 3.20823 13.8848 3.51403 13.4596C3.81984 13.0343 3.98435 12.5238 3.98435 12C3.98435 11.4762 3.81984 10.9657 3.51403 10.5404C3.20823 10.1152 2.77658 9.7967 2.28003 9.63C2.53003 8.62 2.93003 7.67 3.45003 6.81C3.92011 7.04817 4.45344 7.13171 4.97383 7.04868C5.49423 6.96565 5.97508 6.7203 6.34771 6.34768C6.72034 5.97505 6.96568 5.4942 7.04871 4.9738C7.13174 4.45341 7.0482 3.92008 6.81003 3.45H6.80003ZM12 16C13.0609 16 14.0783 15.5786 14.8285 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8285 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9392 8 9.92175 8.42143 9.1716 9.17157C8.42146 9.92172 8.00003 10.9391 8.00003 12C8.00003 13.0609 8.42146 14.0783 9.1716 14.8284C9.92175 15.5786 10.9392 16 12 16Z",fill:"white"}}),t._v(" "),r("path",{attrs:{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",fill:"white"}})]),t._v("\n            Generate\n        ")])])])},[],!1,null,null,null).exports,f={props:{selector:{type:String,required:!0}},methods:{copy:function(){document.querySelector(this.selector).select(),document.execCommand("copy"),this.$emit("copy")}}};function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,r)}return e}var C={components:{CopyToClipboard:Object(m.a)(f,function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.copy(e)}}},[t._t("default")],2)},[],!1,null,null,null).exports},data:function(){return{isCopied:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},Object(o.c)({result:"creditcards/result"})),methods:{copyToClipboard:function(){var t=this;this.isCopied=!0,setTimeout(function(){return t.isCopied=!1},1e3)}}},x=(r(224),{head:{titleTemplate:"Random Credit Card Numbers Generator - %s",meta:[{hid:"description",name:"description",content:"NamsoGen random credit card numbers generator based on your own BIN pattern."},{hid:"og:title",name:"og:title",content:"NamsoGen's Random Credit Card Numbers Generator"},{hid:"og:description",name:"og:description",content:"NamsoGen random credit card numbers generator based on your own BIN pattern."}]},components:{CreditCardGenerator:v,CreditCardGeneratedResult:Object(m.a)(C,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"block cursor-pointer relative h-full relative"},[r("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3"},[t._v("RESULT")]),t._v(" "),r("textarea",{staticClass:"form-textarea block w-full h-full resize-none font-fallback font-bold tracking-wide",attrs:{id:"result",rows:"5",placeholder:"xxxxxxxxxx"},domProps:{value:t.result}}),t._v(" "),r("copy-to-clipboard",{staticClass:"btn-clip bg-gray-500 px-2 py-1 absolute bottom-0 right-0 mb-px mr-px focus:outline-none focus:bg-gray-600",attrs:{selector:"#result"},on:{copy:t.copyToClipboard}},[r("span",{staticClass:"tooltip invisible absolute top-0 right-0 mr-10 -mt-1 w-32 py-1 text-center block text-white text-xs rounded-full",class:[t.isCopied?"bg-teal-500":"bg-gray-600"]},[t.isCopied?[t._v("Copied!")]:[t._v("Copy to clipboard")]],2),t._v(" "),r("svg",{staticClass:"fill-current w-4 h-4 text-white",attrs:{viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M3.50004 1.16666H7.00004V4.66666C7.00004 5.30833 7.52504 5.83333 8.16671 5.83333H11.6667V11.6667C11.6667 11.9761 11.5438 12.2728 11.325 12.4916C11.1062 12.7104 10.8095 12.8333 10.5 12.8333H3.50004C3.19062 12.8333 2.89388 12.7104 2.67508 12.4916C2.45629 12.2728 2.33337 11.9761 2.33337 11.6667V2.33333C2.33337 1.69166 2.85837 1.16666 3.50004 1.16666ZM4.66671 7.58333C4.512 7.58333 4.36362 7.64479 4.25423 7.75419C4.14483 7.86358 4.08337 8.01195 4.08337 8.16666C4.08337 8.32137 4.14483 8.46975 4.25423 8.57914C4.36362 8.68854 4.512 8.75 4.66671 8.75H9.33337C9.48808 8.75 9.63646 8.68854 9.74585 8.57914C9.85525 8.46975 9.91671 8.32137 9.91671 8.16666C9.91671 8.01195 9.85525 7.86358 9.74585 7.75419C9.63646 7.64479 9.48808 7.58333 9.33337 7.58333H4.66671ZM4.66671 9.91667C4.512 9.91667 4.36362 9.97812 4.25423 10.0875C4.14483 10.1969 4.08337 10.3453 4.08337 10.5C4.08337 10.6547 4.14483 10.8031 4.25423 10.9125C4.36362 11.0219 4.512 11.0833 4.66671 11.0833H7.00004C7.15475 11.0833 7.30312 11.0219 7.41252 10.9125C7.52191 10.8031 7.58337 10.6547 7.58337 10.5C7.58337 10.3453 7.52191 10.1969 7.41252 10.0875C7.30312 9.97812 7.15475 9.91667 7.00004 9.91667H4.66671Z"}}),t._v(" "),r("path",{attrs:{d:"M8.16663 1.16666L11.6666 4.66666H8.16663V1.16666Z"}})])])],1)},[],!1,null,null,null).exports},mixins:[r(181).a]}),y=Object(m.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"min-h-70-screen"},[this._m(0),this._v(" "),e("div",{staticClass:"flex flex-wrap -mx-2 mt-8 text-gray-700"},[e("div",{staticClass:"w-full sm:w-1/2 px-2"},[e("credit-card-generator")],1),this._v(" "),e("div",{staticClass:"w-full sm:w-1/2 px-2"},[e("div",{staticClass:"sm:h-full mt-6 sm:mt-0"},[e("credit-card-generated-result")],1)])]),this._v(" "),this._m(1),this._v(" "),e("input",{attrs:{type:"hidden",name:"IL_IN_TAG",value:"2"}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-3xl font-bold text-gray-700"},[this._v("Random Credit Card Numbers Generator")]),this._v(" "),e("p",{staticClass:"mt-3"},[this._v("Generate random credit card numbers for testing, validation and/or verification purposes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mt-5"},[e("input",{attrs:{type:"hidden",name:"IL_IN_ARTICLE"}})])}],!1,null,null,null);e.default=y.exports}}]);