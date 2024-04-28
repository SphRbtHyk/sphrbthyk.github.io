import './assets/main.css'

import { createApp } from 'vue'
import {createBootstrap} from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "vuetify/dist/vuetify.min.css";


const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(createBootstrap({components: true, directives: true}))
app.use(vuetify)
app.use(router)

app.mount('#app')
