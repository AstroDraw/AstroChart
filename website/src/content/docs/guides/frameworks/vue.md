---
title: Vue
description: Integrate AstroChart with Vue applications.
---

# Using AstroChart with Vue

This guide shows how to use AstroChart in Vue applications.

## Basic Component

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart } from '@astrodraw/astrochart'

const container = ref<HTMLDivElement | null>(null)

const props = defineProps({
  data: Object,
  width: { type: Number, default: 600 },
  height: { type: Number, default: 600 }
})

onMounted(() => {
  if (!container.value) return
  const chart = new Chart(container.value.id, props.width, props.height)
  chart.radix(props.data)
})
</script>

<template>
  <div id="astrochart-root" ref="container" />
</template>
```

## With Nuxt

For Nuxt (SSR):

```vue
<template>
  <ClientOnly>
    <AstroChart :data="chartData" />
  </ClientOnly>
</template>

<script setup>
import AstroChart from '~/components/AstroChart.vue'
const chartData = ref({})
</script>
```

## Next Steps

- **[React Integration](./react)** — Use with React
- **[Angular Integration](./angular)** — Use with Angular
