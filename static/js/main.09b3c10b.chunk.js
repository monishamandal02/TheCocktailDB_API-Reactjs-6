(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.f3ad7664.svg"},20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),s=(a(25),a(5)),i=a(1);function o(e){var t=e.image,a=e.name,n=e.id,r=e.info,l=e.glass;return c.a.createElement("article",{className:"cocktail"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t,alt:a})),c.a.createElement("div",{className:"cocktail-footer"},c.a.createElement("h3",null,a),c.a.createElement("h4",null,l),c.a.createElement("p",null,r),c.a.createElement(s.b,{to:"/cocktail/".concat(n),className:"btn btn-primary btn-details"},"details")))}var m=function(){return c.a.createElement("div",{className:"loader"})},u=a(9),E=a.n(u),d=a(11),p=a(8),f=c.a.createContext(),h=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(p.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)("a"),o=Object(p.a)(i,2),m=o[0],u=o[1],h=Object(n.useState)([]),b=Object(p.a)(h,2),k=b[0],g=b[1],v=Object(n.useCallback)(Object(d.a)(E.a.mark((function e(){var t,a,n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(m));case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log(a),(n=a.drinks)?(c=n.map((function(e){return{id:e.idDrink,name:e.strDrink,image:e.strDrinkThumb,info:e.strAlcoholic,glass:e.strGlass}})),g(c)):g([]),s(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),s(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])}))),[m]);return Object(n.useEffect)((function(){v()}),[m,v]),c.a.createElement(f.Provider,{value:{loading:l,cocktails:k,searchTerm:m,setSearchTerm:u}},t)},b=function(){return Object(n.useContext)(f)};function k(){var e=b(),t=e.cocktails;return e.loading?c.a.createElement(m,null):t.length<1?c.a.createElement("h2",{className:"section-title"},"no cocktails matched your search criteria"):c.a.createElement("section",{className:"section"},c.a.createElement("h2",{className:"section-title"},"cocktails"),c.a.createElement("div",{className:"cocktails-center"},t.map((function(e){return c.a.createElement(o,Object.assign({key:e.id},e))}))))}function g(){var e=b().setSearchTerm,t=c.a.useRef("");return c.a.useEffect((function(){t.current.focus()}),[]),c.a.createElement("section",{className:"section search"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault()}},c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"name"},"search your favorite cocktail"),c.a.createElement("input",{type:"text",name:"name",id:"name",ref:t,onChange:function(){e(t.current.value)}}))))}function v(){return c.a.createElement("main",null,c.a.createElement(g,null),c.a.createElement(k,null))}function N(){return c.a.createElement("section",{className:"section about-section"},c.a.createElement("h1",{className:"section-title"},"about us"),c.a.createElement("p",null,"Whether you are planning for a party or simply wondering what to order during your next night out on the town, knowing the most common and popular cocktails makes ordering and serving a breeze. Cocktails typically contain one or more types of liquor along with several mixers, such as fruit juice, citrus juice, mint, honey, bitters, soda, and/or cream."))}function y(){var e=Object(i.f)().id,t=c.a.useState(!1),a=Object(p.a)(t,2),n=a[0],r=a[1],l=c.a.useState(null),o=Object(p.a)(l,2),u=o[0],f=o[1];if(c.a.useEffect((function(){function t(){return(t=Object(d.a)(E.a.mark((function t(){var a,n,c,l,s,i,o,m,u,d,p,h,b,k;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).drinks?(c=n.drinks[0],l=c.strDrink,s=c.strDrinkThumb,i=c.strAlcoholic,o=c.strCategory,m=c.strGlass,u=c.strInstructions,d=c.strIngredient1,p=c.strIngredient2,h=c.strIngredient3,b=c.strIngredient4,k=c.strIngredient5,f({name:l,image:s,info:i,category:o,glass:m,instructions:u,ingredients:[d,p,h,b,k]})):f(null),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:r(!1);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}r(!0),function(){t.apply(this,arguments)}()}),[e]),n)return c.a.createElement(m,null);if(u){var h=u.name,b=u.image,k=u.category,g=u.info,v=u.glass,N=u.instructions,y=u.ingredients;return c.a.createElement("section",{className:"section cocktail-section"},c.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home"),c.a.createElement("h2",{className:"section-title"},h),c.a.createElement("div",{className:"drink"},c.a.createElement("img",{src:b,alt:h}),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"name :")," ",h),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"category :")," ",k),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"info :")," ",g),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"glass :")," ",v),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"instructons :")," ",N),c.a.createElement("p",null,c.a.createElement("span",{className:"drink-data"},"ingredients :"),y.map((function(e,t){return e?c.a.createElement("span",{key:t}," ",e):null}))))))}return c.a.createElement("h2",{className:"section-title"},"no cocktail to display")}function j(){return c.a.createElement("section",{className:"error-page section"},c.a.createElement("div",{className:"error-container"},c.a.createElement("h1",null,"oops! it's a dead end"),c.a.createElement(s.b,{to:"/",className:"btn btn-primary"},"back home")))}var w=a(19),x=a.n(w);function O(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"nav-center"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{src:x.a,alt:"cocktail db logo",className:"logo"})),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/about"},"about")))))}var S=function(){return c.a.createElement(s.a,null,c.a.createElement(O,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(v,null)),c.a.createElement(i.a,{path:"/about"},c.a.createElement(N,null)),c.a.createElement(i.a,{path:"/cocktail/:id"},c.a.createElement(y,null)),c.a.createElement(i.a,{path:"*"},c.a.createElement(j,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null,c.a.createElement(S,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.09b3c10b.chunk.js.map