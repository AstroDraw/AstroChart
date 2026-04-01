---
title: Vue
description: Integrate AstroChart with Vue 3 and Vue 2 applications.
---

# Using AstroChart with Vue

This guide shows how to integrate AstroChart into Vue applications, covering Vue 3 Composition API, Vue 2 Options API, and re-rendering on data changes.

---

## Vue 3 — Composition API

Use a template ref and `onMounted`/`onUnmounted` to manage the chart lifecycle:

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Chart } from '@astrodraw/astrochart'

type AstroData = Parameters<InstanceType<typeof Chart>['radix']>[0]

interface Props {
  data: AstroData
  width?: number
  height?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 600,
  height: 600,
})

const containerRef = ref<HTMLDivElement | null>(null)

function renderChart() {
  if (!containerRef.value) return

  // Clear any previous chart before re-rendering
  containerRef.value.innerHTML = ''

  const chart = new Chart(containerRef.value.id, props.width, props.height)
  chart.radix(props.data)
}

onMounted(() => {
  renderChart()
})

// Re-render whenever the data prop changes
watch(() => props.data, () => {
  renderChart()
}, { deep: true })

onUnmounted(() => {
  // Clean up SVG content when the component is destroyed
  if (containerRef.value) {
    containerRef.value.innerHTML = ''
  }
})
</script>

<template>
  <div id="astrochart-root" ref="containerRef" />
</template>
```

> **Note:** AstroChart is not reactive by default. To update the chart when your data changes, clear `innerHTML` and call `chart.radix()` again — as shown in the `watch` callback above.

---

## Vue 3 — with Settings Prop

Pass custom settings as a prop for per-instance configuration:

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart } from '@astrodraw/astrochart'

const props = defineProps({
  data: { type: Object, required: true },
  settings: { type: Object, default: () => ({}) },
  width: { type: Number, default: 600 },
  height: { type: Number, default: 600 },
})

const containerRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!containerRef.value) return
  const chart = new Chart(containerRef.value.id, props.width, props.height, props.settings)
  chart.radix(props.data)
})

onUnmounted(() => {
  if (containerRef.value) containerRef.value.innerHTML = ''
})
</script>

<template>
  <div id="astrochart-instance" ref="containerRef" />
</template>
```

Usage:

```vue
<AstroChartComponent
  :data="chartData"
  :settings="{ COLOR_BACKGROUND: '#1a1a2e', POINTS_COLOR: '#e0e0ff' }"
  :width="700"
  :height="700"
/>
```

---

## Vue 2 — Options API

For Vue 2, use `mounted` and `beforeDestroy`:

```vue
<template>
  <div id="astrochart-root" ref="container" />
</template>

<script>
import { Chart } from '@astrodraw/astrochart'

export default {
  name: 'AstroChartComponent',
  props: {
    data: { type: Object, required: true },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 600 },
  },
  mounted() {
    const el = this.$refs.container
    if (!el) return
    const chart = new Chart(el.id, this.width, this.height)
    chart.radix(this.data)
    this._chart = chart
  },
  beforeDestroy() {
    const el = this.$refs.container
    if (el) el.innerHTML = ''
  },
  watch: {
    data: {
      handler() {
        const el = this.$refs.container
        if (!el) return
        el.innerHTML = ''
        const chart = new Chart(el.id, this.width, this.height)
        chart.radix(this.data)
      },
      deep: true,
    },
  },
}
</script>
```

---

## Using with Nuxt (SSR)

AstroChart manipulates the DOM and must only run in the browser. Wrap your component in `<ClientOnly>`:

```vue
<template>
  <ClientOnly>
    <AstroChartComponent :data="chartData" />
  </ClientOnly>
</template>

<script setup>
import AstroChartComponent from '~/components/AstroChartComponent.vue'
const chartData = { planets: { Sun: [120.5] }, cusps: [0,30,60,90,120,150,180,210,240,270,300,330] }
</script>
```

---

## Important Notes

- **AstroChart is not reactive.** It renders to SVG once and does not observe data changes. Use a `watch` + `innerHTML = ''` pattern to re-render on changes.
- **Always clean up** in `onUnmounted` / `beforeDestroy` to avoid orphaned SVG content when the component is removed from the DOM.
- **Unique element IDs:** If you render multiple chart components, ensure each container has a unique `id` attribute — otherwise charts will overwrite each other.

---

## Next Steps

- **[React Integration](./react)** — Use with React
- **[Angular Integration](./angular)** — Use with Angular
- **[Multiple Charts](../multiple-charts)** — Render several instances on one page
