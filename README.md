# AstroChart
A free and open-source JavaScript library for generating SVG charts to display planets in astrology. It does not calculate any positions of the planets in Universe.

**Version**: 0.0.0

- Pure Javascript implementation without dependencies.
- SVG graphics.
- Tested code.

### Example
- [Radix horoscope](http://htmlpreview.github.io/?https://github.com/Kibo/AstroChart/blob/master/project/examples/radix/radix.html)
- TODO [Transit horoscope](#)

### How to use
```
<script src="js/astrochart.min.js"></script>
<script>
	window.onload = function(){	
		var chart = new astrology.Chart( 'paper', 800, 800);
		chart.radix( data );
		chart.transit( data );				
	};			
</script>
```
### Known points
Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Chiron, Lilith, NNode.

### Data example
``` 
{
	"points":{"Moon":0, "Sun":30, "Mercury":60, ... },
	"cups":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],
	"aspects":[ [5,95,"#f00"], [20,140,"#f0f"], ... ]
}
```

### Chart settings
Look into the [settings.js](https://github.com/Kibo/AstroChart/blob/master/project/src/settings.js)
```
var settings = {SYMBOL_SCALE:2};
var chart = new astrology.Chart( 'paper', 800, 800, settings);
```

### It might interest you
- [The Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm)