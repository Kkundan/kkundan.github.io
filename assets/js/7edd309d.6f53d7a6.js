"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1397],{68156:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=i(74848),n=i(28453),a=i(3514),r=i(84142);const c={id:"update-task",title:"Update Task",description:"Update Task",custom_edit_url:null},o=void 0,d={id:"saviynt/update-task",title:"Update Task",description:"Update Task",source:"@site/docs/saviynt/update-task.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/update-task",permalink:"/api-editor.github.io/saviynt/update-task",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-task",title:"Update Task",description:"Update Task",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Create Task - Remove Entitlement",permalink:"/api-editor.github.io/saviynt/create-task-remove-entitlement"},next:{title:"Complete Single Task",permalink:"/api-editor.github.io/saviynt/complete-single-task"}},l={},u=[];function p(t){return(0,s.jsx)(a.A,{items:(0,r.$S)().items})}function m(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(p,{...t})}):p()}},3514:(t,e,i)=>{i.d(e,{A:()=>x});i(96540);var s=i(18215),n=i(84142),a=i(28774),r=i(16654),c=i(21312),o=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(74848);function u(t){let{href:e,children:i}=t;return(0,l.jsx)(a.default,{href:e,className:(0,s.A)("card padding--lg",d.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:n,description:a}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(o.default,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:n,children:[i," ",n]}),a&&(0,l.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function m(t){let{item:e}=t;const i=(0,n.Nr)(e);return i?(0,l.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const i=(0,r.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.cC)(e.docId??void 0);return(0,l.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??s?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(f,{item:e});case"category":return(0,l.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function k(t){let{className:e}=t;const i=(0,n.$S)();return(0,l.jsx)(x,{items:i.items,className:e})}function x(t){const{items:e,className:i}=t;if(!e)return(0,l.jsx)(k,{...t});const a=(0,n.d1)(e);return(0,l.jsx)("section",{className:(0,s.A)("row",i),children:a.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:t})},e)))})}}}]);