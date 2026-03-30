---
title: Angular
description: Integrate AstroChart with Angular applications.
---

# Using AstroChart with Angular

This guide shows how to use AstroChart in Angular applications.

## Basic Component

```typescript
import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core'
import { Chart } from '@astrodraw/astrochart'

@Component({
  selector: 'app-astrochart',
  template: '<div #container></div>',
  styleUrls: ['./astrochart.component.css']
})
export class AstroChartComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef
  @Input() data: any
  @Input() width = 600
  @Input() height = 600

  ngAfterViewInit() {
    if (!this.container) return
    const chart = new Chart(this.container.nativeElement.id, this.width, this.height)
    chart.radix(this.data)
  }
}
```

## With Universal (SSR)

Guard against server-side rendering:

```typescript
import { isPlatformBrowser } from '@angular/common'
import { Component, Inject, PLATFORM_ID } from '@angular/core'

export class AstroChartComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return
    // Initialize chart
  }
}
```

## Next Steps

- **[React Integration](/docs/guides/frameworks/react)** — Use with React
- **[Vue Integration](/docs/guides/frameworks/vue)** — Use with Vue
