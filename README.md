# AstroChart

![GitHub release](https://img.shields.io/github/v/release/AstroDraw/AstroChart?style=flat-square)

A free and open-source JavaScript library for generating SVG charts to display planets in astrology. It does not calculate any positions of the planets in Universe.

- Pure Javascript implementation without dependencies.
- SVG graphics.
- Tested code.

### Example
- [Radix chart](./project/examples/radix/radix.html)
- [Radix 15. 11. 2016](./project/examples/radix/radix_2016_11_15.html)
- [Radix collision](./project/examples/radix/radix_collision.html)
- [Transit chart](./project/examples/transit/transit.html)
- [Stroke only](./project/examples/transit/stroke_only.html)
- [Animation](./project/examples/transit/animate.html)
- [Calibration](./project/examples/debug/calibration.html)
- [2 charts on page](./project/examples/2ChartsOnPage/2radix.html)


### How to use
```
<script src="js/astrochart.min.js"></script>
<script>
	window.onload = function(){	
		var chart = new astrology.Chart( 'paper', 800, 800);
		chart.radix( data );					
	};			
</script>
```
### Known points
Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Chiron, Lilith, NNode.

### Data example
``` 
{
	"planets":{"Moon":[0], "Sun":[30], "Mercury":[60], ... },
	"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]	
}
```

### Chart settings
Look into the [settings.js](https://github.com/AstroDraw/AstroChart/blob/main/project/src/settings.js)
```
var settings = {SYMBOL_SCALE:2};
var chart = new astrology.Chart( 'paper', 800, 800, settings);
```

### People  
**Creator**: [Kibo](https://github.com/Kibo)  
**Mantainer**: [afucher](https://github.com/afucher)  

### It might interest you
- [The Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm)
- [AstroWebService](https://github.com/Kibo/AstroWebService)
- [AstroAPI](https://github.com/Kibo/AstroAPI)
