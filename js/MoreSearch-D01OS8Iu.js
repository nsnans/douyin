import{u as n,S as l,_ as d}from"./common-Bl2-1zsm.js";import{s as i}from"./other-D--f_ztc.js";import"./vendor-CvG_Gu8L.js";const h={id:"MoreSearch"},V={class:"content"},p=Vue.defineComponent({name:"MoreSearch"}),m=Vue.defineComponent({...p,setup(_){const c=n(),u=VueRouter.useRouter(),a=VueRouter.useRoute(),e=Vue.reactive({searchKey:""}),s=Vue.computed(()=>c.friends.all.filter(o=>o.name.search(e.searchKey)!==-1||o.account.search(e.searchKey)!==-1));return Vue.onMounted(()=>{e.searchKey=String(a.query.key)}),(o,r)=>(Vue.openBlock(),Vue.createElementBlock("div",h,[Vue.createElementVNode("div",V,[Vue.createVNode(l,{modelValue:e.searchKey,"onUpdate:modelValue":r[0]||(r[0]=t=>e.searchKey=t),"right-text":"取消","right-text-color":"white",onNotice:Vue.unref(u).back,isShowRightText:!0},null,8,["modelValue","onNotice"]),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(s.value,t=>(Vue.openBlock(),Vue.createBlock(i,{key:t.id,mode:"search",searchKey:e.searchKey,people:t},null,8,["searchKey","people"]))),128))])]))}}),K=d(m,[["__scopeId","data-v-025d0a4b"]]);export{K as default};