import Vue from 'vue'
import baseModal from './notify.vue'

const NotifyConstructor = Vue.extend(baseModal);
const instance = new NotifyConstructor({
    el: document.createElement('div')
});

let timer = null;
let lock = false;

const notifyClicked = function () {
    clearTimeout(timer);
    instance.clickNotify();
}

NotifyConstructor.prototype.closeNotify = function () {
    instance.classes = 'yd-notify-out';

    setTimeout(() => {
        const el = instance.$el;
        el.removeEventListener("click", notifyClicked);
        el.parentNode && el.parentNode.removeChild(el);
        lock = false;
    }, 150);

    typeof this.callback === 'function' && this.callback();
};

NotifyConstructor.prototype.clickNotify = function () {
    typeof this.clickCallback === 'function' && this.clickCallback();
    instance.closeNotify();
};


const Notify = {};

Notify.install = function (Vue) {

    Vue.prototype.$notify = function (options) {

        instance.classes = '';
        instance.mes = options.mes;
        instance.timeout = ~~options.timeout || 5000;
        instance.callback = options.callback;
        instance.clickCallback = options.clickCallback;

        if (lock) return;
        lock = true;
        document.body.appendChild(instance.$el);

        instance.$el.addEventListener('click', notifyClicked);

        timer = setTimeout(() => {
            clearTimeout(timer);
            instance.closeNotify();
        }, instance.timeout);
    }
}

export default Notify;
