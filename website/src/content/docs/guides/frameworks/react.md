---
title: React
description: Integrate AstroChart with React applications.
---

# Using AstroChart with React

This guide shows how to use AstroChart in React applications.

## Basic Hook

```typescript
import { useEffect, useRef } from 'react'
import { Chart } from '@astrodraw/astrochart'

export function AstroChartComponent({ data, width = 600, height = 600 }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chart = new Chart(containerRef.current.id, width, height)
    chart.radix(data)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [data, width, height])

  return <div id="astrochart-root" ref={containerRef} />
}
```

## With Next.js

For Next.js with SSR disabled:

```typescript
import dynamic from 'next/dynamic'

const AstroChart = dynamic(
  () => import('./AstroChart'),
  { ssr: false }
)

export default function Page() {
  return <AstroChart data={chartData} />
}
```

## Next Steps

- **[Vue Integration](/docs/guides/frameworks/vue)** — Use with Vue
- **[Angular Integration](/docs/guides/frameworks/angular)** — Use with Angular
