var F=Object.defineProperty;var G=(s,e,r)=>e in s?F(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var C=(s,e,r)=>(G(s,typeof e!="symbol"?e+"":e,r),r);import"./js/vue2.RHmKp0B5.js";import{x as c,o as _,c as m,C as o,a as i,t as u,m as p,l as L,d as P,D as I,F as Y,K as Z,v as K,T as q,X as H,h as B}from"./js/vue.esm-bundler.CWQFYt9y.js";import{c as X,b as j}from"./js/vue-router.DZeOtREl.js";import{e as k,l as J}from"./js/index.FFqvTAHh.js";import{l as Q}from"./js/index.BQgiQQKQ.js";import{l as ss}from"./js/index.3BJ3ZnWB.js";import{b as E,z as V,c as es,u as U,I as ts,k as os,C as ns,E as is,l as as}from"./js/links.BdfvOpfI.js";import{k as R,t as rs,T as cs}from"./js/postSlug.CqYKoIBF.js";import{d as ls}from"./js/debounce.DOX9USmm.js";import{A as O}from"./js/App.CXV-yEZw.js";import{s as z}from"./js/metabox.DNXnRDS_.js";import{_ as ds}from"./js/default-i18n.Bd0Z306Z.js";import{e as us}from"./js/elemLoaded.COgXIo-H.js";import{l as _s}from"./js/loadTruSeo.XVm4lJ14.js";import{d as ps}from"./js/Caret.iRBf3wcH.js";import{C as W}from"./js/SettingsRow.DQldd-1Z.js";import{_ as f}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{B as ms}from"./js/Phone.DzmCIyx3.js";import{C as hs}from"./js/Tabs.DlTTw8qe.js";import{B as gs}from"./js/Checkbox.D2dfpbIi.js";import{B as fs}from"./js/RadioToggle.BLVmJ7Zx.js";import{S as bs}from"./js/Settings.BkZvT8m4.js";import"./js/translations.Buvln_cw.js";import"./js/constants.DpuIWwJ9.js";import"./js/helpers.pkmhnyB1.js";import"./js/cleanForSlug.BsZSjrxM.js";import"./js/toString.C-weURPh.js";import"./js/_baseTrim.BYZhh0MR.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/get.Wi73TNIO.js";import"./js/_baseSet.D9YlRyL4.js";import"./js/toNumber.X0wyeZjt.js";/* empty css                */import"./js/allowed.CFUn9EU6.js";import"./js/params.B3T1WKlC.js";import"./js/Row.CzuhYwfs.js";import"./js/ScrollAndHighlight.dTs0rX9y.js";import"./js/LogoGear.BF23BIEd.js";import"./js/Index.BT4iixVo.js";import"./js/TruSeoScore.TjofuHRQ.js";import"./js/MaxCounts.DHV7qSQX.js";import"./js/Ellipse.Ct8FjoJ6.js";import"./js/Tags.DgMRWz4X.js";import"./js/regex.C2CBDGQi.js";import"./js/toFinite.Dd-1lsCH.js";import"./js/Tooltip.Jp05nfCy.js";import"./js/Plus.DrDYrwHh.js";import"./js/Eye.xo0i1Doh.js";import"./js/GoogleSearchPreview.2pz5PAto.js";import"./js/HtmlTagsEditor.D1gFk_0Z.js";import"./js/Editor.BtkW3JD6.js";import"./js/UnfilteredHtml.BGMxN7fI.js";import"./js/Slide.CRIn0kdn.js";import"./js/ProBadge.WwPkDor4.js";import"./js/popup.6pJEdp0g.js";import"./js/license.D7gbNQw6.js";import"./js/upperFirst.Wa3gt1AT.js";import"./js/addons.C79zowsK.js";import"./js/Blur.DNVDismY.js";import"./js/Index.XNbBlAFo.js";import"./js/WpTable.BrShZDYO.js";import"./js/Table._qU3COyQ.js";import"./js/numbers.zAmItkHM.js";import"./js/PostTypes.Cef6XkQ_.js";import"./js/InternalOutbound.C_4tKmQU.js";import"./js/RequiredPlans.DD8UwVw8.js";import"./js/Image.BiUPos4R.js";import"./js/FacebookPreview.CtoiXSyd.js";import"./js/Img.C6u5nam7.js";import"./js/Profile.vTi7bzTi.js";import"./js/ImageUploader.C6Cwe3Rr.js";import"./js/TwitterPreview.Bc0Q88mu.js";import"./js/Book.BwJHPER-.js";import"./js/Build.CPuT4khC.js";import"./js/Redirects.CK8YnkF1.js";import"./js/Index.74ILBsxJ.js";import"./js/JsonValues.D25FTfEu.js";import"./js/External.Bfg4674G.js";import"./js/escapeRegExp.DS_Y7Vnr.js";import"./js/Exclamation.DKtT8kuH.js";import"./js/Gear.aQH8e4fl.js";import"./js/Date.DaBUg8f6.js";import"./js/DatePicker.BCK5PvOH.js";import"./js/isUndefined.C0KKKSOJ.js";import"./js/_getTag.2pdlGzJ-.js";import"./js/Card.CacAhFkZ.js";import"./js/Upsell.DdUhN8a-.js";import"./js/preload-helper.M0ZNWaht.js";import"./js/Information.CESrgQJV.js";import"./js/Checkmark.pCOnqh_g.js";const M=()=>{let e=E().currentPost.postStatus;return V()&&(e=window.wp.data.select("core/editor").getCurrentPostAttribute("status")),e};class $s{constructor(){C(this,"previousPostSlug");C(this,"previousPostStatus");C(this,"updatingRedirects",!1);C(this,"update",ls(()=>{const e=R(),r=M();if(this.previousPostSlug===e&&this.previousPostStatus===r)return;this.previousPostSlug=e,this.previousPostStatus=r,this.updatingRedirects=!0,os().getPostRedirects({}).finally(()=>{this.updatingRedirects=!1})},2500));const e=es(),r=U(),n=e.addons.find(t=>t.sku==="aioseo-redirects");!r.aioseo.currentPost||!n||!n.isActive||r.aioseo.redirectsWatcherSet||(this.initWatchers(),r.aioseo.redirectsWatcherSet=!0)}initWatchers(){if(!ts()&&V()){const e=window.setInterval(()=>{window.wp.data.select("core/editor").getCurrentPost().id&&(window.clearInterval(e),this.previousPostSlug=R(),this.previousPostStatus=M(),this.watchBlockEditor())},50)}}watchBlockEditor(){window.wp.data.subscribe(()=>{this.updatingRedirects||this.update()})}}function Ss(){const s="all-in-one-seo-pack";if(!V()||!z())return;const e=U();if(e.aioseo.registerScoreTogglerSet)return;e.aioseo.registerScoreTogglerSet=!0;const r=window.wp.plugins.registerPlugin,n=window.wp.editPost.PluginSidebarMoreMenuItem,t=window.wp.editPost.PluginSidebar,l=window.wp.element.Fragment,a=window.wp.element.createElement,d=e.aioseo.user.capabilities.aioseo_page_analysis,$=E().currentPost.seo_score,S=ds("N/A",s),v=function(x){return!d||!rs()?"score-disabled":80<x?"score-green":50<x?"score-orange":1<x?"score-red":"score-disabled"},h=a("svg",{width:24,height:24,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M11.9811 23.7877C18.5428 23.7877 23.8623 18.4684 23.8623 11.9066C23.8623 5.34477 18.5428 0.0253906 11.9811 0.0253906C5.41924 0.0253906 0.0998535 5.34477 0.0998535 11.9066C0.0998535 18.4684 5.41924 23.7877 11.9811 23.7877ZM10.0892 4.37389C9.92824 4.12859 9.6301 4.01391 9.35674 4.11048C9.04535 4.22048 8.74079 4.34987 8.44488 4.49781C8.18513 4.6277 8.05479 4.92439 8.11199 5.21372L8.31571 6.24468C8.36815 6.51003 8.25986 6.77935 8.0543 6.95044C7.72937 7.22084 7.42944 7.52654 7.16069 7.86489C6.99366 8.07521 6.73011 8.18668 6.46987 8.13409L5.45923 7.92995C5.17534 7.87259 4.88492 8.00678 4.75864 8.27251C4.68731 8.42264 4.61997 8.57591 4.55683 8.73224C4.49369 8.88855 4.43564 9.04574 4.38258 9.20355C4.28872 9.4829 4.40211 9.78694 4.64318 9.95035L5.50129 10.5321C5.72226 10.6819 5.8323 10.9505 5.80561 11.2198C5.76265 11.6532 5.76441 12.0857 5.80825 12.5112C5.83598 12.7804 5.72684 13.0494 5.5064 13.2L4.64996 13.785C4.40958 13.9493 4.29718 14.2535 4.3918 14.5324C4.49961 14.8502 4.62641 15.1609 4.7714 15.4629C4.89868 15.728 5.18943 15.8609 5.47301 15.8026L6.48336 15.5947C6.7434 15.5412 7.00735 15.6517 7.17499 15.8615C7.43997 16.193 7.73956 16.499 8.07114 16.7733C8.27723 16.9437 8.38649 17.2127 8.33498 17.4782L8.13487 18.5095C8.07868 18.7992 8.2102 19.0955 8.47059 19.2244C8.61773 19.2971 8.76793 19.3659 8.92112 19.4303C9.07434 19.4947 9.22835 19.5539 9.38302 19.6081C9.83552 19.7664 10.4688 19.1996 10.937 18.7805C11.1679 18.5738 11.3103 18.2813 11.3119 17.9682C11.3119 17.9665 11.3119 17.9648 11.3119 17.9632V16.2386C11.3119 16.2204 11.3125 16.2022 11.3139 16.1843C9.93098 15.847 8.90283 14.5775 8.90283 13.0629V11.2317C8.90283 11.0925 9.01342 10.9797 9.14984 10.9797H10.0064V9.17798C10.0064 8.92921 10.204 8.72754 10.4478 8.72754C10.6916 8.72754 10.8892 8.92921 10.8892 9.17798V10.9797H13.2067V9.17798C13.2067 8.92921 13.4043 8.72754 13.6481 8.72754C13.8919 8.72754 14.0895 8.92921 14.0895 9.17798V10.9797H14.9461C15.0825 10.9797 15.193 11.0925 15.193 11.2317V13.0629C15.193 14.6253 14.0989 15.927 12.6497 16.2135C12.6501 16.2218 12.6502 16.2302 12.6502 16.2386V17.9557C12.6502 18.275 12.7969 18.5727 13.0347 18.7801C13.5113 19.1958 14.1555 19.7576 14.6053 19.5987C14.9167 19.4887 15.2213 19.3593 15.5172 19.2113C15.7769 19.0814 15.9073 18.7848 15.8501 18.4954L15.6464 17.4644C15.5939 17.1991 15.7022 16.9298 15.9078 16.7587C16.2327 16.4883 16.5326 16.1826 16.8013 15.8442C16.9684 15.634 17.2319 15.5225 17.4922 15.575L18.5028 15.7792C18.7867 15.8366 19.0771 15.7024 19.2034 15.4366C19.2747 15.2865 19.3421 15.1333 19.4052 14.9769C19.4683 14.8206 19.5264 14.6634 19.5795 14.5056C19.6733 14.2263 19.5599 13.9222 19.3189 13.7588L18.4607 13.177C18.2398 13.0272 18.1297 12.7586 18.1564 12.4893C18.1994 12.056 18.1976 11.6234 18.1538 11.1979C18.1261 10.9287 18.2352 10.6598 18.4556 10.5092L19.3121 9.92409C19.5525 9.75989 19.6649 9.45566 19.5702 9.17674C19.4624 8.85899 19.3356 8.5482 19.1907 8.24628C19.0634 7.98121 18.7726 7.84823 18.489 7.90657L17.4787 8.11444C17.2187 8.16796 16.9547 8.05746 16.7871 7.84769C16.5221 7.51615 16.2225 7.2101 15.8909 6.93588C15.6848 6.76543 15.5756 6.49649 15.6271 6.23094L15.8272 5.19968C15.8834 4.90999 15.7519 4.61365 15.4914 4.48481C15.3443 4.412 15.1941 4.34331 15.0409 4.27886C14.8877 4.21444 14.7337 4.1552 14.579 4.10107C14.3053 4.00526 14.0073 4.12099 13.8472 4.36697L13.277 5.24259C13.1302 5.46808 12.867 5.58035 12.6031 5.55312C12.1784 5.5093 11.7545 5.51109 11.3375 5.55581C11.0737 5.58411 10.8101 5.47276 10.6625 5.24782L10.0892 4.37389Z",fillRule:"evenodd",clipRule:"evenodd",fill:"#005AE0"})),g=a("div",{id:"aioseo-post-settings-sidebar-button",className:v($)},h,a("span",{id:"aioseo-post-score-disabled"},S),a("span",{id:"aioseo-post-score"},$),a("span",{},"/100")),b=e.aioseo.user;r("aioseo-post-settings-sidebar",{render:function(){return!b.capabilities.aioseo_page_analysis&&!b.capabilities.aioseo_page_general_settings&&!b.capabilities.aioseo_page_social_settings&&!b.capabilities.aioseo_page_schema_settings&&!b.capabilities.aioseo_page_advanced_settings?null:a(l,{},a(n,{target:"aioseo-post-settings-sidebar",icon:h},"AIOSEO"),a(t,{name:"aioseo-post-settings-sidebar",icon:g,title:"AIOSEO"},a("div",{id:"aioseo-post-settings-sidebar",className:"aioseo-post-settings-sidebar"},a("div",{id:"aioseo-post-settings-sidebar-vue",className:"aioseo-post-settings-sidebar-vue"},a("div",{className:"aioseo-loading-spinner dark",style:{left:0,right:0,margin:"30px auto"}},a("div",{className:"double-bounce1"},null),a("div",{className:"double-bounce2"},null))))))}})}let y;const vs=()=>{if(V()){const{subscribe:s,select:e}=window.wp.data,r=e("core/editor");s(()=>{const n=r==null?void 0:r.getEditedPostAttribute("featured_media");(!y||y!==n)&&(k.emit("updateFeaturedImage",n),y=n)})}if(ns()||is()){const s=window.MutationObserver||window.WebKitMutationObserver,e=new s(()=>{var t;const n=(t=document.getElementById("_thumbnail_id"))==null?void 0:t.value;(!y||y!==n)&&(k.emit("updateFeaturedImage",n),y=n)}),r=document.getElementById("postimagediv");r&&e.observe(r,{subtree:!0,childList:!0})}},ys=()=>{vs()},ws={data(){return{strings:{areaServedDescription:this.$t.__("The geographic area where a service or offered item is provided.",this.$td)}}}},xs={class:"aioseo-col col-xs-12 text-xs-left"},Cs={class:"field-description"};function Ps(s,e,r,n,t,l){const a=c("base-input");return _(),m("div",xs,[o(a,{type:"text",size:"medium"}),i("span",Cs,u(t.strings.areaServedDescription),1)])}const Ls=f(ws,[["render",Ps],["__scopeId","data-v-edba6303"]]),Es={data(){return{strings:{streetAddress:this.$t.__("Address Line 1",this.$td),streetAddress2:this.$t.__("Address Line 2",this.$td),zipCode:this.$t.__("Zip Code",this.$td),city:this.$t.__("City",this.$td),state:this.$t.__("State",this.$td),country:this.$t.__("Country",this.$td)}}}},Is={class:"columns field-row"},As={class:"aioseo-col col-xs-12 text-xs-left"},Vs={class:"field-description"},Ds={class:"aioseo-col col-xs-12 text-xs-left"},Hs={class:"field-description mt-8"},Bs={class:"aioseo-address-wrapper"},Os={class:"aioseo-col col-xs-12 col-sm-12 col-md-4 text-xs-left"},Ts={class:"field-description mt-8"},ks={class:"aioseo-col col-xs-12 col-sm-12 col-md-4 text-xs-left"},Rs={class:"field-description mt-8"},Ms={class:"aioseo-col col-xs-12 col-sm-12 col-md-4 text-xs-left"},Ns={class:"field-description mt-8"},Us={class:"aioseo-col col-xs-12 col-sm-6 text-xs-left"},zs={class:"field-description mt-8"};function Ws(s,e,r,n,t,l){const a=c("base-input"),d=c("base-select");return _(),m("div",Is,[i("div",As,[i("span",Vs,u(t.strings.streetAddress),1),o(a,{type:"text",size:"medium"})]),i("div",Ds,[i("span",Hs,u(t.strings.streetAddress2),1),o(a,{type:"text",size:"medium"})]),i("div",Bs,[i("div",Os,[i("span",Ts,u(t.strings.zipCode),1),o(a,{type:"text",size:"medium"})]),i("div",ks,[i("span",Rs,u(t.strings.city),1),o(a,{type:"text",size:"medium"})]),i("div",Ms,[i("span",Ns,u(t.strings.state),1),o(a,{type:"text",size:"medium"})])]),i("div",Us,[i("span",zs,u(t.strings.country),1),o(d,{size:"medium",options:s.$constants.COUNTRY_LIST},null,8,["options"])])])}const Fs=f(Es,[["render",Ws],["__scopeId","data-v-bf2b69da"]]),Gs={components:{BasePhone:ms},data(){return{strings:{emailAddress:this.$t.__("Email Address",this.$td),phoneNumber:this.$t.__("Phone Number",this.$td),faxNumber:this.$t.__("Fax Number",this.$td)}}}},Ys={class:"aioseo-col col-xs-12 text-xs-left"},Zs={class:"field-description"},Ks={class:"aioseo-col col-xs-12 text-xs-left"},qs={class:"field-description mt-8"},Xs={class:"aioseo-col col-xs-12 text-xs-left"},js={class:"field-description mt-8"};function Js(s,e,r,n,t,l){const a=c("base-input"),d=c("base-phone");return _(),m("div",null,[i("div",Ys,[i("span",Zs,u(t.strings.emailAddress),1),o(a,{type:"text",size:"medium"})]),i("div",Ks,[i("span",qs,u(t.strings.phoneNumber),1),o(d)]),i("div",Xs,[i("span",js,u(t.strings.faxNumber),1),o(d)])])}const Qs=f(Gs,[["render",Js],["__scopeId","data-v-b7e41a38"]]),se={data(){return{strings:{vatID:this.$t.__("VAT ID:",this.$td),taxID:this.$t.__("Tax ID:",this.$td)}}}},ee={class:"aioseo-col col-xs-12 text-xs-left"},te={class:"field-description"},oe={class:"aioseo-col col-xs-12 text-xs-left"},ne={class:"field-description mt-8"};function ie(s,e,r,n,t,l){const a=c("base-input");return _(),m("div",null,[i("div",ee,[i("span",te,u(t.strings.vatID),1),o(a,{type:"text",size:"medium"})]),i("div",oe,[i("span",ne,u(t.strings.taxID),1),o(a,{type:"text",size:"medium"})])])}const ae=f(se,[["render",ie],["__scopeId","data-v-16be9b8e"]]),re={data(){return{strings:{businessType:this.$t.__("Type",this.$td)}}}};function ce(s,e,r,n,t,l){const a=c("base-select");return _(),m("div",null,[o(a,{size:"large",options:s.$constants.LOCAL_SEO_BUSINESS_TYPES},null,8,["options"])])}const le=f(re,[["render",ce]]),de={};function ue(s,e){return _(),m("div")}const _e=f(de,[["render",ue]]),pe={};function me(s,e){return _(),m("div")}const he=f(pe,[["render",me]]),ge={data(){return{strings:{name:this.$t.__("name",this.$td),nameDesc:this.$t.__("Your name or company name.",this.$td)}}}},fe={class:"aioseo-col col-xs-12 text-xs-left"},be={class:"field-description"};function $e(s,e,r,n,t,l){const a=c("base-input");return _(),m("div",fe,[o(a,{type:"text",size:"medium"}),i("span",be,u(t.strings.nameDesc),1)])}const Se=f(ge,[["render",$e],["__scopeId","data-v-0f8f3d3c"]]),ve={data(){return{currencies:this.$constants.CURRENCY_LIST,strings:{priceIndicator:this.$t.__("Price Indicator",this.$td),currenciesAccepted:this.$t.__("Currencies Accepted",this.$td),paymentMethods:this.$t.__("Payment Methods Accepted",this.$td)}}}},ye={class:"aioseo-col col-xs-12 text-xs-left"},we={class:"field-description"},xe={class:"aioseo-col col-xs-12 text-xs-left"},Ce={class:"field-description mt-8"},Pe={class:"aioseo-col col-xs-12 text-xs-left"},Le={class:"field-description mt-8"};function Ee(s,e,r,n,t,l){const a=c("base-select"),d=c("base-input");return _(),m("div",null,[i("div",ye,[i("span",we,u(t.strings.priceIndicator),1),o(a,{size:"medium",options:t.currencies},null,8,["options"])]),i("div",xe,[i("span",Ce,u(t.strings.currenciesAccepted),1),o(a,{size:"medium",label:"currenciesAccepted","track-by":"value",class:"aioseo-multiselect",options:t.currencies,multiple:""},null,8,["options"])]),i("div",Pe,[i("span",Le,u(t.strings.paymentMethods),1),o(d,{type:"text",size:"medium"})])])}const Ie=f(ve,[["render",Ee],["__scopeId","data-v-eae40702"]]),Ae={components:{CoreSettingsRow:W,LocalBusinessAreaServed:Ls,LocalBusinessBusinessAddress:Fs,LocalBusinessBusinessContact:Qs,LocalBusinessBusinessIds:ae,LocalBusinessBusinessType:le,LocalBusinessImage:_e,LocalBusinessMap:he,LocalBusinessName:Se,LocalBusinessPaymentInfo:Ie},data(){return{strings:{pageName:this.$t.__("Business Info",this.$td),name:this.$t.__("Name",this.$td),businessType:this.$t.__("Type",this.$td),image:this.$t.__("Image",this.$td),urls:this.$t.__("URLs",this.$td),websiteDesc:this.$t.__("Website URL",this.$td),aboutDesc:this.$t.__("About Page URL",this.$td),contactDesc:this.$t.__("Contact Page URL",this.$td),businessAddress:this.$t.__("Address",this.$td),businessContact:this.$t.__("Contact Info",this.$td),businessIDs:this.$t.__("IDs",this.$td),paymentInfo:this.$t.__("Payment Info",this.$td),areaServed:this.$t.__("Area Served",this.$td),map:this.$t.__("Map",this.$td)}}}},Ve={class:"aioseo-tab-content aioseo-localseo-info"};function De(s,e,r,n,t,l){const a=c("local-business-name"),d=c("core-settings-row"),w=c("local-business-business-type"),$=c("local-business-image"),S=c("local-business-business-address"),v=c("local-business-map"),h=c("local-business-business-contact"),g=c("local-business-business-ids"),b=c("local-business-payment-info"),x=c("local-business-area-served");return _(),m("div",Ve,[o(d,{name:t.strings.name,class:"info-name-row",align:""},{content:p(()=>[o(a)]),_:1},8,["name"]),o(d,{name:t.strings.businessType,class:"info-business-type",align:""},{content:p(()=>[o(w)]),_:1},8,["name"]),o(d,{class:"info-business-image",name:t.strings.image,align:""},{content:p(()=>[o($)]),_:1},8,["name"]),o(d,{name:t.strings.businessAddress,class:"info-businessaddress-row",align:""},{content:p(()=>[o(S)]),_:1},8,["name"]),o(d,{name:t.strings.map,align:""},{content:p(()=>[o(v)]),_:1},8,["name"]),o(d,{name:t.strings.businessContact,class:"info-businesscontact-row",align:""},{content:p(()=>[o(h)]),_:1},8,["name"]),o(d,{name:t.strings.businessIDs,class:"info-businessids-row",align:""},{content:p(()=>[o(g)]),_:1},8,["name"]),o(d,{name:t.strings.paymentInfo,class:"info-paymentinfo-row",align:""},{content:p(()=>[o(b)]),_:1},8,["name"]),o(d,{name:t.strings.areaServed,class:"info-area-row",align:""},{content:p(()=>[o(x)]),_:1},8,["name"])])}const He=f(Ae,[["render",De]]),Be={setup(){return{postEditorStore:E()}},components:{BaseCheckbox:gs,BaseRadioToggle:fs,CoreSettingsRow:W},data(){return{selectTimezone:[{value:"none",label:this.$t.__("Select your timezone",this.$td)}],strings:{pageName:this.$t.__("Opening Hours",this.$td),useDefaults:this.$t.__("Use Defaults",this.$td),useDefaultsDesc:this.$t.__("Will default opening hours set globally",this.$td),showOpeningHours:this.$t.__("Show Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),closedLabel:this.$t.__("Closed",this.$td),closedLabelDesc:this.$t.__("Displayed when the business is closed.",this.$td),closed:this.$t.__("Closed",this.$td),settings:this.$t.__("Settings",this.$td),open24h:this.$t.__("Open 24h",this.$td),open24Label:this.$t.__("Open 24h",this.$td),open24LabelDesc:this.$t.__("Displayed when the business is open all day long.",this.$td),alwaysOpen:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),twoSets:this.$t.__("I have two sets of opening hours per day",this.$td),timezone:this.$t.__("Timezone",this.$td),hours:this.$t.__("Hours",this.$td)},weekdays:{monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td)}}},computed:{toggled:function(){return!0},unToggled:function(){return!1},closedLabel:{get(){return this.postEditorStore.currentPost.local_seo.openingHours.closedLabel},set(s){this.postEditorStore.currentPost.local_seo.openingHours.closedLabel=s}}},methods:{getSelectOptions(s){return this.postEditorStore.currentPost.local_seo.openingHours.use24hFormat?this.$constants.HOURS_24H_FORMAT.find(e=>e.value===s):this.$constants.HOURS_12H_FORMAT.find(e=>e.value===s)},saveDay(s,e,r){this.postEditorStore.currentPost.local_seo.openingHours.days[s][e]=r},getWeekDay(s){return this.postEditorStore.currentPost.local_seo.openingHours.days[s]}}},Oe={class:"aioseo-tab-content aioseo-localseo-opening"},Te={class:"aioseo-col col-xs-12 text-xs-left"},ke={key:0},Re={class:"aioseo-col col-xs-12 text-xs-left"},Me={class:"aioseo-col col-xs-12 text-xs-left"},Ne={class:"field-description"},Ue={class:"field-description mt-10"},ze={class:"aioseo-col col-xs-12 text-xs-left"},We={class:"field-description mt-8"},Fe={class:"field-description mt-10"},Ge={class:"aioseo-col col-xs-12 text-xs-left"},Ye={class:"aioseo-col col-xs-12 text-xs-left"},Ze={class:"aioseo-col col-xs-12 text-xs-left"},Ke={class:"aioseo-col-day text-xs-left"},qe={class:"aioseo-col-hours text-xs-left"},Xe=i("span",{class:"separator"},"-",-1),je={class:"aioseo-col-alwaysopen text-xs-left"};function Je(s,e,r,n,t,l){const a=c("base-radio-toggle"),d=c("core-settings-row"),w=c("base-input"),$=c("base-toggle"),S=c("base-select"),v=c("base-checkbox");return _(),m("div",Oe,[o(d,{name:t.strings.useDefaults,align:""},{content:p(()=>[i("div",Te,[o(a,{name:"useDefaults",modelValue:n.postEditorStore.currentPost.local_seo.openingHours.useDefaults,"onUpdate:modelValue":e[0]||(e[0]=h=>n.postEditorStore.currentPost.local_seo.openingHours.useDefaults=h),options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])]),_:1},8,["name"]),n.postEditorStore.currentPost.local_seo.openingHours.useDefaults?P("",!0):(_(),m("div",ke,[o(d,{name:t.strings.showOpeningHours,class:"info-openinghours-row",align:""},{content:p(()=>[i("div",Re,[o(a,{name:"openingHours",modelValue:n.postEditorStore.currentPost.local_seo.openingHours.show,"onUpdate:modelValue":e[1]||(e[1]=h=>n.postEditorStore.currentPost.local_seo.openingHours.show=h),options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])])]),_:1},8,["name"]),n.postEditorStore.currentPost.local_seo.openingHours.show?(_(),L(d,{key:0,name:t.strings.labels,class:"info-labels-row",align:""},{content:p(()=>[i("div",Me,[i("span",Ne,u(t.strings.closedLabel),1),o(w,{type:"text",size:"medium",modelValue:n.postEditorStore.currentPost.local_seo.openingHours.labels.closed,"onUpdate:modelValue":e[2]||(e[2]=h=>n.postEditorStore.currentPost.local_seo.openingHours.labels.closed=h)},null,8,["modelValue"]),i("span",Ue,u(t.strings.closedLabelDesc),1)]),i("div",ze,[i("span",We,u(t.strings.open24Label),1),o(w,{size:"medium",modelValue:n.postEditorStore.currentPost.local_seo.openingHours.labels.alwaysOpen,"onUpdate:modelValue":e[3]||(e[3]=h=>n.postEditorStore.currentPost.local_seo.openingHours.labels.alwaysOpen=h)},null,8,["modelValue"]),i("span",Fe,u(t.strings.open24LabelDesc),1)])]),_:1},8,["name"])):P("",!0),n.postEditorStore.currentPost.local_seo.openingHours.show?(_(),L(d,{key:1,name:t.strings.settings,class:"info-settings-row",align:""},{content:p(()=>[i("div",Ge,[o($,{modelValue:n.postEditorStore.currentPost.local_seo.openingHours.alwaysOpen,"onUpdate:modelValue":e[4]||(e[4]=h=>n.postEditorStore.currentPost.local_seo.openingHours.alwaysOpen=h)},{default:p(()=>[I(u(t.strings.alwaysOpen),1)]),_:1},8,["modelValue"])]),i("div",Ye,[o($,{modelValue:n.postEditorStore.currentPost.local_seo.openingHours.use24hFormat,"onUpdate:modelValue":e[5]||(e[5]=h=>n.postEditorStore.currentPost.local_seo.openingHours.use24hFormat=h)},{default:p(()=>[I(u(t.strings.use24hFormat),1)]),_:1},8,["modelValue"])])]),_:1},8,["name"])):P("",!0),n.postEditorStore.currentPost.local_seo.openingHours.show&&!n.postEditorStore.currentPost.local_seo.openingHours.alwaysOpen?(_(),L(d,{key:2,name:t.strings.hours,class:"info-hours-row",align:""},{content:p(()=>[i("div",Ze,[(_(!0),m(Y,null,Z(t.weekdays,(h,g)=>(_(),m("div",{class:"aioseo-col-flex text-xs-left",key:g},[i("div",Ke,u(h),1),i("div",qe,[o(S,{disabled:l.getWeekDay(g).open24h||l.getWeekDay(g).closed,size:"medium",options:n.postEditorStore.currentPost.local_seo.openingHours.use24hFormat?s.$constants.HOURS_24H_FORMAT:s.$constants.HOURS_12H_FORMAT,modelValue:l.getSelectOptions(l.getWeekDay(g).openTime),"onUpdate:modelValue":b=>l.saveDay(g,"openTime",b.value)},null,8,["disabled","options","modelValue","onUpdate:modelValue"]),Xe,o(S,{disabled:l.getWeekDay(g).open24h||l.getWeekDay(g).closed,size:"medium",options:n.postEditorStore.currentPost.local_seo.openingHours.use24hFormat?s.$constants.HOURS_24H_FORMAT:s.$constants.HOURS_12H_FORMAT,modelValue:l.getSelectOptions(l.getWeekDay(g).closeTime),"onUpdate:modelValue":b=>l.saveDay(g,"closeTime",b.value)},null,8,["disabled","options","modelValue","onUpdate:modelValue"])]),i("div",je,[o(v,{disabled:l.getWeekDay(g).closed,size:"medium",modelValue:l.getWeekDay(g).open24h,"onUpdate:modelValue":b=>l.getWeekDay(g).open24h=b},{default:p(()=>[I(u(t.strings.open24h),1)]),_:2},1032,["disabled","modelValue","onUpdate:modelValue"]),o(v,{size:"medium",class:"closed-label",modelValue:l.getWeekDay(g).closed,"onUpdate:modelValue":b=>l.getWeekDay(g).closed=b},{default:p(()=>[I(u(t.strings.closed),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1},8,["name"])):P("",!0)]))])}const Qe=f(Be,[["render",Je]]),st={};function et(s,e){return _(),m("div")}const tt=f(st,[["render",et]]),ot={};function nt(s,e){return _(),m("div")}const it=f(ot,[["render",nt]]),at={components:{LocalBusinessMapCustomMarker:tt,LocalBusinessMapDefaultStyle:it},data(){return{strings:{}}}},rt={class:"aioseo-tab-content aioseo-localseo-maps"};function ct(s,e,r,n,t,l){const a=c("local-business-map-default-style"),d=c("local-business-map-custom-marker");return _(),m("div",rt,[o(a),o(d)])}const lt=f(at,[["render",ct]]),dt={setup(){return{postEditorStore:E()}},components:{BusinessInfo:He,CoreMainTabs:hs,OpeningHours:Qe,Maps:lt,SvgSettings:bs},watch:{"postEditorStore.currentPost":{deep:!0,handler(){ps(this.postEditorStore.savePostState,250)}}},data(){return{tab:"business-info",tabs:[{slug:"business-info",icon:"svg-settings",name:this.$t.__("Business Info",this.$td)},{slug:"opening-hours",icon:"svg-settings",name:this.$t.__("Opening Hours",this.$td)},{slug:"maps",icon:"svg-settings",name:this.$t.__("Maps",this.$td)}]}},methods:{processChangeTab(s){this.tab=s}}},ut={class:"aioseo-app aioseo-post-settings"};function _t(s,e,r,n,t,l){const a=c("core-main-tabs");return _(),m("div",ut,[o(a,{tabs:t.tabs,showSaveButton:!1,active:t.tab,internal:"",disableMobile:"",onChanged:e[0]||(e[0]=d=>l.processChangeTab(d))},null,8,["tabs","active"]),o(q,{name:"route-fade",mode:"out-in"},{default:p(()=>[(_(),L(K(t.tab)))]),_:1})])}const pt=f(dt,[["render",_t]]),mt={setup(){return{postEditorStore:E()}},components:{"main-view":pt}};function ht(s,e,r,n,t,l){const a=c("main-view");return _(),m("div",null,[n.postEditorStore.currentPost.id?(_(),L(a,{key:0})):P("",!0)])}const gt=f(mt,[["render",ht]]);ys();const D=X({history:j(),routes:[{path:"/",component:O}]}),T=s=>(s=J(s),s=Q(s),s=ss(s),s.use(D),D.app=s,as(s,D),new $s,Ss(),s.config.globalProperties.$truSeo=new cs,window.addEventListener("load",()=>_s()),s);let A;const N=()=>{A&&A.unmount(),A=H({name:"Standalone/PostSettings/Sidebar",data(){return{tableContext:"post",screenContext:"sidebar"}},render:()=>B(O)}),T(A).mount("#aioseo-post-settings-sidebar-vue")};if(window.aioseo.currentPost){const s=window.aioseo.currentPost.context;document.querySelector(`#aioseo-${s}-settings-metabox`)&&z()&&(!window.wp.blockEditor&&window.wp.blocks&&window.wp.oldEditor&&(window.wp.blockEditor=window.wp.editor),T(H({name:"Standalone/PostSettings/Metabox",data(){return{tableContext:s,screenContext:"metabox"}},render:()=>B(O)})).mount(`#aioseo-${s}-settings-metabox`),s==="post"&&(document.getElementById("aioseo-post-settings-sidebar-vue")?N():(us("#aioseo-post-settings-sidebar-vue","aioseoSidebarVisible"),document.addEventListener("animationstart",function(n){n.animationName==="aioseoSidebarVisible"&&N()},{passive:!0}))))}window.aioseo.currentPost&&window.aioseo.localBusiness&&document.getElementById("aioseo-location-settings-metabox")&&T(H({name:"Standalone/LocalSeo/Metabox",data(){return{screenContext:"metabox"}},render:()=>B(gt)})).mount("#aioseo-location-settings-metabox");
