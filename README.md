# AstroChart
A free and open-source JavaScript library for generating SVG charts to display planets in astrology. It does not calculate any positions of the planets in Universe.

**Version**: 2.0.0

- Pure Javascript implementation without dependencies.
- SVG graphics.
- Tested code.

### Example
- [Radix chart](#)
- [Radix 15. 11. 2016](#)
- [Radix collision](#)
- [Transit chart](#)
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
	"planets":{"Moon":[0, 0.9], "Sun":[30, 0.5], "Mercury":[60, -0.2], ... },
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


### It might interest you
- [The Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm)
- [AstroWebService](https://github.com/Kibo/AstroWebService)
- [AstroAPI](https://github.com/Kibo/AstroAPI)