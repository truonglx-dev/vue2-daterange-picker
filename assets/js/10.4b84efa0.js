(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(t,e,n){"use strict";var a=n(49);n.n(a).a},298:function(t,e,n){"use strict";n.r(e);var a={name:"SlotsDemo",components:{DateRangePicker:n(90).a},data:function(){var t=new Date,e=new Date;return e.setDate(e.getDate()+6),{dateRange:{startDate:t,endDate:e}}},filters:{date:function(t){return t?t.toLocaleString():""}}},s=(n(148),n(0)),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("date-range-picker",{scopedSlots:t._u([{key:"header",fn:function(e){return n("div",{staticClass:"slot"},[n("h3",[t._v("Calendar header")]),t._v(" "),e.in_selection?n("span",[t._v(" - in selection")]):t._e()])}},{key:"input",fn:function(e){return[t._v("\n    "+t._s(t._f("date")(e.startDate))+" - "+t._s(t._f("date")(e.endDate))+"\n  ")]}},{key:"ranges",fn:function(e){return[n("div",{staticClass:"ranges"},[n("ul",t._l(e.ranges,(function(a,s){return n("li",{key:s,on:{click:function(t){return e.clickRange(a)}}},[n("b",[t._v(t._s(s))]),t._v(" "),n("small",{staticClass:"text-muted"},[t._v(t._s(a[0].toDateString())+" - "+t._s(a[1].toDateString()))])])})),0)])]}},{key:"footer",fn:function(e){return n("div",{staticClass:"slot"},[n("div",[n("b",{staticClass:"text-black"},[t._v("Calendar footer")]),t._v(" "+t._s(e.rangeText)+"\n    ")]),t._v(" "),n("div",{staticStyle:{"margin-left":"auto"}},[e.in_selection?t._e():n("a",{staticClass:"btn btn-primary btn-sm",on:{click:e.clickApply}},[t._v("Choose current")])])])}}]),model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})}),[],!1,null,"46002707",null);e.default=r.exports},49:function(t,e,n){}}]);