(()=>{"use strict";class t{constructor(t,e){this.name=t,this.desc=e,this.Todos=[]}appendToDo(t){this.Todos.push(t)}buildProject(){}}class e{constructor(t){this.elementType=t,this.attributes={},this.children=[],this.eventListeners={}}buildElement(){const t=document.createElement(this.elementType);for(const e in this.attributes)"hidden"===e&&!0===this.attributes[e]?t.setAttribute("hidden",""):!0===this.attributes[e]||!1===this.attributes[e]?t.toggleAttribute(e,this.attributes[e]):t.setAttribute(e,this.attributes[e]);for(const e in this.eventListeners)this.eventListeners[e].forEach((s=>{t.addEventListener(e,s)}));if(void 0===this.text)for(const e of this.children)t.appendChild(e.buildElement());else{const e=document.createTextNode(this.text);t.appendChild(e)}return t}setAttributes(t){return Object.assign(this.attributes,t),this}addChild(t){return this.text=void 0,this.children.push(t),this}setTextContent(t){return this.children=[],this.text=t,this}appendEventListener(t,e){return this.eventListeners[t]?this.eventListeners[t].push(e):this.eventListeners[t]=[e],this}}(()=>{const s=document.querySelector("#content"),i=new e("div");i.setAttributes({id:"header"}).addChild(new e("span").setAttributes({id:"logo"})).addChild(new e("span").setAttributes({id:"title"}).addChild(new e("span").setTextContent("When")).addChild(new e("span").setTextContent("2").setAttributes({style:"color: #42A4EB;"})).addChild(new e("span").setTextContent("do")));const n=new e("div");n.setAttributes({id:"container"}).addChild(new e("div").setTextContent("Home").setAttributes({class:"tab"})).addChild(new e("div").setTextContent("Projects").setAttributes({class:"tab"})).addChild(new e("div").setAttributes({id:"projects"}).addChild(new e("div").setTextContent("Add New Project +").appendEventListener("click",(function(t){t.preventDefault,document.querySelector(".projectform").toggleAttribute("hidden")})))).addChild(new e("div").setTextContent("Settings").setAttributes({class:"tab"}));const d=new e("div");d.setAttributes({class:"projectform",hidden:!0}).addChild(new e("div").setTextContent("Project Name")).addChild(new e("input").setAttributes({required:!0,class:"projectinput",placeholder:"Enter project title"})).addChild(new e("div").setTextContent("Project Description")).addChild(new e("input").setAttributes({required:!0,class:"projectinput",placeholder:"Enter project desc"})).addChild(new e("button").setTextContent("Create").setAttributes({type:"sumbit",value:"sumbit"}).appendEventListener("click",(function(e){(t=>{t.preventDefault();var e=document.querySelectorAll(".projectinput"),s=!0;return e.forEach((function(t){""===t.value.trim()?(s=!1,t.classList.add("error")):t.classList.remove("error")})),document.querySelector(".projectform").toggleAttribute("hidden"),s})(e)&&(()=>{const e=document.querySelector(".projectinput"),s=e[0],i=e[1],n=new Project(s,i);t.buildProject(),console.log(n)})(title,desc)})));const r=new e("div");r.setAttributes({id:"project-list"});const o=i.buildElement(),l=n.buildElement(),c=r.buildElement(),u=d.buildElement();s.appendChild(u),s.appendChild(o),s.appendChild(l),s.appendChild(c)})()})();