<template>
  <div
    id="pointer-ring"
    :style="`border-color: rgb(117, 12, 126); padding: 15px; transform: translate(${position.x}px, ${position.y}px)`"
    class=""
  ></div>
  <div
    id="pointer-dot"
    :style="`border-color: white; transform: translate(${position.x}px, ${position.y}px)`"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface newType {
  x: number
  y: number
}
export default defineComponent({
  setup() {
    const position = ref<newType>({ x: 0, y: 0 })

    return { position }
  },

  created: function () {
    window.addEventListener('mousemove', this.Mousemove)
  },
  unmounted: function () {
    window.removeEventListener('mousemove', this.Mousemove)
  },

  methods: {
    Mousemove(e: MouseEvent) {
      this.position.x = e.clientX
      this.position.y = e.clientY
    }
  }
})
</script>

<style scoped></style>
