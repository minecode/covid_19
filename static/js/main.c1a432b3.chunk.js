(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{26:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(20),c=a.n(s),o=a(4),i=a(5),l=a(6),d=a(7),m=a(9),u=a.n(m),p=a(13),h=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{},isActive:!1},e}return Object(i.a)(a,[{key:"placeData",value:function(){var e=parseInt(this.state.data.total_cases.replace(",","")),t=parseInt(this.state.data.new_cases.replace(",","")),a=parseInt(this.state.data.total_deaths.replace(",","")),r=parseInt(this.state.data.new_deaths.replace(",","")),n=parseInt(this.state.data.total_recovered.replace(",","")),s=document.createElement("h4");s.setAttribute("class","text-info font-weight-bold");var c=document.createTextNode(e);s.append(c);var o=document.createElement("p");o.setAttribute("style","margin-bottom: 0!important");var i=document.createTextNode(t+" new cases");o.setAttribute("class","font-weight-light"),o.appendChild(i),document.getElementById("confirmedN").append(s),document.getElementById("confirmedN").append(o),(s=document.createElement("h4")).setAttribute("class","text-danger font-weight-bold");var l=document.createTextNode(a);s.append(l),(o=document.createElement("p")).setAttribute("style","margin-bottom: 0!important");var d=document.createTextNode(r+" new deaths");o.setAttribute("class","font-weight-light"),o.appendChild(d),document.getElementById("deathsN").append(s),document.getElementById("deathsN").append(o),(s=document.createElement("h4")).setAttribute("class","text-success font-weight-bold");var m=document.createTextNode(n);s.append(m),document.getElementById("recoveredN").append(s),(s=document.createElement("h4")).setAttribute("class","text-warning font-weight-bold");var u=document.createTextNode(e-n-a);s.append(u),document.getElementById("infectedN").append(s)}},{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new Headers).set("x-rapidapi-host","coronavirus-monitor.p.rapidapi.com"),t.set("x-rapidapi-key","f87d8b7daemsh99560a3534f1f1ap14d466jsn01568a97fbdf"),fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(e){a.setState({data:e,isActive:!0}),a.placeData()}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",null,this.state.isActive?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-info shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-1"},"Confirmed"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"confirmedN"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"})))))),n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Infected"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"infectedN"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"})))))),n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-danger shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-danger text-uppercase mb-1"},"Deaths"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"deathsN"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"})))))),n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-success shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Recovered"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"recoveredN"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"}))))))):null)}}]),a}(n.a.Component),f=a(21),v=a(32),b=v.getName,y=v.getCode,g=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={countriesCodesArray:[],countriesNamesArray:[],data:{},data2:{},title:"",titleSet:!1,isActive:!1},e.handleClick=function(e,t){console.log(t)},e.getCountriesNamesList=function(){var t=e.state.countriesCodesArray.map((function(e){return b(e)}));e.setState({countriesNamesArray:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,r,n,s=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new Headers).set("x-rapidapi-host","coronavirus-monitor.p.rapidapi.com"),t.set("x-rapidapi-key","f87d8b7daemsh99560a3534f1f1ap14d466jsn01568a97fbdf"),a=0,r={},n={},fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(e){e.affected_countries.forEach((function(c){fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country="+c,{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){"USA"===c?c="US":"UK"===c?c="GB":"Russia"===c?c="RU":"Iran"===c?c="IR":"Vietnam"===c?c="VN":"S. Korea"===c?c="KR":"Venezuela"===c?c="VE":"Bolivia"===c?c="BO":"Taiwan"===c?c="TW":"UAE"===c?c="AE":"Moldova"===c?c="MD":"Tanzania"===c?c="TZ":"Syria"===c?c="SY":void 0===y(c)&&void 0===b(c)?console.log(c):c=y(c),void 0!==c&&(r[c]=t.latest_stat_by_country[0].total_cases,n[c]={},n[c].total_cases=t.latest_stat_by_country[0].total_cases,n[c].new_cases=t.latest_stat_by_country[0].new_cases,n[c].active_cases=t.latest_stat_by_country[0].active_cases,n[c].total_deaths=t.latest_stat_by_country[0].total_deaths,n[c].new_deaths=t.latest_stat_by_country[0].new_deaths,n[c].total_recovered=t.latest_stat_by_country[0].total_recovered,n[c].serious_critical=t.latest_stat_by_country[0].serious_critical),++a===e.affected_countries.length&&s.setState({data:r,data2:n,isActive:!0})}))}))}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"mapDiv"},this.state.isActive?n.a.createElement(f.VectorMap,{map:"world_mill",backgroundColor:"transparent",zoomOnScroll:!0,containerStyle:{width:"100%",height:"520px"},onRegionClick:this.handleClick,onRegionTipShow:function(t,a,r){if(void 0!==e.state.data2[r]){var n=e.state.data[r],s=e.state.data2[r].new_cases,c=e.state.data2[r].active_cases,o=e.state.data2[r].serious_critical,i=e.state.data2[r].total_deaths,l=e.state.data2[r].new_deaths,d=e.state.data2[r].total_recovered;e.state.data[r]<1&&(n=0),e.state.data2[r].new_cases.length<1&&(s=0),e.state.data2[r].active_cases<1&&(c=0),e.state.data2[r].serious_critical<1&&(o=0),e.state.data2[r].total_deaths<1&&(i=0),e.state.data2[r].new_deaths<1&&(l=0),e.state.data2[r].total_recovered<1&&(d=0),a.html("<b>"+a.html()+"</b></br>Total cases: "+n+" (+"+s+")</br>Active cases: "+c+" (!"+o+")</br>Total deaths: "+i+" (+"+l+")</br>Total recovered: "+d)}},containerClassName:"map",regionStyle:{initial:{fill:"#e4e4e4","fill-opacity":.9,stroke:"none","stroke-width":0,"stroke-opacity":0},hover:{"fill-opacity":.8,cursor:"pointer"},selected:{fill:"#2938bc"},selectedHover:{}},regionsSelectable:!0,series:{regions:[{values:this.state.data,scale:["#48aeef","#2938bc"],normalizeFunction:"polynomial"}]}}):n.a.createElement("div",{className:"loader loader--style3",title:"2"},n.a.createElement("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",style:{"enable-background":"new 0 0 50 50"},xmlSpace:"preserve"},n.a.createElement("path",{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},n.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})))))}}]),a}(n.a.Component),E=a(14),N=a(22),x=a.n(N),w=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={countryOptions:[],countryData:[],series:[{name:"Confirmed",data:[]},{name:"Infected",data:[]},{name:"Deaths",data:[]},{name:"Recovered",data:[]},{name:"New cases",data:[]},{name:"New deaths",data:[]},{name:"Serious critical",data:[]}],options:{chart:{fontFamily:"Helvetica, Arial, sans-serif",type:"area",stacked:!1,height:350,zoom:{enabled:!1}},colors:["#17a2b8","#ffc107","#dc3545","#28a745","#117a8b","#bd2130","#d39e00"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},xaxis:{categories:[]},tooltip:{shared:!0},grid:{show:!1}}},r.drawChartTimeseries=r.drawChartTimeseries.bind(Object(E.a)(r)),r}return Object(i.a)(a,[{key:"drawChartTimeseries",value:function(e){var t=this;this.setState({loading:!0});var a=new Headers;a.set("x-rapidapi-host","coronavirus-monitor.p.rapidapi.com"),a.set("x-rapidapi-key","f87d8b7daemsh99560a3534f1f1ap14d466jsn01568a97fbdf");var r={},n=e.target.value;fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country="+n,{method:"GET",headers:a}).then((function(e){return e.json()})).then((function(e){r[n]={},r[n].series=[{name:"Confirmed",data:[]},{name:"Infected",data:[]},{name:"Deaths",data:[]},{name:"Recovered",data:[]},{name:"New cases",data:[]},{name:"New deaths",data:[]},{name:"Serious critical",data:[]}],r[n].options={chart:{fontFamily:"Helvetica, Arial, sans-serif",type:"area",stacked:!1,height:350,zoom:{enabled:!1}},colors:["#17a2b8","#ffc107","#dc3545","#28a745","#117a8b","#bd2130","#d39e00"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},xaxis:{categories:[]},tooltip:{shared:!0},grid:{show:!1}},r[n].options.xaxis.categories=e.stat_by_country.map((function(e){return new Date(e.record_date).toLocaleDateString()})).filter(t.onlyUnique),"Portugal"===n&&console.log(r[n].options.xaxis.categories),r[n].series[0].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.total_cases.replace(",","")))?0:parseInt(e.total_cases.replace(",",""))}})),"Portugal"===n&&console.log(r[n].series[0].data);var a=Object.values(r[n].series[0].data.reduce((function(e,t){return e[t.date]=t,e}),{}));"Portugal"===n&&console.log(a),r[n].series[0].data=a.map((function(e){return e.number})),"Portugal"===n&&console.log(r[n].series[0].data),r[n].series[1].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.active_cases.replace(",","")))?0:parseInt(e.active_cases.replace(",",""))}})),a=Object.values(r[n].series[1].data.reduce((function(e,t){return e[t.date]=t,e}),{})),r[n].series[1].data=a.map((function(e){return e.number})),r[n].series[2].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.total_deaths.replace(",","")))?0:parseInt(e.total_deaths.replace(",",""))}})),a=Object.values(r[n].series[2].data.reduce((function(e,t){return e[t.date]=t,e}),{})),r[n].series[2].data=a.map((function(e){return e.number})),r[n].series[3].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.total_recovered.replace(",","")))?0:parseInt(e.total_recovered.replace(",",""))}})),a=Object.values(r[n].series[3].data.reduce((function(e,t){return e[t.date]=t,e}),{})),r[n].series[3].data=a.map((function(e){return e.number})),r[n].series[4].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.new_cases.replace(",","")))?0:parseInt(e.new_cases.replace(",",""))}})),a=Object.values(r[n].series[4].data.reduce((function(e,t){return e[t.date]=t,e}),{})),r[n].series[4].data=a.map((function(e){return e.number})),r[n].series[5].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.new_deaths.replace(",","")))?0:parseInt(e.new_deaths.replace(",",""))}})),a=Object.values(r[n].series[5].data.reduce((function(e,t){return e[t.date]=t,e}),{})),r[n].series[5].data=a.map((function(e){return e.number})),r[n].series[6].data=e.stat_by_country.map((function(e){return{date:e.record_date.split(" ")[0],number:isNaN(parseInt(e.serious_critical.replace(",","")))?0:parseInt(e.serious_critical.replace(",",""))}})),a=Object.values(r[n].series[6].data.reduce((function(e,t){return e[t.date]=t,e}),{})),r[n].series[6].data=a.map((function(e){return e.number})),t.setState({series:r[n].series,options:r[n].options,isActive2:!0,loading:!1});var s=t.state.series[0].data[t.state.series[0].data.length-1],c=t.state.series[1].data[t.state.series[1].data.length-1],o=t.state.series[2].data[t.state.series[2].data.length-1],i=t.state.series[3].data[t.state.series[3].data.length-1],l=t.state.series[4].data[t.state.series[4].data.length-1],d=t.state.series[5].data[t.state.series[5].data.length-1],m=t.state.series[6].data[t.state.series[6].data.length-1],u=document.createElement("h4");u.setAttribute("class","text-info font-weight-bold");var p=document.createTextNode(s);u.append(p);var h=document.createElement("p");h.setAttribute("style","margin-bottom: 0!important");var f=document.createTextNode(l+" new cases");h.setAttribute("class","font-weight-light"),h.appendChild(f),document.getElementById("confirmedNCountry").innerHTML="",document.getElementById("confirmedNCountry").append(u),document.getElementById("confirmedNCountry").append(h),(u=document.createElement("h4")).setAttribute("class","text-warning font-weight-bold");var v=document.createTextNode(c);u.append(v),(h=document.createElement("p")).setAttribute("style","margin-bottom: 0!important");var b=document.createTextNode(m+" serious critical");h.setAttribute("class","font-weight-light"),h.appendChild(b),document.getElementById("infectedNCountry").innerHTML="",document.getElementById("infectedNCountry").append(u),document.getElementById("infectedNCountry").append(h),(u=document.createElement("h4")).setAttribute("class","text-danger font-weight-bold");var y=document.createTextNode(o);u.append(y),(h=document.createElement("p")).setAttribute("style","margin-bottom: 0!important");var g=document.createTextNode(d+" new deaths");h.setAttribute("class","font-weight-light"),h.appendChild(g),document.getElementById("deathsNCountry").innerHTML="",document.getElementById("deathsNCountry").append(u),document.getElementById("deathsNCountry").append(h),document.getElementById("recoveredNCountry").innerHTML="",(u=document.createElement("h4")).setAttribute("class","text-success font-weight-bold");var E=document.createTextNode(i);u.append(E),document.getElementById("recoveredNCountry").append(u)}))}},{key:"onlyUnique",value:function(e,t,a){return a.indexOf(e)===t}},{key:"setCountryOptions",value:function(){this.state.countryOptions.forEach((function(e){var t=document.createElement("option");t.setAttribute("value",e);var a=document.createTextNode(e);t.append(a),document.getElementById("dropdownCountry").append(t)}))}},{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new Headers).set("x-rapidapi-host","coronavirus-monitor.p.rapidapi.com"),t.set("x-rapidapi-key","f87d8b7daemsh99560a3534f1f1ap14d466jsn01568a97fbdf"),fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(e){a.setState({countryOptions:e.affected_countries,isActive1:!0}),a.setCountryOptions()}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement("div",{id:"mapDiv"},n.a.createElement("div",{className:"card mb-4"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-info shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-1"},"Confirmed"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"confirmedNCountry"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"})))))),n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Infected"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"infectedNCountry"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"})))))),n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-danger shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-danger text-uppercase mb-1"},"Deaths"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"deathsNCountry"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"})))))),n.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},n.a.createElement("div",{className:"card border-left-success shadow h-100 py-2"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row no-gutters align-items-center"},n.a.createElement("div",{className:"col mr-2"},n.a.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Recovered"),n.a.createElement("div",{className:"mb-0 font-weight-bold text-gray-800",id:"recoveredNCountry"})),n.a.createElement("div",{className:"col-auto"},n.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"}))))))),n.a.createElement("div",{className:"form-group"},this.state.isActive1?n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"dropdownCountry"},"Select list:"),n.a.createElement("select",{className:"form-control",id:"dropdownCountry",onChange:this.drawChartTimeseries})):n.a.createElement("div",{className:"loader loader--style3",title:"2"},n.a.createElement("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",style:{"enable-background":"new 0 0 50 50"},xmlSpace:"preserve"},n.a.createElement("path",{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},n.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})))),this.state.isActive2?n.a.createElement("div",null,n.a.createElement("div",{id:"chart"},n.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"area",height:350}))):this.state.loading?n.a.createElement("div",{className:"loader loader--style3",title:"2"},n.a.createElement("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",style:{"enable-background":"new 0 0 50 50"},xmlSpace:"preserve"},n.a.createElement("path",{fill:"#000",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"},n.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})))):null))))}}]),a}(n.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center",id:"posts"},n.a.createElement("h1",{className:"display-4"},"Dashboard"),n.a.createElement("p",null,"Info live")),n.a.createElement("div",{className:"m-5 text-center"},n.a.createElement(h,null)),n.a.createElement("div",{className:"m-5 text-center align-items-center"},n.a.createElement(g,null)),n.a.createElement("div",{className:"m-5 text-center align-items-center"},n.a.createElement(w,null)))}}]),a}(n.a.Component),C=a(23),k=a(10),I=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(C.a,{basename:"/covid_19"},n.a.createElement("div",null,n.a.createElement("main",null,n.a.createElement(k.c,null,n.a.createElement(k.a,{exact:!0,path:"/",component:_})))))}}]),a}(n.a.Component);a(40);c.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("/covid_19","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[26,1,2]]]);
//# sourceMappingURL=main.c1a432b3.chunk.js.map