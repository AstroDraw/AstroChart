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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AstroDraw/AstroChart' }
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: 'Installation', slug: 'installation' },
            { label: 'Quick Start', slug: 'quickstart' }
          ]
        },
        {
          label: 'Guides',
          items: [
            { label: 'Radix Chart', slug: 'guides/radix-chart' },
            { label: 'Transit Chart', slug: 'guides/transit-chart' },
            { label: 'Animation', slug: 'guides/animation' },
            { label: 'Custom Settings', slug: 'guides/custom-settings' },
            { label: 'Custom Symbols', slug: 'guides/custom-symbols' },
            { label: 'Multiple Charts', slug: 'guides/multiple-charts' },
            { label: 'Click Events', slug: 'guides/click-events' },
            {
              label: 'Framework Integrations',
              items: [
                { label: 'React', slug: 'guides/frameworks/react' },
                { label: 'Vue', slug: 'guides/frameworks/vue' },
                { label: 'Angular', slug: 'guides/frameworks/angular' }
              ]
            }
          ]
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Chart', slug: 'api/chart' },
            { label: 'Radix', slug: 'api/radix' },
            { label: 'Transit', slug: 'api/transit' },
            { label: 'Aspect Calculator', slug: 'api/aspect-calculator' },
            { label: 'Zodiac', slug: 'api/zodiac' },
            { label: 'Settings Reference', slug: 'api/settings' },
            { label: 'Types', slug: 'api/types' }
          ]
        },
        {
          label: 'Project',
          items: [
            { label: 'Changelog', slug: 'changelog' },
            { label: 'Contributing', slug: 'contributing' }
          ]
        }
      ]
    }),
    sitemap()
  ]
})
