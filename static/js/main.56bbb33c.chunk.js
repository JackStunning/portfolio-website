(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{67:function(e,c,t){},68:function(e,c,t){},82:function(e,c,t){"use strict";t.r(c);var s=t(2),j=t(1),n=t.n(j),a=t(8),i=t.n(a),r=(t(67),t(68),t(16)),l=t(113),o=t(114),b=t(115),h=t(108),d=t(110),O=t(112),x=t(118),u=t(119),m=t(53),p=t.n(m),g=Object(h.a)((function(e){return{menuButton:{color:"white"}}})),f=function(e){var c=g(),t=Object(j.useState)(null),n=Object(r.a)(t,2),a=n[0],i=n[1],l=Object(j.useState)(!1),o=Object(r.a)(l,2),b=o[0],h=o[1],m=function(){i(null)};return e.CatFactActivity(b),console.log("catFactActive",b),Object(s.jsxs)("div",{children:[Object(s.jsx)(d.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:Object(s.jsx)(O.a,{edge:"start","aria-label":"menu",children:Object(s.jsx)(p.a,{className:c.menuButton})})}),Object(s.jsxs)(x.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:m,children:[Object(s.jsx)(u.a,{onClick:m,children:"Projects"}),Object(s.jsx)(u.a,{onClick:m,children:"Calculator"}),Object(s.jsx)(u.a,{onClick:m,children:"Clock"}),Object(s.jsx)(u.a,{onClick:function(){h(!b),m()},children:"Cat Fact"})]})]})},v=t(54),N=t.n(v),k=function(e){var c=Object(j.useState)(null),t=Object(r.a)(c,2),n=t[0],a=t[1],i=Object(j.useState)(!1),l=Object(r.a)(i,2),o=l[0],b=l[1],h=Object(j.useState)([]),O=Object(r.a)(h,2),x=O[0],u=O[1],m=Object(j.useState)(!1),p=Object(r.a)(m,2),g=p[0],f=p[1];return console.log("CatFact props",e),Object(j.useEffect)((function(){f(e.props)}),[e.props]),Object(j.useEffect)((function(){fetch("https://cat-fact.herokuapp.com/facts").then((function(e){return e.json()})).then((function(e){b(!0),u(e)}),(function(e){b(!0),a(e),console.log("error")}))}),[]),console.log("isA",g),n?Object(s.jsxs)("div",{children:["Error: ",n.message]}):o?!0===g?Object(s.jsx)(N.a,{children:Object(s.jsx)("div",{className:"cat-fact-div",children:Object(s.jsx)("ul",{className:"cat-facts",children:x.map((function(e){return Object(s.jsxs)("li",{className:"cat-fact",children:[e.text," ",e.createdAt,Object(s.jsx)(d.a,{children:"X"})]},e._id)}))})})}):null:Object(s.jsx)("div",{children:"Loading..."})},C=function(){var e=Object(j.useState)(!1),c=Object(r.a)(e,2),t=c[0],n=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(l.a,{position:"static",children:Object(s.jsxs)(o.a,{variant:"dense",children:[Object(s.jsx)(f,{CatFactActivity:function(e){n(e)}}),Object(s.jsx)(b.a,{variant:"h6",color:"inherit",children:"Stunning"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(k,{props:t})})]})},S=t(55),w=function(){return Object(s.jsx)("div",{className:"App-showcase",children:Object(s.jsxs)("div",{className:"showcase-overlay",children:[Object(s.jsxs)("h1",{children:["Hi, I'm Jack Dunning.",Object(s.jsx)("br",{})," I'm a Web Developer currently looking for a job in Seattle."]}),Object(s.jsx)("p",{children:"Interested in working together? Feel free to contact me for any project or collaboration."}),Object(s.jsx)(S.a,{})]})})},F=t(116),J=t(117),A=function(){return Object(s.jsxs)("div",{id:"Skills",className:"Skills",children:[Object(s.jsx)("h2",{children:"Skills"}),Object(s.jsxs)("div",{className:"Skills-cards",children:[Object(s.jsx)(F.a,{className:"skill",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Languages"}),Object(s.jsx)(b.a,{children:"Javascript"}),Object(s.jsx)(b.a,{children:"HTML"}),Object(s.jsx)(b.a,{children:"CSS"}),Object(s.jsx)(b.a,{children:"C#"}),Object(s.jsx)(b.a,{children:"Python"})]})}),Object(s.jsx)(F.a,{className:"skill",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Other Technologies"}),Object(s.jsx)(b.a,{children:"React"}),Object(s.jsx)(b.a,{children:"Jquery"}),Object(s.jsx)(b.a,{children:"Sass"}),Object(s.jsx)(b.a,{children:"GraphQL"}),Object(s.jsx)(b.a,{children:"SQL"}),Object(s.jsx)(b.a,{children:"MongoDB"})]})})]})]})},y=function(){return Object(s.jsxs)("div",{className:"Jobs",children:[Object(s.jsx)("h2",{children:"Jobs"}),Object(s.jsxs)("div",{className:"jobs-cards",children:[Object(s.jsx)(F.a,{className:"job",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Anywhere.com"}),Object(s.jsx)("p",{children:"2020"}),Object(s.jsx)("h4",{children:"Intern Web Developer"}),Object(s.jsx)(b.a,{children:"Javascript"}),Object(s.jsx)(b.a,{children:"React"}),Object(s.jsx)(b.a,{children:"GraphQL"}),Object(s.jsx)(b.a,{children:"AgGrid"})]})}),Object(s.jsx)(F.a,{className:"job",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Target"}),Object(s.jsx)("p",{children:"2017-2019"}),Object(s.jsx)("h4",{children:"Tech Consultant"}),Object(s.jsx)(b.a,{children:"Sales"}),Object(s.jsx)(b.a,{children:"Costumer Service"})]})}),Object(s.jsx)(F.a,{className:"job",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Kauai Nut Roasters"}),Object(s.jsx)("p",{children:"2014-2017"}),Object(s.jsx)("h4",{children:"Roaster"}),Object(s.jsx)(b.a,{children:"Cooking"}),Object(s.jsx)(b.a,{children:"Cleaning"})]})})]})]})},P=function(){return Object(s.jsxs)("div",{className:"Projects",children:[Object(s.jsx)("h2",{children:"Projects"}),Object(s.jsxs)("div",{className:"project-cards",children:[Object(s.jsx)(F.a,{className:"project",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Adventureon"}),Object(s.jsx)("a",{href:"https://jackstunning.github.io/textAdventure/",children:Object(s.jsx)("img",{className:"project-img",src:"https://i.imgur.com/fmM8ShI.jpeg",alt:"code"})}),Object(s.jsx)(b.a,{children:"Html"}),Object(s.jsx)(b.a,{children:"Css"}),Object(s.jsx)(b.a,{children:"Jquery"})]})}),Object(s.jsx)(F.a,{className:"project",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Project Name"}),Object(s.jsx)("img",{className:"project-img",src:"https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg",alt:"code"}),Object(s.jsx)(b.a,{children:"Javascript"})]})}),Object(s.jsx)(F.a,{className:"project",children:Object(s.jsxs)(J.a,{children:[Object(s.jsx)("h3",{children:"Project Name"}),Object(s.jsx)("img",{className:"project-img",src:"https://www.gettingsmart.com/wp-content/uploads/2017/06/Program-Code-Feature-Image.jpg",alt:"code"}),Object(s.jsx)(b.a,{children:"Javascript"})]})})]})]})},I=t(41),L=function(){return Object(s.jsxs)("div",{className:"Footer",children:[Object(s.jsx)("a",{className:"icon",href:"https://github.com/JackStunning",children:Object(s.jsx)(I.a,{size:50})}),Object(s.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/jackstunning/",children:Object(s.jsx)(I.b,{size:50})})]})};var T=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(C,{}),Object(s.jsx)(w,{}),Object(s.jsx)("div",{children:Object(s.jsx)(A,{})}),Object(s.jsx)("div",{children:Object(s.jsx)(y,{})}),Object(s.jsx)("div",{children:Object(s.jsx)(P,{})}),Object(s.jsx)(L,{})]})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,121)).then((function(c){var t=c.getCLS,s=c.getFID,j=c.getFCP,n=c.getLCP,a=c.getTTFB;t(e),s(e),j(e),n(e),a(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),B()}},[[82,1,2]]]);
//# sourceMappingURL=main.56bbb33c.chunk.js.map