"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2398],{51037:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=i(74848),r=i(28453),n=i(3514),c=i(84142);const o={id:"password-policy",title:"Password Policy",description:"Password Policy",custom_edit_url:null},a=void 0,l={id:"saviynt/password-policy",title:"Password Policy",description:"Password Policy",source:"@site/docs/saviynt/password-policy.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/password-policy",permalink:"/saviynt/password-policy",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"password-policy",title:"Password Policy",description:"Password Policy",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Create Security Questions",permalink:"/saviynt/create-security-questions"},next:{title:"Create Password Policy",permalink:"/saviynt/create-password-policy"}},d={},u=[];function p(t){return(0,s.jsx)(n.A,{items:(0,c.$S)().items})}function m(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p()}},3514:(t,e,i)=>{i.d(e,{A:()=>w});i(96540);var s=i(18215),r=i(84142),n=i(28774),c=i(16654),o=i(21312),a=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(t){let{href:e,children:i}=t;return(0,d.jsx)(n.default,{href:e,className:(0,s.A)("card padding--lg",l.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:r,description:n}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,s.A)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),n&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",l.cardDescription),title:n,children:n})]})}function m(t){let{item:e}=t;const i=(0,r.Nr)(e);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function y(t){let{item:e}=t;const i=(0,c.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??s?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(y,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h(t){let{className:e}=t;const i=(0,r.$S)();return(0,d.jsx)(w,{items:i.items,className:e})}function w(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(h,{...t});const n=(0,r.d1)(e);return(0,d.jsx)("section",{className:(0,s.A)("row",i),children:n.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:t})},e)))})}}}]);