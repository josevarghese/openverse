(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/VHomepageContent.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),reakit_utils_focus=__webpack_require__("./src/utils/reakit-utils/focus.ts"),use_search_type=__webpack_require__("./src/composables/use-search-type.ts"),use_dialog_control=__webpack_require__("./src/composables/use-dialog-control.ts"),ui=__webpack_require__("./src/stores/ui.ts"),VContentSettingsModalContent=__webpack_require__("./src/components/VHeader/VHeaderMobile/VContentSettingsModalContent.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),VPopoverContent=__webpack_require__("./src/components/VPopover/VPopoverContent.vue"),VSearchTypeButton=__webpack_require__("./src/components/VContentSwitcher/VSearchTypeButton.vue"),VSearchTypes=__webpack_require__("./src/components/VContentSwitcher/VSearchTypes.vue"),VSkipToContentContainer=__webpack_require__("./src/components/VSkipToContentContainer.vue"),VStandaloneSearchBar=__webpack_require__("./src/components/VHeader/VSearchBar/VStandaloneSearchBar.vue"),components_VHomepageContentvue_type_script_lang_ts_={name:"VHomepageContent",components:{VContentSettingsModalContent:VContentSettingsModalContent.default,VSearchTypes:VSearchTypes.default,VPopoverContent:VPopoverContent.default,VSearchTypeButton:VSearchTypeButton.default,VSkipToContentContainer:VSkipToContentContainer.default,VStandaloneSearchBar:VStandaloneSearchBar.default,VLink:VLink.default},props:{handleSearch:{type:Function,required:!0},searchType:{type:String,required:!0},setSearchType:{type:Function,required:!0}},setup:function setup(props,_ref){var emit=_ref.emit,searchTypeButtonRef=Object(vue.ref)(null),searchBarRef=Object(vue.ref)(null),nodeRef=Object(vue.computed)((function(){var _a;return null===(_a=searchBarRef.value)||void 0===_a?void 0:_a.$el})),getSearchTypeProps=Object(use_search_type.a)().getSearchTypeProps,uiStore=Object(ui.a)(),searchTypeProps=Object(vue.computed)((function(){return getSearchTypeProps()})),isContentSwitcherVisible=Object(vue.ref)(!1),isSm=Object(vue.computed)((function(){return uiStore.isBreakpoint("sm")})),isLg=Object(vue.computed)((function(){return uiStore.isBreakpoint("lg")})),triggerElement=Object(vue.computed)((function(){var _a;return(null===(_a=searchTypeButtonRef.value)||void 0===_a?void 0:_a.$el)||null})),lockBodyScroll=Object(vue.computed)((function(){return!isLg.value})),_useDialogControl=Object(use_dialog_control.a)({visibleRef:isContentSwitcherVisible,nodeRef:nodeRef,lockBodyScroll:lockBodyScroll,emit:emit}),closeContentSwitcher=_useDialogControl.close,openContentSwitcher=_useDialogControl.open,onTriggerClick=_useDialogControl.onTriggerClick,triggerA11yProps=_useDialogControl.triggerA11yProps;return{searchTypeButtonRef:searchTypeButtonRef,searchBarRef:searchBarRef,isLg:isLg,isSm:isSm,triggerElement:triggerElement,onTriggerClick:onTriggerClick,handleSelect:function handleSelect(searchType){var _a;props.setSearchType(searchType);var searchInput=null===(_a=searchBarRef.value)||void 0===_a?void 0:_a.$el.getElementsByTagName("input");searchInput&&Object(reakit_utils_focus.a)(searchInput[0]),closeContentSwitcher()},searchTypeProps:searchTypeProps,closeContentSwitcher:closeContentSwitcher,openContentSwitcher:openContentSwitcher,isContentSwitcherVisible:isContentSwitcherVisible,triggerA11yProps:triggerA11yProps}}},componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VHomepageContentvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;return _c("VSkipToContentContainer",[_c("h1",{staticClass:"mb-2 mt-auto text-[40px] font-light leading-tight lg:text-[63px]"},[_vm._v("\n    "+_vm._s(_vm.$t("hero.subtitle"))+"\n  ")]),_vm._v(" "),_c("p",{staticClass:"text-base leading-relaxed"},[_vm._v("\n    "+_vm._s(_vm.$t("hero.description"))+"\n  ")]),_vm._v(" "),_c("VStandaloneSearchBar",{ref:"searchBarRef",staticClass:"mt-4 md:mt-6",attrs:{"has-popover":_vm.triggerElement&&_vm.isContentSwitcherVisible},on:{submit:_vm.handleSearch}},[_c("VSearchTypeButton",_vm._b({ref:"searchTypeButtonRef",staticClass:"ms-2",attrs:{id:"search-type-button","show-label":_vm.isSm,"aria-controls":"content-switcher-popover"},on:{click:_vm.onTriggerClick}},"VSearchTypeButton",_objectSpread(_objectSpread({},_vm.triggerA11yProps),_vm.searchTypeProps),!1)),_vm._v(" "),_vm.triggerElement?[_vm.isLg?_c("VPopoverContent",{attrs:{"z-index":"popover",hide:_vm.closeContentSwitcher,"trap-focus":!1,visible:_vm.isContentSwitcherVisible,"trigger-element":_vm.triggerElement,width:"w-66","aria-labelledby":"search-type-button"}},[_c("VSearchTypes",{attrs:{size:"small","use-links":!1},on:{select:_vm.handleSelect}})],1):_c("VContentSettingsModalContent",{attrs:{"aria-labelledby":"search-type-button",close:_vm.closeContentSwitcher,visible:_vm.isContentSwitcherVisible,"use-links":!1,"show-filters":!1},on:{open:_vm.openContentSwitcher,select:_vm.handleSelect}})]:_vm._e()],2),_vm._v(" "),_c("i18n",{staticClass:"mt-4 text-sr",attrs:{path:"hero.disclaimer.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"license",fn:function fn(){return[_c("VLink",{staticClass:"text-dark-charcoal underline hover:text-dark-charcoal",attrs:{href:"https://creativecommons.org/licenses/"}},[_vm._v(_vm._s(_vm.$t("hero.disclaimer.license")))])]},proxy:!0}])})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchTypeButton:__webpack_require__("./src/components/VContentSwitcher/VSearchTypeButton.vue").default,VSearchTypes:__webpack_require__("./src/components/VContentSwitcher/VSearchTypes.vue").default,VPopoverContent:__webpack_require__("./src/components/VPopover/VPopoverContent.vue").default,VContentSettingsModalContent:__webpack_require__("./src/components/VHeader/VHeaderMobile/VContentSettingsModalContent.vue").default,VStandaloneSearchBar:__webpack_require__("./src/components/VHeader/VSearchBar/VStandaloneSearchBar.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default,VSkipToContentContainer:__webpack_require__("./src/components/VSkipToContentContainer.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VHomepageContent",exportName:"default",description:"",tags:{},props:[{name:"handleSearch",type:{name:"(query: string) => void"},required:!0},{name:"searchType",type:{name:"SearchType"},required:!0},{name:"setSearchType",type:{name:"(searchType: SearchType) => void"},required:!0}]}}}]);