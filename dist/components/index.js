import e from"react";var n=function(n){var a=n.openIn,r=void 0===a?"self":a,t=n.href,l=n.children;return["external","_external"].includes(r)?e.createElement("a",{href:t,rel:"noopener noreferrer",target:"_blank"},l):e.createElement("a",{href:t,target:["blank","_blank"].includes(r)?"_blank":"_self"},l)},a=function(n){var a=n.fill,r=void 0===a?"flat":a,t=n.text,l=void 0===t?"normal":t,o=n.size,i=void 0===o?"normal":o,c=n.color,s=void 0===c?"plain":c,d=n.shape,u=void 0===d?"normal":d,m=n.type,b=void 0===m?"button":m,f=n.disabled,p=void 0!==f&&f,h=n.openIn,k=n.href,v=n.onClick,_=n.children,E=[];switch(E.push(r),"normal"!==l&&E.push(l),"normal"!==i&&E.push(i),"plain"!==s&&E.push(s),"normal"!==u&&E.push(u),b){case"link":return["external","_external"].includes(h)?e.createElement("a",{href:p?"":k,className:["button"].concat(E).join(" "),rel:"noopener noreferrer",target:"_blank",disabled:p,onClick:v},_):e.createElement("a",{href:p?"":k,className:["button"].concat(E).join(" "),target:["blank","_blank"].includes(h)?"_blank":"_self",disabled:p,onClick:v},_);case"submit":return e.createElement("button",{type:"submit",className:E.join(" "),disabled:p,onClick:v},_);case"reset":return e.createElement("button",{type:"reset",className:E.join(" "),disabled:p,onClick:v},_);default:return e.createElement("button",{className:E.join(" "),disabled:p,onClick:v},_)}},r=function(n){return e.createElement("div",{className:"card"},n.children)};export{n as Hyperlink,a as Button,r as Card};
