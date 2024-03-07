import '@/index.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import * as Fathom from 'fathom-client'

const app = createApp(App)

app.use(createPinia())
app.use(router)


if (import.meta.env.PROD) {

    const fathomSiteId = import.meta.env.VITE_FATHOM_SITE_ID
    const appDomain = import.meta.env.VITE_APP_DOMAIN

    if (fathomSiteId && appDomain) {
        Fathom.load(fathomSiteId, {
            includedDomains: [appDomain]
        });
    }
}

app.mount('#app')
