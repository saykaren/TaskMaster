(this.webpackJsonptaskmaster=this.webpackJsonptaskmaster||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(3),i=n.n(c),s=(n(10),n(11),n(5)),o=n(4),l=n(0),d=function(e){Object(o.a)(e);var t=Object(a.useState)([{name:"Clean car",category:"wip",bgcolor:"yellow"},{name:"Laundry",category:"wip",bgcolor:"pink"},{name:"Code",category:"wip",bgcolor:"skyblue"},{name:"Cook",category:"wip",bgcolor:"skyblue"},{name:"Workout",category:"wip",bgcolor:"skyblue"}]),n=Object(s.a)(t,2),r=n[0],c=n[1],i=function(e){e.preventDefault()},d=function(e,t){e.dataTransfer.setData("id",t)},u=function(e,t){var n=e.dataTransfer.getData("id"),a=[];r.map((function(e){e.name===n&&(e.category=t),a.push(e)})),c(a)};return Object(l.jsxs)("div",{className:"containerDrag",children:["Drag and drop",Object(l.jsxs)("section",{className:"taskContainer",children:[Object(l.jsxs)("div",{className:"taskWipComplete",id:"wip",onDrop:function(e){return u(e,e.currentTarget.id)},onDragOver:function(e){i(e)},children:[Object(l.jsx)("h1",{children:"WIP"}),Object(l.jsx)("div",{className:"eachTaskContainer",children:r&&r.filter((function(e){return"wip"===e.category})).map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"draggable",draggable:!0,onDragStart:function(t){return d(t,e.name)},children:e.name})},t)}))})]}),Object(l.jsxs)("div",{className:"taskWipComplete",id:"complete",onDrop:function(e){return u(e,e.currentTarget.id)},onDragOver:function(e){i(e)},children:[Object(l.jsx)("h1",{children:"Complete"}),Object(l.jsx)("div",{className:"eachTaskContainer",children:r&&r.filter((function(e){return"complete"===e.category})).map((function(e,t){return Object(l.jsx)("div",{className:"draggable",draggable:!0,onDragStart:function(t){return d(t,e.name)},children:e.name},t)}))})]})]})]})},u=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:"Task Master"}),Object(l.jsx)("section",{className:"AppContent",children:Object(l.jsx)(d,{})}),Object(l.jsx)("div",{className:"AppFooter",children:"Created by sayKaren"})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()}},[[13,1,2]]]);
//# sourceMappingURL=main.fb897be4.chunk.js.map