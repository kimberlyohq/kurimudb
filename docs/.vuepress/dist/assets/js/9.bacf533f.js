(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{390:function(e,t,n){"use strict";n.r(t);n(112),n(98);var r=n(60),o=n(24),s=n(44),i=n(114),a=n(113),u=(n(72),n(333),n(177),n(330),n(174),n(71),n(382),n(34),n(66),n(353),n(332),n(97),n(383),n(9),n(26),n(31),new(void 0)("default",(function(e){e.version(1).stores({Note:"++id"}),e.version(2).stores({Note:"++id, title",Config:"key"})}))),c=new(function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){return Object(o.a)(this,n),t.call(this,u,["id","number"])}return Object(s.a)(n,[{key:"getIdBelow5Results",value:function(){return this.getResults(this.query().where("id").below(5))}}]),n}(void 0)),l=new(function(e){Object(i.a)(l,e);var t,n,c=Object(a.a)(l);function l(){return Object(o.a)(this,l),c.call(this,u,["key","string"])}return Object(s.a)(l,[{key:"seeding",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.hello="world",t.world="hello";case 2:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"test",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResults(this.query().where("key").equals("test"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),l}(void 0)),v={data:function(){return{show:1,noteList:{},configList:{}}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,(void 0).data.xxx;case 3:return t.t1=t.sent,t.t0.warn.call(t.t0,t.t1),c.$.subscribe(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.all();case 2:return t.abrupt("return",e.noteList=t.sent);case 3:case"end":return t.stop()}}),t)})))),l.$.subscribe(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.all();case 2:return t.abrupt("return",e.configList=t.sent);case 3:case"end":return t.stop()}}),t)})))),l.data.test$.subscribe(console.log),l.data.test={title:"test"},t.t2=console,t.next=12,l.data.test;case 12:t.t3=t.sent,t.t2.log.call(t.t2,t.t3);case 14:case"end":return t.stop()}}),t)})))()},methods:{addNote:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,new c.data({title:"name-".concat((new Date).getTime())});case 3:e.t1=e.sent,e.t0.log.call(e.t0,"addNote",e.t1);case 5:case"end":return e.stop()}}),e)})))()},nextShow:function(){if(this.show<2)return this.show++;this.show=0},printNote:function(){console.log(c)},printConfig:function(){console.log(l)}}},w=n(43),f=Object(w.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("button",{on:{click:e.printNote}},[e._v("打印 Note 模型")]),e._v(" "),n("button",{on:{click:e.printConfig}},[e._v("打印 Config 模型")]),e._v(" "),n("button",{on:{click:e.nextShow}},[e._v("显示模型数据")])]),e._v(" "),n("p",[n("button",{on:{click:e.addNote}},[e._v("添加 Note 数据")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.show,expression:"0 === show"}]},[e._v("已隐藏模型数据")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.show,expression:"1 === show"}]},[n("p",[e._v("Note 模型数据:")]),e._v(" "),e._l(e.noteList,(function(t,r){return n("div",[e._v(e._s(r)+": "+e._s(t))])}))],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.show,expression:"2 === show"}]},[n("p",[e._v("Config 模型数据:")]),e._v(" "),e._l(e.configList,(function(t,r){return n("div",[e._v(e._s(r)+": "+e._s(t))])}))],2)])}),[],!1,null,null,null);t.default=f.exports}}]);