var e,n,t,s=(e,n,t)=>{if(!n.has(e))throw TypeError("Cannot "+t)},a=(e,n,t)=>(s(e,n,"read from private field"),t?t.call(e):n.get(e)),i=(e,n,t,a)=>(s(e,n,"write to private field"),a?a.call(e,t):n.set(e,t),t);import{V as l,u as o,m as r,l as c}from"./vendor.21675b8e.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((t,i)=>{const l=new URL(e,s);if(self[n].moduleMap[l])return t(self[n].moduleMap[l]);const o=new Blob([`import * as m from '${l}';`,`${n}.moduleMap['${l}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){i(new Error(`Failed to import: ${e}`)),a(r)},onload(){t(self[n].moduleMap[l]),a(r)}});document.head.appendChild(r)})),self[n].moduleMap={}}}("assets/");const u=[["View the Source Code of This Page","https://github.com/vanillajsx/vanillajsx.github.io"],["GitHub Repository","https://github.com/vanillajsx/VanillaJSX"],["Join Discussions","https://github.com/vanillajsx/VanillaJSX/discussions"]],d=()=>{const e=l.r("div",{id:"h-menu-button"},l.r("span",null),l.r("span",null)),n=l.r("div",{id:"backfield"}),t=l.r("div",{class:"menu_list_container hidden"},e,l.r("div",{class:"menu-list"},u.map((e=>{const n=l.r("p",null,e[0]);return n.onclick=()=>window.open(e[1]),n}))),n);return o(t,"open",!1),t.watch("open",(e=>{e?t.classList.remove("hidden"):t.classList.add("hidden")})),n.onclick=()=>t.open=!1,e.onclick=()=>t.open=!t.open,t};const h=()=>l.r("header",null,l.r("div",{class:"_title_69m70_12"},"Vanilla.JSX"),l.r(d,null));const p="_main_8b2wh_1";class m extends HTMLElement{constructor(...s){super(...s),e.set(this,1),n.set(this,null),t.set(this,void 0),i(this,t,l.r("div",{part:"bar"}));this.attachShadow({mode:"closed"}).appendChild(a(this,t))}static get observedAttributes(){return["max","value"]}connectedCallback(){this.render()}attributeChangedCallback(t,s,l){switch(t){case"max":i(this,e,+l),this.render();break;case"value":i(this,n,Math.min(a(this,e),l)),this.render()}}render(){if(a(this,n)){this.classList.remove("indeterminate"),a(this,n)===a(this,e)&&this.classList.add("complete");const s=a(this,n)/a(this,e)*100;a(this,t).style.width=s+"%"}else a(this,t).style.width="",this.classList.remove("complete"),this.classList.add("indeterminate")}get value(){return a(this,n)}get max(){return a(this,e)}set value(e){this.setAttribute("value",e)}set max(e){this.setAttribute("max",e)}}e=new WeakMap,n=new WeakMap,t=new WeakMap,customElements.define("custom-progress",m);const v=({progValue:e=0,children:n=null})=>{const t=l.r(m,{min:"0",max:"100",value:e}),s=l.r("button",null,"click"),a=l.r("div",{class:"t3"},s,t,((e,n)=>n.watch("progValue",(n=>e(n))))," %",n);return o(a,"progValue",e),a.watch("progValue",(e=>t.value=e)),s.onclick=()=>{a.progValue<100?a.progValue+=10:a.progValue=0},a};r.setOptions({highlight:function(e,n){return c.highlightAuto(e,[n]).value}});const g=()=>{const e=l.r("div",{class:"container"},r("<div class='center'>\n\n![logo](./vjsx.svg)\n\n#  Welcome to VanillaJSX!\n\n### Just a pure Javascript with JSX syntax.\n\nCode with pure Javascript, components, and JSX!\n</div>\n\n\n<div class='boxed' style='color: #a01232; font-size: larger;'>\n\n### ⚠️Caution⚠️\n- This is still in Draft phase!\n\n</div>\n\n---\n\n### Features\n- Component Based Development!\n- JSX syntax!\n- NO complex framework!\n- NO virtual DOMs! Just use your familiar HTML DOMs!\n- No Re-rendering by its framework, easier for developers to understand the behavior\n- Less Learning Difficulty than React\n- Just use your JS skills!\n- If you want to change DOM attributes or texts, JUST SET THEM BY YOURSELF!\n- TS support\n\n\n\n### How the Coding Works\nWhen you code this:\n```jsx\nconst elem1 = <div id='elem1'>hi!</div>\n```\nThis will work as:\n```js\nconst elem1 = document.createElement('div')\nelem1.append('hi!')\nelem1.id = 'elem1'\n```\n\n---\n\n## Usage\n### Installation\n```sh\nnpm i @vanillajsx/vjsx\n```\n### for [vitejs](https://vitejs.dev/)\nin your `vite.config.js`:\n```js\nexport default {\n  esbuild: {\n    jsxFactory: 'VJSX.r',\n    jsxFragment: 'VJSX.Fragment',\n    jsxInject: `import VJSX from '@vanillajsx/vjsx'`\n  },\n  //... other settings\n}\n```\nThen your JSX code would be interpreted as VanillaJSX! Have fun!\n\n---\n\n\n#### When you load VanillaJSX library,\n- `on` method, a shorthand of `addEventListener` \nis available on all the objects which provide 'addEventListener'.\n#### VanillaJSX provides:\n- `useAttr(elem: Element, propName: string, defaultValue: any)` method:\n  - This sets custom property variable on your element.\n  - This makes you able to listen the value change using `watch` listener:\n  - `elem.watch(propName: string, newValue => void)`\n    - `watch` listener is similar to `addEventListener` \n    - difference is that the listener function in `watch` recieves the new property value, not `Event` object.\n  - The code example below shows the usage of `useAttr` and `watch`.\n\nYou can code using function component, or using [CustomElement](https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements)\n\n#### Code Example\n```jsx\nimport { useAttr } from '@vanillajsx/vjsx'\nimport { CustomProgress } from './CustomProgress'\n\n//takes in attributes as arguments (access to children elements via 'children' attribute)\nconst Example = ({progValue=0, children})=>{\n\n  //declare elements\n  const progress = <CustomProgress min='0' max='100' value={progValue}/>\n  const btn = <button>click</button>\n  const self = (\n    <div class='t3'>\n      {btn}\n      {progress} \n      {(set, elem)=>elem.watch('progValue',v=>set(v))} %\n      {children}\n    </div>\n  )\n\n  /*\n  below defines a property named 'progValue',\n  and when 'progValue' changes, \n  all registered listeners will be executed.\n  */\n  useAttr(self, 'progValue', progValue)\n\n  // functionalities\n  //when `self.progValue` changed, set `progress.value` to `self.progValue`\n  self.watch('progValue',v=> progress.value = v)\n\n  btn.onclick = () =>{\n    /*\n      below just looks assigning a value to a property,\n      however this is running getter/setter method,\n      which executes all listener functions registered via `watch` method.\n    */\n    if(self.progValue<100) self.progValue+=10\n    else self.progValue = 0\n  }\n\n  // return self element\n  return self\t\n}\n```\n\n### Result of the code above\n<div id='example-result-space' class='boxed'></div>\n\n- see how changing `self.progValue` affects other multiple values using `self.watch` method.\n\n---\n\n## Roadmap\n\n- [x] VanillaJSX processor\n  - it dynamically appends components\n- [ ] make Typescript code suggestion work\n  - maybe making VSCode Extension might be a solution\n- [ ] Vite.js HMR Plugin\n- [ ] SSG builder\n  - it generates \n    - pre-rendered HTML\n    - JS files which initializes the components\n  - [ViteJS SSG loader](https://vitejs.dev/guide/ssr.html#ssr-specific-plugin-logic)\n\n").split("<hr>").map((e=>l.r("section",{innerHTML:e,class:"markdown-body"}))));e.querySelector("#example-result-space").appendChild(l.r(v,null));return l.r("div",{class:p},e)};document.querySelector("#app").appendChild(l.r("div",null,l.r(h,null),l.r(g,null)));
