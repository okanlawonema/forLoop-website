webpackJsonp([3],{245:function(n,t,e){"use strict";var s=e(19),a=e.n(s),i=a.a.database().ref("subscribers");t["default"]={name:"AddSubscriber",data:function(){return{subscriber:"",hasSubscribed:!1}},methods:{addSubscriber:function(n){var t=this;i.push(this.subscriber).then(function(n){var e=new FormData;e.append("email",t.subscriber);var s="/api/subscribe";t.$http.post(s,e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(n){})["catch"](function(n){})})["catch"](function(n){}),this.hasSubscribed=!0}}}},246:function(n,t,e){t=n.exports=e(10)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},247:function(n,t,e){var s,a;e(249),s=e(245);var i=e(248);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,n.exports=s},248:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"jumbotron"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"jumbotron__title jumbotron__title--2"},[n._v("Get notified about Upcoming Meetups")]),n._v(" "),e("transition",{attrs:{name:"custom-leave","leave-active-class":"animated bounceOutRight"}},[n.hasSubscribed?n._e():e("div",{staticClass:"jumbotron__action jumbotron__action--maxsize"},[e("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),n.addSubscriber(t)}}},[e("div",{staticClass:"outer-container"},[e("div",{staticClass:"input-section"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.subscriber,expression:"subscriber"}],staticClass:"form__input",attrs:{type:"email",placeholder:"Email Address",required:""},domProps:{value:n._s(n.subscriber)},on:{input:function(t){t.target.composing||(n.subscriber=t.target.value)}}})]),n._v(" "),e("div",{staticClass:"submit-button"},[e("button",{staticClass:"btn btn--primary btn--block",attrs:{type:"submit"}},[n._v("Notify Me")])])])])])]),n._v(" "),e("transition",{attrs:{name:"custom-enter","enter-active-class":"animated tada"}},[n.hasSubscribed?e("div",{staticClass:"jumbotron__action jumbotron__action--maxsize"},[e("h2",[n._v("Thank you for subscribing")])]):n._e()])],1)])},staticRenderFns:[]}},249:function(n,t,e){var s=e(246);"string"==typeof s&&(s=[[n.i,s,""]]);e(11)(s,{});s.locals&&(n.exports=s.locals)},25:function(n,t,e){var s,a;e(282),s=e(259);var i=e(273);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,n.exports=s},259:function(n,t,e){"use strict";var s=e(19),a=e.n(s),i=e(247),r=e.n(i),o=a.a.database().ref("team_page");t["default"]={name:"TeamPage",components:{AddSubscriber:r.a},firebase:{team_page:{source:o,asObject:!0}}}},261:function(n,t,e){t=n.exports=e(10)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},273:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{staticClass:"about"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"about__title"},[n._v("The forLoop Team")]),n._v(" "),e("p",{staticClass:"about__content"},[n._v("\n            "+n._s(n.team_page.description)+"\n          ")])])]),n._v(" "),e("section",{staticClass:"teams"},[e("div",{staticClass:"team__list"},n._l(n.team_page.members,function(t){return e("div",{staticClass:"team__list__item position-relative",style:{backgroundImage:"url('"+t.profile_image+"')"}},[e("div",{staticClass:"team__list__item__container"},[e("div",{staticClass:"team__list__item__name"},[n._v(n._s(t.name))]),n._v(" "),e("div",{staticClass:"team__list__item__handle"},[e("div",{staticClass:"handle__icon"},[e("svg",{staticClass:"icon-social-twitter icon-sm"},[e("use",{attrs:{"xlink:href":"img/icons.svg#icon-social-twitter"}})])]),n._v(" "),e("div",{staticClass:"handle__text"},[n._v("@"+n._s(t.twitter_handle))])])])])}))]),n._v(" "),e("add-subscriber")],1)},staticRenderFns:[]}},282:function(n,t,e){var s=e(261);"string"==typeof s&&(s=[[n.i,s,""]]);e(11)(s,{});s.locals&&(n.exports=s.locals)}});