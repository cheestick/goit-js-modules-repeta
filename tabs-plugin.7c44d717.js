parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RWXo":[function(require,module,exports) {
class t{constructor({rootSelector:t,activeControlClass:e="active",activePaneClass:s="active",activeTab:a=1}){this._refs=this._getRefs(t),this._activeControlClass=e,this._activePaneClass=s,this._activeTabIdx=a-1,this._bindEvents(),this._setActiveTab()}_getRefs(t){const e={};return e.controls=document.querySelector(`${t} [data-controls]`),e.panes=document.querySelector(`${t} [data-panes]`),e}_setActiveTab(){const t=this._refs.controls.querySelectorAll("a")[this._activeTabIdx];t.classList.add(this._activeControlClass);const e=this._getPaneId(t);this._setActivePane(e)}_removeActiveTab(){const t=this._refs.controls.querySelector(`.${this._activeControlClass}`);if(!t)return;t.classList.remove(this._activeControlClass);const e=this._getPaneId(t);this._removeActivePane(e)}_setActivePane(t){this._getPaneById(t).classList.add(this._activePaneClass)}_removeActivePane(t){this._getPaneById(t).classList.remove("pane--active")}_bindEvents(){this._refs.controls.addEventListener("click",this._onControlsClick.bind(this))}_onControlsClick(t){if(t.preventDefault(),"A"!==t.target.nodeName)return void console.log("This is not a reference");this._removeActiveTab();const e=t.target;e.classList.add(this._activeControlClass);const s=this._getPaneId(e);this._setActivePane(s)}_getPaneId(t){return t.getAttribute("href").slice(1)}_getPaneById(t){return this._refs.panes.querySelector(`#${t}`)}}const e={rootSelector:"#tabs-1",activeControlClass:"controls__item--active",activePaneClass:"pane--active"},s=new t(e),a={rootSelector:"#tabs-2",activeControlClass:"controls__item--active",activePaneClass:"pane--active",activeTab:2},i=new t(a);console.log(s),console.log(i);
},{}]},{},["RWXo"], null)
//# sourceMappingURL=/goit-js-modules-repeta/tabs-plugin.7c44d717.js.map