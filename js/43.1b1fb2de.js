(self["webpackChunkgh_vuepdf"]=self["webpackChunkgh_vuepdf"]||[]).push([[43],{6015:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>W});var t=a(3673),l=a(2323);const o={class:"row justify-center items-center"},s=(0,t.Uk)(" Annotations enable: "),d={class:"row justify-center"},i={style:{width:"600px"}},r=(0,t._)("div",{class:"row justify-center"},[(0,t._)("div",{class:"text-weight-bolder",style:{"font-size":"xx-large"}}," Annotation-Layer ")],-1),p=(0,t._)("div",{class:"row justify-center q-mb-md"},[(0,t._)("div",null,"Enable annotations layer and interactive objects")],-1),u={class:"row justify-center"};function b(e,n,a,b,c,m){const f=(0,t.up)("q-tab"),v=(0,t.up)("q-tabs"),w=(0,t.up)("q-btn"),_=(0,t.up)("VuePDF"),y=(0,t.up)("q-tab-panel"),A=(0,t.up)("CodeEditor"),x=(0,t.up)("q-tab-panels");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(v,{modelValue:b.tab,"onUpdate:modelValue":n[0]||(n[0]=e=>b.tab=e),align:"left",dense:"","active-color":"green-6",style:{"border-bottom":"1px solid rgba(0, 0, 0, 0.12)"}},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"preview","no-caps":"",label:"Preview"}),(0,t.Wm)(f,{name:"code","no-caps":"",label:"Code"})])),_:1},8,["modelValue"]),(0,t.Wm)(x,{modelValue:b.tab,"onUpdate:modelValue":n[2]||(n[2]=e=>b.tab=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{name:"preview"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.Wm)(w,{color:"primary",class:"q-mx-sm",rounded:"",outline:"",padding:"sm md",dense:"","no-caps":"",label:b.enableAnno?"Disable":"Enable",onClick:n[1]||(n[1]=e=>b.enableAnno?b.enableAnno=!1:b.enableAnno=!0)},null,8,["label"]),(0,t._)("span",null,[s,(0,t._)("strong",null,(0,l.zw)(b.enableAnno),1)])]),(0,t._)("div",d,[(0,t._)("div",i,[(0,t.Wm)(_,{pdf:b.pdf,"annotation-layer":b.enableAnno},null,8,["pdf","annotation-layer"])])])])),_:1}),(0,t.Wm)(y,{name:"code"},{default:(0,t.w5)((()=>[r,p,(0,t._)("div",u,[(0,t.Wm)(A,{width:"60%",font_size:"14px",value:b.codeSample,read_only:!0},null,8,["value"])])])),_:1})])),_:1},8,["modelValue"])],64)}var c=a(3474),m=a(1959),f=a(4678);const v='\n<template>\n  <div class="text-center">\n    <button class="primary" @click="enableAnno ? (enableAnno = false) : (enableAnno = true)">\n      {{enableAnno ? \'Disable\' : \'Enable\'}}\n    </button>\n    <span>\n      Text enable: <strong>{{ enableAnno }}</strong>\n    </span>\n  </div>\n  <div class="text-center">\n    <div style="width: 600px"> // Width is the page width, use @loaded event to get it\n      <VuePDF :pdf="pdf" :text-layer="enableAnno" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { usePDF, VuePDF } from "@tato30/vue-pdf";\n\nexport default {\n  components: {\n    VuePDF,\n  },\n  setup() {\n    const enableAnno = ref(false);\n    const { pdf } = usePDF("example_014.pdf");\n    return {\n      enableAnno,\n      pdf\n    };\n  },\n};\n<\/script>\n',w={components:{VuePDF:f.m6,CodeEditor:c.Z},setup(){const e=(0,m.iH)(v),n=(0,m.iH)(!1),{pdf:a}=(0,f.Eb)("example_form.pdf");return{enableAnno:n,pdf:a,codeSample:e,tab:(0,m.iH)("preview")}}};var _=a(4260),y=a(5602),A=a(3269),x=a(5906),g=a(6602),h=a(269),V=a(7518),D=a.n(V);const P=(0,_.Z)(w,[["render",b]]),W=P;D()(w,"components",{QTabs:y.Z,QTab:A.Z,QTabPanels:x.Z,QTabPanel:g.Z,QBtn:h.Z})},4663:()=>{},172:()=>{},2001:()=>{},3779:()=>{},6558:()=>{},2258:()=>{}}]);