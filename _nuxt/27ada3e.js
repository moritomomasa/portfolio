(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{291:function(t,e,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("907dbe10",content,!0,{sourceMap:!1})},292:function(t,e,o){"use strict";o.r(e);var n=o(1),c={name:"BookTemplate",props:{data:{type:Object,required:!0},isReading:{type:Boolean,required:!0}},computed:{shelfBoardHeight:function(){return"".concat(this.$SHELF_BOARD_HEIGHT,"px")},bookHeight:function(){return"".concat(this.$BOOK_HEIGHT,"px")},bookWidth:function(){return"".concat(this.$BOOK_WIDTH,"px")},tagColor:function(){return this.$TAG_COLOR[this.data.tag]||"black"},bookBeltColor:function(){return this.$BOOK_BELT_COLOR}}},r=function(){Object(n.b)((function(t,e){return{"774c7daf":t.bookHeight,"25b6903e":t.bookWidth,"10d6c022":t.shelfBoardHeight,"315b8be8":t.tagColor,"2792ff90":t.bookBeltColor}}))},l=c.setup;c.setup=l?function(t,e){return r(),l(t,e)}:r;var d=c,f=(o(293),o(49)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"book",on:{click:function(){t.$emit("update-selection")}}},[e("div",{staticClass:"content-top content"},[t._v(t._s(t.data.term))]),t._v(" "),e("div",{staticClass:"content-middle content"},[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"content-bottom content"},[e("div",{staticClass:"tag-color"}),t._v("\n        "+t._s(t.data.tag)+"\n    ")]),t._v(" "),t.isReading?e("div",{staticClass:"book-belt content"},[t._v("立ち読み中")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,o){"use strict";o(291)},294:function(t,e,o){var n=o(109)((function(i){return i[1]}));n.push([t.i,".book{height:var(--774c7daf);margin-bottom:var(--10d6c022);margin-left:1px;position:relative;width:var(--25b6903e)}.book:hover{background-color:aqua;font-weight:700}.content{align-items:center;background:linear-gradient(90deg,hsla(0,0%,60%,.693) 5%,hsla(0,0%,90%,.693) 45%,hsla(0,0%,70%,.81));display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%;writing-mode:vertical-rl}.content-top{background:linear-gradient(90deg,#dad9d9,#fff,#e9e9e9);font-size:.7rem;height:calc(var(--774c7daf)*.25);justify-content:center}.content-middle{font-weight:700;height:calc(var(--774c7daf)*.5);padding-top:1rem}.content-bottom{font-size:.8rem;height:calc(var(--774c7daf)*.25)}.tag-color{background-color:var(--315b8be8);border-radius:2px;height:10px;margin-bottom:5px;width:10px}.book-belt{background-color:var(--2792ff90);font-size:.7rem;height:calc(var(--774c7daf)*.2);justify-content:center;position:absolute;top:calc(var(--774c7daf)*.8)}",""]),n.locals={},t.exports=n}}]);