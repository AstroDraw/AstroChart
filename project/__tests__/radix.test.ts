import Chart from "../src";

test(`snapshot radix with default settings`, () => {
    const data = {
        "planets": { "Fortune": [45.930008627285154], "SNode": [263.2584780960899], "Jupiter": [173.07043720306802], "Mars": [217.97167231451178], "Lilith": [196.19480722950317], "Saturn": [252.92341772675047], "Chiron": [348.1157239728284], "Uranus": [16.7900184974611], "Sun": [297.68062428797253], "Mercury": [289.10132025725494], "Neptune": [338.01899718442604], "Pluto": [285.6473452237151, -0.123] },
        "cusps": [348.20510089894015, 38.108507808919654, 65.20783751818992, 84.96083001338991, 103.77897207128007, 127.1084408347092, 168.20510089894015, 218.10850780891965, 245.20783751818993, 264.9608300133899, 283.77897207128007, 307.1084408347092]
    };


    document.body.innerHTML =
        '<div id="test-element">' +
        '</div>';
    const chart = new Chart('test-element', 800, 800);
    chart.radix(data);


    const tree = document.getElementById('test-element')
    expect(tree).toMatchSnapshot();

})

test(`snapshot radix with scale`, () => {
    const data = {
        "planets": { "Fortune": [45.930008627285154], "SNode": [263.2584780960899], "Jupiter": [173.07043720306802], "Mars": [217.97167231451178], "Lilith": [196.19480722950317], "Saturn": [252.92341772675047], "Chiron": [348.1157239728284], "Uranus": [16.7900184974611], "Sun": [297.68062428797253], "Mercury": [289.10132025725494], "Neptune": [338.01899718442604], "Pluto": [285.6473452237151, -0.123] },
        "cusps": [348.20510089894015, 38.108507808919654, 65.20783751818992, 84.96083001338991, 103.77897207128007, 127.1084408347092, 168.20510089894015, 218.10850780891965, 245.20783751818993, 264.9608300133899, 283.77897207128007, 307.1084408347092]
    };


    document.body.innerHTML =
        '<div id="test-element">' +
        '</div>';
    const chart = new Chart('test-element', 800, 800, { SYMBOL_SCALE: 0.8 });
    chart.radix(data);


    const tree = document.getElementById('test-element')
    expect(tree).toMatchSnapshot();

})
