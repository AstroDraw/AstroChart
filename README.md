# AstroChart
A free and open-source JavaScript library for generating SVG charts to display planets in astrology. It does not calculate any positions of the planets in Universe.

**Version**: 1.0.0

- Pure Javascript implementation without dependencies.
- SVG graphics.
- Tested code.

### Example
- [Radix chart](http://htmlpreview.github.io/?https://github.com/Kibo/AstroChart/blob/master/project/examples/radix/radix.html)
- [Radix 15. 11. 2016](http://htmlpreview.github.io/?https://github.com/Kibo/AstroChart/blob/master/project/examples/radix/radix_2016_11_15.html)
- [Transit chart](http://htmlpreview.github.io/?https://github.com/Kibo/AstroChart/blob/master/project/examples/transit/transit.html)
- [Interactive chart](http://htmlpreview.github.io/?https://github.com/Kibo/AstroChart/blob/master/project/examples/transit/interactive.html)

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
	"points":{"Moon":0, "Sun":30, "Mercury":60, ... },
	"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],
	"aspects":[ [5,95,"#f00"], [20,140,"#f0f"], ... ]
}
```

### Chart settings
Look into the [settings.js](https://github.com/Kibo/AstroChart/blob/master/project/src/settings.js)
```
var settings = {SYMBOL_SCALE:2};
var chart = new astrology.Chart( 'paper', 800, 800, settings);
```

### TODO
- Transit chart animation
- Aspects data fix 
- The collision of planets
- As, Mc, Dc, Ic - the axis of the two lines

### It might interest you
- [The Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm)