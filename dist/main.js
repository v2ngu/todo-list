(()=>{"use strict";class t{static projectsArray=[];static getAllProjects(){return t.projectsArray}static addProject(e){t.projectsArray.push(e)}static deleteProject(e){t.projectsArray.splice(Librarian.projectsArray.indexOf(e),1)}static getProjectById(e){return t.projectsArray.find((t=>t._id===e))}}class e{static counter=0;constructor(t,i){this._name=t,this._desc=i,this._todos=[],this._id=e.counter,e.counter++}appendToDo(t){this._todos.push(t)}}class i{constructor(t){this.elementType=t,this.attributes={},this.children=[],this.eventListeners={}}buildElement(){const t=document.createElement(this.elementType);for(const e in this.attributes)"hidden"===e&&!0===this.attributes[e]?t.setAttribute("hidden",""):!0===this.attributes[e]||!1===this.attributes[e]?t.toggleAttribute(e,this.attributes[e]):t.setAttribute(e,this.attributes[e]);for(const e in this.eventListeners)this.eventListeners[e].forEach((i=>{t.addEventListener(e,i)}));if(void 0===this.text)for(const e of this.children)t.appendChild(e.buildElement());else{const e=document.createTextNode(this.text);t.appendChild(e)}return t}setAttributes(t){return Object.assign(this.attributes,t),this}addChild(t){return this.text=void 0,this.children.push(t),this}setTextContent(t){return this.children=[],this.text=t,this}appendEventListener(t,e){return this.eventListeners[t]?this.eventListeners[t].push(e):this.eventListeners[t]=[e],this}}function s(){document.querySelector("#form").remove()}const n=document.querySelector("#content"),d=()=>document.querySelector("#form")?void 0:new i("div").setAttributes({class:"projectform",id:"form"}).addChild(new i("div").addChild(new i("img").setAttributes({src:"../assets/icons8-close.svg"}).appendEventListener("click",(t=>s())))).addChild(new i("div").setTextContent("Project Name")).addChild(new i("input").setAttributes({required:!0,class:"projectinput",placeholder:"Enter project title"})).addChild(new i("div").setTextContent("Project Description")).addChild(new i("input").setAttributes({required:!0,class:"projectinput",placeholder:"Enter project desc"})).addChild(new i("button").setTextContent("Create").setAttributes({type:"submit",value:"submit"}).appendEventListener("click",(i=>function(i){if(((t,e)=>{console.log("Sumbit verify is currently running"),t.preventDefault();var i=document.querySelectorAll(".projectinput"),s=!0;return i.forEach((function(t){""===t.value.trim()?(s=!1,t.classList.add("error")):t.classList.remove("error")})),s})(i)){const i=document.querySelectorAll(".projectinput"),n=i[0].value.trim(),d=i[1].value.trim(),r=new e(n,d);return l(n,d),t.addProject(r),console.log("handled project form submition"),s(),r}console.log("Could not handle project form submition")}(i)))).buildElement();function r(t,e){return document.querySelector("#project")?void 0:new i("div").setAttributes({id:"project"}).addChild(new i("div").setAttributes({id:"project-header"}).addChild(new i("div").setTextContent(t).setAttributes({id:"project-title"})).addChild(new i("div").addChild(new i("span").setTextContent(e)).addChild(new i("span").setTextContent("Priority")).addChild(new i("span").setTextContent("Due Date")).addChild(new i("img").setAttributes({src:"../assets/icons8-plus-black.svg",style:"height:50%;width:auto"})))).addChild(new i("div").setTextContent("hi").setAttributes({id:"project-todo"})).buildElement()}const o=document.querySelector("#content"),c=()=>{if(void 0!==d()){console.log("Handle appending project form");const t=d();o.appendChild(t)}},l=(t,e)=>{if(void 0!==r(t,e)){console.log("Handle appending project to dom");const i=r(t,e);document.querySelector("#project-list").appendChild(i)}};(()=>{const t=new i("div");t.setAttributes({id:"header"}).addChild(new i("div").addChild(new i("div").setAttributes({id:"logo"})).addChild(new i("span").setTextContent("When")).addChild(new i("span").setTextContent("2").setAttributes({style:"color: #42A4EB;"})).addChild(new i("span").setTextContent("do"))).addChild(new i("div").addChild(new i("div").setTextContent("Hello, example12345@gmail.com")).addChild(new i("button")));const e=t.buildElement();n.appendChild(e)})(),(()=>{console.log("Loading the side bar");const t=new i("div");t.setAttributes({id:"container"}).addChild(new i("div").addChild(new i("div").setTextContent("Projects").setAttributes({class:"tab"})).addChild(new i("img").setAttributes({src:"../assets/icons8-plus.svg",style:"height:60%;"}).appendEventListener("click",c))).addChild(new i("div").setAttributes({style:"border-top:2px solid white"})).addChild(new i("div").setAttributes({}));const e=t.buildElement();n.appendChild(e)})(),(()=>{const t=new i("div");t.setAttributes({id:"project-list"});const e=t.buildElement();n.appendChild(e)})()})();