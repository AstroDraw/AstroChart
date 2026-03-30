import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://astrodraw.github.io/',
  integrations: [
    starlight({
      title: 'AstroChart',
      description: 'Pure SVG astrology charts for the web',
      favicon: '/favicon.svg',
      logo: {
        src: './public/img/logo.svg',
        alt: 'AstroChart Logo'
      },
      social: {
        github: 'https://github.com/AstroDraw/AstroChart',
        'x.com': 'https://x.com'
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/introduction' },
            { label: 'Installation', slug: 'docs/installation' },
            { label: 'Quick Start', slug: 'docs/quickstart' }
          ]
        },
        {
          label: 'Guides',
          items: [
            { label: 'Radix Chart', slug: 'docs/guides/radix-chart' },
            { label: 'Transit Chart', slug: 'docs/guides/transit-chart' },
            { label: 'Animation', slug: 'docs/guides/animation' },
            { label: 'Custom Settings', slug: 'docs/guides/custom-settings' },
            { label: 'Custom Symbols', slug: 'docs/guides/custom-symbols' },
            { label: 'Multiple Charts', slug: 'docs/guides/multiple-charts' },
            { label: 'Click Events', slug: 'docs/guides/click-events' },
            {
              label: 'Framework Integrations',
              items: [
                { label: 'React', slug: 'docs/guides/frameworks/react' },
                { label: 'Vue', slug: 'docs/guides/frameworks/vue' },
                { label: 'Angular', slug: 'docs/guides/frameworks/angular' }
              ]
            }
          ]
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Chart', slug: 'docs/api/chart' },
            { label: 'Radix', slug: 'docs/api/radix' },
            { label: 'Transit', slug: 'docs/api/transit' },
            { label: 'Aspect Calculator', slug: 'docs/api/aspect-calculator' },
            { label: 'Zodiac', slug: 'docs/api/zodiac' },
            { label: 'Settings Reference', slug: 'docs/api/settings' },
            { label: 'Types', slug: 'docs/api/types' }
          ]
        },
        {
          label: 'Project',
          items: [
            { label: 'Changelog', slug: 'docs/changelog' },
            { label: 'Contributing', slug: 'docs/contributing' }
          ]
        }
      ]
    }),
    sitemap()
  ]
})
