(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/VMediaInfo/VMediaTags.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.set.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.add-all.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.delete-all.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.difference.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.every.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.find.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.intersection.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.is-disjoint-from.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.is-subset-of.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.is-superset-of.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.join.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.map.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.reduce.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.some.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.symmetric-difference.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/esnext.set.union.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.slice.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),core=__webpack_require__("../node_modules/.pnpm/@vueuse+core@10.2.1_vue@2.7.15/node_modules/@vueuse/core/index.mjs"),shared=__webpack_require__("../node_modules/.pnpm/@vueuse+shared@10.2.1_vue@2.7.15/node_modules/@vueuse/shared/index.cjs"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),search=__webpack_require__("./src/stores/search.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),VMediaTag=__webpack_require__("./src/components/VMediaTag/VMediaTag.vue"),VTag=__webpack_require__("./src/components/VTag/VTag.vue"),VButton=__webpack_require__("./src/components/VButton.vue"),VIcon=__webpack_require__("./src/components/VIcon/VIcon.vue"),VMediaInfo_VMediaTagsvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VMediaTags",components:{VIcon:VIcon.default,VButton:VButton.default,VMediaTag:VMediaTag.default,VTag:VTag.default},props:{tags:{type:Array,required:!0},mediaType:{type:String,required:!0}},setup:function setup(props){var tagsContainerRef=Object(vue.ref)(),searchStore=Object(search.b)(),featureFlagStore=Object(feature_flag.c)(),_useContext=Object(runtime.h)(),app=_useContext.app,$sendCustomEvent=_useContext.$sendCustomEvent,additionalSearchViews=Object(vue.computed)((function(){return featureFlagStore.isOn("additional_search_views")})),normalizedTags=Object(vue.computed)((function(){return Array.from(new Set(props.tags.map((function(tag){return tag.name}))))})),collapsibleRowsStartAt=Object(vue.ref)(),dir=Object(vue.computed)((function(){return app.i18n.localeProperties.dir}));function isFurtherInline(previous,current){return"rtl"===dir.value?previous.offsetLeft<current.offsetLeft:previous.offsetLeft>current.offsetLeft}function findRowStartsAt(parent){var children=Array.from(parent.children);if(!children.length)return 0;for(var rowCount=0,i=0;i<children.length;i++){var child=children[i],previous=child.previousElementSibling;if(previous?isFurtherInline(previous,child)&&rowCount++:rowCount++,4===rowCount)return i}return children.length}var visibleTags=Object(vue.computed)((function(){return collapsibleRowsStartAt.value&&"show"===buttonStatus.value?normalizedTags.value.slice(0,collapsibleRowsStartAt.value):normalizedTags.value})),hasOverflow=Object(vue.computed)((function(){return collapsibleRowsStartAt.value&&collapsibleRowsStartAt.value<normalizedTags.value.length}));Object(vue.onMounted)((function(){tagsContainerRef.value&&(collapsibleRowsStartAt.value=findRowStartsAt(tagsContainerRef.value))}));var buttonStatus=Object(vue.ref)("show"),heightClass=Object(vue.computed)((function(){return hasOverflow.value?"show"===buttonStatus.value?"max-h-[7.6875rem]":"mah-h-none":"max-h-none"})),listWidth=Object(vue.ref)();return Object(core.useResizeObserver)(tagsContainerRef,(function(entries){listWidth.value=entries[0].contentRect.width})),Object(shared.watchDebounced)(listWidth,(function(newWidth,oldWidth){tagsContainerRef.value&&(oldWidth&&newWidth&&newWidth>oldWidth&&(collapsibleRowsStartAt.value=normalizedTags.value.length),Object(vue.nextTick)((function(){tagsContainerRef.value&&(collapsibleRowsStartAt.value=findRowStartsAt(tagsContainerRef.value))})))}),{debounce:300}),{tagsContainerRef:tagsContainerRef,additionalSearchViews:additionalSearchViews,localizedTagPath:function localizedTagPath(tag){return searchStore.getCollectionPath({type:props.mediaType,collectionParams:{collection:"tag",tag:tag}})},normalizedTags:normalizedTags,visibleTags:visibleTags,hasOverflow:hasOverflow,buttonStatus:buttonStatus,heightClass:heightClass,handleClick:function handleClick(){buttonStatus.value="show"===buttonStatus.value?"hide":"show",$sendCustomEvent("TOGGLE_TAG_EXPANSION",{toState:"show"===buttonStatus.value?"collapsed":"expanded"}),"hide"===buttonStatus.value&&collapsibleRowsStartAt.value&&Object(vue.nextTick)((function(){var _a;if(collapsibleRowsStartAt.value){var firstTagInFourthRow=null===(_a=tagsContainerRef.value)||void 0===_a?void 0:_a.children.item(collapsibleRowsStartAt.value);Object(focus_management.b)(null==firstTagInFourthRow?void 0:firstTagInFourthRow.querySelector("a"))}}))}}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VMediaTagsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _vm.normalizedTags.length&&_vm.additionalSearchViews?_c("div",{staticClass:"-my-1.5px"},[_c("ul",{ref:"tagsContainerRef",staticClass:"flex flex-wrap gap-3 overflow-y-hidden p-1.5px",class:_vm.heightClass,attrs:{"aria-label":_vm.$t("mediaDetails.tags.title").toString()}},_vm._l(_vm.visibleTags,(function(tag){return _c("li",{key:tag},[_c("VTag",{attrs:{href:_vm.localizedTagPath(tag)}},[_vm._v(_vm._s(tag))])],1)})),0),_vm._v(" "),_vm.hasOverflow?_c("VButton",{staticClass:"label-bold -ms-2 mt-4 hover:underline",attrs:{size:"small",variant:"transparent-tx","has-icon-end":"","aria-expanded":"show"===_vm.buttonStatus?"false":"true"},on:{click:_vm.handleClick}},[_vm._v(_vm._s(_vm.$t("show"===_vm.buttonStatus?"mediaDetails.tags.showMore":"mediaDetails.tags.showLess"))),_c("VIcon",{class:{"-scale-y-100 transform":"hide"===_vm.buttonStatus},attrs:{name:"caret-down",size:4}})],1):_vm._e()],1):_c("ul",{staticClass:"flex flex-wrap gap-2",attrs:{"aria-label":_vm.$t("mediaDetails.tags").toString()}},_vm._l(_vm.normalizedTags,(function(tag,index){return _c("VMediaTag",{key:index,attrs:{tag:"li"}},[_vm._v(_vm._s(tag))])})),1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VTag:__webpack_require__("./src/components/VTag/VTag.vue").default,VIcon:__webpack_require__("./src/components/VIcon/VIcon.vue").default,VButton:__webpack_require__("./src/components/VButton.vue").default,VMediaTag:__webpack_require__("./src/components/VMediaTag/VMediaTag.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaTags",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"Tag[]"},required:!0},{name:"mediaType",type:{name:"SupportedMediaType"},required:!0}]}}}]);