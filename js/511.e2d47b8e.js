(self["webpackChunkgh_vuepdf"]=self["webpackChunkgh_vuepdf"]||[]).push([[511],{9932:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>D});var n=t(3673);const p={class:"text-center"},l=(0,n._)("div",{class:"row justify-center"},[(0,n._)("div",{class:"text-weight-bolder",style:{"font-size":"xx-large"}}," All pages ")],-1),d=(0,n._)("div",{class:"row justify-center q-mb-md"},[(0,n._)("div",null,"Display the entire document in the view")],-1),s={class:"row justify-center"};function o(e,a,t,o,u,r){const i=(0,n.up)("q-tab"),c=(0,n.up)("q-tabs"),m=(0,n.up)("VuePDF"),f=(0,n.up)("q-tab-panel"),b=(0,n.up)("CodeEditor"),v=(0,n.up)("q-tab-panels");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c,{modelValue:o.tab,"onUpdate:modelValue":a[0]||(a[0]=e=>o.tab=e),align:"left",dense:"","active-color":"green-6",style:{"border-bottom":"1px solid rgba(0, 0, 0, 0.12)"}},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{name:"preview","no-caps":"",label:"Preview"}),(0,n.Wm)(i,{name:"code","no-caps":"",label:"Code"})])),_:1},8,["modelValue"]),(0,n.Wm)(v,{modelValue:o.tab,"onUpdate:modelValue":a[1]||(a[1]=e=>o.tab=e),animated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{name:"preview"},{default:(0,n.w5)((()=>[(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.pages,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n.Wm)(m,{pdf:o.pdf,page:e},null,8,["pdf","page"])])))),128))])])),_:1}),(0,n.Wm)(f,{name:"code"},{default:(0,n.w5)((()=>[l,d,(0,n._)("div",s,[(0,n.Wm)(b,{width:"60%",font_size:"14px",value:o.codeSample,read_only:!0},null,8,["value"])])])),_:1})])),_:1},8,["modelValue"])],64)}var u=t(3474),r=t(1959),i=t(4678);const c='\n<template>s\n  <div class="text-center">\n    <div v-for="page in pages" :key="page">\n        <VuePDF :pdf="pdf" :page="page" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { usePDF, VuePDF } from "@tato30/vue-pdf";\n\nexport default {\n  components: {\n    VuePDF,\n  },\n  setup() {\n    const { pdf, pages } = usePDF("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");\n    return {\n      pdf,\n      pages\n    };\n  },\n};\n<\/script>\n',m={components:{VuePDF:i.m6,CodeEditor:u.Z},setup(){const e=(0,r.iH)(c),{pdf:a,pages:t}=(0,i.Eb)("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");return{pdf:a,pages:t,codeSample:e,tab:(0,r.iH)("preview")}}};var f=t(4260),b=t(5602),v=t(3269),g=t(5906),w=t(6602),_=t(7518),h=t.n(_);const y=(0,f.Z)(m,[["render",o]]),D=y;h()(m,"components",{QTabs:b.Z,QTab:v.Z,QTabPanels:g.Z,QTabPanel:w.Z})},4663:()=>{},172:()=>{},2001:()=>{},3779:()=>{},6558:()=>{},2258:()=>{}}]);