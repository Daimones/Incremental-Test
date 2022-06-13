
/**
 * 
 * @param {*} tag 
 * @param {*} opt_parent 
 * @returns {HTMLElement}
 */export function makeElement(tag, opt_parent) {
    var parent = opt_parent || document.body
    var el = document.createElement(tag)
    if(parent != 'doNotAddToParent') parent.appendChild(el)
    return el
}
/**
 * 
 * @param {*} tag 
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} opt_parent 
 * @returns {HTMLElement}
 */
export function makeAbsElement(tag, x, y, w, h, opt_parent){
    var el = makeElement(tag,opt_parent)
    el.style.position = 'absolute'
    el.style.left = (x && x.length && x[x.length - 1] == '%') ? x : (Math.floor(x) + 'px')
    el.style.top = (y && y.length && y[y.length - 1] == '%') ? y : (Math.floor(y) + 'px')
    el.style.width = (w && w.length && w[w.length - 1] == '%') ? w : (Math.floor(w) + 'px')
    el.style.height = (h && h.length && h[h.length - 1] == '%') ? h : (Math.floor(h) + 'px')
    return el
}
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} w 
 * @param {*} h 
 * @param {*} opt_parent 
 * @returns {HTMLElement}
 */
export function makeDiv(x, y, w, h, opt_parent) {
    var el = makeAbsElement('div', x, y, w, h, opt_parent)
    return el
}

/**
 * 
 * @param {HTMLElement} el 
 * @param {HTMLElementEventMap} event 
 * @param {*} idname 
 * @param {*} fun 
 */
 export function setEvent(el, event, idname, fun) {
    if(!el.util_set_events_) el.util_set_events_ = {};
    if(!el.util_set_events_[event]) el.util_set_events_[event] = {};
    if(el.util_set_events_[event][idname]) {
      el.removeEventListener(event, el.util_set_events_[event][idname]);
    }
    el.util_set_events_[event][idname] = fun;
    el.addEventListener(event, fun, false);
    return 
  };
