import{d as a,r as c,a as _,_ as u,c as t,F as i,n as p,o as n,z as d,C as m}from"./entry.34ecb820.js";import{a as l}from"./axios.21b846bc.js";const f=a({setup(){const e=c([]);return _(async()=>{try{const s=await l.get("https://api.itprofessionalswork.ru/resume/v1/resumes");e.value=s.data}catch(s){console.error(s)}}),{resumes:e}}});const v={class:"container"};function x(e,s,y,h,k,$){const r=m;return n(),t("div",v,[(n(!0),t(i,null,p(e.resumes,o=>(n(),t("div",{class:"r_item",key:o.id},[d(r,{resume:o},null,8,["resume"])]))),128))])}const w=u(f,[["render",x],["__scopeId","data-v-c01f4f83"]]);export{w as default};
