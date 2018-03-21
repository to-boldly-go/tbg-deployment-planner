webpackJsonp([1],{"7MbQ":function(t,e){},"8qz8":function(t,e){},C3Mc:function(t,e){},CdAP:function(t,e){},Ewze:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),i=s.n(a),r=s("woOf"),n=s.n(r),c=s("fZjL"),o=s.n(c),l=s("bOdI"),u=s.n(l),h=s("Dd8w"),p=s.n(h),d=s("7+uW"),v={name:"Ship",props:["registry","name","shipClass","prefix","scale","classStats","veterancy","bonusStats","mobile"],computed:{imgUrl:function(){return"/static/"+this.shipClass.toLowerCase()+".png"},filterShow:function(){return this.$store.state.filterCategories.shipClass[this.shipClass]&&this.$store.state.filterCategories.scale[this.scale]},stats:function(){var t=this;return this.classStats.map(function(e,s){return e+t.bonusStats[s]+t.veterancy*t.vetStats[s]})},shipObj:function(){return{registry:this.registry,name:this.name,shipClass:this.shipClass,prefix:this.prefix,scale:this.scale,classStats:this.classStats,veterancy:this.veterancy,bonusStats:this.bonusStats}},displayClassName:function(){var t=this.shipClass.split("-");return 1===t.length?"<em>"+t[0]+"</em>":"<em>"+t[0]+"</em>-"+t[1]}},data:function(){return{statOrder:["C","S","H","L","P","D"],vetStats:[1,1,1,1,1,0]}},methods:{editShip:function(){this.$store.commit("setEditTargetParent",this.$parent.$attrs.id),this.$store.commit("updateNewShipAllFields",this.shipObj),this.$store.commit("updateShowEditShip",!0)},displayMoreInfo:function(){this.$store.commit("updateNewShipAllFields",this.shipObj),this.$store.commit("updateShowShipInfo",!0)},unassignShip:function(t){var e=this;if("available-ships"!==this.$parent.$attrs.id){var s=Number(this.$parent.$attrs.id.split("-").pop()),a=this.$store.getters.sectors[s].ships.filter(function(t){return t.registry!==e.registry});this.$store.commit("updateSector",{sectorIndex:s,shipList:a}),this.$store.commit("updateAvailAppend",this.shipObj)}}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"ship "+t.scale+" vis-"+t.filterShow,attrs:{id:"ncc-"+t.registry},on:{dblclick:t.unassignShip}},[s("div",{staticClass:"ship-data"},[s("p",{staticClass:"ship-data-item"},[t._v(t._s(t.prefix)+" "),s("em",[t._v(t._s(t.name))])]),t._v(" "),s("p",{staticClass:"ship-data-item",domProps:{innerHTML:t._s(t.displayClassName)}}),t._v(" "),s("p",{staticClass:"ship-data-item"},t._l(t.statOrder,function(e,a){return s("span",{key:e,class:"stat-"+e},[t._v(t._s(e)+t._s(t.stats[a])+" ")])}))]),t._v(" "),s("div",{staticClass:"ship-operations"},[s("span",{staticClass:"icon info-icon",on:{click:t.displayMoreInfo}},[t._v("ⓘ")]),t._v(" "),s("span",{staticClass:"icon edit-icon",on:{click:t.editShip}},[t._v("✎")])])])},staticRenderFns:[]};var S=s("VU/8")(v,m,!1,function(t){s("8qz8")},"data-v-c59caaec",null).exports,f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:"filter-selector filter-"+t.filterValue},[s("label",{attrs:{for:t.filterId}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{type:"checkbox",id:t.filterId},domProps:{value:t.criterion,checked:Array.isArray(t.filterValue)?t._i(t.filterValue,t.criterion)>-1:t.filterValue},on:{change:function(e){var s=t.filterValue,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t.criterion,n=t._i(s,r);a.checked?n<0&&(t.filterValue=s.concat([r])):n>-1&&(t.filterValue=s.slice(0,n).concat(s.slice(n+1)))}else t.filterValue=i}}}),t._v(t._s(t.criterion))])])},staticRenderFns:[]};var g=s("VU/8")({name:"FilterBox",props:["category","criterion"],data:function(){return{filterId:"filter-"+this.category+"-"+this.criterion}},computed:{categoryKey:function(){return"class"===this.category?"shipClass":this.category},filterValue:{get:function(){return this.$store.state.filterCategories[this.categoryKey][this.criterion]},set:function(t){this.$store.commit("updateFilter",{category:this.categoryKey,criterion:this.criterion,value:t})}}}},f,!1,function(t){s("jgld")},"data-v-26a6a619",null).exports,_=s("DAYN"),C=s.n(_),w=s("b7pS"),b=s.n(w),y={name:"Unassigned",components:{Ship:S,FilterBox:g,draggable:C.a},data:function(){return{shipClasses:b.a.shipClasses.map(function(t){return t.name}),shipScales:["frigate","cruiser","explorer"],classFilterShow:!1,scaleFilterShow:!1,classAllSelected:!0,scaleAllSelected:!0}},computed:{availableShips:{get:function(){return this.$store.getters.ships},set:function(t){this.$store.commit("updateAvail",t)}},classAll:function(){return this.classAllSelected?"none":"all"},scaleAll:function(){return this.scaleAllSelected?"none":"all"}},methods:{selectAllClasses:function(){this.classAllSelected=!this.classAllSelected,this.$store.commit("updateFilterAll",{category:"shipClass",value:this.classAllSelected})},selectAllScales:function(){this.scaleAllSelected=!this.scaleAllSelected,this.$store.commit("updateFilterAll",{category:"scale",value:this.scaleAllSelected})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"nav-left-wrapper"}},[s("h2",[t._v("Filter Criteria")]),t._v(" "),s("label",{attrs:{for:"show-class-filter"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.classFilterShow,expression:"classFilterShow"}],attrs:{type:"checkbox",id:"show-class-filter"},domProps:{checked:Array.isArray(t.classFilterShow)?t._i(t.classFilterShow,null)>-1:t.classFilterShow},on:{change:function(e){var s=t.classFilterShow,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.classFilterShow=s.concat([null])):r>-1&&(t.classFilterShow=s.slice(0,r).concat(s.slice(r+1)))}else t.classFilterShow=i}}}),t._v("Filter by Class")]),t._v(" "),s("div",{class:"filter-wrapper filter-show-"+t.classFilterShow,attrs:{id:"filter-wrapper-class"}},[s("button",{staticClass:"allnone",on:{click:t.selectAllClasses}},[t._v("Select "+t._s(t.classAll))]),t._v(" "),t._l(t.shipClasses,function(t){return s("FilterBox",{key:t,attrs:{category:"class",criterion:t}})})],2),t._v(" "),s("label",{attrs:{for:"show-scale-filter"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.scaleFilterShow,expression:"scaleFilterShow"}],attrs:{type:"checkbox",id:"show-scale-filter"},domProps:{checked:Array.isArray(t.scaleFilterShow)?t._i(t.scaleFilterShow,null)>-1:t.scaleFilterShow},on:{change:function(e){var s=t.scaleFilterShow,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=t._i(s,null);a.checked?r<0&&(t.scaleFilterShow=s.concat([null])):r>-1&&(t.scaleFilterShow=s.slice(0,r).concat(s.slice(r+1)))}else t.scaleFilterShow=i}}}),t._v("Filter by Scale")]),t._v(" "),s("div",{class:"filter-wrapper filter-show-"+t.scaleFilterShow,attrs:{id:"filter-wrapper-scale"}},[s("button",{staticClass:"allnone",on:{click:t.selectAllScales}},[t._v("Select "+t._s(t.scaleAll))]),t._v(" "),t._l(t.shipScales,function(t){return s("FilterBox",{key:t,attrs:{category:"scale",criterion:t}})})],2),t._v(" "),s("h2",[t._v("Available Starships")]),t._v(" "),s("div",{attrs:{id:"unassigned-wrapper"}},[s("draggable",{attrs:{id:"available-ships",options:{group:"ships"}},model:{value:t.availableShips,callback:function(e){t.availableShips=e},expression:"availableShips"}},t._l(t.availableShips,function(e){return s("Ship",t._b({key:e.registry},"Ship",e,!1))}))],1)])},staticRenderFns:[]};var A=s("VU/8")(y,x,!1,function(t){s("Ewze")},"data-v-f3092472",null).exports,k={name:"Sector",props:["name","def","index"],components:{Ship:S,draggable:C.a},data:function(){return{sectorShow:!0}},computed:{sectorDef:function(){return this.sectorShips.reduce(function(t,e){return t+e.classStats[5]+e.bonusStats[5]},0)},sectorSci:function(){return this.sectorShips.reduce(function(t,e){return t+e.classStats[1]+e.veterancy+e.bonusStats[1]},0)},sectorPre:function(){return this.sectorShips.reduce(function(t,e){return t+e.classStats[4]+e.veterancy+e.bonusStats[4]},0)},sectorShips:{get:function(){return this.$store.getters.sectors[this.index].ships},set:function(t){this.$store.commit("updateSector",{sectorIndex:this.index,shipList:t})}},toggleIcon:function(){return this.sectorShow?"▼":"▶"}},methods:{onMove:function(t){return t.draggedContext.element.mobile},onUpdate:function(){this.$store.commit("sortSector",this.index)},toggleShow:function(){this.sectorShow=!this.sectorShow}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sector",attrs:{id:"sector-"+t.name}},[s("div",{staticClass:"sector-header"},[s("span",{staticClass:"sector-name",on:{click:t.toggleShow}},[t._v(t._s(t.toggleIcon)+" "+t._s(t.name))]),t._v(" "),s("span",{staticClass:"sector-info"},[t._v("D"+t._s(t.sectorDef)+"/"+t._s(t.def))]),t._v(" "),s("span",{staticClass:"sector-info"},[t._v("S"+t._s(t.sectorSci))]),t._v(" "),s("span",{staticClass:"sector-info"},[t._v("P"+t._s(t.sectorPre))])]),t._v(" "),s("div",{class:"sector-drag-wrapper sector-show-"+t.sectorShow},[s("draggable",{staticClass:"sector-drag",attrs:{id:"s-drag-"+t.index,options:{group:"ships"},move:t.onMove},on:{change:t.onUpdate},model:{value:t.sectorShips,callback:function(e){t.sectorShips=e},expression:"sectorShips"}},t._l(t.sectorShips,function(e){return s("Ship",t._b({key:e.registry},"Ship",e,!1))}))],1)])},staticRenderFns:[]};var N={name:"Planner",components:{Ship:S,Unassigned:A,Sector:s("VU/8")(k,$,!1,function(t){s("CdAP")},"data-v-5f0b7a6c",null).exports,draggable:C.a},data:function(){return{sectors:this.$store.getters.sectors}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"planner"}},[s("Unassigned"),t._v(" "),s("div",{attrs:{id:"sectors-wrapper"}},t._l(t.sectors,function(e,a){return s("Sector",t._b({key:e.name,attrs:{index:a,id:e.name}},"Sector",e,!1))}))],1)},staticRenderFns:[]};var T=s("VU/8")(N,F,!1,function(t){s("C3Mc")},null,null).exports,E={name:"SaveLoad",data:function(){return{saveMessage:"Save",loadMessage:"Load"}},methods:{saveState:function(){var t=this,e={timeline:this.$store.state.timeline,currentTick:this.$store.state.currentTick};localStorage.setItem("deployment",i()(e)),this.saveMessage="Saved!",setTimeout(function(){t.saveMessage="Save"},1e3)},loadState:function(){var t=this;this.$store.commit("restoreSave",JSON.parse(localStorage.getItem("deployment"))),this.loadMessage="Loaded!",setTimeout(function(){t.loadMessage="Load"},1e3)},changeTick:function(t){this.$store.commit("changeTick",t)},copyForwards:function(){this.$store.commit("copyForwards")}},computed:{showAddShipModal:{get:function(){return this.$store.state.showAddShip},set:function(t){this.$store.commit("updateShowAddShip",t)}},dateLabel:{get:function(){return this.$store.getters.dateLabel},set:function(t){this.$store.commit("setDateLabel",t)}}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"saveload"}},[s("button",{staticClass:"storage-button",on:{click:t.saveState}},[t._v(t._s(t.saveMessage))]),t._v(" "),s("button",{staticClass:"storage-button",on:{click:t.loadState}},[t._v(t._s(t.loadMessage))]),t._v(" "),s("button",{staticClass:"storage-button",on:{click:function(e){t.showAddShipModal=!0}}},[t._v("Add Ship")]),t._v(" "),s("div",{staticClass:"timeline"},[s("button",{staticClass:"timeline-button",attrs:{title:"Previous tick"},on:{click:function(){return t.changeTick(-1)}}},[t._v("◄")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dateLabel,expression:"dateLabel"}],attrs:{spellcheck:"false",placeholder:"Current Date"},domProps:{value:t.dateLabel},on:{input:function(e){e.target.composing||(t.dateLabel=e.target.value)}}}),t._v(" "),s("button",{staticClass:"timeline-button",attrs:{title:"Copy state forwards"},on:{click:function(){return t.copyForwards()}}},[t._v("↷")]),t._v(" "),s("button",{staticClass:"timeline-button",attrs:{title:"Next tick"},on:{click:function(){return t.changeTick(1)}}},[t._v("►")])])])},staticRenderFns:[]};var P=s("VU/8")(E,M,!1,function(t){s("hW9Y")},"data-v-a69ade8c",null).exports,O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stat-changer"},[s("table",{staticClass:"stat-table"},[s("tr",{staticClass:"stat-name-row"},[s("th"),t._v(" "),t._l(t.statOrder,function(e){return s("th",{key:"stat-name-"+e},[t._v("\n        "+t._s(e)+"\n      ")])})],2),t._v(" "),s("tr",{staticClass:"up-row"},[s("th",[t._v("Base stats")]),t._v(" "),t._l(t.classStats,function(e,a){return s("td",{key:"base-"+t.statOrder[a]},[t._v("\n        "+t._s(e)+"\n      ")])})],2),t._v(" "),s("tr",{staticClass:"up-row"},[s("th",[t._v("Veterancy stats")]),t._v(" "),t._l(t.vetStats,function(e,a){return s("td",{key:"vet-"+t.statOrder[a]},[t._v("\n        "+t._s(e*t.veterancy)+"\n      ")])})],2),t._v(" "),s("tr",{staticClass:"up-row"},[s("th"),t._v(" "),t._l(t.statOrder,function(e,a){return s("td",{key:"up-"+e,on:{click:function(){t.bStatChange(a,1)}}},[t._v("\n        ▲\n      ")])})],2),t._v(" "),s("tr",{staticClass:"stat-row"},[s("th",[t._v("Bonus stats")]),t._v(" "),t._l(t.bonusStats,function(e,a){return s("td",{key:"bonus-"+t.statOrder[a]},[t._v("\n        "+t._s(e)+"\n      ")])})],2),t._v(" "),s("tr",{staticClass:"down-row"},[s("th"),t._v(" "),t._l(t.statOrder,function(e,a){return s("td",{key:"down-"+e,on:{click:function(){t.bStatChange(a,-1)}}},[t._v("\n        ▼\n      ")])})],2),t._v(" "),s("tr",{staticClass:"down-row"},[s("th",[t._v("Total stats")]),t._v(" "),t._l(t.stats,function(e,a){return s("td",{key:"stat-"+t.statOrder[a]},[t._v("\n        "+t._s(e)+"\n      ")])})],2)])])},staticRenderFns:[]};var V=s("VU/8")({name:"StatChanger",data:function(){return{vetStats:[1,1,1,1,1,0],statOrder:["C","S","H","L","P","D"]}},computed:{stats:function(){var t=this;return this.classStats.map(function(e,s){return e+t.bonusStats[s]+t.veterancy*t.vetStats[s]})},bonusStats:{get:function(){return this.$store.state.newShip.bonusStats},set:function(t){this.$store.commit("updateNewShipField",{field:"bonusStats",value:t})}},veterancy:function(){return this.$store.state.newShip.veterancy},classStats:function(){return this.$store.state.newShip.classStats}},methods:{bStatChange:function(t,e){this.bonusStats.splice(t,1,this.bonusStats[t]+e)}}},O,!1,function(t){s("gvaY")},"data-v-5db1639c",null).exports,I={name:"AddShip",components:{StatChanger:V},data:function(){return{addMessage:"Add Ship",prefixes:b.a.prefixes,shipClasses:b.a.shipClasses,veterancies:b.a.veterancies}},methods:{commitNewShip:function(){var t=this;this.currentShipName.length*this.currentShipRegistry.length*this.currentShipClass.length&&(this.$store.commit("createNewShip"),this.addMessage="Added",this.$store.commit("updateShowAddShip",!0),setTimeout(function(){t.addMessage="Add Ship"},1e3))}},computed:{showAddShipModal:{get:function(){return this.$store.state.addShipShow},set:function(t){this.$store.commit("updateShowAddShip",t)}},currentShipPrefix:{get:function(){return this.$store.state.newShip.prefix},set:function(t){this.$store.commit("updateNewShipField",{field:"prefix",value:t})}},currentShipName:{get:function(){return this.$store.state.newShip.name},set:function(t){this.$store.commit("updateNewShipField",{field:"name",value:t})}},currentShipRegistry:{get:function(){return this.$store.state.newShip.registry},set:function(t){this.$store.commit("updateNewShipField",{field:"registry",value:t})}},currentShipClass:{get:function(){return this.$store.state.newShip.shipClass},set:function(t){this.$store.commit("updateNewShipField",{field:"shipClass",value:t}),this.$store.commit("updateNewShipField",{field:"classStats",value:this.currentShipClassObject.stats})}},currentShipClassStats:function(){return this.$store.state.newShip.classStats},currentShipVet:{get:function(){return this.$store.state.newShip.veterancy},set:function(t){this.$store.commit("updateNewShipField",{field:"veterancy",value:t})}},currentShipClassObject:function(){var t=this,e=this.shipClasses.find(function(e){return e.name===t.currentShipClass});return void 0===e?{stats:[0,0,0,0,0,0]}:(this.$store.commit("updateNewShipField",{field:"scale",value:e.scale}),e)}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"lcars-bar lcars-bar-left"}),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-main"},[t._v("Add New Starship")]),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-right"})]),t._v(" "),s("div",{staticClass:"modal-body"},[s("ul",{staticClass:"add-ship-fields"},[s("li",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentShipPrefix,expression:"currentShipPrefix"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentShipPrefix=e.target.multiple?s:s[0]}}},t._l(t.prefixes,function(e){return s("option",{key:e},[t._v(t._s(e))])})),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentShipName,expression:"currentShipName"}],attrs:{placeholder:"Starship name"},domProps:{value:t.currentShipName},on:{input:function(e){e.target.composing||(t.currentShipName=e.target.value)}}}),t._v(" "),s("span",[t._v("NCC-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentShipRegistry,expression:"currentShipRegistry"}],staticClass:"registry-input",attrs:{placeholder:"Registry"},domProps:{value:t.currentShipRegistry},on:{input:function(e){e.target.composing||(t.currentShipRegistry=e.target.value)}}})]),t._v(" "),s("li",[s("span",[t._v("Ship Class: ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentShipClass,expression:"currentShipClass"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentShipClass=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Select starship class")]),t._v(" "),t._l(t.shipClasses,function(e){return s("option",{key:e.name},[t._v(t._s(e.name))])})],2)]),t._v(" "),s("li",[s("span",[t._v("Veterancy: ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentShipVet,expression:"currentShipVet"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentShipVet=e.target.multiple?s:s[0]}}},t._l(t.veterancies,function(e,a){return s("option",{key:e,domProps:{value:a}},[t._v(t._s(e))])}))]),t._v(" "),s("li",[s("StatChanger",{attrs:{classStats:t.currentShipClassObject.stats,veterancy:t.veterancies.indexOf(t.currentShipVet)}})],1)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"modal-default-button",on:{click:function(e){t.showAddShipModal=!1}}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"modal-default-button",on:{click:t.commitNewShip}},[t._v(t._s(t.addMessage))])])])])])])},staticRenderFns:[]};var R={name:"EditShip",components:{StatChanger:V},props:["target"],data:function(){return{saveMessage:"Save",prefixes:b.a.prefixes,shipClasses:b.a.shipClasses,veterancies:b.a.veterancies}},methods:{commitChanges:function(){var t=this;this.currentShipName.length*this.currentShipRegistry.length*this.currentShipClass.length&&(this.$store.commit("commitShipChanges"),this.saveMessage="Saved",setTimeout(function(){t.saveMessage="Save"},1e3))}},computed:{showEditShipModal:{get:function(){return this.$store.state.showEditShip},set:function(t){this.$store.commit("updateShowEditShip",t)}},currentShipPrefix:{get:function(){return this.$store.state.newShip.prefix},set:function(t){this.$store.commit("updateNewShipField",{field:"prefix",value:t})}},currentShipName:{get:function(){return this.$store.state.newShip.name},set:function(t){this.$store.commit("updateNewShipField",{field:"name",value:t})}},currentShipRegistry:{get:function(){return this.$store.state.newShip.registry},set:function(t){this.$store.commit("updateNewShipField",{field:"registry",value:t})}},currentShipClass:{get:function(){return this.$store.state.newShip.shipClass},set:function(t){this.$store.commit("updateNewShipField",{field:"shipClass",value:t}),this.$store.commit("updateNewShipField",{field:"classStats",value:this.currentShipClassObject.stats})}},currentShipClassStats:function(){return this.$store.state.newShip.classStats},currentShipVet:{get:function(){return this.$store.state.newShip.veterancy},set:function(t){this.$store.commit("updateNewShipField",{field:"veterancy",value:t})}},currentShipClassObject:function(){var t=this,e=this.shipClasses.find(function(e){return e.name===t.currentShipClass});return void 0===e?{stats:[0,0,0,0,0,0]}:(this.$store.commit("updateNewShipField",{field:"scale",value:e.scale}),e)}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"lcars-bar lcars-bar-left"}),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-main"},[t._v("Edit Starship")]),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-right"})]),t._v(" "),s("div",{staticClass:"modal-body"},[s("ul",{staticClass:"add-ship-fields"},[s("li",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentShipPrefix,expression:"currentShipPrefix"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentShipPrefix=e.target.multiple?s:s[0]}}},t._l(t.prefixes,function(e){return s("option",{key:e},[t._v(t._s(e))])})),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentShipName,expression:"currentShipName"}],attrs:{placeholder:"Starship name"},domProps:{value:t.currentShipName},on:{input:function(e){e.target.composing||(t.currentShipName=e.target.value)}}}),t._v(" "),s("span",[t._v("NCC-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentShipRegistry,expression:"currentShipRegistry"}],staticClass:"registry-input",attrs:{placeholder:"Registry"},domProps:{value:t.currentShipRegistry},on:{input:function(e){e.target.composing||(t.currentShipRegistry=e.target.value)}}})]),t._v(" "),s("li",[s("span",[t._v("Ship Class: ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentShipClass,expression:"currentShipClass"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentShipClass=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Select starship class")]),t._v(" "),t._l(t.shipClasses,function(e){return s("option",{key:e.name},[t._v(t._s(e.name))])})],2)]),t._v(" "),s("li",[s("span",[t._v("Veterancy: ")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.currentShipVet,expression:"currentShipVet"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.currentShipVet=e.target.multiple?s:s[0]}}},t._l(t.veterancies,function(e,a){return s("option",{key:e,domProps:{value:a}},[t._v(t._s(e))])}))]),t._v(" "),s("li",[s("StatChanger",{attrs:{classStats:t.currentShipClassObject.stats,veterancy:t.veterancies.indexOf(t.currentShipVet)}})],1)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"modal-default-button",on:{click:function(e){t.showEditShipModal=!1}}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"modal-default-button",on:{click:t.commitChanges}},[t._v(t._s(t.saveMessage))])])])])])])},staticRenderFns:[]};var j={name:"ShipInfo",data:function(){return{statOrder:["C","S","H","L","P","D"],veterancies:b.a.veterancies,vetStats:[1,1,1,1,1,0]}},computed:{showShipInfoModal:{get:function(){return this.$store.state.showShipInfo},set:function(t){this.$store.commit("updateShowShipInfo",t)}},currentShip:function(){return this.$store.state.newShip},displayShipName:function(){return"station"===this.currentShip.scale?this.currentShip.name:this.currentShip.prefix+" <em>"+this.currentShip.name+"</em>, NCC-"+this.currentShip.registry},displayClassName:function(){if("station"===this.currentShip.scale)return this.currentShip.shipClass;var t=this.currentShip.shipClass.split("-");return(1===t.length?"<em>"+t[0]+"</em>":"<em>"+t[0]+"</em>-"+t[1])+"-class "+this.currentShip.scale},shipStats:function(){var t=this;return this.currentShip.classStats.map(function(e,s){return e+t.currentShip.bonusStats[s]+t.currentShip.veterancy*t.vetStats[s]})},veterancy:function(){return this.currentShip.veterancy?"("+this.veterancies[this.currentShip.veterancy]+")":""}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"lcars-bar lcars-bar-left"}),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-name"},[t._v(t._s(t.currentShip.prefix)+" "+t._s(t.currentShip.name))]),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-reg"},[t._v("NCC-"+t._s(t.currentShip.registry))]),t._v(" "),s("div",{staticClass:"lcars-bar lcars-bar-right"})]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"ship-data"},[s("div",{staticClass:"image-placeholder"},[t._v("[Image here]")]),t._v(" "),s("table",{staticClass:"stat-table"},[s("tr",{staticClass:"stat-name-row"},t._l(t.statOrder,function(e){return s("th",{key:"stat-name-"+e},[t._v("\n                  "+t._s(e)+"\n                ")])})),t._v(" "),s("tr",{staticClass:"stat-row"},t._l(t.shipStats,function(e,a){return s("td",{key:"stat-"+t.statOrder[a]},[t._v("\n                  "+t._s(e)+"\n                ")])}))]),t._v(" "),s("p",{staticClass:"ship-data-item"},[t._v(t._s(t.veterancy))])]),t._v(" "),s("div",{staticClass:"ship-data"},[s("p",{staticClass:"ship-data-item",domProps:{innerHTML:t._s(t.displayClassName)}}),t._v(" "),s("p",{staticClass:"ship-data-item"},[t._v("Launched: [LAUNCH DATE]")]),t._v(" "),s("p",{staticClass:"ship-data-item"},[t._v("Captain: [CAPTAIN]")]),t._v(" "),s("p",{staticClass:"ship-data-item"},[t._v("Assignment: [SECTOR]")]),t._v(" "),s("p",{staticClass:"ship-data-item"},[t._v("Status: Active/Under Refit etc.")])])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"modal-default-button",on:{click:function(e){t.showShipInfoModal=!1}}},[t._v("Close")])])])])])])},staticRenderFns:[]};var B={name:"app",components:{Planner:T,SaveLoad:P,AddShip:s("VU/8")(I,L,!1,function(t){s("dO1C")},"data-v-10ed8a54",null).exports,EditShip:s("VU/8")(R,U,!1,function(t){s("VzBc")},"data-v-08767aeb",null).exports,ShipInfo:s("VU/8")(j,D,!1,function(t){s("ca0x")},"data-v-82ec9c48",null).exports},computed:{showAddShipModal:{get:function(){return this.$store.state.showAddShip},set:function(t){this.$store.commit("updateShowAddShip",t)}},showEditShipModal:{get:function(){return this.$store.state.showEditShip},set:function(t){this.$store.commit("updateShowEditShip",t)}},showShipInfoModal:{get:function(){return this.$store.state.showShipInfo},set:function(t){this.$store.commit("updateShowShipInfo",t)}}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.showAddShipModal?s("AddShip"):t._e(),t._v(" "),t.showEditShipModal?s("EditShip"):t._e(),t._v(" "),t.showShipInfoModal?s("ShipInfo"):t._e(),t._v(" "),s("SaveLoad"),t._v(" "),s("Planner")],1)},staticRenderFns:[]};var Y=s("VU/8")(B,H,!1,function(t){s("7MbQ")},null,null).exports,z=s("NYxO"),K=s("QYdO"),Q=s.n(K);d.a.config.productionTip=!1,d.a.use(z.a);var J=new z.a.Store({state:{timeline:Q.a.timeline,currentTick:0,showAddShip:!1,showEditShip:!1,showShipInfo:!1,editTargetParent:"",newShip:{registry:"",name:"",shipClass:"",prefix:"USS",scale:"",classStats:[0,0,0,0,0,0],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!0},filterCategories:{shipClass:b.a.shipClasses.reduce(function(t,e){return p()({},t,u()({},e.name,!0))},{}),scale:{frigate:!0,cruiser:!0,explorer:!0},minDef:0}},getters:{ships:function(t){return t.timeline[t.currentTick].ships},sectors:function(t){return t.timeline[t.currentTick].sectors},dateLabel:function(t){return t.timeline[t.currentTick].dateLabel}},mutations:{restoreSave:function(t,e){t.timeline=e.timeline,t.currentTick=e.currentTick},updateAvail:function(t,e){t.timeline[t.currentTick].ships=e},updateSector:function(t,e){var s=e.sectorIndex,a=e.shipList;t.timeline[t.currentTick].sectors[s].ships=a},updateAvailAppend:function(t,e){t.timeline[t.currentTick].ships.push(e)},updateFilter:function(t,e){var s=e.category,a=e.criterion,i=e.value;t.filterCategories[s][a]=i},updateFilterAll:function(t,e){var s=e.category,a=e.value;o()(t.filterCategories[s]).forEach(function(e){t.filterCategories[s][e]=a})},sortSector:function(t,e){this.state.timeline[t.currentTick].sectors[0].ships.sort(function(t,e){return"station"===t.scale?-1:"station"===e.scale?1:0})},updateShowAddShip:function(t,e){!0===e&&(t.newShip={registry:"",name:"",shipClass:"",prefix:"USS",scale:"",classStats:[0,0,0,0,0,0],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!0}),t.showAddShip=e},updateShowEditShip:function(t,e){t.showEditShip=e},updateNewShipField:function(t,e){var s=e.field,a=e.value;t.newShip[s]=a},updateNewShipAllFields:function(t,e){n()(t.newShip,e)},createNewShip:function(t){t.timeline[t.currentTick].ships.push(n()({},t.newShip))},commitShipChanges:function(t){var e,s=void 0;e=(s="available-ships"===t.editTargetParent?t.timeline[t.currentTick].ships:t.timeline[t.currentTick].sectors[Number(this.editTargetParent.split("-").pop())].ships).map(function(t){return t.registry}).indexOf(t.newShip.registry),n()(s[e],t.newShip),t.showEditShip=!1,t.newShip={registry:"",name:"",shipClass:"",prefix:"USS",scale:"",classStats:[0,0,0,0,0,0],veterancy:0,bonusStats:[0,0,0,0,0,0]}},setEditTargetParent:function(t,e){t.editTargetParent=e},setDateLabel:function(t,e){t.timeline[t.currentTick].dateLabel=e},changeTick:function(t,e){var s=t.currentTick+e;if(s<0)s=0;else if(s>=t.timeline.length){for(var a=JSON.parse(i()(t.timeline[t.timeline.length-1])),r=t.currentTick+1;s>=t.timeline.length;)a.dateLabel="Tick "+r,t.timeline.push(a);s=t.currentTick+e}else s=t.currentTick+e;t.currentTick=s},copyForwards:function(t){var e=JSON.parse(i()(t.timeline[t.currentTick]));t.currentTick===t.timeline.length-1?(e.dateLabel="Tick "+(t.currentTick+1),t.timeline.push(e)):(e.dateLabel=t.timeline[t.currentTick+1].dateLabel,t.timeline[t.currentTick+1]=e)},updateShowShipInfo:function(t,e){t.showShipInfo=e}}});new d.a({el:"#app",store:J,components:{App:Y},template:"<App/>"})},QYdO:function(t,e){t.exports={timeline:[{dateLabel:"2321 Q1",ships:[{registry:"2010",name:"Avandar",shipClass:"Excelsior-A",prefix:"USS",scale:"explorer",classStats:[7,6,4,6,6,6],veterancy:1,bonusStats:[0,0,0,0,0,0],mobile:!0},{registry:"2001",name:"Excalibur",shipClass:"Excelsior-A",prefix:"USS",scale:"explorer",classStats:[7,6,4,6,6,6],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!0},{registry:"2602",name:"Reason",shipClass:"Renaissance",prefix:"USS",scale:"cruiser",classStats:[5,3,4,5,4,5],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!0},{registry:"2603",name:"Epiphany",shipClass:"Renaissance",prefix:"USS",scale:"cruiser",classStats:[5,3,4,5,4,5],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!0},{registry:"1742",name:"Hood",shipClass:"Constitution-B",prefix:"USS",scale:"cruiser",classStats:[5,3,3,4,3,5],veterancy:1,bonusStats:[0,0,0,0,0,0],mobile:!0},{registry:"2105",name:"Lightning",shipClass:"Centaur-A",prefix:"USS",scale:"frigate",classStats:[3,3,2,3,3,3],veterancy:1,bonusStats:[0,1,0,0,0,0],mobile:!0},{registry:"4101",name:"Kepler",shipClass:"Kepler",prefix:"USS",scale:"frigate",classStats:[2,7,2,4,5,5],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!0}],sectors:[{name:"Sol",def:18,ships:[{registry:"S001",name:"Starbase 1, Sol III",shipClass:"Starbase",prefix:"",scale:"station",classStats:[10,6,18,18,6,5],veterancy:0,bonusStats:[0,0,0,0,0,0],mobile:!1}]},{name:"Vulcan",def:10,ships:[]},{name:"Andor",def:7,ships:[]},{name:"Tellar",def:7,ships:[]},{name:"Amarkia",def:7,ships:[]},{name:"Ferasa",def:7,ships:[]}]}]}},VzBc:function(t,e){},b7pS:function(t,e){t.exports={shipClasses:[{name:"Ambassador",scale:"explorer",stats:[8,9,7,9,9,8]},{name:"Constitution-A",scale:"explorer",stats:[5,4,4,4,5,5]},{name:"Excelsior",scale:"explorer",stats:[6,5,4,5,5,6]},{name:"Excelsior-A",scale:"explorer",stats:[7,6,4,6,6,6]},{name:"Constellation-A",scale:"cruiser",stats:[3,4,2,3,3,4]},{name:"Constitution-B",scale:"cruiser",stats:[5,3,3,4,3,5]},{name:"Renaissance",scale:"cruiser",stats:[5,3,4,5,4,5]},{name:"Centaur-A",scale:"frigate",stats:[3,3,2,3,3,3]},{name:"Centaur-B",scale:"frigate",stats:[4,4,2,4,4,5]},{name:"Comet",scale:"frigate",stats:[4,4,3,5,4,8]},{name:"Kepler",scale:"frigate",stats:[2,7,2,4,5,5]},{name:"Miranda-A",scale:"frigate",stats:[3,2,2,3,1,2]},{name:"Oberth",scale:"frigate",stats:[1,5,1,2,1,1]},{name:"Patroller-A",scale:"frigate",stats:[2,3,1,3,2,2]}],memberShipClasses:[{name:"Riala-A",scale:"explorer",stats:[8,5,6,9,5,6]},{name:"Perciar",scale:"cruiser",stats:[3,2,3,2,1,3]},{name:"Hebrinda-A",scale:"cruiser",stats:[5,2,3,5,3,4]}],installations:[{name:"Starbase I",scale:"station",stats:[10,6,18,18,6,5]},{name:"Outpost I",scale:"station",stats:[6,0,12,12,0,0]},{name:"Station I",scale:"station",stats:[2,0,6,4,0,0]}],prefixes:["USS"],veterancies:["Green","Blooded","Veteran","Elite"]}},ca0x:function(t,e){},dO1C:function(t,e){},gvaY:function(t,e){},hW9Y:function(t,e){},jgld:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f89dc73b710db18c1c5b.js.map