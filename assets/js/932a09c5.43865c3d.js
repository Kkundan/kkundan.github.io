"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6129],{80067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var i=r(74848),s=r(28453),n=r(3514),a=r(84142);const c={id:"create-request",title:"Create Request",description:"Create Request",custom_edit_url:null},o=void 0,l={id:"saviynt/create-request",title:"Create Request",description:"Create Request",source:"@site/docs/saviynt/create-request.tag.mdx",sourceDirName:"saviynt",slug:"/saviynt/create-request",permalink:"/api-editor.github.io/saviynt/create-request",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-request",title:"Create Request",description:"Create Request",custom_edit_url:null},sidebar:"saviyntSidebar",previous:{title:"Check Task Status",permalink:"/api-editor.github.io/saviynt/check-task-status"},next:{title:"Create User Request",permalink:"/api-editor.github.io/saviynt/create-user-request"}},u={},d=[];function m(e){return(0,i.jsx)(n.A,{items:(0,a.$S)().items})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var i=r(18215),s=r(84142),n=r(28774),a=r(16654),c=r(21312),o=r(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function d(e){let{href:t,children:r}=e;return(0,u.jsx)(n.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:n}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(o.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:s,children:[r," ",s]}),n&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:n,children:n})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t);return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const n=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",r),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}}}]);