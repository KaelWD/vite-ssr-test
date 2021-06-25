import viteSSR from 'vite-ssr'
import App from './App.vue'

import 'vuetify/lib/styles/main.sass'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/lib/components'

const component1 = {
  template: `<div class="title">Page 1</div>`,
}
const component2 = {
  template: `<div class="title">Page 2</div>`,
}

const routes = [
  {
    path: '/page1',
    name: 'Page 1',
    component: component1,
  },
  {
    path: '/page2',
    name: 'Page 2',
    component: component2,
  },
  { path: '/:pathMatch(.*)*', redirect: '/page1' },
]

export default viteSSR(App, { routes }, ({ app }) => {
  console.log(import.meta.env.SSR)

  app.use(createVuetify({ components }))
})
