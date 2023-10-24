(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Dr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const V={},bt=[],Ae=()=>{},Zo=()=>!1,Go=/^on[^a-z]/,jn=e=>Go.test(e),zr=e=>e.startsWith("onUpdate:"),ne=Object.assign,$r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qo=Object.prototype.hasOwnProperty,$=(e,t)=>Qo.call(e,t),R=Array.isArray,Lt=e=>Dn(e)==="[object Map]",es=e=>Dn(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",Ur=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Si=e=>(G(e)||L(e))&&L(e.then)&&L(e.catch),ts=Object.prototype.toString,Dn=e=>ts.call(e),ns=e=>Dn(e).slice(8,-1),rs=e=>Dn(e)==="[object Object]",Hr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},as=/-(\w)/g,Me=zn(e=>e.replace(as,(t,n)=>n?n.toUpperCase():"")),is=/\B([A-Z])/g,Et=zn(e=>e.replace(is,"-$1").toLowerCase()),$n=zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),tr=zn(e=>e?`on${$n(e)}`:""),_t=(e,t)=>!Object.is(e,t),nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},In=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},os=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const dr=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Br(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?cs(r):Br(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(re(e)||G(e))return e}const ss=/;(?![^(]*\))/g,ls=/:([^]+)/,fs=/\/\*[^]*?\*\//g;function cs(e){const t={};return e.replace(fs,"").split(ss).forEach(n=>{if(n){const r=n.split(ls);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Yr(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Yr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const us="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ds=Dr(us);function Ti(e){return!!e||e===""}let ye;class ms{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ps(e,t=ye){t&&t.active&&t.effects.push(e)}function hs(){return ye}const Wr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ni=e=>(e.w&Ve)>0,Mi=e=>(e.n&Ve)>0,vs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ni(a)&&!Mi(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},mr=new WeakMap;let Mt=0,Ve=1;const pr=30;let xe;const lt=Symbol(""),hr=Symbol("");class Kr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Xe=!0,Ve=1<<++Mt,Mt<=pr?vs(this):Ea(this),this.fn()}finally{Mt<=pr&&gs(this),Ve=1<<--Mt,xe=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Ea(this),this.onStop&&this.onStop(),this.active=!1)}}function Ea(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Fi=[];function Pt(){Fi.push(Xe),Xe=!1}function Ct(){const e=Fi.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&xe){let r=mr.get(e);r||mr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Wr()),Ri(a)}}function Ri(e,t){let n=!1;Mt<=pr?Mi(e)||(e.n|=Ve,n=!Ni(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function De(e,t,n,r,a,i){const o=mr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Hr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),Lt(e)&&s.push(o.get(hr)));break;case"delete":R(e)||(s.push(o.get(lt)),Lt(e)&&s.push(o.get(hr)));break;case"set":Lt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&vr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);vr(Wr(l))}}function vr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Pa(r);for(const r of n)r.computed||Pa(r)}function Pa(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bs=Dr("__proto__,__v_isRef,__isVue"),Li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ur)),Ca=ys();function ys(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Pt();const r=H(this)[t].apply(this,n);return Ct(),r}}),e}function xs(e){const t=H(this);return me(t,"has",e),t.hasOwnProperty(e)}class ji{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Ms:Ui:i?$i:zi).get(t))return t;const o=R(t);if(!a){if(o&&$(Ca,n))return Reflect.get(Ca,n,r);if(n==="hasOwnProperty")return xs}const s=Reflect.get(t,n,r);return(Ur(n)?Li.has(n):bs(n))||(a||me(t,"get",n),i)?s:fe(s)?o&&Hr(n)?s:s.value:G(s)?a?Hi(s):Vr(s):s}}class Di extends ji{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Ut(i)&&fe(i)&&!fe(r))return!1;if(!this._shallow&&(!gr(r)&&!Ut(r)&&(i=H(i),r=H(r)),!R(t)&&fe(i)&&!fe(r)))return i.value=r,!0;const o=R(t)&&Hr(n)?Number(n)<t.length:$(t,n),s=Reflect.set(t,n,r,a);return t===H(a)&&(o?_t(r,i)&&De(t,"set",n,r):De(t,"add",n,r)),s}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&De(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Ur(n)||!Li.has(n))&&me(t,"has",n),r}ownKeys(t){return me(t,"iterate",R(t)?"length":lt),Reflect.ownKeys(t)}}class ws extends ji{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const _s=new Di,ks=new ws,As=new Di(!0),Xr=e=>e,Un=e=>Reflect.getPrototypeOf(e);function on(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(_t(t,i)&&me(a,"get",t),me(a,"get",i));const{has:o}=Un(a),s=r?Xr:n?Gr:Zr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function sn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(_t(e,a)&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function ln(e,t=!1){return e=e.__v_raw,!t&&me(H(e),"iterate",lt),Reflect.get(e,"size",e)}function Ia(e){e=H(e);const t=H(this);return Un(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Sa(e,t){t=H(t);const n=H(this),{has:r,get:a}=Un(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?_t(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function Ta(e){const t=H(this),{has:n,get:r}=Un(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Na(){const e=H(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function fn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Xr:e?Gr:Zr;return!e&&me(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function cn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Lt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Xr:t?Gr:Zr;return!t&&me(i,"iterate",l?hr:lt),{next(){const{value:m,done:g}=c.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Os(){const e={get(i){return on(this,i)},get size(){return ln(this)},has:sn,add:Ia,set:Sa,delete:Ta,clear:Na,forEach:fn(!1,!1)},t={get(i){return on(this,i,!1,!0)},get size(){return ln(this)},has:sn,add:Ia,set:Sa,delete:Ta,clear:Na,forEach:fn(!1,!0)},n={get(i){return on(this,i,!0)},get size(){return ln(this,!0)},has(i){return sn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:fn(!0,!1)},r={get(i){return on(this,i,!0,!0)},get size(){return ln(this,!0)},has(i){return sn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:fn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=cn(i,!1,!1),n[i]=cn(i,!0,!1),t[i]=cn(i,!1,!0),r[i]=cn(i,!0,!0)}),[e,n,t,r]}const[Es,Ps,Cs,Is]=Os();function qr(e,t){const n=t?e?Is:Cs:e?Ps:Es;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ss={get:qr(!1,!1)},Ts={get:qr(!1,!0)},Ns={get:qr(!0,!1)},zi=new WeakMap,$i=new WeakMap,Ui=new WeakMap,Ms=new WeakMap;function Fs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rs(e){return e.__v_skip||!Object.isExtensible(e)?0:Fs(ns(e))}function Vr(e){return Ut(e)?e:Jr(e,!1,_s,Ss,zi)}function Ls(e){return Jr(e,!1,As,Ts,$i)}function Hi(e){return Jr(e,!0,ks,Ns,Ui)}function Jr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Rs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Ut(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function gr(e){return!!(e&&e.__v_isShallow)}function Bi(e){return yt(e)||Ut(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Yi(e){return In(e,"__v_skip",!0),e}const Zr=e=>G(e)?Vr(e):e,Gr=e=>G(e)?Hi(e):e;function js(e){Xe&&xe&&(e=H(e),Ri(e.dep||(e.dep=Wr())))}function Ds(e,t){e=H(e);const n=e.dep;n&&vr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function zs(e){return fe(e)?e.value:e}const $s={get:(e,t,n)=>zs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Wi(e){return yt(e)?e:new Proxy(e,$s)}class Us{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Kr(t,()=>{this._dirty||(this._dirty=!0,Ds(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return js(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Hs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Us(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Hn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=qe(e,t,n,r);return i&&Si(i)&&i.catch(o=>{Hn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Hn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Bs(e,n,a,r)}function Bs(e,t,n,r=!0){console.error(e)}let Ht=!1,br=!1;const oe=[];let Te=0;const xt=[];let Le=null,at=0;const Ki=Promise.resolve();let Qr=null;function Ys(e){const t=Qr||Ki;return e?t.then(this?e.bind(this):e):t}function Ws(e){let t=Te+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Bt(oe[r])<e?t=r+1:n=r}return t}function ea(e){(!oe.length||!oe.includes(e,Ht&&e.allowRecurse?Te+1:Te))&&(e.id==null?oe.push(e):oe.splice(Ws(e.id),0,e),Xi())}function Xi(){!Ht&&!br&&(br=!0,Qr=Ki.then(Vi))}function Ks(e){const t=oe.indexOf(e);t>Te&&oe.splice(t,1)}function Xs(e){R(e)?xt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?at+1:at))&&xt.push(e),Xi()}function Ma(e,t=Ht?Te+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function qi(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Bt(n)-Bt(r)),at=0;at<Le.length;at++)Le[at]();Le=null,at=0}}const Bt=e=>e.id==null?1/0:e.id,qs=(e,t)=>{const n=Bt(e)-Bt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vi(e){br=!1,Ht=!0,oe.sort(qs);const t=Ae;try{for(Te=0;Te<oe.length;Te++){const n=oe[Te];n&&n.active!==!1&&qe(n,null,14)}}finally{Te=0,oe.length=0,qi(),Ht=!1,Qr=null,(oe.length||xt.length)&&Vi()}}function Vs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||V;g&&(a=n.map(_=>re(_)?_.trim():_)),m&&(a=n.map(os))}let s,l=r[s=tr(t)]||r[s=tr(Me(t))];!l&&i&&(l=r[s=tr(Et(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function Ji(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=Ji(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ne(o,i),G(e)&&r.set(e,o),o)}function Bn(e,t){return!e||!jn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Et(t))||$(e,t))}let we=null,Yn=null;function Sn(e){const t=we;return we=e,Yn=e&&e.type.__scopeId||null,t}function Js(e){Yn=e}function Zs(){Yn=null}function Gs(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=Sn(t);let o;try{o=e(...a)}finally{Sn(i),r._d&&Wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:g,setupState:_,ctx:j,inheritAttrs:N}=e;let z,k;const O=Sn(e);try{if(n.shapeFlag&4){const I=a||r;z=Se(d.call(I,I,m,i,_,g,j)),k=l}else{const I=t;z=Se(I.length>1?I(i,{attrs:l,slots:s,emit:c}):I(i,null)),k=t.props?l:Qs(l)}}catch(I){Dt.length=0,Hn(I,e,1),z=de(Yt)}let M=z;if(k&&N!==!1){const I=Object.keys(k),{shapeFlag:B}=M;I.length&&B&7&&(o&&I.some(zr)&&(k=el(k,o)),M=kt(M,k))}return n.dirs&&(M=kt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),z=M,Sn(O),z}const Qs=e=>{let t;for(const n in e)(n==="class"||n==="style"||jn(n))&&((t||(t={}))[n]=e[n]);return t},el=(e,t)=>{const n={};for(const r in e)(!zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Fa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!Bn(c,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Fa(r,o,c):!0:!!o;return!1}function Fa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Bn(n,i))return!0}return!1}function nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rl=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Xs(e)}const un={};function _n(e,t,n){return Zi(e,t,n)}function Zi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=V){var s;const l=hs()===((s=te)==null?void 0:s.scope)?te:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=gr(e)):yt(e)?(c=()=>e,r=!0):R(e)?(m=!0,d=e.some(I=>yt(I)||gr(I)),c=()=>e.map(I=>{if(fe(I))return I.value;if(yt(I))return ht(I);if(L(I))return qe(I,l,2)})):L(e)?t?c=()=>qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return g&&g(),Oe(e,l,3,[_])}:c=Ae,t&&r){const I=c;c=()=>ht(I())}let g,_=I=>{g=O.onStop=()=>{qe(I,l,4)}},j;if(Kt)if(_=Ae,t?n&&Oe(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const I=nf();j=I.__watcherHandles||(I.__watcherHandles=[])}else return Ae;let N=m?new Array(e.length).fill(un):un;const z=()=>{if(O.active)if(t){const I=O.run();(r||d||(m?I.some((B,ae)=>_t(B,N[ae])):_t(I,N)))&&(g&&g(),Oe(t,l,3,[I,N===un?void 0:m&&N[0]===un?[]:N,_]),N=I)}else O.run()};z.allowRecurse=!!t;let k;a==="sync"?k=z:a==="post"?k=()=>ue(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),k=()=>ea(z));const O=new Kr(c,k);t?n?z():N=O.run():a==="post"?ue(O.run.bind(O),l&&l.suspense):O.run();const M=()=>{O.stop(),l&&l.scope&&$r(l.scope.effects,O)};return j&&j.push(M),M}function il(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?Gi(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;At(this);const s=Zi(a,i.bind(r),n);return o?At(o):ft(),s}function Gi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))ht(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(es(e)||Lt(e))e.forEach(n=>{ht(n,t)});else if(rs(e))for(const n in e)ht(e[n],t);return e}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Pt(),Oe(l,n,8,[e.el,s,e,t]),Ct())}}/*! #__NO_SIDE_EFFECTS__ */function Qi(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const kn=e=>!!e.type.__asyncLoader,eo=e=>e.type.__isKeepAlive;function ol(e,t){to(e,"a",t)}function sl(e,t){to(e,"da",t)}function to(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Wn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)eo(a.parent.vnode)&&ll(r,t,n,a),a=a.parent}}function ll(e,t,n,r){const a=Wn(t,e,r,!0);ro(()=>{$r(r[t],a)},n)}function Wn(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Pt(),At(n);const s=Oe(t,n,e,o);return ft(),Ct(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=te)=>(!Kt||e==="sp")&&Wn(e,(...r)=>t(...r),n),fl=He("bm"),no=He("m"),cl=He("bu"),ul=He("u"),dl=He("bum"),ro=He("um"),ml=He("sp"),pl=He("rtg"),hl=He("rtc");function vl(e,t=te){Wn("ec",e,t)}const ao="components";function Ra(e,t){return bl(ao,e,!0,t)||e}const gl=Symbol.for("v-ndc");function bl(e,t,n=!0,r=!1){const a=we||te;if(a){const i=a.type;if(e===ao){const s=Gl(i,!1);if(s&&(s===t||s===Me(t)||s===$n(Me(t))))return i}const o=La(a[e]||i[e],t)||La(a.appContext[e],t);return!o&&r?i:o}}function La(e,t){return e&&(e[t]||e[Me(t)]||e[$n(Me(t))])}const yr=e=>e?vo(e)?ia(e)||e.proxy:yr(e.parent):null,jt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>ea(e.update)),$nextTick:e=>e.n||(e.n=Ys.bind(e.proxy)),$watch:e=>il.bind(e)}),ar=(e,t)=>e!==V&&!e.__isScriptSetup&&$(e,t),yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ar(r,t))return o[t]=1,r[t];if(a!==V&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==V&&$(n,t))return o[t]=4,n[t];xr&&(o[t]=0)}}const d=jt[t];let m,g;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==V&&$(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,$(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ar(a,t)?(a[t]=n,!0):r!==V&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==V&&$(e,o)||ar(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(jt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ja(e){return R(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let xr=!0;function xl(e){const t=ta(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&Da(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:g,beforeUpdate:_,updated:j,activated:N,deactivated:z,beforeDestroy:k,beforeUnmount:O,destroyed:M,unmounted:I,render:B,renderTracked:ae,renderTriggered:ie,errorCaptured:ge,serverPrefetch:ve,expose:Fe,inheritAttrs:St,components:tn,directives:nn,filters:Gn}=t;if(c&&wl(c,r,null),o)for(const J in o){const W=o[J];L(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);G(J)&&(e.data=Vr(J))}if(xr=!0,i)for(const J in i){const W=i[J],Qe=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ae,rn=!L(W)&&L(W.set)?W.set.bind(n):Ae,et=rt({get:Qe,set:rn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ee=>et.value=Ee})}if(s)for(const J in s)io(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{Pl(W,J[W])})}d&&Da(d,e,"c");function se(J,W){R(W)?W.forEach(Qe=>J(Qe.bind(n))):W&&J(W.bind(n))}if(se(fl,m),se(no,g),se(cl,_),se(ul,j),se(ol,N),se(sl,z),se(vl,ge),se(hl,ae),se(pl,ie),se(dl,O),se(ro,I),se(ml,ve),R(Fe))if(Fe.length){const J=e.exposed||(e.exposed={});Fe.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:Qe=>n[W]=Qe})})}else e.exposed||(e.exposed={});B&&e.render===Ae&&(e.render=B),St!=null&&(e.inheritAttrs=St),tn&&(e.components=tn),nn&&(e.directives=nn)}function wl(e,t,n=Ae){R(e)&&(e=wr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=An(a.from||r,a.default,!0):i=An(a.from||r):i=An(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Da(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function io(e,t,n,r){const a=r.includes(".")?Gi(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&_n(a,i)}else if(L(e))_n(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>io(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&_n(a,i,e)}}function ta(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Tn(l,c,o,!0)),Tn(l,t,o)),G(t)&&i.set(t,l),l}function Tn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Tn(e,i,n,!0),a&&a.forEach(o=>Tn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=_l[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const _l={data:za,props:$a,emits:$a,methods:Ft,computed:Ft,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Ft,directives:Ft,watch:Al,provide:za,inject:kl};function za(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function kl(e,t){return Ft(wr(e),wr(t))}function wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Ft(e,t){return e?ne(Object.create(null),e,t):t}function $a(e,t){return e?R(e)&&R(t)?[...new Set([...e,...t])]:ne(Object.create(null),ja(e),ja(t??{})):t}function Al(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function oo(){return{app:null,config:{isNativeTag:Zo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function El(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!G(a)&&(a=null);const i=oo(),o=new WeakSet;let s=!1;const l=i.app={_uid:Ol++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:rf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const g=de(r,a);return g.appContext=i,d&&t?t(g,c):e(g,c,m),s=!0,l._container=c,c.__vue_app__=l,ia(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Nn=l;try{return c()}finally{Nn=null}}};return l}}let Nn=null;function Pl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function An(e,t,n=!1){const r=te||we;if(r||Nn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Cl(e,t,n,r=!1){const a={},i={};In(i,Xn,1),e.propsDefaults=Object.create(null),so(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ls(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Il(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Bn(e.emitsOptions,g))continue;const _=t[g];if(l)if($(i,g))_!==i[g]&&(i[g]=_,c=!0);else{const j=Me(g);a[j]=_r(l,s,j,_,e,!1)}else _!==i[g]&&(i[g]=_,c=!0)}}}else{so(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Et(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=_r(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function so(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(wn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Bn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||V;for(let d=0;d<i.length;d++){const m=i[d];n[m]=_r(a,l,m,c[m],e,!$(c,m))}}return o}function _r(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(At(a),r=c[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Et(n))&&(r=!0))}return r}function lo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,_]=lo(m,t,!0);ne(o,g),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,bt),bt;if(R(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Ua(m)&&(o[m]=V)}else if(i)for(const d in i){const m=Me(d);if(Ua(m)){const g=i[d],_=o[m]=R(g)||L(g)?{type:g}:ne({},g);if(_){const j=Ya(Boolean,_.type),N=Ya(String,_.type);_[0]=j>-1,_[1]=N<0||j<N,(j>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function Ua(e){return e[0]!=="$"}function Ha(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ba(e,t){return Ha(e)===Ha(t)}function Ya(e,t){return R(t)?t.findIndex(n=>Ba(n,e)):L(t)&&Ba(t,e)?0:-1}const fo=e=>e[0]==="_"||e==="$stable",na=e=>R(e)?e.map(Se):[Se(e)],Sl=(e,t,n)=>{if(t._n)return t;const r=Gs((...a)=>na(t(...a)),n);return r._c=!1,r},co=(e,t,n)=>{const r=e._ctx;for(const a in e){if(fo(a))continue;const i=e[a];if(L(i))t[a]=Sl(a,i,r);else if(i!=null){const o=na(i);t[a]=()=>o}}},uo=(e,t)=>{const n=na(t);e.slots.default=()=>n},Tl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),In(t,"_",n)):co(t,e.slots={})}else e.slots={},t&&uo(e,t);In(e.slots,Xn,1)},Nl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=V;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,co(t,a)),o=t}else t&&(uo(e,t),o={default:1});if(i)for(const s in a)!fo(s)&&o[s]==null&&delete a[s]};function kr(e,t,n,r,a=!1){if(R(e)){e.forEach((g,_)=>kr(g,t&&(R(t)?t[_]:t),n,r,a));return}if(kn(r)&&!a)return;const i=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===V?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))qe(l,s,12,[o,d]);else{const g=re(l),_=fe(l);if(g||_){const j=()=>{if(e.f){const N=g?$(m,l)?m[l]:d[l]:l.value;a?R(N)&&$r(N,i):R(N)?N.includes(i)||N.push(i):g?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,ue(j,n)):j()}}}const ue=al;function Ml(e){return Fl(e)}function Fl(e,t){const n=dr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:g,setScopeId:_=Ae,insertStaticContent:j}=e,N=(f,u,p,v=null,h=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Nt(f,u)&&(v=an(f),Ee(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=u;switch(b){case Kn:z(f,u,p,v);break;case Yt:k(f,u,p,v);break;case On:f==null&&O(u,p,v,A);break;case Ie:tn(f,u,p,v,h,x,A,y,w);break;default:P&1?B(f,u,p,v,h,x,A,y,w):P&6?nn(f,u,p,v,h,x,A,y,w):(P&64||P&128)&&b.process(f,u,p,v,h,x,A,y,w,dt)}S!=null&&h&&kr(S,f&&f.ref,x,u||f,!u)},z=(f,u,p,v)=>{if(f==null)r(u.el=s(u.children),p,v);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,v)=>{f==null?r(u.el=l(u.children||""),p,v):u.el=f.el},O=(f,u,p,v)=>{[f.el,f.anchor]=j(f.children,u,p,v,f.el,f.anchor)},M=({el:f,anchor:u},p,v)=>{let h;for(;f&&f!==u;)h=g(f),r(f,p,v),f=h;r(u,p,v)},I=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=g(f),a(f),f=p;a(u)},B=(f,u,p,v,h,x,A,y,w)=>{A=A||u.type==="svg",f==null?ae(u,p,v,h,x,A,y,w):ve(f,u,h,x,A,y,w)},ae=(f,u,p,v,h,x,A,y)=>{let w,b;const{type:S,props:P,shapeFlag:T,transition:F,dirs:D}=f;if(w=f.el=o(f.type,x,P&&P.is,P),T&8?d(w,f.children):T&16&&ge(f.children,w,null,v,h,x&&S!=="foreignObject",A,y),D&&tt(f,null,v,"created"),ie(w,f,f.scopeId,A,v),P){for(const Y in P)Y!=="value"&&!wn(Y)&&i(w,Y,null,P[Y],x,f.children,v,h,Re);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ce(b,v,f)}D&&tt(f,null,v,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;K&&F.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||K||D)&&ue(()=>{b&&Ce(b,v,f),K&&F.enter(w),D&&tt(f,null,v,"mounted")},h)},ie=(f,u,p,v,h)=>{if(p&&_(f,p),v)for(let x=0;x<v.length;x++)_(f,v[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ge=(f,u,p,v,h,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const S=f[b]=y?Ke(f[b]):Se(f[b]);N(null,S,u,p,v,h,x,A,y)}},ve=(f,u,p,v,h,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:S}=u;w|=f.patchFlag&16;const P=f.props||V,T=u.props||V;let F;p&&nt(p,!1),(F=T.onVnodeBeforeUpdate)&&Ce(F,p,u,f),S&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const D=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,v,D,x):A||W(f,u,y,null,p,v,D,x,!1),w>0){if(w&16)St(y,u,P,T,p,v,h);else if(w&2&&P.class!==T.class&&i(y,"class",null,T.class,h),w&4&&i(y,"style",P.style,T.style,h),w&8){const K=u.dynamicProps;for(let Y=0;Y<K.length;Y++){const Q=K[Y],be=P[Q],mt=T[Q];(mt!==be||Q==="value")&&i(y,Q,be,mt,h,f.children,p,v,Re)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&St(y,u,P,T,p,v,h);((F=T.onVnodeUpdated)||S)&&ue(()=>{F&&Ce(F,p,u,f),S&&tt(u,f,p,"updated")},v)},Fe=(f,u,p,v,h,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],S=w.el&&(w.type===Ie||!Nt(w,b)||w.shapeFlag&70)?m(w.el):p;N(w,b,S,null,v,h,x,A,!0)}},St=(f,u,p,v,h,x,A)=>{if(p!==v){if(p!==V)for(const y in p)!wn(y)&&!(y in v)&&i(f,y,p[y],null,A,u.children,h,x,Re);for(const y in v){if(wn(y))continue;const w=v[y],b=p[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,h,x,Re)}"value"in v&&i(f,"value",p.value,v.value)}},tn=(f,u,p,v,h,x,A,y,w)=>{const b=u.el=f?f.el:s(""),S=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:F}=u;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(S,p,v),ge(u.children,p,S,h,x,A,y,w)):P>0&&P&64&&T&&f.dynamicChildren?(Fe(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&mo(f,u,!0)):W(f,u,p,S,h,x,A,y,w)},nn=(f,u,p,v,h,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,v,A,w):Gn(u,p,v,h,x,A,w):ya(f,u,w)},Gn=(f,u,p,v,h,x,A)=>{const y=f.component=Xl(f,v,h);if(eo(f)&&(y.ctx.renderer=dt),ql(y),y.asyncDep){if(h&&h.registerDep(y,se),!f.el){const w=y.subTree=de(Yt);k(null,w,u,p)}return}se(y,f,u,p,h,x,A)},ya=(f,u,p)=>{const v=u.component=f.component;if(tl(f,u,p))if(v.asyncDep&&!v.asyncResolved){J(v,u,p);return}else v.next=u,Ks(v.update),v.update();else u.el=f.el,v.vnode=u},se=(f,u,p,v,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:S,bu:P,u:T,parent:F,vnode:D}=f,K=S,Y;nt(f,!1),S?(S.el=D.el,J(f,S,A)):S=D,P&&nr(P),(Y=S.props&&S.props.onVnodeBeforeUpdate)&&Ce(Y,F,S,D),nt(f,!0);const Q=rr(f),be=f.subTree;f.subTree=Q,N(be,Q,m(be.el),an(be),f,h,x),S.el=Q.el,K===null&&nl(f,Q.el),T&&ue(T,h),(Y=S.props&&S.props.onVnodeUpdated)&&ue(()=>Ce(Y,F,S,D),h)}else{let S;const{el:P,props:T}=u,{bm:F,m:D,parent:K}=f,Y=kn(u);if(nt(f,!1),F&&nr(F),!Y&&(S=T&&T.onVnodeBeforeMount)&&Ce(S,K,u),nt(f,!0),P&&er){const Q=()=>{f.subTree=rr(f),er(P,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=rr(f);N(null,Q,p,v,f,h,x),u.el=Q.el}if(D&&ue(D,h),!Y&&(S=T&&T.onVnodeMounted)){const Q=u;ue(()=>Ce(S,K,Q),h)}(u.shapeFlag&256||K&&kn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=v=null}},w=f.effect=new Kr(y,()=>ea(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,nt(f,!0),b()},J=(f,u,p)=>{u.component=f;const v=f.vnode.props;f.vnode=u,f.next=null,Il(f,u.props,v,p),Nl(f,u.children,p),Pt(),Ma(),Ct()},W=(f,u,p,v,h,x,A,y,w=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:F}=u;if(T>0){if(T&128){rn(b,P,p,v,h,x,A,y,w);return}else if(T&256){Qe(b,P,p,v,h,x,A,y,w);return}}F&8?(S&16&&Re(b,h,x),P!==b&&d(p,P)):S&16?F&16?rn(b,P,p,v,h,x,A,y,w):Re(b,h,x,!0):(S&8&&d(p,""),F&16&&ge(P,p,v,h,x,A,y,w))},Qe=(f,u,p,v,h,x,A,y,w)=>{f=f||bt,u=u||bt;const b=f.length,S=u.length,P=Math.min(b,S);let T;for(T=0;T<P;T++){const F=u[T]=w?Ke(u[T]):Se(u[T]);N(f[T],F,p,null,h,x,A,y,w)}b>S?Re(f,h,x,!0,!1,P):ge(u,p,v,h,x,A,y,w,P)},rn=(f,u,p,v,h,x,A,y,w)=>{let b=0;const S=u.length;let P=f.length-1,T=S-1;for(;b<=P&&b<=T;){const F=f[b],D=u[b]=w?Ke(u[b]):Se(u[b]);if(Nt(F,D))N(F,D,p,null,h,x,A,y,w);else break;b++}for(;b<=P&&b<=T;){const F=f[P],D=u[T]=w?Ke(u[T]):Se(u[T]);if(Nt(F,D))N(F,D,p,null,h,x,A,y,w);else break;P--,T--}if(b>P){if(b<=T){const F=T+1,D=F<S?u[F].el:v;for(;b<=T;)N(null,u[b]=w?Ke(u[b]):Se(u[b]),p,D,h,x,A,y,w),b++}}else if(b>T)for(;b<=P;)Ee(f[b],h,x,!0),b++;else{const F=b,D=b,K=new Map;for(b=D;b<=T;b++){const pe=u[b]=w?Ke(u[b]):Se(u[b]);pe.key!=null&&K.set(pe.key,b)}let Y,Q=0;const be=T-D+1;let mt=!1,_a=0;const Tt=new Array(be);for(b=0;b<be;b++)Tt[b]=0;for(b=F;b<=P;b++){const pe=f[b];if(Q>=be){Ee(pe,h,x,!0);continue}let Pe;if(pe.key!=null)Pe=K.get(pe.key);else for(Y=D;Y<=T;Y++)if(Tt[Y-D]===0&&Nt(pe,u[Y])){Pe=Y;break}Pe===void 0?Ee(pe,h,x,!0):(Tt[Pe-D]=b+1,Pe>=_a?_a=Pe:mt=!0,N(pe,u[Pe],p,null,h,x,A,y,w),Q++)}const ka=mt?Rl(Tt):bt;for(Y=ka.length-1,b=be-1;b>=0;b--){const pe=D+b,Pe=u[pe],Aa=pe+1<S?u[pe+1].el:v;Tt[b]===0?N(null,Pe,p,Aa,h,x,A,y,w):mt&&(Y<0||b!==ka[Y]?et(Pe,p,Aa,2):Y--)}}},et=(f,u,p,v,h=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,v);return}if(b&128){f.suspense.move(u,p,v);return}if(b&64){A.move(f,u,p,dt);return}if(A===Ie){r(x,u,p);for(let P=0;P<w.length;P++)et(w[P],u,p,v);r(f.anchor,u,p);return}if(A===On){M(f,u,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:F}=y,D=()=>r(x,u,p),K=()=>{P(x,()=>{D(),F&&F()})};T?T(x,D,K):K()}else r(x,u,p)},Ee=(f,u,p,v=!1,h=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:T}=f;if(y!=null&&kr(y,null,p,f,!0),S&256){u.ctx.deactivate(f);return}const F=S&1&&T,D=!kn(f);let K;if(D&&(K=A&&A.onVnodeBeforeUnmount)&&Ce(K,u,f),S&6)Jo(f.component,p,v);else{if(S&128){f.suspense.unmount(p,v);return}F&&tt(f,null,u,"beforeUnmount"),S&64?f.type.remove(f,u,p,h,dt,v):b&&(x!==Ie||P>0&&P&64)?Re(b,u,p,!1,!0):(x===Ie&&P&384||!h&&S&16)&&Re(w,u,p),v&&xa(f)}(D&&(K=A&&A.onVnodeUnmounted)||F)&&ue(()=>{K&&Ce(K,u,f),F&&tt(f,null,u,"unmounted")},p)},xa=f=>{const{type:u,el:p,anchor:v,transition:h}=f;if(u===Ie){Vo(p,v);return}if(u===On){I(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,w=()=>A(p,x);y?y(f.el,x,w):w()}else x()},Vo=(f,u)=>{let p;for(;f!==u;)p=g(f),a(f),f=p;a(u)},Jo=(f,u,p)=>{const{bum:v,scope:h,update:x,subTree:A,um:y}=f;v&&nr(v),h.stop(),x&&(x.active=!1,Ee(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,v=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ee(f[A],u,p,v,h)},an=f=>f.shapeFlag&6?an(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),wa=(f,u,p)=>{f==null?u._vnode&&Ee(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ma(),qi(),u._vnode=f},dt={p:N,um:Ee,m:et,r:xa,mt:Gn,mc:ge,pc:W,pbc:Fe,n:an,o:e};let Qn,er;return t&&([Qn,er]=t(dt)),{render:wa,hydrate:Qn,createApp:El(wa,Qn)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function mo(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||mo(o,s)),s.type===Kn&&(s.el=o.el)}}function Rl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ll=e=>e.__isTeleport,Ie=Symbol.for("v-fgt"),Kn=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),On=Symbol.for("v-stc"),Dt=[];let _e=null;function jl(e=!1){Dt.push(_e=e?null:[])}function Dl(){Dt.pop(),_e=Dt[Dt.length-1]||null}let Wt=1;function Wa(e){Wt+=e}function zl(e){return e.dynamicChildren=Wt>0?_e||bt:null,Dl(),Wt>0&&_e&&_e.push(e),e}function $l(e,t,n,r,a,i){return zl(U(e,t,n,r,a,i,!0))}function Ar(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Xn="__vInternal",po=({key:e})=>e??null,En=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||fe(e)||L(e)?{i:we,r:e,k:t,f:!!n}:e:null);function U(e,t=null,n=null,r=0,a=null,i=e===Ie?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&po(t),ref:t&&En(t),scopeId:Yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return s?(ra(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Wt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const de=Ul;function Ul(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===gl)&&(e=Yt),Ar(e)){const s=kt(e,t,!0);return n&&ra(s,n),Wt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(Ql(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Yr(s)),G(l)&&(Bi(l)&&!R(l)&&(l=ne({},l)),t.style=Br(l))}const o=re(e)?1:rl(e)?128:Ll(e)?64:G(e)?4:L(e)?2:0;return U(e,t,n,r,a,o,i,!0)}function Hl(e){return e?Bi(e)||Xn in e?ne({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Yl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&po(s),ref:t&&t.ref?n&&a?R(a)?a.concat(En(t)):[a,En(t)]:En(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ho(e=" ",t=0){return de(Kn,null,e,t)}function Bl(e,t){const n=de(On,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?de(Yt):R(e)?de(Ie,null,e.slice()):typeof e=="object"?Ke(e):de(Kn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:kt(e)}function ra(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ra(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Xn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[ho(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Yr([t.class,r.class]));else if(a==="style")t.style=Br([t.style,r.style]);else if(jn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Oe(e,t,7,[n,r])}const Wl=oo();let Kl=0;function Xl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Wl,i={uid:Kl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lo(r,a),emitsOptions:Ji(r,a),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Vs.bind(null,i),e.ce&&e.ce(i),i}let te=null,aa,pt,Ka="__VUE_INSTANCE_SETTERS__";(pt=dr()[Ka])||(pt=dr()[Ka]=[]),pt.push(e=>te=e),aa=e=>{pt.length>1?pt.forEach(t=>t(e)):pt[0](e)};const At=e=>{aa(e),e.scope.on()},ft=()=>{te&&te.scope.off(),aa(null)};function vo(e){return e.vnode.shapeFlag&4}let Kt=!1;function ql(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=vo(e);Cl(e,n,a,t),Tl(e,r);const i=a?Vl(e,t):void 0;return Kt=!1,i}function Vl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yi(new Proxy(e.ctx,yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Zl(e):null;At(e),Pt();const i=qe(r,e,0,[e.props,a]);if(Ct(),ft(),Si(i)){if(i.then(ft,ft),t)return i.then(o=>{Xa(e,o,t)}).catch(o=>{Hn(o,e,0)});e.asyncDep=i}else Xa(e,i,t)}else go(e,t)}function Xa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Wi(t)),go(e,n)}let qa;function go(e,t,n){const r=e.type;if(!e.render){if(!t&&qa&&!r.render){const a=r.template||ta(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=qa(a,c)}}e.render=r.render||Ae}{At(e),Pt();try{xl(e)}finally{Ct(),ft()}}}function Jl(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function Zl(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Jl(e)},slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wi(Yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in jt)return jt[n](e)},has(t,n){return n in t||n in jt}}))}function Gl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Ql(e){return L(e)&&"__vccOpts"in e}const rt=(e,t)=>Hs(e,t,Kt);function ef(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?Ar(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ar(n)&&(n=[n]),de(e,t,n))}const tf=Symbol.for("v-scx"),nf=()=>An(tf),rf="3.3.6",af="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Va=it&&it.createElement("template"),of={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(af,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Va.innerHTML=r?`<svg>${e}</svg>`:e;const s=Va.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},sf=Symbol("_vtc");function lf(e,t,n){const r=e[sf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ff=Symbol("_vod");function cf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Or(r,i,"");for(const i in n)Or(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),ff in e&&(r.display=i)}}const Ja=/\s*!important$/;function Or(e,t,n){if(R(n))n.forEach(r=>Or(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=uf(e,t);Ja.test(n)?e.setProperty(Et(r),n.replace(Ja,""),"important"):e[r]=n}}const Za=["Webkit","Moz","ms"],ir={};function uf(e,t){const n=ir[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return ir[t]=r;r=$n(r);for(let a=0;a<Za.length;a++){const i=Za[a]+r;if(i in e)return ir[t]=i}return t}const Ga="http://www.w3.org/1999/xlink";function df(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n);else{const i=ds(t);n==null||i&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function mf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ti(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function pf(e,t,n,r){e.addEventListener(t,n,r)}function hf(e,t,n,r){e.removeEventListener(t,n,r)}const Qa=Symbol("_vei");function vf(e,t,n,r,a=null){const i=e[Qa]||(e[Qa]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=gf(t);if(r){const c=i[t]=xf(r,a);pf(e,s,c,l)}else o&&(hf(e,s,o,l),i[t]=void 0)}}const ei=/(?:Once|Passive|Capture)$/;function gf(e){let t;if(ei.test(e)){t={};let r;for(;r=e.match(ei);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),t]}let or=0;const bf=Promise.resolve(),yf=()=>or||(bf.then(()=>or=0),or=Date.now());function xf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(wf(r,n.value),t,5,[r])};return n.value=e,n.attached=yf(),n}function wf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ti=/^on[a-z]/,_f=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?lf(e,r,a):t==="style"?cf(e,n,r):jn(t)?zr(t)||vf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,r,a))?mf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),df(e,t,r,a))};function kf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ti.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ti.test(t)&&re(n)?!1:t in e}const Af=ne({patchProp:_f},of);let ni;function Of(){return ni||(ni=Ml(Af))}const Ef=(...e)=>{const t=Of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Pf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Pf(e){return re(e)?document.querySelector(e):e}const bo=e=>(Js("data-v-1c691f27"),e=e(),Zs(),e),Cf=bo(()=>U("header",null,[U("nav",{role:"navigation"},[U("div",{id:"menuToggle"},[U("input",{type:"checkbox"}),U("span"),U("span"),U("span"),U("ul",{id:"menu"},[U("li",null,[U("a",{href:"#"},"Home")]),U("li",{class:""},[U("div",{tabindex:"0",class:"onclick-menu"},[ho(" About "),U("ul",{class:"onclick-menu-content"},[U("li",null,[U("a",{href:"#"},"Sub-1")]),U("li",null,[U("a",{href:"#"},"Sub-2")]),U("li",null,[U("a",{href:"#"},"Sub-3")])])])]),U("li",null,[U("a",{href:"#"},"Info")]),U("li",null,[U("a",{href:"#"},"Contact")]),U("li",null,[U("a",{href:"https://erikterwan.com/",target:"_blank"},"Show me more")])])])])],-1)),If={class:"title"},Sf={class:"chevron"},Tf=bo(()=>U("span",null," découvrir plus ",-1)),Nf=Bl('<div class="presentation" data-v-1c691f27><div class="custom-shape-divider-top-1698099913" data-v-1c691f27><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-v-1c691f27><path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill" data-v-1c691f27></path></svg></div><div id="projet" data-v-1c691f27><p class="text" data-v-1c691f27>Hover over this text to change cursor</p><div class="cursor" data-v-1c691f27></div></div></div>',1),Mf=Qi({__name:"App",setup(e){const t=n=>{if(n){let r=document.getElementById(n);r&&r.scrollIntoView({block:"start",behavior:"smooth"})}};return no(()=>{const n=document.querySelector(".cursor");document.addEventListener("mousemove",r=>{n&&n.setAttribute("style","top: "+(r.pageY-scrollY)+"px; left: "+(r.pageX-scrollX)+"px; transition: 0.2s ease-out;")})}),(n,r)=>{const a=Ra("spline-viewer"),i=Ra("font-awesome-icon");return jl(),$l(Ie,null,[Cf,U("div",If,[de(a,{url:"https://prod.spline.design/re3Gt8cmnnM08TUA/scene.splinecode"}),U("div",Sf,[Tf,de(i,{icon:"angle-down",onClick:r[0]||(r[0]=o=>t("projet"))})])]),Nf],64)}}});const Ff=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Rf=Ff(Mf,[["__scopeId","data-v-1c691f27"]]);function ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ri(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Mn(e){"@babel/helpers - typeof";return Mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Mn(e)}function Lf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ai(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jf(e,t,n){return t&&ai(e.prototype,t),n&&ai(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oa(e,t){return zf(e)||Uf(e,t)||yo(e,t)||Bf()}function Gt(e){return Df(e)||$f(e)||yo(e)||Hf()}function Df(e){if(Array.isArray(e))return Er(e)}function zf(e){if(Array.isArray(e))return e}function $f(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function yo(e,t){if(e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ii=function(){},sa={},xo={},wo=null,_o={mark:ii,measure:ii};try{typeof window<"u"&&(sa=window),typeof document<"u"&&(xo=document),typeof MutationObserver<"u"&&(wo=MutationObserver),typeof performance<"u"&&(_o=performance)}catch{}var Yf=sa.navigator||{},oi=Yf.userAgent,si=oi===void 0?"":oi,Je=sa,q=xo,li=wo,dn=_o;Je.document;var Be=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",ko=~si.indexOf("MSIE")||~si.indexOf("Trident/"),mn,pn,hn,vn,gn,ze="___FONT_AWESOME___",Pr=16,Ao="fa",Oo="svg-inline--fa",ct="data-fa-i2svg",Cr="data-fa-pseudo-element",Wf="data-fa-pseudo-element-pending",la="data-prefix",fa="data-icon",fi="fontawesome-i2svg",Kf="async",Xf=["HTML","HEAD","STYLE","SCRIPT"],Eo=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",ca=[X,Z];function Qt(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Xt=Qt((mn={},ee(mn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(mn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),mn)),qt=Qt((pn={},ee(pn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(pn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),pn)),Vt=Qt((hn={},ee(hn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(hn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),hn)),qf=Qt((vn={},ee(vn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(vn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),vn)),Vf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Po="fa-layers-text",Jf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Zf=Qt((gn={},ee(gn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(gn,Z,{900:"fass",400:"fasr",300:"fasl"}),gn)),Co=[1,2,3,4,5,6,7,8,9,10],Gf=Co.concat([11,12,13,14,15,16,17,18,19,20]),Qf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jt=new Set;Object.keys(qt[X]).map(Jt.add.bind(Jt));Object.keys(qt[Z]).map(Jt.add.bind(Jt));var ec=[].concat(ca,Gt(Jt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Co.map(function(e){return"".concat(e,"x")})).concat(Gf.map(function(e){return"w-".concat(e)})),zt=Je.FontAwesomeConfig||{};function tc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var rc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rc.forEach(function(e){var t=oa(e,2),n=t[0],r=t[1],a=nc(tc(n));a!=null&&(zt[r]=a)})}var Io={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ao,replacementClass:Oo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zt.familyPrefix&&(zt.cssPrefix=zt.familyPrefix);var Ot=E(E({},Io),zt);Ot.autoReplaceSvg||(Ot.observeMutations=!1);var C={};Object.keys(Io).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ot[e]=n,$t.forEach(function(r){return r(C)})},get:function(){return Ot[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,$t.forEach(function(n){return n(C)})},get:function(){return Ot.cssPrefix}});Je.FontAwesomeConfig=C;var $t=[];function ac(e){return $t.push(e),function(){$t.splice($t.indexOf(e),1)}}var We=Pr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ic(e){if(!(!e||!Be)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var oc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=oc[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ua(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function So(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(So(e[n]),'" ')},"").trim()}function qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function da(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function lc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function fc(e){var t=e.transform,n=e.width,r=n===void 0?Pr:n,a=e.height,i=a===void 0?Pr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ko?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var cc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function To(){var e=Ao,t=Oo,n=C.cssPrefix,r=C.replacementClass,a=cc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ci=!1;function sr(){C.autoAddCss&&!ci&&(ic(To()),ci=!0)}var uc={mixout:function(){return{dom:{css:To,insertCss:sr}}},hooks:function(){return{beforeDOMElementCreation:function(){sr()},beforeI2svg:function(){sr()}}}},$e=Je||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var ke=$e[ze],No=[],dc=function e(){q.removeEventListener("DOMContentLoaded",e),Fn=1,No.map(function(t){return t()})},Fn=!1;Be&&(Fn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Fn||q.addEventListener("DOMContentLoaded",dc));function mc(e){Be&&(Fn?setTimeout(e,0):No.push(e))}function en(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?So(e):"<".concat(t," ").concat(sc(r),">").concat(i.map(en).join(""),"</").concat(t,">")}function ui(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var pc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},lr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?pc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function hc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){var t=hc(e);return t.length===1?t[0].toString(16):null}function vc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function di(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Sr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=di(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,di(t)):ke.styles[e]=E(E({},ke.styles[e]||{}),i),e==="fas"&&Sr("fa",t)}var bn,yn,xn,vt=ke.styles,gc=ke.shims,bc=(bn={},ee(bn,X,Object.values(Vt[X])),ee(bn,Z,Object.values(Vt[Z])),bn),ma=null,Mo={},Fo={},Ro={},Lo={},jo={},yc=(yn={},ee(yn,X,Object.keys(Xt[X])),ee(yn,Z,Object.keys(Xt[Z])),yn);function xc(e){return~ec.indexOf(e)}function wc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!xc(a)?a:null}var Do=function(){var t=function(i){return lr(vt,function(o,s,l){return o[l]=lr(s,i,{}),o},{})};Mo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Fo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),jo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||C.autoFetchSvg,r=lr(gc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ro=r.names,Lo=r.unicodes,ma=Vn(C.styleDefault,{family:C.familyDefault})};ac(function(e){ma=Vn(e.styleDefault,{family:C.familyDefault})});Do();function pa(e,t){return(Mo[e]||{})[t]}function _c(e,t){return(Fo[e]||{})[t]}function st(e,t){return(jo[e]||{})[t]}function zo(e){return Ro[e]||{prefix:null,iconName:null}}function kc(e){var t=Lo[e],n=pa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return ma}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Xt[r][e],i=qt[r][e]||qt[r][a],o=e in ke.styles?e:null;return i||o||null}var mi=(xn={},ee(xn,X,Object.keys(Vt[X])),ee(xn,Z,Object.keys(Vt[Z])),xn);function Jn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,X,"".concat(C.cssPrefix,"-").concat(X)),ee(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return mi[X].includes(c)}))&&(s=X),(e.includes(i[Z])||e.some(function(c){return mi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=wc(C.cssPrefix,d);if(vt[d]?(d=bc[s].includes(d)?qf[s][d]:d,o=d,c.prefix=d):yc[s].indexOf(d)>-1?(o=d,c.prefix=Vn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var g=o==="fa"?zo(c.iconName):{},_=st(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||_||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!vt.far&&vt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},ha());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(vt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var Ac=function(){function e(){Lf(this,e),this.definitions={}}return jf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Sr(s,o[s]);var l=Vt[X][s];l&&Sr(l,o[s]),Do()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),pi=[],gt={},wt={},Oc=Object.keys(wt);function Ec(e,t){var n=t.mixoutsTo;return pi=e,gt={},Object.keys(wt).forEach(function(r){Oc.indexOf(r)===-1&&delete wt[r]}),pi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Mn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Tr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Nr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=st(n,t)||t,ui($o.definitions,n,t)||ui(ke.styles,n,t)}var $o=new Ac,Pc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ut("noAuto")},Cc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ut("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,mc(function(){Sc({autoReplaceSvgRoot:n}),ut("watch",t)})}},Ic={icon:function(t){if(t===null)return null;if(Mn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Vn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(Vf))){var a=Jn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:Pc,config:C,dom:Cc,parse:Ic,library:$o,findIconDefinition:Nr,toHtml:en},Sc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&Be&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return en(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Tc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(da(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=qn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Nc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,_=g===void 0?!1:g,j=r.found?r:n,N=j.width,z=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(z)})},I=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/z*16*.0625,"em")}:{};_&&(M.attributes[ct]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete M.attributes.title);var B=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},I),m.styles)}),ae=r.found&&n.found?Ue("generateAbstractMask",B)||{children:[],attributes:{}}:Ue("generateAbstractIcon",B)||{children:[],attributes:{}},ie=ae.children,ge=ae.attributes;return B.children=ie,B.attributes=ge,s?Nc(B):Tc(B)}function hi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ct]="");var d=E({},o.styles);da(a)&&(d.transform=fc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=qn(d);m.length>0&&(c.style=m);var g=[];return g.push({tag:"span",attributes:c,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Mc(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var fr=ke.styles;function Mr(e){var t=e[0],n=e[1],r=e.slice(4),a=oa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Fc={found:!1,width:512,height:512};function Rc(e,t){!Eo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Fr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=zo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&fr[t]&&fr[t][e]){var o=fr[t][e];return r(Mr(o))}Rc(e,t),r(E(E({},Fc),{},{icon:C.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var vi=function(){},Rr=C.measurePerformance&&dn&&dn.mark&&dn.measure?dn:{mark:vi,measure:vi},Rt='FA "6.4.2"',Lc=function(t){return Rr.mark("".concat(Rt," ").concat(t," begins")),function(){return Uo(t)}},Uo=function(t){Rr.mark("".concat(Rt," ").concat(t," ends")),Rr.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},ga={begin:Lc,end:Uo},Pn=function(){};function gi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function jc(e){var t=e.getAttribute?e.getAttribute(la):null,n=e.getAttribute?e.getAttribute(fa):null;return t&&n}function Dc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function zc(){if(C.autoReplaceSvg===!0)return Cn.replace;var e=Cn[C.autoReplaceSvg];return e||Cn.replace}function $c(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Uc(e){return q.createElement(e)}function Ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$c:Uc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ho(o,{ceFn:r}))}),a}function Hc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Cn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ho(a),n)}),n.getAttribute(ct)===null&&C.keepOriginalSource){var r=q.createComment(Hc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ua(n).indexOf(C.replacementClass))return Cn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return en(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function bi(e){e()}function Bo(e,t){var n=typeof t=="function"?t:Pn;if(e.length===0)n();else{var r=bi;C.mutateApproach===Kf&&(r=Je.requestAnimationFrame||bi),r(function(){var a=zc(),i=ga.begin("mutate");e.map(a),i(),n()})}}var ba=!1;function Yo(){ba=!0}function Lr(){ba=!1}var Rn=null;function yi(e){if(li&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Pn:t,r=e.nodeCallback,a=r===void 0?Pn:r,i=e.pseudoElementsCallback,o=i===void 0?Pn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Rn=new li(function(c){if(!ba){var d=Ze();It(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!gi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&gi(m.target)&&~Qf.indexOf(m.attributeName))if(m.attributeName==="class"&&jc(m.target)){var g=Jn(ua(m.target)),_=g.prefix,j=g.iconName;m.target.setAttribute(la,_||d),j&&m.target.setAttribute(fa,j)}else Dc(m.target)&&a(m.target)})}}),Be&&Rn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bc(){Rn&&Rn.disconnect()}function Yc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Wc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Jn(ua(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=_c(a.prefix,e.innerText)||pa(a.prefix,Ir(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Kc(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Kc(e),s=Tr("parseNodeAttributes",{},e),l=t.styleParser?Yc(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var qc=ke.styles;function Wo(e){var t=C.autoReplaceSvg==="nest"?xi(e,{styleParser:!1}):xi(e);return~t.extra.classes.indexOf(Po)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Ge=new Set;ca.map(function(e){Ge.add("fa-".concat(e))});Object.keys(Xt[X]).map(Ge.add.bind(Ge));Object.keys(Xt[Z]).map(Ge.add.bind(Ge));Ge=Gt(Ge);function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(fi,"-").concat(m))},a=function(m){return n.remove("".concat(fi,"-").concat(m))},i=C.autoFetchSvg?Ge:ca.map(function(d){return"fa-".concat(d)}).concat(Object.keys(qc));i.includes("fa")||i.push("fa");var o=[".".concat(Po,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ga.begin("onTree"),c=s.reduce(function(d,m){try{var g=Wo(m);g&&d.push(g)}catch(_){Eo||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(g){Bo(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function Vc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wo(e).then(function(n){n&&Bo([n],t)})}function Jc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Nr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Nr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Zc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,g=m===void 0?null:m,_=n.titleId,j=_===void 0?null:_,N=n.classes,z=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,M=n.styles,I=M===void 0?{}:M;if(t){var B=t.prefix,ae=t.iconName,ie=t.icon;return Zn(E({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(g?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||Zt()):(O["aria-hidden"]="true",O.focusable="false")),va({icons:{main:Mr(ie),mask:l?Mr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ae,transform:E(E({},Ne),a),symbol:o,title:g,maskId:d,titleId:j,extra:{attributes:O,styles:I,classes:z}})})}},Gc={mixout:function(){return{icon:Jc(Zc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wi,n.nodeCallback=Vc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return wi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(_,j){Promise.all([Fr(a,s),d.iconName?Fr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var z=oa(N,2),k=z[0],O=z[1];_([n,va({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=qn(s);l.length>0&&(a.style=l);var c;return da(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Qc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Gt(i)).join(" ")},children:o}]})}}}},eu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),Mc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Gt(s))}})})}}}},tu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,_=g===void 0?{}:g;return Zn({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),hi({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Gt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ko){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,hi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},nu=new RegExp('"',"ug"),_i=[1105920,1112319];function ru(e){var t=e.replace(nu,""),n=vc(t,0),r=n>=_i[0]&&n<=_i[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function ki(e,t){var n="".concat(Wf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(ie){return ie.getAttribute(Cr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Jf),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Z:X,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qt[g][l[2].toLowerCase()]:Zf[g][c],j=ru(m),N=j.value,z=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=pa(_,N),M=O;if(k){var I=kc(N);I.iconName&&I.prefix&&(O=I.iconName,_=I.prefix)}if(O&&!z&&(!o||o.getAttribute(la)!==_||o.getAttribute(fa)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var B=Xc(),ae=B.extra;ae.attributes[Cr]=t,Fr(O,_).then(function(ie){var ge=va(E(E({},B),{},{icons:{main:ie,mask:ha()},prefix:_,iconName:M,extra:ae,watchable:!0})),ve=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ge.map(function(Fe){return en(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function au(e){return Promise.all([ki(e,"::before"),ki(e,"::after")])}function iu(e){return e.parentNode!==document.head&&!~Xf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ai(e){if(Be)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(iu).map(au),a=ga.begin("searchPseudoElements");Yo(),Promise.all(r).then(function(){a(),Lr(),t()}).catch(function(){a(),Lr(),n()})})}var ou={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ai,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;C.searchPseudoElements&&Ai(a)}}},Oi=!1,su={mixout:function(){return{dom:{unwatch:function(){Yo(),Oi=!0}}}},hooks:function(){return{bootstrap:function(){yi(Tr("mutationObserverCallbacks",{}))},noAuto:function(){Bc()},watch:function(n){var r=n.observeMutationsRoot;Oi?Lr():yi(Tr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ei=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},lu={mixout:function(){return{parse:{transform:function(n){return Ei(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ei(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:g};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},cr={x:0,y:0,width:"100%",height:"100%"};function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function fu(e){return e.tag==="g"?e.children:[e]}var cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Jn(a.split(" ").map(function(o){return o.trim()})):ha();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,g=o.icon,_=lc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},cr),{},{fill:"white"})},N=d.children?{children:d.children.map(Pi)}:{},z={tag:"g",attributes:E({},_.inner),children:[Pi(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[z]},O="mask-".concat(s||Zt()),M="clip-".concat(s||Zt()),I={tag:"mask",attributes:E(E({},cr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:fu(g)},I]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},cr)}),{children:r,attributes:a}}}},uu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},du={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},mu=[uc,Gc,Qc,eu,tu,ou,su,lu,cu,uu,du];Ec(mu,{mixoutsTo:he});he.noAuto;he.config;var pu=he.library;he.dom;var jr=he.parse;he.findIconDefinition;he.toHtml;var hu=he.icon;he.layer;he.text;he.counter;function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){"@babel/helpers - typeof";return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function gu(e,t){if(e==null)return{};var n=vu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ko={exports:{}};(function(e){(function(t){var n=function(k,O,M){if(!c(O)||m(O)||g(O)||_(O)||l(O))return O;var I,B=0,ae=0;if(d(O))for(I=[],ae=O.length;B<ae;B++)I.push(n(k,O[B],M));else{I={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(I[k(ie,M)]=n(k,O[ie],M))}return I},r=function(k,O){O=O||{};var M=O.separator||"_",I=O.split||/(?=[A-Z])/;return k.split(I).join(M)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},g=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?k:function(I,B){return M(I,k,B)}},z={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=z:t.humps=z})(bu)})(Ko);var yu=Ko.exports,xu=["class","style"];function wu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function _u(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Xo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Xo(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=_u(d);break;case"style":l.style=wu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=gu(n,xu);return ef(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var qo=!1;try{qo=!0}catch{}function ku(){if(!qo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ur(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Au(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ii(e){if(e&&Ln(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jr.icon)return jr.icon(e);if(e===null)return null;if(Ln(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ou=Qi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=rt(function(){return Ii(t.icon)}),i=rt(function(){return ur("classes",Au(t))}),o=rt(function(){return ur("transform",typeof t.transform=="string"?jr.transform(t.transform):t.transform)}),s=rt(function(){return ur("mask",Ii(t.mask))}),l=rt(function(){return hu(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});_n(l,function(d){if(!d)return ku("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=rt(function(){return l.value?Xo(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Eu={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]};pu.add(Eu);Ef(Rf).component("font-awesome-icon",Ou).mount("#app");
