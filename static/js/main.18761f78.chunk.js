(this["webpackJsonpcearun-converter"]=this["webpackJsonpcearun-converter"]||[]).push([[0],{30:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);t(25);var c=t(0),r=t.n(c),s=t(19),a=t.n(s),i=(t(30),t(14)),l=t(3),o=t(42),j=t(43),d=t(1),u=function(){return Object(d.jsx)(o.a,{fluid:"md",className:"mt-5",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)("h1",{className:"text-center",children:"404 - Page not found"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"Home Page"})})]})})},h=t(12),b=t(7),f=t(21),O=t(44),v=t(45),x=t(22),p=t.n(x),m=t(23),g=t.n(m),N=function e(n,t){Object(f.a)(this,e),this.name=void 0,this.content=void 0,this.name=n,this.content=t},y=function(){var e=Object(c.useState)(),n=Object(b.a)(e,2),t=n[0],r=n[1],s=/Pin\s*=\s*(\d*.?\d*)/,a=/Ac\/At\s*=\s*(\d*.?\d*)/,i=/O\/F\s*=\s*(\d*.?\d*)/,l=/(\r\n|\r|\n)/gm;function j(e,n){var t=e.exec(n);if(t)return t[1]}function u(e){var n=[],t=j(s,e),c=j(i,e);n.push(t),n.push("".concat(j(a,e))),n.push(c);var r,l=e.split("\n\n").filter((function(e){return e.length>0})),o=(l[4]+"\n"+l[5]).split("\n"),d=["Pinj/P","P, BAR","T, K","GAMMAs","SON VEL,M/SEC","MACH NUMBER"],u=Object(h.a)(o);try{for(u.s();!(r=u.n()).done;){var b=f(r.value,[16,9]),O=b[0].trim();if(-1!==d.indexOf(O)){for(var v=[],x=1;x<b.length;x++)v.push(b[x].trim());n.push(v.join(" "))}}}catch(C){u.e(C)}finally{u.f()}n.push("");var p,m=l[7].split("\n"),g=Object(h.a)(m);try{for(g.s();!(p=g.n()).done;){for(var y=f(p.value,[25,9]),A=[],E=1;E<y.length;E++)A.push(y[E].trim());n.push(A.join(" "))}}catch(C){g.e(C)}finally{g.f()}return new N(t+"_"+parseInt(c),n.join("\n"))}function f(e,n){for(var t=[],c=0,r=0;r<e.length;){var s=r+n[c],a=e.substring(r,s);t.push(a),r=s,c<n.length-1&&c++}return t}return Object(d.jsxs)(o.a,{fluid:"md",className:"mt-5",children:[Object(d.jsx)("div",{className:"card-header",children:"cearun converter"}),Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{children:["Converts data generated using ",Object(d.jsx)("a",{href:"https://cearun.grc.nasa.gov/",children:"https://cearun.grc.nasa.gov/"})]}),Object(d.jsxs)(O.a.Group,{controlId:"formFileLg",className:"mb-3",children:[Object(d.jsx)(O.a.Label,{children:" Input file"}),Object(d.jsx)(O.a.Control,{type:"file",size:"lg",onChange:function(e){return function(e){if(console.log(e),null!==e&&1===e.length){var n=e.item(0);n&&r(n)}else r(void 0)}(e.target.files)}})]}),Object(d.jsx)(v.a,{onClick:function(){null===t||void 0===t||t.text().then((function(e){return e.replace(l,"\n")})).then((function(e){var n=e.split("THEORETICAL ROCKET PERFORMANCE ASSUMING EQUILIBRIUM");n.splice(0,1);var c,r=new p.a,s=Object(h.a)(n);try{for(s.s();!(c=s.n()).done;){var a=u(c.value);r.file(a.name+".txt",a.content),console.log(a.content)}}catch(i){s.e(i)}finally{s.f()}r.generateAsync({type:"blob"}).then((function(e){g.a.saveAs(e,(null===t||void 0===t?void 0:t.name)+".zip")}))}))},disabled:!t,children:"Download"})]})})]})},A=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{basename:"".concat("/cearun"),children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(y,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(u,{})})]})})})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[41,1,2]]]);