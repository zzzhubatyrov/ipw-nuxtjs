import{d as y,j as h,r as u,a as p,_ as m,c as d,b as s,t as c,F as b,n as k,h as f,o as l,p as g,g as D}from"./entry.34ecb820.js";import{a as v}from"./axios.21b846bc.js";const B=y({setup(){const{id:a}=h().params,_="https://api.itprofessionalswork.ru/vacancy/v1/"+a,r="https://api.itprofessionalswork.ru/company/v1/"+a,t=u([]),e=u([]),i=u([]);return p(async()=>{try{const o=await v.get(_);t.value=o.data,e.value=t.value.skills.split(" ")}catch(o){console.error(o)}}),p(async()=>{try{const o=await v.get(r);i.value=o.data}catch(o){console.error(o)}}),{companyData:i,vacancy:t,skills:e}}});const n=a=>(g("data-v-44cf161a"),a=a(),D(),a),E={class:"container"},w={class:"container-head"},A={class:"company"},F=["src"],S={class:"company-data"},$={class:"name"},C={class:"location"},I=n(()=>s("div",{class:"company-btn_block"},[s("button",{class:"btn about-company_btn"},"Подробнее")],-1)),j={class:"main-vacancy"},N={class:"skills-block"},T=n(()=>s("div",{class:"skills-head"},"Ключевые навыки",-1)),V={class:"skills-content"},q={class:"skill-item"},L={class:"vacancy-info"},M={class:"vacancy-data"},R={class:"vacancy-titleSalary_block"},z={class:"vacancy-title"},G={class:"vacancy-salary"},H={class:"employment-exp_block"},J={class:"vacancy-description-item"},K={class:"vacancy-description-item"},O=n(()=>s("button",{class:"btn success req-btn"},"Откликнуться",-1)),P={class:"container-content"},Q={class:"about-company_block"},U=n(()=>s("h2",{class:"about-company_head"},"О компании",-1)),W={class:"about-company_content"};function X(a,_,r,t,e,i){return l(),d("div",E,[s("div",w,[s("div",A,[s("img",{class:"logo",src:`data:image/jpeg;base64,${a.companyData.photo}`,alt:"logo"},null,8,F),s("div",S,[s("div",$,c(a.companyData.name),1),s("div",C,c(a.companyData.location),1),I])]),s("div",j,[s("div",N,[T,s("div",V,[(l(!0),d(b,null,k(a.skills,o=>(l(),d("div",q,c(o),1))),256))])]),s("div",L,[s("div",M,[s("div",R,[s("div",z,c(a.vacancy.level)+" "+c(a.vacancy.direction),1),s("div",G,"до "+c(a.vacancy.salary)+" ₽ на руки",1)]),s("div",H,[s("div",J,[f("Требуемый опыт: "),s("span",null,c(a.vacancy.experience),1)]),s("div",K,c(a.vacancy.workTime),1)])]),O])])]),s("div",P,[s("div",Q,[U,s("div",W,c(a.vacancy.description),1)])])])}const x=m(B,[["render",X],["__scopeId","data-v-44cf161a"]]);export{x as default};
