(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#",className:"nav-link"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode"))))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",{style:{color:"light"===e.mode?"#042743":"white"}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"#042743":"white"},onChange:function(e){console.log("on Change"),o(e.target.value)},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to UpperCase","success")}},"Covert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to LowerCase","success")}},"Covert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){o(""),e.showAlert("Text Has Been Cleared","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text is Copied","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.trim().split("  ").filter(function(e){return""!==e});o(t.join(" ")),e.showAlert("Extra Spaces are Removed","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"#042743":"white"}},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter Your Text to Preview it Here")))}var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],g=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",g("Dark Mode has been Enabled!","success"),document.title="TextUtils - Dark Mode"):(r("light"),document.body.style.backgroundColor="white",g("Light Mode has been Enabled!","success"),document.title="TextUtils - Light Mode")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:g,heading:"Enter Text to Analyze Below",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.4af1ec13.chunk.js.map