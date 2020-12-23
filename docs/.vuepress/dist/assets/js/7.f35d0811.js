(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{388:function(e,t,n){"use strict";n.r(t);n(113),n(97);var r=n(46),a=n(24),i=n(45),u=n(115),s=n(114),o=n(376),c=function(){function e(t,n){Object(a.a)(this,e),this.connection=new o.a(t),this.connection.version(1).stores({__Kurimudb:"key"}),n(this.connection)}return Object(i.a)(e,[{key:"getConnection",value:function(){return this.connection}}]),e}(),h=(n(183),n(72),n(377),n(111),n(44),n(70),n(66)),l=n(343),f=n(75),d=n(384),p=n(387),v=n(385),b=(n(378),n(9),n(26),n(31),function(){function e(t){Object(a.a)(this,e),this.value=new Map,this.model=t}return Object(i.a)(e,[{key:"all",value:function(){var e,t={},n=Object(l.a)(this.value.entries());try{for(n.s();!(e=n.n()).done;){var r=Object(f.a)(e.value,2),a=r[0],i=r[1];t[a]=i.getValue()}}catch(e){n.e(e)}finally{n.f()}return t}},{key:"get$",value:function(e){return this.value.has(e)||this.value.set(e,new v.a(null)),this.value.get(e)}},{key:"get",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.value.has(e)?null===(t=this.value.get(e))||void 0===t?void 0:t.getValue():n}},{key:"add",value:function(e,t){if(this.value.has(e))throw new Error("Key already exists in the object store.");this.value.set(e,new v.a(t))}},{key:"put",value:function(e,t){var n;this.value.has(e)?null===(n=this.value.get(e))||void 0===n||n.next(t):this.value.set(e,new v.a(t))}},{key:"forget",value:function(e){var t;null===(t=this.value.get(e))||void 0===t||t.next(void 0)}},{key:"has",value:function(e){return this.value.has(e)}},{key:"count",value:function(){return this.value.size}}]),e}()),m=(n(322),function e(t){return Object(a.a)(this,e),new Proxy((function(){}),{construct:(n=Object(r.a)(regeneratorRuntime.mark((function e(n,r){var a,i,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(f.a)(r,2),i=a[0],u=a[1],s=void 0===u?void 0:u,!t._connection){e.next=5;break}return e.next=4,t._database.add(i,s,!1);case 4:i=e.sent;case 5:return void 0===s&&(s=i[t.primary]),t._cache.add(s,i),t.inserted$.next({type:"inserted",key:s,value:i}),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)}),deleteProperty:function(e,n){return n=t.checkPrimary(n),t._cache.forget(n),t._connection&&Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._database.forget(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),t.deleted$.next({type:"deleted",key:n,value:null}),!0},set:function(e,n,a,i){return n=t.checkPrimary(n),t._cache.put(n,a),t._connection&&Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._database.put(n,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))(),t.updated$.next({type:"updated",key:n,value:a}),!0},get:function(e,n,a){return"string"==typeof(n=t.checkPrimary(n))&&n.endsWith("$")?t._cache.get$(n.substring(0,n.length-1)):Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t._cache.get(n,null),!t._connection||null!==r){e.next=5;break}return e.next=4,t._database.get(n);case 4:r=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()},has:function(e,n){if(n=t.checkPrimary(n),t._connection)throw new Error('For persistent models, the result of the "in" operator may be incorrect, need "await modelName.has(key)" replace your "key in modelName.data".');return t._cache.has(n)}});var n}),y=function(){function e(t){Object(a.a)(this,e),this.model=t}var t,n,u,s,o,c;return Object(i.a)(e,[{key:"query",value:function(){if(!this.model._connection)throw new Error("This model cannot persist data without a connection.");return this.model._connection.getConnection()[this.model.name]}},{key:"all",value:(c=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.query().toArray();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"get",value:(o=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.query().get(t);case 3:return e.t1=e.sent,e.abrupt("return",e.t0.decode.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"put",value:(s=Object(r.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=this.encode(n))[this.model.primary]=t,e.next=4,this.query().put(n);case 4:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"add",value:(u=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,a,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:void 0,r=i.length>2&&void 0!==i[2]&&i[2],t=this.encode(t),void 0!==n&&(t[this.model.primary]=n),e.next=6,this.query().add(t);case 6:if(a=e.sent,!r){e.next=9;break}return e.abrupt("return",a);case 9:return e.next=11,this.query().get(a);case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"forget",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.query().delete(t);case 2:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"has",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.query().where(this.model.primary).equals(t).count();case 2:return e.abrupt("return",!!e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"encode",value:function(e){return this.model._isPlainObject(e)?e:{$__value:e}}},{key:"decode",value:function(e){return null==e?null:"$__value"in e?e.$__value:e}}]),e}(),w=function(){function e(t,n){var r=this,i=Object(f.a)(n,2),u=i[0],s=i[1];if(Object(a.a)(this,e),this.inserted$=new d.a,this.deleted$=new d.a,this.updated$=new d.a,this.changed$=Object(p.a)(this.inserted$,this.deleted$,this.updated$),this.$=new v.a({type:"inited",key:null,value:null}),this.name=this.constructor.name,this.primary=u,this.primaryType=s,!this.name)throw new Error("'name' not found.");if(t&&!t.getConnection()[this.name])throw new Error("Table not found. Did you add this table '".concat(this.name,"' to the migrations?"));this._connection=t,this._database=new y(this),this._cache=new b(this),this.data=new m(this),this.changed$.subscribe((function(e){return r.$.next(e)})),this._seeding()}var t,n,u,s,o;return Object(i.a)(e,[{key:"all",value:(o=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._connection){e.next=2;break}return e.abrupt("return",this._cache.all());case 2:return e.abrupt("return",this.getResults(this.query()));case 3:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"query",value:function(){return this._database.query()}},{key:"getResults",value:(s=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,a,i,u,s,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:{},this._connection){e.next=3;break}throw new Error("This function can only be used when you have Collection");case 3:return e.next=5,t.toArray();case 5:if((r=e.sent)instanceof Array){e.next=8;break}throw new Error("The query result is not a single object. If it's an array, please use 'getresult' instead.");case 8:a=Object(l.a)(r);try{for(a.s();!(i=a.n()).done;)u=i.value,s=u[this.primary],this._cache.has(s)?n[s]=this._cache.get(s):(n[s]=this._database.decode(u),this._cache.add(s,n[s]))}catch(e){a.e(e)}finally{a.f()}return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"getResult",value:(u=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,a,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:{},this._connection){e.next=3;break}throw new Error("This function can only be used when you have Collection");case 3:return e.t0=this,e.next=6,t;case 6:if(e.t1=e.sent,e.t0._isPlainObject.call(e.t0,e.t1)){e.next=9;break}throw new Error("The query result is not a single array. If it's an object, please use 'getresults' instead.");case 9:return e.next=11,t;case 11:return r=e.sent,a=r[this.primary],this._cache.has(a)?n[a]=this._cache.get(a):(n[a]=this._database.decode(r),this._cache.add(a,n[a])),e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"has",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.checkPrimary(t),!this._cache.has(t)){e.next=3;break}return e.abrupt("return",!0);case 3:if(!this._connection){e.next=7;break}return e.abrupt("return",this._database.has(t));case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"checkPrimary",value:function(e){if("number"===this.primaryType&&!isNaN(Number(e)))return Number(e);if(this.primaryType!==Object(h.a)(e))throw new Error("The model primary type needs to be ".concat(this.primaryType,", not ").concat(Object(h.a)(e)));return e}},{key:"_seeding",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.seeding){e.next=2;break}return e.abrupt("return");case 2:if(this._connection){e.next=4;break}return e.abrupt("return",this.seeding(this.data));case 4:return t=this._connection.getConnection().__Kurimudb,e.next=7,t.get("is_seeded");case 7:if(!e.sent){e.next=9;break}return e.abrupt("return");case 9:return this.seeding(this.data),e.next=12,t.add({key:"is_seeded",value:"true"});case 12:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_humpToLine",value:function(e){return e.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/^_/,"")}},{key:"_isPlainObject",value:function(e){if("object"!==Object(h.a)(e)||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}}]),e}(),g=new c("default",(function(e){e.version(1).stores({Note:"++id"}),e.version(2).stores({Note:"++id, title",Config:"key"})})),k=new(function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.call(this,g,["id","number"])}return Object(i.a)(n,[{key:"getIdBelow5Results",value:function(){return this.getResults(this.query().where("id").below(5))}}]),n}(w)),_=new(function(e){Object(u.a)(c,e);var t,n,o=Object(s.a)(c);function c(){return Object(a.a)(this,c),o.call(this,g,["key","string"])}return Object(i.a)(c,[{key:"seeding",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.hello="world",t.world="hello";case 2:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"test",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResults(this.query().where("key").equals("test"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),c}(w)),x={data:function(){return{show:1,noteList:{},configList:{}}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k.$.subscribe(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.all();case 2:return t.abrupt("return",e.noteList=t.sent);case 3:case"end":return t.stop()}}),t)})))),_.$.subscribe(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.all();case 2:return t.abrupt("return",e.configList=t.sent);case 3:case"end":return t.stop()}}),t)})))),_.data.test$.subscribe(console.log),_.data.test={title:"test"},t.t0=console,t.next=7,_.data.test;case 7:t.t1=t.sent,t.t0.log.call(t.t0,t.t1);case 9:case"end":return t.stop()}}),t)})))()},methods:{addNote:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,new k.data({title:"name-".concat((new Date).getTime())});case 3:e.t1=e.sent,e.t0.log.call(e.t0,"addNote",e.t1);case 5:case"end":return e.stop()}}),e)})))()},nextShow:function(){if(this.show<2)return this.show++;this.show=0},printNote:function(){console.log(k)},printConfig:function(){console.log(_)}}},j=n(43),O=Object(j.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[n("button",{on:{click:e.printNote}},[e._v("打印 Note 模型")]),e._v(" "),n("button",{on:{click:e.printConfig}},[e._v("打印 Config 模型")]),e._v(" "),n("button",{on:{click:e.nextShow}},[e._v("显示模型数据")])]),e._v(" "),n("p",[n("button",{on:{click:e.addNote}},[e._v("添加 Note 数据")])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.show,expression:"0 === show"}]},[e._v("已隐藏模型数据")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.show,expression:"1 === show"}]},[n("p",[e._v("Note 模型数据:")]),e._v(" "),e._l(e.noteList,(function(t,r){return n("div",[e._v(e._s(r)+": "+e._s(t))])}))],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.show,expression:"2 === show"}]},[n("p",[e._v("Config 模型数据:")]),e._v(" "),e._l(e.configList,(function(t,r){return n("div",[e._v(e._s(r)+": "+e._s(t))])}))],2)])}),[],!1,null,null,null);t.default=O.exports}}]);