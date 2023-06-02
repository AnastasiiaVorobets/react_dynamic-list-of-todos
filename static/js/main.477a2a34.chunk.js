(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),d=c.n(l),i=(c(10),c(11),c(4)),o=c.n(i),r=c(0),j=d.a.memo((function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(r.jsx)("span",{className:"icon",children:c&&c.id===e.id?Object(r.jsx)("i",{className:"far fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})})),b=d.a.memo((function(e){var t=e.query,c=e.setQuery,s=e.filteredBy,a=e.setFilteredBy;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){a(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{value:t,"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})})),u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],i=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then((function(e){return i(e)}))}),[t.userId]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),d?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===d||void 0===d?void 0:d.name})]})]})]}):Object(r.jsx)(u,{})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),d=Object(n.a)(a,2),i=d[0],o=d[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)(null),v=Object(n.a)(N,2),y=v[0],g=v[1];Object(l.useEffect)((function(){h("/todos").then((function(e){s(e)}))}),[]);var k=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(i.toLowerCase());switch(f){case"all":return t;case"active":return!e.completed&&t;case"completed":return e.completed&&t;default:return"error"}}))}),[c,i,f]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:i,setQuery:o,filteredBy:f,setFilteredBy:p})}),Object(r.jsx)("div",{className:"block",children:c.length>0?Object(r.jsx)(j,{todos:k,selectedTodo:y,setSelectedTodo:g}):Object(r.jsx)(u,{})})]})})}),y&&Object(r.jsx)(m,{selectedTodo:y,setSelectedTodo:g})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.477a2a34.chunk.js.map