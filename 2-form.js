import"./assets/styles-CsmwAe9Z.js";const s={email:"",message:""},o="feedback-form-state",m={form:document.querySelector(".feedback-form")};function l(e,t){const a=JSON.stringify(t);localStorage.setItem(e,a)}function r(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}m.form.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value,a=e.currentTarget.elements.message.value;s.email=t,s.message=a,l(o,s)});function n(){const e=r(o);m.form.elements.email.value=(e==null?void 0:e.email)||"",m.form.elements.message.value=(e==null?void 0:e.message)||"",s.email=(e==null?void 0:e.email)||"",s.message=(e==null?void 0:e.message)||""}n();m.form.addEventListener("submit",e=>{e.preventDefault(),s.email===""||s.message===""?alert("Fill please all fields"):(console.log(s),localStorage.removeItem(o),e.target.reset(),s.email="",s.message="")});
//# sourceMappingURL=2-form.js.map
