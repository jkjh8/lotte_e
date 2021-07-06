import io from 'socket.io-client'
import { boot } from 'quasar/wrappers'

const socket = io(`http://${window.location.hostname}:3000`, {
  withCredentials: true
})

// Vue.prototype.$socket = socket

export default boot(({ app }) => {
  app.config.globalProperties.$socket = socket
})

export { socket }
