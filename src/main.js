// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import './tailwind.css'
// // import 'flowbite/plugin'
// // import PortalVue from 'portal-vue'
// import { createHead } from '@vueuse/head'
// import 'normalize.css'
// // import '../node_modules/flowbite-vue/dist/index.css'
// // import 'bootstrap-icons/font/bootstrap-icons.css'

// // fix to build

// const head = createHead()
// const app = createApp(App)

// app.use(head).use(router)

// router.isReady().then(() => {
//     app.mount('#app')
// })


// main.js (transformed for vue-web-component-wrapper)

// main.js (Lotto project)
import App from './App.vue'
import {
    defineCustomElement as VueDefineCustomElement,
    h,
    createApp,
    getCurrentInstance,
} from 'vue'

import { createWebComponent } from 'vue-web-component-wrapper'

// Dev: normal style for hot-reload
if (import.meta.env.MODE === 'development') {
    import('./tailwind.css').then(() => {
        const app = createApp(App)
        app.mount('#app')
    })
} else {
    // Build: inline raw CSS for web component encapsulation
    import('./tailwind.css?inline').then((style) => {
        createWebComponent({
            rootComponent: App,
            elementName: 'soccer-app',
            cssFrameworkStyles: style.default, // <-- must use `.default` from dynamic import
            VueDefineCustomElement,
            h,
            createApp,
            getCurrentInstance,
            disableShadowDOM: true,
        })
    })
}


// Platform Side:
// onMounted(() => {
//     if (!customElements.get('lotto-app')) {
//       const script = document.createElement('script')
//       script.src = '/lotto-app.js'
//       script.type = 'module' // Or remove if built without ESM
//       document.body.appendChild(script)
//     }
//   })
  

