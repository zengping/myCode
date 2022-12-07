webpackJsonp([1],{Ai58:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-box",staticStyle:{"margin-bottom":"20px",background:"#f4f4f4",padding:"10px"}},[i("div",{staticClass:"form-item"},[t._v("\n    行业类型：\n    "),t._v(" "),i("el-select",{staticStyle:{width:"160px"},on:{change:t.change},model:{value:t.activeHy,callback:function(e){t.activeHy=e},expression:"activeHy"}},t._l(t.hyList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.value}})})),t._v("\n    选择时间：\n    "),t._v(" "),i("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择开始时间"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" - "),i("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择结束时间"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),i("button",{staticClass:"btn",on:{click:t.search}},[i("i",{staticClass:"icon-search"}),t._v("查询")])],1)])},staticRenderFns:[]},n=i("VU/8")({data:function(){return{hyList:[],activeHy:"-1",startTime:"",endTime:""}},created:function(){this.getHy()},methods:{getHy:function(){var t=this;this.$http.get({api:"A_S_P_BIG_INDUSTRY_LIST",params:{},callback:function(e){t.hyList=e}})},change:function(){this.$emit("setHy",this.activeHy)},search:function(){this.$emit("setTime",{startTime:this.startTime,endTime:this.endTime})}}},a,!1,null,null,null).exports,s={props:{activeHy:{type:Number},startTime:{type:String},endTime:{type:String}},data:function(){return{item:[]}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_F_DEFECT_WARNING",params:{industryId:this.activeHy,startTime:this.startTime,endTime:this.endTime},callback:function(e){t.item=e}})}},watch:{activeHy:function(t,e){this.init()},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-6"},[i("div",{staticClass:"panel"},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body",staticStyle:{"min-height":"666px"}},[i("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),i("tbody",t._l(t.item,function(e,a){return i("tr",{key:a,staticClass:"active01"},[i("td",[t._v(t._s(e.scoreNo))]),t._v(" "),i("td",[i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(i){t.$emit("setActive",e)}}},[t._v(t._s(e.name))])]),t._v(" "),i("td",[t._v(t._s(e.score))])])}))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("缺陷产品预警")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",[this._v("预警排名")]),this._v(" "),e("td",[this._v("产品名称")]),this._v(" "),e("td",[this._v("预警值")])])])}]},c=i("VU/8")(s,r,!1,null,null,null).exports,o={props:{activeHy:{type:Number},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_D_MAINTENANCE",params:{industryId:this.activeHy,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.length?document.querySelector("#foundchart_wb").innerHTML="暂无数据":t.draw(e)}})},draw:function(t){var e=this.$echarts.init(document.getElementById("foundchart_wb"),"macarons"),i=[],a=[];t.map(function(t){i.push(t.name),a.push(t.value)});var n={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"1%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",position:"top"}],yAxis:[{type:"category",data:i,axisTick:{alignWithLabel:!0},axisLabel:{formatter:function(t){return t.length>5?t.substring(0,5)+"...":t}}}],series:[{name:"",type:"bar",barWidth:"60%",data:a}]};e.setOption(n)}},watch:{activeHy:function(t,e){this.init()},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("产品维保排行")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"foundchart_wb"}})])])])}]},d=i("VU/8")(o,l,!1,null,null,null).exports,m={props:{activeHy:{type:Number},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_D_UNQUALIFIED",params:{industryId:this.activeHy,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.length?document.querySelector("#foundchart_sg").innerHTML="暂无数据":t.draw(e)}})},draw:function(t){var e=this.$echarts.init(document.getElementById("foundchart_sg"),"macarons"),i=[],a=[];t.map(function(t){i.push(t.name),a.push(t.value)});var n={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"1%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",position:"top"}],yAxis:[{type:"category",data:i,axisTick:{alignWithLabel:!0},axisLabel:{formatter:function(t){return t.length>5?t.substring(0,5)+"...":t}}}],series:[{name:"",type:"bar",barWidth:"60%",data:a}]};e.setOption(n)}},watch:{activeHy:function(t,e){this.init()},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("抽检不合格率排名")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"foundchart_sg"}})])])])}]},u=i("VU/8")(m,h,!1,null,null,null).exports,v={props:{activeHy:{type:Number},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_D_COMPLAINT",params:{industryId:this.activeHy,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.length?document.querySelector("#foundchart_ts").innerHTML="暂无数据":t.draw(e)}})},draw:function(t){var e=this.$echarts.init(document.getElementById("foundchart_ts"),"macarons"),i=[],a=[];t.map(function(t){i.push(t.name),a.push(t.value)});var n={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"1%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:i,axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:20,formatter:function(t){return t.length>5?t.substring(0,5)+"...":t}}}],yAxis:[{type:"value"}],series:[{name:"",type:"bar",barWidth:"60%",data:a}]};e.setOption(n)}},watch:{activeHy:function(t,e){this.init()},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("产品投诉排行")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"foundchart_ts"}})])])])}]},f=i("VU/8")(v,p,!1,null,null,null).exports,_={props:{activeHy:{type:Number},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_D_RECALL",params:{industryId:this.activeHy,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.length?document.querySelector("#foundchart_zh").innerHTML="暂无数据":t.draw(e)}})},draw:function(t){var e=this.$echarts.init(document.getElementById("foundchart_zh"),"macarons"),i=[],a=[];t.map(function(t){i.push(t.name),a.push(t.value)});var n={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"1%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:i,axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:20,formatter:function(t){return t.length>5?t.substring(0,5)+"...":t}}}],yAxis:[{type:"value"}],series:[{name:"",type:"bar",barWidth:"60%",data:a}]};e.setOption(n)}},watch:{activeHy:function(t,e){this.init()},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-3"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("召回排名")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"foundchart_zh"}})])])])}]},b={data:function(){return{activeHy:-1,startTime:"",endTime:""}},components:{F1:n,F2:c,F3:d,F4:u,F5:f,F6:i("VU/8")(_,y,!1,null,null,null).exports},created:function(){},methods:{setActive:function(t){this.$emit("setActive",t)},setHy:function(t){this.activeHy=t},setTime:function(t){this.startTime=t.startTime,this.endTime=t.endTime}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel",staticStyle:{"margin-top":"-10px"}},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body",staticStyle:{height:"900px"}},[i("f1",{on:{setHy:t.setHy,setTime:t.setTime}}),t._v(" "),i("f2",{attrs:{activeHy:t.activeHy,startTime:t.startTime,endTime:t.endTime},on:{setActive:t.setActive}}),t._v(" "),i("f3",{attrs:{activeHy:t.activeHy,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("f4",{attrs:{activeHy:t.activeHy,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("f5",{attrs:{activeHy:t.activeHy,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("f6",{attrs:{activeHy:t.activeHy,startTime:t.startTime,endTime:t.endTime}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading",staticStyle:{"border-top":"none"}},[e("div",{staticClass:"panel-title"})])}]},g=i("VU/8")(b,T,!1,null,null,null).exports,C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-box",staticStyle:{"margin-bottom":"20px",background:"#f4f4f4",padding:"10px"}},[i("div",{staticClass:"form-item"},[t._v("\n    选择时间：\n    "),t._v(" "),i("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择开始时间"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" - "),i("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"请选择结束时间"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}}),t._v(" "),i("button",{staticClass:"btn",on:{click:t.search}},[i("i",{staticClass:"icon-search"}),t._v("查询")])],1)])},staticRenderFns:[]},x=i("VU/8")({data:function(){return{hyList:[],activeHy:-1,startTime:"",endTime:""}},created:function(){},methods:{search:function(){this.$emit("setTime",{startTime:this.startTime,endTime:this.endTime})}}},C,!1,null,null,null).exports,S={props:{activeObj:{type:Object}},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t={indicator:[{name:"维保预警值15分",max:15},{name:"投诉预警值15分",max:15},{name:"执法预警值15分",max:15},{name:"抽检预警值15分",max:15}],data:[Number(this.activeObj.weibaoNo),Number(this.activeObj.tousuNo),Number(this.activeObj.zhifaNo),Number(this.activeObj.choujianNo)]};this.draw(t)},draw:function(t){var e={title:{text:"综合预警值"},radar:{name:{textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:t.indicator},series:[{name:"预警值",type:"radar",data:[{value:t.data,name:"预警"}]}]};this.$echarts.init(document.getElementById("infochart_zhpf"),"macarons").setOption(e)}},watch:{activeObj:{deep:!0,handler:function(t,e){this.init()}}}},w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v(" ")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"infochart_zhpf"}})])])])}]},O=i("VU/8")(S,w,!1,null,null,null).exports,j={props:{activeObj:{type:Object},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_I_MAP",params:{id:this.activeObj.id,startTime:this.startTime,endTime:this.endTime},callback:function(e){t.drawMap(e)}})},drawMap:function(t){var e=this,i=this.$echarts.init(document.getElementById("infochart_wb"),"macarons"),a={},n={},s=[],r=[];t.map(function(t){n[t.name]=t.value}),i.showLoading();var c=this.$echarts.getMap("chongqing").geoJson.features;i.hideLoading(),c.forEach(function(t){var e=t.properties.name;s.push({name:e,code:t.id,value:n[t.id]?n[t.id]:0}),r.push({name:e,value:t.properties.cp}),a[e]=t.properties.cp});var o={tooltip:{trigger:"item",formatter:function(t){return t.name+" 企业总数<br> "+(t.value?t.value:0)+"家 "}},visualMap:{show:!0,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#00467F","#A5CC82"]}},geo:{show:!0,map:"chongqing",label:{normal:{show:!1},emphasis:{show:!1}},zoom:2,roam:!0,itemStyle:{normal:{areaColor:"#CCCCCC",borderColor:"#3B5077"},emphasis:{areaColor:"#F5D529"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data:function(t){for(var e=[],i=0;i<t.length;i++){var n=a[t[i].name];n&&e.push({name:t[i].name,value:n.concat(t[i].value)})}return e}(t),symbolSize:function(t){var e=t[2]/10;return e>20?20:e},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:"chongqing",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},zoom:2,roam:!0,itemStyle:{normal:{areaColor:"#CCCCCC",borderColor:"#3B5077"},emphasis:{areaColor:"#F5D529"}},animation:!1,data:s},{name:"散点",type:"scatter",coordinateSystem:"geo",data:r,symbolSize:1,label:{normal:{formatter:"{b}",position:"center",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}}]};i.setOption(o),i.on("click",function(t){t.data&&t.data.name&&e.$emit("setActiveArea",t.data)})}},watch:{activeObj:{deep:!0,handler:function(t,e){this.init()}},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v(" ")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"infochart_wb"}})])])])}]},E=i("VU/8")(j,$,!1,null,null,null).exports,H={props:{activeObj:{type:Object},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_P_QUANTITATIVE_TRENDS",params:{industryId:-1,productName:this.activeObj.name,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.series.length?document.querySelector("#infochart_dwdjk").innerHTML="暂无数据":t.drawLine(e)}})},drawLine:function(t){t.series.map(function(t){t.type="line"});var e={tooltip:{trigger:"axis"},legend:{data:t.legend},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:t.category},yAxis:{type:"value"},series:t.series};this.$echarts.init(document.getElementById("infochart_dwdjk"),"macarons").setOption(e)}},watch:{activeObj:{deep:!0,handler:function(t,e){this.init()}},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("多维度走势监控")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"infochart_dwdjk"}})])])])}]},N=i("VU/8")(H,k,!1,null,null,null).exports,I={props:{activeObj:{type:Object},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_I_CHECKED",params:{industryId:-1,productName:this.activeObj.name,startTime:this.startTime,endTime:this.endTime},callback:function(e){"0"===e.qualified&&"0"===e.unqualified?document.querySelector("#infochart_cj").innerHTML="暂无数据":t.drawMap(e)}})},drawMap:function(t){var e={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["合格","不合格"]},series:[{name:"抽检情况",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:t}]};this.$echarts.init(document.getElementById("infochart_cj"),"macarons").setOption(e)}},watch:{activeObj:{deep:!0,handler:function(t,e){this.init()}},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},L={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("抽检情况")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"infochart_cj"}})])])])}]},A=i("VU/8")(I,L,!1,null,null,null).exports,M={props:{activeObj:{type:Object},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_P_COMPONENTS_STATISTICS",params:{industryId:-1,productName:this.activeObj.name,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.length?document.querySelector("#infochart_qxbj").innerHTML="暂无数据":t.drawBar(e)}})},drawBar:function(t){var e=[],i=[];t.map(function(t){e.push(t.name),i.push(t.value)});var a={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",top:"1%",bottom:"2%",containLabel:!0},xAxis:[{type:"category",data:e,axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:20,formatter:function(t){return t.length>5?t.substring(0,5)+"...":t}}}],yAxis:[{type:"value"}],series:[{name:"",type:"bar",barWidth:"60%",data:i}]};this.$echarts.init(document.getElementById("infochart_qxbj"),"macarons").setOption(a)}},watch:{activeObj:{deep:!0,handler:function(t,e){this.init()}},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("缺陷部件统计")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"infochart_qxbj"}})])])])}]},D=i("VU/8")(M,R,!1,null,null,null).exports,F={props:{activeObj:{type:Object},startTime:{type:String},endTime:{type:String}},data:function(){return{}},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_P_PRODUCTS_WORLDCLOUD",params:{industryId:-1,productName:this.activeObj.name,startTime:this.startTime,endTime:this.endTime},callback:function(e){0===e.length?document.querySelector("#infochart_cphx").innerHTML="暂无数据":t.drawBar(e)}})},drawBar:function(t){var e={tooltip:{show:!0,formatter:"{b0}"},series:[{name:"事件画像",type:"wordCloud",size:["80%","80%"],textRotation:[0,45,90,-45],textPadding:0,autoSize:{enable:!0,minSize:14},textStyle:this.createRandomItemStyle(),data:t}]};this.$echarts.init(document.getElementById("infochart_cphx"),"macarons").setOption(e)},createRandomItemStyle:function(){return{normal:{color:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}}}}},watch:{activeObj:{deep:!0,handler:function(t,e){this.init()}},startTime:function(t,e){this.init()},endTime:function(t,e){this.init()}}},B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-4"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("缺陷产品画像")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"infochart_cphx"}})])])])}]},U=i("VU/8")(F,B,!1,null,null,null).exports,P={props:{activeObj:{type:Object}},data:function(){return{hyList:[],activeHy:-1,startTime:"",endTime:""}},components:{I1:x,I2:O,I3:E,I4:N,I5:A,I6:D,I7:U},created:function(){},methods:{setTime:function(t){this.startTime=t.startTime,this.endTime=t.endTime}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel",staticStyle:{"margin-top":"-10px"}},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body",staticStyle:{height:"900px"}},[i("div",{staticClass:"defect-tit"},[t._v("“"+t._s(t.activeObj.name)+"”\n      "),i("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.$emit("back")}}},[t._m(1)])]),t._v(" "),i("i1",{on:{setTime:t.setTime}}),t._v(" "),i("i2",{attrs:{activeObj:t.activeObj}}),t._v(" "),i("i3",{attrs:{activeObj:t.activeObj,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("i4",{attrs:{activeObj:t.activeObj,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("i5",{attrs:{activeObj:t.activeObj,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("i6",{attrs:{activeObj:t.activeObj,startTime:t.startTime,endTime:t.endTime}}),t._v(" "),i("i7",{attrs:{activeObj:t.activeObj,startTime:t.startTime,endTime:t.endTime}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading",staticStyle:{"border-top":"none"}},[e("div",{staticClass:"panel-title"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"panel-sub-title"},[e("i",{staticClass:"icon-reply"}),this._v("返回")])}]};var z=i("VU/8")(P,V,!1,function(t){i("Dyh/")},null,null).exports,q={props:{item:{type:Array}},data:function(){return{}},mounted:function(){},methods:{}},W={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel"},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body",staticStyle:{"min-height":"586px","overflow-y":"scroll",height:"586px"}},[i("div",{staticClass:"newslist"},[i("ul",t._l(t.item,function(e,a){return i("li",{key:a},[i("h3",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v("来源："+t._s(e.source))]),t._v(" "),i("p",[t._v("生产厂商："+t._s(e.manufacturer)+" "),i("span",{staticClass:"badge badge-danger"},[t._v(t._s(e.type))])]),t._v(" "),i("p",[t._v(t._s(e.desc))])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("缺陷库案例智能推荐")])])}]};var G=i("VU/8")(q,W,!1,function(t){i("HojD")},null,null).exports,K={props:{countData:{type:Object},echart:{type:Array}},data:function(){return{}},mounted:function(){this.draw(this.echart)},methods:{draw:function(t){var e=this.dataFormat(t),i={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:e.title},series:[{name:"数量",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:e.data}]};this.$echarts.init(document.getElementById("chart1"),"macarons").setOption(i)},dataFormat:function(t){var e={title:[],data:[]};return t.map(function(t){e.title.push(t.name),e.data.push(t)}),e}},watch:{echart:function(){this.draw(this.echart)}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel"},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"col-6"},[i("table",{staticClass:"table table-striped"},[i("tbody",[i("tr",[i("td",[t._v("相似案例")]),t._v(" "),i("td",[t._v(t._s(t.countData.sameBrand))])]),t._v(" "),i("tr",[i("td",[t._v("相同厂商")]),t._v(" "),i("td",[t._v(t._s(t.countData.sameEnterprise))])]),t._v(" "),i("tr",[i("td",[t._v("相同品牌")]),t._v(" "),i("td",[t._v(t._s(t.countData.sameModel))])])])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("缺陷案例分析")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-6"},[e("div",{staticClass:"chart",staticStyle:{height:"300px"},attrs:{id:"chart1"}})])}]};var Q=i("VU/8")(K,J,!1,function(t){i("O4GL")},null,null).exports,Y={props:{activeObj:{type:Object}},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_P_RISK_RESULT",params:{productName:this.activeObj.name},callback:function(e){0===e.length?document.querySelector("#chart2").innerHTML="暂无数据":t.drawBar(e)}})},drawBar:function(t){var e={tooltip:{show:!0,formatter:"{b0}"},series:[{name:"事件画像",type:"wordCloud",size:["80%","80%"],textRotation:[0,45,90,-45],textPadding:0,autoSize:{enable:!0,minSize:14},textStyle:this.createRandomItemStyle(),data:t}]};this.$echarts.init(document.getElementById("chart2"),"macarons").setOption(e)},createRandomItemStyle:function(){return{normal:{color:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}}}}}},X={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"panel-title"},[this._v("可能导致结果")])]),this._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"chart",attrs:{id:"chart2"}})])])}]};var Z=i("VU/8")(Y,X,!1,function(t){i("xDWb")},null,null).exports,tt={props:{activeObj:{type:Object}},data:function(){return{item:[],echart:[],countData:{}}},components:{R1:G,R2:Q,R3:Z},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get({api:"A_S_P_RISK_LIST",params:{productName:this.activeObj.name},callback:function(e){t.item=e.caseData,t.echart=e.analyData,t.countData=e.countData}})}}},et={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel",staticStyle:{"margin-top":"-10px"}},[t._m(0),t._v(" "),i("div",{staticClass:"panel-body"},[i("div",{staticClass:"defect-tit"},[t._v("“"+t._s(t.activeObj.name)+"”")]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"defect"},[i("div",{staticClass:"defect-right"},[i("div",{staticClass:"col-6"},[i("r1",{attrs:{item:t.item}})],1),t._v(" "),i("div",{staticClass:"col-6"},[i("r2",{attrs:{countData:t.countData,echart:t.echart}})],1),t._v(" "),i("div",{staticClass:"col-6"},[i("r3",{attrs:{activeObj:t.activeObj}})],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading",staticStyle:{"border-top":"none"}},[e("div",{staticClass:"panel-title"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-box",staticStyle:{"margin-bottom":"20px",background:"#f4f4f4",padding:"10px"}},[e("div",{staticClass:"form-item"},[e("ul",{staticClass:"list-time"},[e("li",{staticClass:"active"},[this._v("• 相似缺陷案件风险预判")])])])])}]},it={data:function(){return{flowIsData:1,cmptName:"found",activeObj:{}}},components:{ProductsFound:g,ProductsInfo:z,ProductsRisk:i("VU/8")(tt,et,!1,null,null,null).exports},created:function(){},methods:{setActive:function(t){this.activeObj=t,this.cmptName="info"}}},at={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sys-main sys-main-style"},[i("div",{staticClass:"catechose"},[i("ul",[i("li",[i("a",{class:{active:"found"==t.cmptName},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.cmptName="found"}}},[t._v("缺陷产品发现")])]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:"info"==t.cmptName||"risk"==t.cmptName,expression:"cmptName=='info'||cmptName=='risk'"}]},[i("a",{class:{active:"info"==t.cmptName},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.cmptName="info"}}},[t._v("缺陷产品状况分析")])]),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:"info"==t.cmptName||"risk"==t.cmptName,expression:"cmptName=='info'||cmptName=='risk'"}]},[i("a",{class:{active:"risk"==t.cmptName},attrs:{href:"javascript:void(0)"},on:{click:function(e){t.cmptName="risk"}}},[t._v("潜在风险预判")])])])]),t._v(" "),"found"==t.cmptName?i("products-found",{on:{setActive:t.setActive}}):t._e(),t._v(" "),"info"==t.cmptName?i("products-info",{attrs:{activeObj:t.activeObj},on:{back:function(e){t.cmptName="found"}}}):t._e(),t._v(" "),"risk"==t.cmptName?i("products-risk",{attrs:{activeObj:t.activeObj},on:{back:function(e){t.cmptName="found"}}}):t._e()],1)},staticRenderFns:[]};var nt=i("VU/8")(it,at,!1,function(t){i("upbg")},"data-v-4290ff97",null);e.default=nt.exports},"Dyh/":function(t,e){},HojD:function(t,e){},O4GL:function(t,e){},upbg:function(t,e){},xDWb:function(t,e){}});
//# sourceMappingURL=1.9871f492b0fb6057f668.js.map