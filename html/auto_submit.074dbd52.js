import"./args_editor_v2.111646fb.js";function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},e={},s=o.parcelRequiree398;null==s&&((s=function(t){if(t in a)return a[t].exports;if(t in e){var o=e[t];delete e[t];var s={id:t,exports:{}};return a[t]=s,o.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,o){e[t]=o},o.parcelRequiree398=s);var r=s("jAw9N"),n=s("ejx16"),l=s("fcdvt"),i=s("azvlV");let u=null;function _(){return u||"https://global.2cc.net"}async function h(t,o=null,a=null){var e;const s=function(){if(!t.path_args)return t.base_url+t.path_url;const o=t.path_url.split("/").map((o=>o.startsWith("{")&&o.endsWith("}")?t.path_args[o.substring(1,o.length-1)]:o)).join("/");return t.base_url+o}()+(t.query_args?"?"+new URLSearchParams(t.query_args).toString():""),r=t.header||{"Accept-Type":"application/json"},n=t.body?JSON.stringify(t.body):null,l=null===(e=t.security)||void 0===e?void 0:e.bearer;l&&(r.Authorization=`Bearer ${l}`),n&&!r["Content-Type"]&&(r["Content-Type"]="application/json");const i=await fetch(s,{method:t.method,headers:r,body:n});return i.ok?o?await o(i):await i.json():a?await a(i):null}async function p(t){var o;const a=function(){if(!t.path_args)return t.base_url+t.path_url;const o=t.path_url.split("/").map((o=>o.startsWith("{")&&o.endsWith("}")?t.path_args[o.substring(1,o.length-1)]:o)).join("/");return t.base_url+o}()+(t.query_args?"?"+new URLSearchParams(t.query_args).toString():""),e=t.header||{"Accept-Type":"application/json"},s=t.body?JSON.stringify(t.body):null,r=null===(o=t.security)||void 0===o?void 0:o.bearer;r&&(e.Authorization=`Bearer ${r}`),s&&!e["Content-Type"]&&(e["Content-Type"]="application/json");const n=await fetch(a,{method:t.method,headers:e,body:s});if(n.ok)return await n.json();throw n}class d{constructor(){}get auto_task_id(){return globalThis.__g_auto_task_id||""}set auto_task_id(t){globalThis.__g_auto_task_id=t}get job_is_done(){return globalThis._job_is_done||!1}set job_is_done(t){globalThis._job_is_done=t}get automation_name(){return globalThis.automation_name}get jump_host(){return globalThis._g_playbook_jump}set jump_host(t){globalThis._g_playbook_jump=t}get ssh_host(){return globalThis._g_playbook_host}set ssh_host(t){globalThis._g_playbook_host=t}get playbook_args(){return globalThis._g_playbook_args}set playbook_args(t){globalThis._g_playbook_args=t}}var c=s("6A06t");class g extends n.Component{constructor(t){super(t),this.state={}}render(){return r.jsx(i.Box,{display:"flex",children:r.jsx(i.Button,{style:{margin:"auto"},variant:"outlined",onClick:this.#t,children:c.pgettext("编辑器","提交任务")})})}async#t(){const t=new d,o=t.ssh_host,a={automation_name:t.automation_name,user_inventory:o.server_list,private_key:o.private_key,known_hosts:o.known_hosts,jump_host:t.jump_host,playbook_args:t.playbook_args};console.info(">>> submit data:",a);try{const t=await class{static async do_post(t,o=null,a=null){return await h({method:"POST",base_url:_(),path_url:"/api/task",path_args:t.path_args||null,query_args:t.query_args||null,header:t.header||null,body:t.body||null,security:t.security||null},o,a)}static async do_post_json(t){return await p({method:"POST",base_url:_(),path_url:"/api/task",path_args:t.path_args||null,query_args:t.query_args||null,header:t.header||null,body:t.body||null,security:t.security||null})}}.do_post_json({body:a});console.info("<<< response data:",t);const{task_id:o}=t;location.href=`/task/${o}`}catch(t){console.log(t);const o=await t.json();console.error("<<< error data:",o)}}}t(l).render(r.jsx(g,{}),document.getElementById("auto-submit"));