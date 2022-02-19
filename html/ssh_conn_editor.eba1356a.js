import"./args_editor_v2.04591c7a.js";import"./args_editor_v2.111646fb.js";function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},n=e.parcelRequiree398;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return s[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},e.parcelRequiree398=n);var r=n("jAw9N"),o=n("ejx16"),i=n("fcdvt"),l=n("azvlV"),h=n("5iahp");function _(t){return JSON.parse(JSON.stringify(t))}r=n("jAw9N"),o=n("ejx16"),l=n("azvlV"),r=n("jAw9N"),l=n("azvlV"),o=n("ejx16"),o=n("ejx16");var d=n("6A06t");function p(t){const{onChange:e}=t,[s,a]=o.useState(22);return r.jsx(l.TextField,{value:s,type:"number",required:!0,fullWidth:!0,variant:"outlined",label:d.pgettext("编辑器","端口号"),helperText:d.pgettext("编辑器","SSH 或 win remote management 服务的端口号"),onChange:async t=>{try{const s=t.target.value;if(""===s)return a(0),void await e(0);const n=parseInt(s);isNaN(n)||(a(n),await e(n))}catch(t){console.error("invalid port:",t)}}})}d=n("6A06t");class u extends o.Component{constructor(t){super(t),this.state={ssh_host_args:t.ssh_host_args||{ansible_host:"",ansible_user:"root",ansible_port:22,ansible_password:""}}}render(){const t=_(this.state.ssh_host_args);return r.jsx(r.Fragment,{children:r.jsxs(l.FormControl,{fullWidth:!0,sx:{"& .MuiTextField-root":{m:1}},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",columnGap:"2em"},children:[r.jsx("div",{children:r.jsx(l.TextField,{value:t.ansible_host,required:!0,fullWidth:!0,variant:"outlined",label:"服务器地址",helperText:"服务器的域名 或者 IP地址, 例如: 1.1.1.1, www.baidu.com",onChange:async e=>{t.ansible_host=e.target.value,this.setState({ssh_host_args:t}),await this.props.onChange(t)}})}),r.jsx("div",{children:r.jsx(p,{onChange:async e=>{t.ansible_port=e,await this.props.onChange(t)}})})]}),r.jsx("div",{children:r.jsx(l.TextField,{value:t.ansible_user,required:!0,fullWidth:!0,variant:"outlined",label:d.pgettext("TargetServer","账号"),helperText:d.pgettext("TargetServer","连接目标服务器使用的账号"),onChange:async e=>{t.ansible_user=e.target.value,this.setState({ssh_host_args:t}),await this.props.onChange(t)}})}),r.jsx("div",{children:r.jsx(l.TextField,{value:t.ansible_password,type:"password",fullWidth:!0,variant:"outlined",label:d.pgettext("TargetServer","密码"),helperText:d.pgettext("TargetServer","连接目标服务器使用的密码[如果您使用证书认证，请到高级配置里面设置]。如果需要,此密码会作为 sudo 时使用的密码"),onChange:async e=>{t.ansible_password=e.target.value,this.setState({ssh_host_args:t}),await this.props.onChange(t)}})})]})})}}u.defaultProps={ssh_conn_args:null};r=n("jAw9N"),o=n("ejx16"),l=n("azvlV"),h=n("5iahp"),r=n("jAw9N"),o=n("ejx16"),l=n("azvlV"),d=n("6A06t");class g extends o.Component{constructor(t){super(t),this.state={jump_host_args:t.jump_host_args||{host:"",port:22,username:"",private_key:""}}}render(){const t=_(this.state.jump_host_args);return r.jsx(r.Fragment,{children:r.jsxs(l.FormControl,{fullWidth:!0,sx:{"& .MuiTextField-root":{m:1}},children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr",columnGap:"2em"},children:[r.jsx("div",{children:r.jsx(l.TextField,{value:t.host,required:!0,fullWidth:!0,variant:"outlined",label:d.gettext("堡垒机地址"),helperText:d.gettext("堡垒机服务器的域名 或者 IP地址, 例如: 1.1.1.1"),onChange:async e=>{t.host=e.target.value,this.setState({jump_host_args:t}),await this.props.onChange(t)}})}),r.jsx("div",{children:r.jsx(p,{onChange:async e=>{t.port=e,await this.props.onChange(t)}})})]}),r.jsx("div",{children:r.jsx(l.TextField,{value:t.username,required:!0,fullWidth:!0,variant:"outlined",label:d.pgettext("JumpHost","账号"),helperText:d.pgettext("JumpHost","连接堡垒服务器使用的账号"),onChange:async e=>{t.username=e.target.value,this.setState({jump_host_args:t}),await this.props.onChange(t)}})}),r.jsx("div",{children:r.jsx(l.TextField,{value:t.private_key,fullWidth:!0,multiline:!0,variant:"outlined",label:d.pgettext("JumpHost","堡垒机SSH密钥"),helperText:d.pgettext("JumpHost","连接堡垒服务器使用的SSH密钥, 当前仅支持 SSH 证书认证"),onChange:async e=>{t.private_key=e.target.value,this.setState({jump_host_args:t}),await this.props.onChange(t)}})})]})})}}g.defaultProps={jump_host_args:null};d=n("6A06t");class c extends o.Component{constructor(t){super(t),this.state={known_hosts:t.known_hosts||"",private_key:t.private_key||"",ssh_jump_args:t.ssh_jump_args||null}}render(){return r.jsx(r.Fragment,{children:r.jsxs(l.Accordion,{children:[r.jsx(l.AccordionSummary,{expandIcon:r.jsx(h.ExpandMore,{}),children:d.pgettext("SSH","高级配置")}),r.jsx(l.AccordionDetails,{children:r.jsxs(l.FormControl,{fullWidth:!0,sx:{"& .MuiTextField-root":{m:1}},children:[r.jsx("div",{children:this.#t()}),r.jsx("div",{children:this.#e()}),r.jsx("div",{children:this.#s()})]})})]})})}#t(){const t=this.state;return r.jsx(l.TextField,{multiline:!0,value:t.private_key,fullWidth:!0,variant:"outlined",label:d.pgettext("SSH","私钥证书"),helperText:d.pgettext("SSH","SSH 连接服务器使用的私钥证书。 注意: 证书不允许密码"),onChange:async t=>{this.setState({private_key:t.target.value}),await this.props.onPrivateKeyChange(t.target.value)}})}#e(){const t=this.state;return r.jsx(l.TextField,{multiline:!0,value:t.known_hosts,fullWidth:!0,variant:"outlined",label:d.pgettext("SSH","known hosts"),helperText:d.pgettext("SSH","known hosts 可以有效防止 DNS/IP 劫持。 您可以使用 ssh-keyscan 获取您服务器的 known_host 配置"),onChange:async t=>{this.setState({known_hosts:t.target.value}),await this.props.onKnownHostChange(t.target.value)}})}#s(){return r.jsx(l.Card,{variant:"outlined",children:r.jsxs(l.CardContent,{children:[r.jsxs("div",{children:[r.jsx(l.Typography,{variant:"h6",children:d.pgettext("SSH","堡垒机配置")}),r.jsx(l.Typography,{children:d.pgettext("SSH","如果不需要使用堡垒机连接您的服务器，忽略此配置即可")})]}),r.jsx(g,{jump_host_args:this.state.ssh_jump_args,onChange:async t=>{this.setState({ssh_jump_args:t}),await this.props.onJumpHostChange(t)}})]})})}}class x{constructor(){}get auto_task_id(){return globalThis.__g_auto_task_id||""}set auto_task_id(t){globalThis.__g_auto_task_id=t}get job_is_done(){return globalThis._job_is_done||!1}set job_is_done(t){globalThis._job_is_done=t}get automation_name(){return globalThis.automation_name}get jump_host(){return globalThis._g_playbook_jump}set jump_host(t){globalThis._g_playbook_jump=t}get ssh_host(){return globalThis._g_playbook_host}set ssh_host(t){globalThis._g_playbook_host=t}get playbook_args(){return globalThis._g_playbook_args}set playbook_args(t){globalThis._g_playbook_args=t}}d=n("6A06t");class j extends o.Component{constructor(t){super(t),this.state={ssh_conn_args:t.ssh_conn_args||{server_list:[{ansible_host:"localhost",ansible_port:22,ansible_user:"root",ansible_password:""}],private_key:"",known_hosts:""},ssh_jump_args:t.ssh_jump_args}}render(){const t=_(this.state.ssh_conn_args);return r.jsxs(r.Fragment,{children:[r.jsx("div",{style:{height:"1em"}}),r.jsx(l.Typography,{variant:"h4",align:"center",children:d.pgettext("TargetServer","服务器配置")}),r.jsx("div",{style:{height:"1em"}}),r.jsxs(l.Box,{maxWidth:"50em",margin:"auto",children:[this.#a(),r.jsx("div",{style:{height:"1em"}}),r.jsx(l.Tooltip,{title:d.pgettext("TargetServer","最多允许 5 个目标服务器"),children:r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(l.Button,{variant:"outlined",color:"primary",disabled:t.server_list.length>=5,onClick:()=>{t.server_list.push({ansible_host:"localhost",ansible_port:22,ansible_user:"root",ansible_password:""}),this.setState({ssh_conn_args:t})},children:d.pgettext("TargetServer","添加服务器")})})}),r.jsx("div",{style:{height:"1em"}}),this.#n()]})]})}#a(){const t=_(this.state.ssh_conn_args),e=t.server_list;return r.jsx(r.Fragment,{children:e.map(((s,a)=>r.jsxs(l.Accordion,{children:[r.jsxs(l.AccordionSummary,{expandIcon:r.jsx(h.ExpandMore,{}),children:[d.pgettext("TargetServer","服务器"),": ",s.ansible_user,"@",s.ansible_host,":",s.ansible_port]}),r.jsx(l.AccordionDetails,{children:r.jsx(u,{ssh_host_args:s,onChange:async s=>{e[a]=s,this.setState({ssh_conn_args:t}),await this.props.onChange(t)}},a)}),this.#r(a)]})))})}#r(t){if(0===t)return null;const e=_(this.state.ssh_conn_args),s=e.server_list;return r.jsx(l.AccordionActions,{children:r.jsx(l.Button,{variant:"outlined",color:"secondary",onClick:async()=>{s.splice(t,1),this.setState({ssh_conn_args:e}),await this.props.onChange(e)},children:d.pgettext("TargetServer","删除")})})}#n(){const t=_(this.state.ssh_conn_args);return r.jsx(c,{onPrivateKeyChange:async e=>{t.private_key=e,this.setState({ssh_conn_args:t}),await this.props.onChange(t)},onKnownHostChange:async e=>{t.known_hosts=e,this.setState({ssh_conn_args:t}),await this.props.onChange(t)},onJumpHostChange:async t=>{this.setState({ssh_jump_args:t}),await this.props.onJumpChange(t)},known_hosts:t.known_hosts,private_key:t.private_key,ssh_jump_args:this.state.ssh_jump_args})}}j.defaultProps={ssh_conn_args:null,ssh_jump_args:null},t(i).render(r.jsx(j,{onJumpChange:async t=>{(new x).jump_host=t},onChange:async t=>{(new x).ssh_host=t}}),document.getElementById("ssh-conn-editor"));