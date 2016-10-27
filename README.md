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
		var chart = new astrology.Chart( 'paper', 800, 600, "#eee" );
		chart.setData( {...} );
		chart.radix();				
	};			
</script>
```
### Known points
Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Chiron, Lilith, NNode.

### Data example
``` 
{
    'radix':{
    	'timeStamp':132456789, 
    	'points':{'Sun':0, 'Moon':90, 'Mercury':180, 'Venus':270, ... },
    	'cups':[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 0]
    },
    'transit':{
    	'timeStamp':654987321, 
    	'points':{'Sun':10, 'Moon':100, 'Mercury':190, 'Venus':280, ...},
    	'cups':[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 0]    	 
    }
}
```

### It might interest you
- [The Swiss Ephemeris](http://www.astro.com/swisseph/swephinfo_e.htm)