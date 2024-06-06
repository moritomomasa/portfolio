(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4,5,6],{291:function(t,e,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("907dbe10",content,!0,{sourceMap:!1})},292:function(t,e,o){"use strict";o.r(e);var n=o(1),r={name:"BookTemplate",props:{data:{type:Object,required:!0},isReading:{type:Boolean,required:!0}},computed:{shelfBoardHeight:function(){return"".concat(this.$SHELF_BOARD_HEIGHT,"px")},bookHeight:function(){return"".concat(this.$BOOK_HEIGHT,"px")},bookWidth:function(){return"".concat(this.$BOOK_WIDTH,"px")},tagColor:function(){return this.$TAG_COLOR[this.data.tag]||"black"},bookBeltColor:function(){return this.$BOOK_BELT_COLOR}}},c=function(){Object(n.b)((function(t,e){return{"774c7daf":t.bookHeight,"25b6903e":t.bookWidth,"10d6c022":t.shelfBoardHeight,"315b8be8":t.tagColor,"2792ff90":t.bookBeltColor}}))},l=r.setup;r.setup=l?function(t,e){return c(),l(t,e)}:c;var d=r,f=(o(293),o(49)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"book",on:{click:function(){t.$emit("update-selection")}}},[e("div",{staticClass:"content-top content"},[t._v(t._s(t.data.term))]),t._v(" "),e("div",{staticClass:"content-middle content"},[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"content-bottom content"},[e("div",{staticClass:"tag-color"}),t._v("\n        "+t._s(t.data.tag)+"\n    ")]),t._v(" "),t.isReading?e("div",{staticClass:"book-belt content"},[t._v("立ち読み中")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,o){"use strict";o(291)},294:function(t,e,o){var n=o(109)((function(i){return i[1]}));n.push([t.i,".book{height:var(--774c7daf);margin-bottom:var(--10d6c022);margin-left:1px;position:relative;width:var(--25b6903e)}.book:hover{background-color:aqua;font-weight:700}.content{align-items:center;background:linear-gradient(90deg,hsla(0,0%,60%,.693) 5%,hsla(0,0%,90%,.693) 45%,hsla(0,0%,70%,.81));display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;writing-mode:vertical-rl}.content-top{background:linear-gradient(90deg,#dad9d9,#fff,#e9e9e9);font-size:.7rem;height:calc(var(--774c7daf)*.25);justify-content:center}.content-middle{font-weight:700;height:calc(var(--774c7daf)*.5);padding-top:1rem}.content-bottom{font-size:.8rem;height:calc(var(--774c7daf)*.25)}.tag-color{background-color:var(--315b8be8);border-radius:2px;height:10px;margin-bottom:5px;width:10px}.book-belt{background-color:var(--2792ff90);font-size:.7rem;height:calc(var(--774c7daf)*.2);justify-content:center;position:absolute;top:calc(var(--774c7daf)*.8)}",""]),n.locals={},t.exports=n},296:function(t,e,o){var content=o(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("79dceee8",content,!0,{sourceMap:!1})},297:function(t,e,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("8dd32e7a",content,!0,{sourceMap:!1})},299:function(t,e,o){var content=o(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("cb5bdb12",content,!0,{sourceMap:!1})},303:function(t,e){},304:function(t,e){},307:function(t,e,o){"use strict";o(296)},308:function(t,e,o){var n=o(109)((function(i){return i[1]}));n.push([t.i,".header{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);background-color:hsla(0,0%,100%,.1);left:0;position:fixed;top:0;width:100%;z-index:3}.header-container{align-items:center;display:flex;height:50px;justify-content:center;position:relative;width:100%}",""]),n.locals={},t.exports=n},309:function(t,e,o){"use strict";o(297)},310:function(t,e,o){var n=o(109)((function(i){return i[1]}));n.push([t.i,".history-note-container{margin-top:6rem;min-height:80vh;text-align:center;width:35vw}.title{font-size:1.5rem;margin-bottom:1.5rem}.timeline-container{text-align:left}.timeline-abst{font-size:1rem;margin-bottom:1rem}.item{display:flex;font-size:.9rem;margin-bottom:.65rem}.item-term{min-width:5rem}",""]),n.locals={},t.exports=n},312:function(t,e){},314:function(t,e){},320:function(t,e,o){"use strict";o(299)},321:function(t,e,o){var n=o(109)((function(i){return i[1]}));n.push([t.i,".bookshelf{background:repeating-linear-gradient(90deg,#7e3c1e 0 var(--7b25104f),hsla(0,0%,100%,0) var(--7b25104f) calc(100% - var(--7b25104f)),#7e3c1e calc(100% - var(--7b25104f)) 100%),repeating-linear-gradient(180deg,#7e3c1e 0 var(--af7bcf2a),rgba(77,23,23,.776) var(--af7bcf2a),rgba(103,31,31,.776) calc(var(--af7bcf2a) + 10px) calc(var(--af7bcf2a) + var(--11e3fe90) - 10px),rgba(77,23,23,.776) calc(var(--af7bcf2a) + var(--11e3fe90)));min-height:calc(var(--11e3fe90)*2 + var(--af7bcf2a)*3);width:100%}.inner-space{display:flex;flex-wrap:wrap;left:var(--7b25104f);position:relative;top:var(--af7bcf2a);width:calc(100% - var(--7b25104f)*2)}",""]),n.locals={},t.exports=n},322:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("697178ab",content,!0,{sourceMap:!1})},329:function(t,e){},334:function(t,e,o){"use strict";o.r(e);var n={name:"GlobalHeader",component:{BookComponent:o(292).default},data:function(){return{data:{date:"2024-5～",title:"フューチャー",tag:"アルバイト"},a:15}},computed:{sidePlateWidth:function(){return"".concat(this.$SIDE_PLATE_WIDTH,"px")},shelfBoardHeight:function(){return"".concat(this.$SHELF_BOARD_HEIGHT,"px")},bookHeight:function(){return"".concat(this.$BOOK_HEIGHT,"px")}},methods:{addPixel:function(t){return"".concat(t,"px")}}},r=(o(307),o(49)),component=Object(r.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"header-container"},[this._v("森 友雅のポートフォリオ")])])}],!1,null,null,null);e.default=component.exports},335:function(t,e,o){"use strict";o.r(e);var n={name:"HistoryNote",props:{book:{type:Object,required:!0}},data:function(){return{title:"フューチャー"}}},r=(o(309),o(49)),component=Object(r.a)(n,(function(){var t,e,o,n,r,c=this,l=c._self._c;return l("div",{staticClass:"history-note-container"},[l("div",{staticClass:"title"},[c._v("～　"+c._s(null===(t=c.book)||void 0===t?void 0:t.title)+"　～")]),c._v(" "),l("div",{staticClass:"timeline-container"},[null!==(e=c.book)&&void 0!==e&&e.skills?l("div",{staticClass:"timeline-skills"},[c._v("使用技術："+c._s(null===(o=c.book)||void 0===o?void 0:o.skills))]):c._e(),c._v(" "),l("div",{staticClass:"timeline-abst"},[c._v("概要　　："+c._s(null===(n=c.book)||void 0===n?void 0:n.abst))]),c._v(" "),c._l(null===(r=c.book)||void 0===r?void 0:r.timeline,(function(t,e){return l("div",{key:e,staticClass:"item"},[l("div",{staticClass:"item-term"},[c._v(c._s(e))]),c._v(" "),l("div",{staticClass:"item-desc"},[c._v(c._s(t))])])}))],2)])}),[],!1,null,null,null);e.default=component.exports},336:function(t,e,o){"use strict";o.r(e);var n=o(323),r=o(292),c=o(1),l={name:"BookShelf",component:{BookComponent:r.default},props:{books:{type:n.list,required:!0}},data:function(){return{data:{date:"2024-5～",title:"フューチャー",tag:"アルバイト"},selectingId:1}},computed:{sidePlateWidth:function(){return"".concat(this.$SIDE_PLATE_WIDTH,"px")},shelfBoardHeight:function(){return"".concat(this.$SHELF_BOARD_HEIGHT,"px")},bookHeight:function(){return"".concat(this.$BOOK_HEIGHT,"px")}}},d=function(){Object(c.b)((function(t,e){return{"11e3fe90":t.bookHeight,af7bcf2a:t.shelfBoardHeight,"7b25104f":t.sidePlateWidth}}))},f=l.setup;l.setup=f?function(t,e){return d(),f(t,e)}:d;var v=l,h=(o(320),o(49)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bookshelf"},[t._v("\n    "+t._s(t.res)+"\n    "),e("div",{staticClass:"inner-space"},t._l(t.books.length,(function(i){return e("BookTemplate",{key:i,attrs:{data:t.books[i-1],"is-reading":i==t.selectingId},on:{"update-selection":function(){t.selectingId=i,t.$emit("update-selection",t.selectingId)}}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BookTemplate:o(292).default})},337:function(t,e,o){var map={"./book (1).json":[352,10],"./book (10).json":[353,11],"./book (11).json":[354,12],"./book (12).json":[355,13],"./book (2).json":[356,14],"./book (3).json":[357,15],"./book (4).json":[358,16],"./book (5).json":[359,17],"./book (6).json":[360,18],"./book (7).json":[361,19],"./book (8).json":[362,20],"./book (9).json":[363,21]};function n(t){if(!o.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return o.e(e[1]).then((function(){return o.t(n,3)}))}n.keys=function(){return Object.keys(map)},n.id=337,t.exports=n},338:function(t,e,o){"use strict";o(322)},339:function(t,e,o){var n=o(109)((function(i){return i[1]}));n.push([t.i,".main{display:flex;position:relative;top:50px}.pos-left{display:flex;justify-content:center;width:49%}.pos-right{width:49.5%}",""]),n.locals={},t.exports=n},364:function(t,e,o){"use strict";o.r(e);var n=o(13),r=(o(66),o(16),o(31),o(32),o(1).a.extend({name:"IndexPage",data:function(){return{books:[{}],selectingId:1}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,i=1;case 2:if(!(i<100)){e.next=10;break}return e.next=5,o(337)("./book (".concat(i,").json"));case 5:n=e.sent,t.books.push(n);case 7:i++,e.next=2;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.books.shift();case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}})),c=(o(338),o(49)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("GlobalHeader"),t._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"pos-left"},[e("HistoryNote",{attrs:{book:t.books[t.selectingId-1]}})],1),t._v(" "),e("div",{staticClass:"pos-right"},[e("BookShelf",{attrs:{books:t.books},on:{"update-selection":function(e){t.selectingId=e}}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeader:o(334).default,HistoryNote:o(335).default,BookShelf:o(336).default})}}]);