"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[101],{32146:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var i=r(74848),n=r(28453),s=r(3514),o=r(84142);const c={id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},a=void 0,l={id:"petstore/pet",title:"Pets",description:"Pets",source:"@site/docs/petstore/pet.tag.mdx",sourceDirName:"petstore",slug:"/petstore/pet",permalink:"/api-editor.github.io/petstore/pet",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},sidebar:"petstore",previous:{title:"Introduction",permalink:"/api-editor.github.io/petstore/swagger-petstore-yaml"},next:{title:"Add a new pet to the store",permalink:"/api-editor.github.io/petstore/add-pet"}},d={},u=[];function p(t){const e={p:"p",...(0,n.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Everything about your Pets"}),"\n","\n","\n",(0,i.jsx)(s.A,{items:(0,o.$S)().items})]})}function m(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},3514:(t,e,r)=>{r.d(e,{A:()=>g});r(96540);var i=r(18215),n=r(84142),s=r(28774),o=r(16654),c=r(21312),a=r(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function u(t){let{href:e,children:r}=t;return(0,d.jsx)(s.default,{href:e,className:(0,i.A)("card padding--lg",l.cardContainer),children:r})}function p(t){let{href:e,icon:r,title:n,description:s}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:n,children:[r," ",n]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:s,children:s})]})}function m(t){let{item:e}=t;const r=(0,n.Nr)(e);return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function h(t){let{item:e}=t;const r=(0,o.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:r,title:e.label,description:e.description??i?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(h,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const r=(0,n.$S)();return(0,d.jsx)(g,{items:r.items,className:e})}function g(t){const{items:e,className:r}=t;if(!e)return(0,d.jsx)(x,{...t});const s=(0,n.d1)(e);return(0,d.jsx)("section",{className:(0,i.A)("row",r),children:s.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:t})},e)))})}}}]);