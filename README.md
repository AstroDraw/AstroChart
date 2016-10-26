# AstroChart
A free and open-source JavaScript library for generating SVG charts to display planets in astrology. It does not calculate any positions of the planets in Universe.

**Version**: 0.0.0

- Pure Javascript **without dependencies**.
- SVG graphics.
- Tested code.

### Example
- TODO [Radix horoscope](#)
- TODO [Transit horoscope](#)

## How to use
```
<script src="js/astrochart.min.js"></script>
<script>
	window.onload = function(){
		var chart = new astrology.Chart( data );
		chart.radix();				
	};			
</script>
```

### Data example
``` 
{
    type:"radix",
    planets:"TODO"
}
```