<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { socket } from 'boot/socketio'

export default defineComponent({
  name: 'PageIndex',
  mounted () {
    socket.on('connectclient', (data) => {
      console.log(data)
    })
  }
})
</script>
