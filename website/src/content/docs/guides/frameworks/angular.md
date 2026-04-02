---
title: Angular
description: Integrate AstroChart with Angular applications.
---

# Using AstroChart with Angular

This guide covers integrating AstroChart into Angular components using `ngAfterViewInit`, `ngOnDestroy`, and `@ViewChild`.

---

## Basic Component

Use `@ViewChild` to get a reference to the container element, then initialise the chart in `ngAfterViewInit`:

```typescript
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
} from '@angular/core'
import { Chart } from '@astrodraw/astrochart'

@Component({
  selector: 'app-astrochart',
  template: `<div #chartContainer [id]="containerId"></div>`,
  styleUrls: ['./astrochart.component.scss'],
})
export class AstroChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartContainer') containerRef!: ElementRef<HTMLDivElement>

  @Input() data: any
  @Input() width = 600
  @Input() height = 600
  @Input() settings: Record<string, any> = {}

  containerId = `astrochart-${Math.random().toString(36).slice(2, 9)}`

  ngAfterViewInit(): void {
    this.renderChart()
  }

  ngOnDestroy(): void {
    if (this.containerRef?.nativeElement) {
      this.containerRef.nativeElement.innerHTML = ''
    }
  }

  private renderChart(): void {
    const el = this.containerRef?.nativeElement
    if (!el) return

    el.innerHTML = '' // clear any previous render
    const chart = new Chart(this.containerId, this.width, this.height, this.settings)
    chart.radix(this.data)
  }
}
```

Usage in a parent template:

```html
<app-astrochart [data]="natalData" [width]="600" [height]="600" />
```

---

## Re-rendering on Input Changes

Implement `OnChanges` to re-render when `data` or `settings` are updated:

```typescript
ngOnChanges(changes: SimpleChanges): void {
  if ((changes['data'] || changes['settings']) && this.containerRef) {
    this.renderChart()
  }
}
```

Add `OnChanges` to the `implements` clause:

```typescript
export class AstroChartComponent implements AfterViewInit, OnDestroy, OnChanges {
```

---

## Server-Side Rendering (Angular Universal)

AstroChart requires a DOM and must only run in the browser. Guard with `isPlatformBrowser`:

```typescript
import { isPlatformBrowser } from '@angular/common'
import { Inject, PLATFORM_ID } from '@angular/core'

export class AstroChartComponent implements AfterViewInit, OnDestroy {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return
    this.renderChart()
  }
}
```

---

## Running Outside the Angular Zone (Performance Tip)

Chart rendering involves no Angular data-binding, so you can run it outside the Angular change-detection zone to avoid unnecessary checks:

```typescript
import { NgZone } from '@angular/core'

export class AstroChartComponent implements AfterViewInit, OnDestroy {
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderChart()
    })
  }
}
```

This is optional but can improve performance when `data` changes frequently.

---

## Standalone Component (Angular 15+)

If you use standalone components, import `CommonModule` or `NgIf` as needed and set `standalone: true`:

```typescript
@Component({
  selector: 'app-astrochart',
  standalone: true,
  imports: [],
  template: `<div #chartContainer [id]="containerId"></div>`,
})
export class AstroChartComponent implements AfterViewInit, OnDestroy {
  // ... same implementation
}
```

---

## Notes

- **Always clean up** in `ngOnDestroy` by clearing `innerHTML`. This prevents SVG content from leaking when the component is removed.
- **Unique container IDs:** Generate a unique `id` per instance (as shown with `Math.random()` above) if multiple chart components can appear on the same page simultaneously.
- **No Zone.js dependency:** AstroChart does not use signals, observables, or Zone.js — it is a plain DOM/SVG library that is safe to run outside Angular's zone.

---

## Next Steps

- **[React Integration](./react)** — Use with React
- **[Vue Integration](./vue)** — Use with Vue
- **[Multiple Charts](../../multiple-charts)** — Render several instances on one page
