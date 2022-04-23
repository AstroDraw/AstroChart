import default_settings from "./settings";
import SVG from "./svg";

describe('getSymbol', () => {
  beforeAll(() => {
    document.body.innerHTML =
      '<div id="test-element">' +
      '</div>';
  });
  describe('ADD_CLICK_AREA', () => {
    test(`don't create rect for cusps if ADD_CLICK_AREA is false`, () => {
      for(var i = 1; i <= 12; i++){
        const svg = new SVG("test-element", 100, 100, {...default_settings, ADD_CLICK_AREA : false})
        const element = svg.getSymbol(i.toString(), 1, 1)
        expect(element.getElementsByTagName("rect")).toHaveLength(0)
      }
    })

    test(`create rect for cusps if ADD_CLICK_AREA is true`, () => {
      for(var i = 1; i <= 12; i++){
        const svg = new SVG("test-element", 100, 100, {...default_settings, ADD_CLICK_AREA : true})
        const element = svg.getSymbol(i.toString(), 1, 1)
        expect(element.getElementsByTagName("rect")).toHaveLength(1)
      }
    })

    test.each([
      [default_settings.SYMBOL_JUPITER, default_settings.SYMBOL_URANUS]
    ])(`create rect for %s if ADD_CLICK_AREA is true`, (planet) => {
      const svg = new SVG("test-element", 100, 100, {...default_settings, ADD_CLICK_AREA : true})
      const element = svg.getSymbol(planet, 1, 1)
      expect(element.getElementsByTagName("rect")).toHaveLength(1)
    })

    test.each([
      [default_settings.SYMBOL_JUPITER, default_settings.SYMBOL_URANUS]
    ])(`don't create rect for %s if ADD_CLICK_AREA is false`, (planet) => {
      const svg = new SVG("test-element", 100, 100, {...default_settings, ADD_CLICK_AREA : false})
      const element = svg.getSymbol(planet, 1, 1)
      expect(element.getElementsByTagName("rect")).toHaveLength(0)
    })

    test.each([default_settings.SYMBOL_SIGNS])('create rect for %s if ADD_CLICK_AREA is true', (sign) => {
        const svg = new SVG("test-element", 100, 100, {...default_settings, ADD_CLICK_AREA : true})
        var element = svg.getSymbol(sign, 1, 1);
        expect(element.getElementsByTagName("rect")).toHaveLength(1)
    });

    test.each([default_settings.SYMBOL_SIGNS])(`don't create rect for %s if ADD_CLICK_AREA is false`, (sign) => {
      const svg = new SVG("test-element", 100, 100, {...default_settings, ADD_CLICK_AREA : false})
      var element = svg.getSymbol(sign, 1, 1);
      expect(element.getElementsByTagName("rect")).toHaveLength(0)
    });
  })
  
  test('should call custom getSymbol function', () => {
    const mockFn = jest.fn()
    const svg = new SVG("test-element", 100, 100, {...default_settings, CUSTOM_SYMBOL_FN : mockFn})
    svg.getSymbol(default_settings.SYMBOL_URANUS, 1, 2);
    expect(mockFn).toHaveBeenCalledWith(default_settings.SYMBOL_URANUS, 1, 2, svg);
  })
})