import { createApp } from "vue";
import Loading from './loading.vue'

export default function() {

    function append(el) {
        //判断元素是否为定位元素，如果不是则加上position:relative
        let position = getComputedStyle(el).position
        if(['fixed','relative','absolute'].indexOf(position) === -1) {
            el.style.position = "relative"
        }   
        el.appendChild(el['loadingInstance'].$el)
    }

    function remove(el) {
        el.removeChild(el['loadingInstance'].$el)
    }

    return {
        mounted(el,binding) {
            let app = createApp(Loading)
            let instance = app.mount(document.createElement("div"))
            el['loadingInstance'] = instance || {}
            if(!binding.value) {
                append(el)
            }
        },
        updated(el,binding) {
            if(binding.value !== binding.oldValue) {
                remove(el)
            }
        }
    }
}