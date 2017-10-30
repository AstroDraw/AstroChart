# AstroChart
A free and open-source JavaScript library for generating SVG charts to display planets in astrology. It does not calculate any positions of the planets in Universe.

**Version**: 2.0.0

- Pure Javascript implementation without dependencies.
- SVG graphics.
- Tested code.

### Example
- [Radix chart](https://cdn.rawgit.com/Kibo/AstroChart/master/project/examples/radix/radix.html)
- [Radix 15. 11. 2016](https://cdn.rawgit.com/Kibo/AstroChart/master/project/examples/radix/radix_2016_11_15.html)
- [Radix collision](https://cdn.rawgit.com/Kibo/AstroChart/master/project/examples/radix/radix_collision.html)
- [Transit chart](https://cdn.rawgit.com/Kibo/AstroChart/master/project/examples/transit/transit.html)
- [Stroke only](https://cdn.rawgit.com/Kibo/AstroChart/master/project/examples/transit/stroke_only.html)
- [Calibration](https://cdn.rawgit.com/Kibo/AstroChart/master/project/examples/debug/calibration.html)
- [Interactive chart](#)

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
For detailed data description see [AstroWebService](https://github.com/Kibo/AstroWebService).

### Chart settings
Look into the [settings.js](https://github.com/Kibo/AstroChart/blob/master/project/src/settings.js)
```
var settings = {SYMBOL_SCALE:2};
var chart = new astrology.Chart( 'paper', 800, 800, settings);
```

### TODO
- planet animation

### It might interest you
- [The Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm)
- [AstroWebService](https://github.com/Kibo/AstroWebService)
- [AstroAPI](https://github.com/Kibo/AstroAPI)