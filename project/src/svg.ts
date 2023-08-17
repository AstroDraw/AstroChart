import type { Settings } from './settings'

/**
   * SVG tools.
   *
   * @class
   * @public
   * @constructor
   * @param {String} elementId - root DOM Element
   * @param {int} width
   * @param {int} height
   */
class SVG {
  settings: Settings
  _paperElementId: string
  DOMElement: SVGSVGElement
  root: Element
  width: number
  height: number
  context: this
  constructor(elementId: string, width: number, height: number, settings: Settings) {
    this.settings = settings
    const rootElement = document.getElementById(elementId)
    if (rootElement == null) throw new Error('Root element not found')

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink')
    svg.setAttribute('style', 'position: relative; overflow: hidden;')
    svg.setAttribute('version', '1.1')
    svg.setAttribute('width', width.toString())
    svg.setAttribute('height', height.toString())
    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height)
    rootElement.appendChild(svg)

    this._paperElementId = elementId + '-' + this.settings.ID_CHART

    const wrapper = document.createElementNS(svg.namespaceURI, 'g')
    wrapper.setAttribute('id', this._paperElementId)
    svg.appendChild(wrapper)

    this.DOMElement = svg
    this.root = wrapper
    this.width = width
    this.height = height

    this.context = this
  }

  _getSymbol(name: string, x: number, y: number): Element {
    switch (name) {
      case this.settings.SYMBOL_SUN:
        return this.sun(x, y)
      case this.settings.SYMBOL_MOON:
        return this.moon(x, y)
      case this.settings.SYMBOL_MERCURY:
        return this.mercury(x, y)
      case this.settings.SYMBOL_VENUS:
        return this.venus(x, y)
      case this.settings.SYMBOL_MARS:
        return this.mars(x, y)
      case this.settings.SYMBOL_JUPITER:
        return this.jupiter(x, y)
      case this.settings.SYMBOL_SATURN:
        return this.saturn(x, y)
      case this.settings.SYMBOL_URANUS:
        return this.uranus(x, y)
      case this.settings.SYMBOL_NEPTUNE:
        return this.neptune(x, y)
      case this.settings.SYMBOL_PLUTO:
        return this.pluto(x, y)
      case this.settings.SYMBOL_CHIRON:
        return this.chiron(x, y)
      case this.settings.SYMBOL_LILITH:
        return this.lilith(x, y)
      case this.settings.SYMBOL_NNODE:
        return this.nnode(x, y)
      case this.settings.SYMBOL_SNODE:
        return this.snode(x, y)
      case this.settings.SYMBOL_FORTUNE:
        return this.fortune(x, y)
      case this.settings.SYMBOL_ARIES:
        return this.aries(x, y)
      case this.settings.SYMBOL_TAURUS:
        return this.taurus(x, y)
      case this.settings.SYMBOL_GEMINI:
        return this.gemini(x, y)
      case this.settings.SYMBOL_CANCER:
        return this.cancer(x, y)
      case this.settings.SYMBOL_LEO:
        return this.leo(x, y)
      case this.settings.SYMBOL_VIRGO:
        return this.virgo(x, y)
      case this.settings.SYMBOL_LIBRA:
        return this.libra(x, y)
      case this.settings.SYMBOL_SCORPIO:
        return this.scorpio(x, y)
      case this.settings.SYMBOL_SAGITTARIUS:
        return this.sagittarius(x, y)
      case this.settings.SYMBOL_CAPRICORN:
        return this.capricorn(x, y)
      case this.settings.SYMBOL_AQUARIUS:
        return this.aquarius(x, y)
      case this.settings.SYMBOL_PISCES:
        return this.pisces(x, y)
      case this.settings.SYMBOL_AS:
        return this.ascendant(x, y)
      case this.settings.SYMBOL_DS:
        return this.descendant(x, y)
      case this.settings.SYMBOL_MC:
        return this.mediumCoeli(x, y)
      case this.settings.SYMBOL_IC:
        return this.immumCoeli(x, y)
      case this.settings.SYMBOL_CUSP_1:
        return this.number1(x, y)
      case this.settings.SYMBOL_CUSP_2:
        return this.number2(x, y)
      case this.settings.SYMBOL_CUSP_3:
        return this.number3(x, y)
      case this.settings.SYMBOL_CUSP_4:
        return this.number4(x, y)
      case this.settings.SYMBOL_CUSP_5:
        return this.number5(x, y)
      case this.settings.SYMBOL_CUSP_6:
        return this.number6(x, y)
      case this.settings.SYMBOL_CUSP_7:
        return this.number7(x, y)
      case this.settings.SYMBOL_CUSP_8:
        return this.number8(x, y)
      case this.settings.SYMBOL_CUSP_9:
        return this.number9(x, y)
      case this.settings.SYMBOL_CUSP_10:
        return this.number10(x, y)
      case this.settings.SYMBOL_CUSP_11:
        return this.number11(x, y)
      case this.settings.SYMBOL_CUSP_12:
        return this.number12(x, y)
      default: {
        const unknownPoint = this.circle(x, y, 8)
        unknownPoint.setAttribute('stroke', '#ffff00')
        unknownPoint.setAttribute('stroke-width', '1')
        unknownPoint.setAttribute('fill', '#ff0000')
        return unknownPoint
      }
    }
  }

  /**
   * Get a required symbol.
   *
   * @param {String} name
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGElement g}
   */
  getSymbol(name: string, x: number, y: number): Element {
    if (this.settings.CUSTOM_SYMBOL_FN == null) return this._getSymbol(name, x, y)

    const symbol = this.settings.CUSTOM_SYMBOL_FN(name, x, y, this.context)
    if (symbol == null || symbol === undefined) return this._getSymbol(name, x, y)

    return symbol
  }

  /**
   * Create transparent rectangle.
   *
   * Used to improve area click, @see this.settings.ADD_CLICK_AREA
   *
   * @param {Number} x
   * @param {Number} y
   *
   * @return {Element} rect
   */
  createRectForClick(x: number, y: number): Element {
    const rect = document.createElementNS(this.context.root.namespaceURI, 'rect')
    rect.setAttribute('x', (x - this.settings.SIGNS_STROKE).toString())
    rect.setAttribute('y', (y - this.settings.SIGNS_STROKE).toString())
    rect.setAttribute('width', '20px')
    rect.setAttribute('height', '20px')
    rect.setAttribute('fill', 'transparent')
    return rect
  }

  /**
   * Get ID for sign wrapper.
   *
   * @param {String} sign
   *
   * @return {String id}
   */
  getSignWrapperId(sign: string): string {
    return this._paperElementId + '-' + this.settings.ID_RADIX + '-' + this.settings.ID_SIGNS + '-' + sign
  }

  /**
   * Get ID for house wrapper.
   *
   * @param {String} house
   *
   * @return {String id}
   */
  getHouseIdWrapper(house: string): string {
    return this._paperElementId + '-' + this.settings.ID_RADIX + '-' + this.settings.ID_CUSPS + '-' + house
  }

  /*
   * Sun path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVG g}
   */
  sun(x: number, y: number): Element {
    // center symbol
    const xShift = -1 // px
    const yShift = -8 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0 m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0 m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Moon path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  moon(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = -7 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Mercury path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  mercury(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = 7 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const body = document.createElementNS(this.context.root.namespaceURI, 'path')
    body.setAttribute('d', 'm' + x + ', ' + y + ' 4.26011,0 m -2.13005,-2.98207 0,5.11213 m 4.70312,-9.7983 a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315 z')
    body.setAttribute('stroke', this.settings.POINTS_COLOR)
    body.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    body.setAttribute('fill', 'none')
    wrapper.appendChild(body)

    const crownXShift = 6 // px
    const crownYShift = -16 // px
    const crown = document.createElementNS(this.context.root.namespaceURI, 'path')
    crown.setAttribute('d', 'm' + (x + crownXShift) + ', ' + (y + crownYShift) + ' a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445')
    crown.setAttribute('stroke', this.settings.POINTS_COLOR)
    crown.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    crown.setAttribute('fill', 'none')
    wrapper.appendChild(crown)

    return wrapper
  }

  /*
 * Venus path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  venus(x: number, y: number): Element {
    // center symbol
    const xShift = 2 // px
    const yShift = 7 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -4.937669,0.03973 m 2.448972,2.364607 0,-5.79014 c -3.109546,-0.0085 -5.624617,-2.534212 -5.620187,-5.64208 0.0044,-3.107706 2.526514,-5.621689 5.635582,-5.621689 3.109068,0 5.631152,2.513983 5.635582,5.621689 0.0044,3.107868 -2.510641,5.633586 -5.620187,5.64208')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Mars path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  mars(x: number, y: number): Element {
    // center symbol
    const xShift = 2 // px
    const yShift = -2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816 z m 0,0 0.433597,0.433595 3.996566,-4.217419 m -3.239802,-0.05521 3.295015,0 0.110427,3.681507')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Jupiter path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  jupiter(x: number, y: number): Element {
    // center symbol
    const xShift = -5 // px
    const yShift = -2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y - 3))

    return wrapper
  }

  /*
 * Saturn path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  saturn(x: number, y: number): Element {
    // center symbol
    const xShift = 5 // px
    const yShift = 10 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' c -0.52222,0.52221 -1.04445,1.04444 -1.56666,1.04444 -0.52222,0 -1.56667,-0.52223 -1.56667,-1.56667 0,-1.04443 0.52223,-2.08887 1.56667,-3.13332 1.04444,-1.04443 2.08888,-3.13331 2.08888,-5.22219 0,-2.08888 -1.04444,-4.17776 -3.13332,-4.17776 -1.97566,0 -3.65555,1.04444 -4.69998,3.13333 m -2.55515,-5.87499 6.26664,0 m -3.71149,-2.48054 0,15.14438')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Uranus path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  uranus(x: number, y: number): Element {
    // center symbol
    const xShift = -5 // px
    const yShift = -7 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const horns = document.createElementNS(this.context.root.namespaceURI, 'path')
    horns.setAttribute('d', 'm' + x + ', ' + y + '  0,10.23824 m 10.23633,-10.32764 0,10.23824 m -10.26606,-4.6394 10.23085,0 m -5.06415,-5.51532 0,11.94985')
    horns.setAttribute('stroke', this.settings.POINTS_COLOR)
    horns.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    horns.setAttribute('fill', 'none')
    wrapper.appendChild(horns)

    const bodyXShift = 7 // px
    const bodyYShift = 14.5 // px
    const body = document.createElementNS(this.context.root.namespaceURI, 'path')
    body.setAttribute('d', 'm' + (x + bodyXShift) + ', ' + (y + bodyYShift) + ' a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844 z')
    body.setAttribute('stroke', this.settings.POINTS_COLOR)
    body.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    body.setAttribute('fill', 'none')
    wrapper.appendChild(body)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))

    return wrapper
  }

  /*
 * Neptune path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  neptune(x: number, y: number): Element {
    // center symbol
    const xShift = 3 // px
    const yShift = -5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' 1.77059,-2.36312 2.31872,1.8045 m -14.44264,-0.20006 2.34113,-1.77418 1.74085,2.38595 m -1.80013,-1.77265 c -1.23776,8.40975 0.82518,9.67121 4.95106,9.67121 4.12589,0 6.18883,-1.26146 4.95107,-9.67121 m -7.05334,3.17005 2.03997,-2.12559 2.08565,2.07903 m -5.32406,9.91162 6.60142,0 m -3.30071,-12.19414 0,15.55803')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Pluto path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  pluto(x: number, y: number): Element {
    // center symbol
    const xShift = 5 // px
    const yShift = -5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const body = document.createElementNS(this.context.root.namespaceURI, 'path')
    body.setAttribute('d', 'm' + x + ', ' + y + ' a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496 m 5.76771,13.93858 0,-8.17088 m -3.84512,4.32576 7.69024,0')
    body.setAttribute('stroke', this.settings.POINTS_COLOR)
    body.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    body.setAttribute('fill', 'none')
    wrapper.appendChild(body)

    const headXShift = -2.3 // px
    const headYShift = 0 // px
    const head = document.createElementNS(this.context.root.namespaceURI, 'path')
    head.setAttribute('d', 'm' + (x + headXShift) + ', ' + (y + headYShift) + ' a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448 z')
    head.setAttribute('stroke', this.settings.POINTS_COLOR)
    head.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    head.setAttribute('fill', 'none')
    wrapper.appendChild(head)

    return wrapper
  }

  /*
 * Chiron path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  chiron(x: number, y: number): Element {
    // center symbol
    const xShift = 3 // px
    const yShift = 5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const body = document.createElementNS(this.context.root.namespaceURI, 'path')
    body.setAttribute('d', 'm' + x + ', ' + y + ' a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z')
    body.setAttribute('stroke', this.settings.POINTS_COLOR)
    body.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    body.setAttribute('fill', 'none')
    wrapper.appendChild(body)

    const headXShift = 0 // px
    const headYShift = -13 // px
    const head = document.createElementNS(this.context.root.namespaceURI, 'path')
    head.setAttribute('d', 'm' + (x + headXShift) + ', ' + (y + headYShift) + '   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251')
    head.setAttribute('stroke', this.settings.POINTS_COLOR)
    head.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    head.setAttribute('fill', 'none')
    wrapper.appendChild(head)

    return wrapper
  }

  /*
 * Lilith path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  lilith(x: number, y: number): Element {
    // center symbol
    const xShift = 2 // px
    const yShift = 4 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -2.525435,-1.12853 -1.464752,-1.79539 -0.808138,-2.20576 0.151526,-2.05188 0.909156,-1.5389 1.010173,-1.02593 0.909157,-0.56427 1.363735,-0.61556 m 2.315327,-0.39055 -1.716301,0.54716 -1.7163,1.09431 -1.1442,1.64146 -0.572102,1.64146 0,1.64146 0.572102,1.64147 1.1442,1.64145 1.7163,1.09432 1.716301,0.54715 m 0,-11.49024 -2.2884,0 -2.288401,0.54716 -1.716302,1.09431 -1.144201,1.64146 -0.5721,1.64146 0,1.64146 0.5721,1.64147 1.144201,1.64145 1.716302,1.09432 2.288401,0.54715 2.2884,0 m -4.36712,-0.4752 0,6.44307 m -2.709107,-3.41101 5.616025,0')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * NNode path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  nnode(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = 3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 -0.6666667,1.3333333 0,0.6666667 0.6666667,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666666,-1.3333333 0,-0.6666667 -0.6666666,-1.3333333 -2,-2.66666665 -0.6666667,-1.99999995 0,-1.3333334 0.6666667,-2 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,2 0,1.3333334 -0.6666667,1.99999995 -2,2.66666665 -0.6666666,1.3333333 0,0.6666667 0.6666666,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666667,-1.3333333 0,-0.6666667 -0.6666667,-1.3333333 -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 m -7.9999999,-6 0.6666667,-1.3333333 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,1.3333333')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * SNode path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  snode(x: number, y: number): Element {
    // center symbol
    const xShift = 0
    const yShift = -5

    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' l1.3333282470703125,0.666656494140625l0.6666717529296875,0l1.3333282470703125,-0.666656494140625l0.6666717529296875,-1.333343505859375l0,-0.666656494140625l-0.6666717529296875,-1.333343505859375l-1.3333282470703125,-0.666656494140625l-0.6666717529296875,0l-1.3333282470703125,0.666656494140625l-0.6666717529296875,1.333343505859375l0,0.666656494140625l0.6666717529296875,1.333343505859375l2,2.666656494140625l0.6666717529296875,2l0,1.333343505859375l-0.6666717529296875,2l-1.3333282470703125,1.333343505859375l-2,0.666656494140625l-2.6666717529296875,0l-2,-0.666656494140625l-1.3333282470703125,-1.333343505859375l-0.6666717529296875,-2l0,-1.333343505859375l0.6666717529296875,-2l2,-2.666656494140625l0.666656494140625,-1.333343505859375l0,-0.666656494140625l-0.666656494140625,-1.333343505859375l-1.333343505859375,-0.666656494140625l-0.666656494140625,0l-1.333343505859375,0.666656494140625l-0.666656494140625,1.333343505859375l0,0.666656494140625l0.666656494140625,1.333343505859375l1.333343505859375,0.666656494140625l0.666656494140625,0l1.333343505859375,-0.666656494140625m8,6l-0.6666717529296875,1.333343505859375l-1.3333282470703125,1.33331298828125l-2,0.66668701171875l-2.6666717529296875,0l-2,-0.66668701171875l-1.3333282470703125,-1.33331298828125l-0.6666717529296875,-1.333343505859375')
    node.setAttribute('stroke', this.settings.POINTS_COLOR)
    node.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /*
 * Fortune path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  fortune(x: number, y: number): Element {
    // center symbol
    const xShift = -10
    const yShift = -8
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')

    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const path1 = document.createElementNS(this.context.root.namespaceURI, 'path')
    path1.setAttribute('d', 'M15.971322059631348,8.000000953674316A7.971322252863855,7.971322252863855,0,0,1,8,15.97132396697998A7.971322252863855,7.971322252863855,0,0,1,0.028678132221102715,8.000000953674316A7.971322252863855,7.971322252863855,0,0,1,8,0.028677448630332947A7.971322252863855,7.971322252863855,0,0,1,15.971322059631348,8.000000953674316Z')
    const path2 = document.createElementNS(this.context.root.namespaceURI, 'path')
    path2.setAttribute('d', 'M2.668839454650879,2.043858766555786C6.304587364196777,5.906839370727539,9.94033432006836,9.769822120666504,13.576082229614258,13.632804870605469')
    const path3 = document.createElementNS(this.context.root.namespaceURI, 'path')
    path3.setAttribute('d', 'm2.5541272163391113,13.747519493103027c3.635746955871582,-3.8629846572875977,7.271494388580322,-7.72596549987793,10.90724229812622,-11.588947772979736')
    const fortuneGroup = document.createElementNS(this.context.root.namespaceURI, 'g')
    fortuneGroup.setAttribute('transform', 'translate(' + x + ',' + y + ')')
    fortuneGroup.appendChild(path1)
    fortuneGroup.appendChild(path2)
    fortuneGroup.appendChild(path3)


    wrapper.setAttribute('stroke', this.settings.POINTS_COLOR)
    wrapper.setAttribute('stroke-width', this.settings.POINTS_STROKE.toString())
    wrapper.setAttribute('fill', 'none')
    wrapper.appendChild(fortuneGroup)


    return wrapper
  }

  /*
 * Aries symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  aries(x: number, y: number): Element {
    // center symbol
    const xShift = -9 // px
    const yShift = -2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_ARIES))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5 m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9 m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5 m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')

    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y - 4))

    return wrapper
  }

  /*
 * Taurus symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  taurus(x: number, y: number): Element {
    // center symbol
    const xShift = -9 // px
    const yShift = -11 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_TAURUS))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 1,4 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-4 m -18,0 1,3 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-3 m -11,8 -2,1 -1,1 -1,2 0,3 1,2 2,2 2,1 2,0 2,-1 2,-2 1,-2 0,-3 -1,-2 -1,-1 -2,-1 m -4,1 -2,1 -1,2 0,3 1,3 m 8,0 1,-3 0,-3 -1,-2 -2,-1')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /*
 * Gemini symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  gemini(x: number, y: number): Element {
    // center symbol
    const xShift = -6 // px
    const yShift = -6 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_GEMINI))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 0,11.546414 m 0.9622011,-10.5842129 0,9.6220117 m 7.6976097,-9.6220117 0,9.6220117 m 0.962201,-10.5842128 0,11.546414 m -13.4708165,-14.4330172 1.9244023,1.924402 1.9244024,0.9622012 2.8866038,0.9622011 3.848804,0 2.886604,-0.9622011 1.924402,-0.9622012 1.924403,-1.924402 m -17.3196215,17.3196207 1.9244023,-1.9244024 1.9244024,-0.9622011 2.8866038,-0.9622012 3.848804,0 2.886604,0.9622012 1.924402,0.9622011 1.924403,1.9244024')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /*
 * Cancer symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  cancer(x: number, y: number): Element {
    // center symbol
    const xShift = 9 // px
    const yShift = -9 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_CANCER))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0 m -18,3 1,2 1,1 2,1 m 4,-4 -1,-2 -1,-1 -2,-1 m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0 m 18,-3 -1,-2 -1,-1 -2,-1 m -4,4 1,2 1,1 2,1')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x - 18, y))
    return wrapper
  }

  /*
 * Leo symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  leo(x: number, y: number): Element {
    // center symbol
    const xShift = -3 // px
    const yShift = 4 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_LEO))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2 m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1 m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x - 6, y - 13))
    return wrapper
  }

  /*
 * Virgo symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  virgo(x: number, y: number): Element {
    // center symbol
    const xShift = -9 // px
    const yShift = -5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_VIRGO))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 2.5894868,-2.5894868 1.7263245,2.5894868 0,9.4947847 m -2.5894868,-11.2211092 1.7263245,2.5894867 0,8.6316225 m 0.8631623,-9.4947847 2.5894867,-2.5894868 1.72632451,2.5894868 0,8.6316224 m -2.58948671,-10.3579469 1.72632447,2.5894867 0,7.7684602 m 0.86316224,-8.6316224 2.58948679,-2.5894868 1.7263244,2.5894868 0,13.8105959 m -2.5894867,-15.5369204 1.7263245,2.5894867 0,12.9474337 m 0.8631622,-13.8105959 2.5894868,-2.5894868 0.8631622,1.7263245 0.8631623,2.5894868 0,2.5894867 -0.8631623,2.58948673 -0.8631622,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -4.3158113,1.7263245 m 7.7684602,-15.5369204 0.8631623,0.8631622 0.8631622,2.5894868 0,2.5894867 -0.8631622,2.58948673 -0.8631623,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -3.452649,1.7263245')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /*
 * Libra symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  libra(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = -8 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_LIBRA))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' c 0.7519,1e-5 1.3924,0.12227 1.9316,0.35156 0.6619,0.28495 1.2134,0.63854 1.666,1.0625 0.4838,0.45481 0.853,0.97255 1.1172,1.56641 0.2467,0.56612 0.3711,1.17397 0.3711,1.83789 0,0.64113 -0.1244,1.23948 -0.373,1.80859 -0.1624,0.36305 -0.3631,0.69725 -0.6055,1.00586 l -0.6367,0.8086 4.3789,0 0,0.67187 -5.4024,0 0,-0.91797 c 0.2173,-0.1385 0.4379,-0.27244 0.6367,-0.44726 0.4215,-0.36876 0.7529,-0.82784 0.9883,-1.35547 0.2215,-0.50074 0.334,-1.0358 0.334,-1.58594 0,-0.55653 -0.1122,-1.09434 -0.334,-1.5957 l -0,-0.002 0,-0.004 c -0.2292,-0.49901 -0.5581,-0.94778 -0.9746,-1.33789 l -0,-0.002 -0,-0.002 c -0.3967,-0.36155 -0.8679,-0.65723 -1.4062,-0.88476 l -0,0 c -0.4984,-0.20903 -1.0622,-0.30663 -1.6817,-0.30664 -0.5926,1e-5 -1.1526,0.10008 -1.6699,0.30273 l -0,0 c -0.5261,0.20799 -1.0032,0.5067 -1.4199,0.88867 l -0,0.002 -0,0.002 c -0.4166,0.39011 -0.7454,0.83887 -0.9746,1.33789 l 0,0.004 -0,0.002 c -0.2218,0.50136 -0.334,1.03915 -0.334,1.5957 0,0.55015 0.1125,1.08519 0.334,1.58594 l 0,0.002 0,0.004 c 0.229,0.49855 0.5574,0.94911 0.9746,1.33984 0.1876,0.17482 0.4143,0.31484 0.6367,0.45703 l 0,0.91797 -5.3906,0 0,-0.67187 4.3789,0 -0.6367,-0.8086 c -0.2428,-0.30904 -0.443,-0.64418 -0.6055,-1.00781 -0.2487,-0.56911 -0.3731,-1.16552 -0.3731,-1.80664 0,-0.66391 0.1244,-1.27178 0.3711,-1.83789 l 0,-0.002 c 3e-4,-5.8e-4 -2e-4,-10e-4 0,-0.002 0.2641,-0.59218 0.6326,-1.10871 1.1153,-1.5625 0.4847,-0.45571 1.0332,-0.80585 1.6562,-1.05859 0.5861,-0.23488 1.2294,-0.35546 1.9414,-0.35547 z m -7.8496,13.45899 15.6992,0 0,0.67187 -15.6992,0 z')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x - 6, y))
    return wrapper
  }

  /*
 * Scorpio symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  scorpio(x: number, y: number): Element {
    // center symbol
    const xShift = -9 // px
    const yShift = -4 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_SCORPIO))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 2.3781101,-2.3781101 2.3781101,2.3781101 0,9.5124404 m -3.1708135,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.7927034,-9.5124404 2.3781101,-2.3781101 2.37811007,2.3781101 0,9.5124404 m -3.17081347,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.79270337,-9.5124404 2.37811013,-2.3781101 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854068 m -4.7562202,-11.8905505 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854067 2.3781101,-2.3781101')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /*
 * Sagittarius symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  sagittarius(x: number, y: number): Element {
    // center symbol
    const xShift = 7 // px
    const yShift = -9 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_SAGITTARIUS))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -17.11444,17.11444 m 17.11444,-17.11444 -3.2089575,1.0696525 -6.417915,0 m 7.4875675,1.0696525 -3.2089575,0 -4.27861,-1.0696525 m 9.6268725,-1.0696525 -1.0696525,3.2089575 0,6.41791504 m -1.0696525,-7.48756754 0,3.2089575 1.0696525,4.27861004 m -8.55722,0 -7.4875675,0 m 6.417915,1.06965246 -3.2089575,0 -3.2089575,-1.06965246 m 7.4875675,0 0,7.48756746 m -1.0696525,-6.417915 0,3.2089575 1.0696525,3.2089575')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x - 12, y))
    return wrapper
  }

  /*
 * Capricorn symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  capricorn(x: number, y: number): Element {
    // center symbol
    const xShift = -9 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_CAPRICORN))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 1.8047633,-3.6095267 4.5119084,9.0238168 m -4.5119084,-7.2190534 4.5119084,9.0238167 2.707145,-6.3166717 4.5119084,0 2.707145,-0.9023817 0.9023817,-1.8047633 0,-1.8047634 -0.9023817,-1.8047633 -1.8047634,-0.9023817 -0.9023816,0 -1.8047634,0.9023817 -0.9023817,1.8047633 0,1.8047634 0.9023817,2.707145 0.9023817,1.80476336 0.9023817,2.70714504 0,2.707145 -1.8047634,1.8047633 m 1.8047634,-16.2428701 -0.9023817,0.9023817 -0.9023817,1.8047633 0,1.8047634 1.8047634,3.6095267 0.9023816,2.707145 0,2.707145 -0.9023816,1.8047634 -1.8047634,0.9023816')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /*
 * Aquarius symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  aquarius(x: number, y: number): Element {
    // center symbol
    const xShift = -8 // px
    const yShift = -2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_AQUARIUS))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 2.8866035,-2.8866035 3.8488047,1.9244023 m -4.8110059,-0.9622011 3.8488047,1.9244023 2.8866035,-2.8866035 2.8866035,1.9244023 m -3.84880467,-0.9622011 2.88660347,1.9244023 2.8866035,-2.8866035 1.9244024,1.9244023 m -2.8866035,-0.9622011 1.9244023,1.9244023 2.8866035,-2.8866035 m -17.319621,8.6598105 2.8866035,-2.88660348 3.8488047,1.92440238 m -4.8110059,-0.96220121 3.8488047,1.92440231 2.8866035,-2.88660348 2.8866035,1.92440238 m -3.84880467,-0.96220121 2.88660347,1.92440231 2.8866035,-2.88660348 1.9244024,1.92440238 m -2.8866035,-0.96220121 1.9244023,1.92440231 2.8866035,-2.88660348')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /*
 * Pisces symbol path
 * @private
 *
 * @param {int} x
 * @param {int} y
 *
 * @return {SVGPathElement} path
 */
  pisces(x: number, y: number): Element {
    // center symbol
    const xShift = -8 // px
    const yShift = -8 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getSignWrapperId(this.settings.SYMBOL_PISCES))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2 m 0,-17 3,1 2,1 2,2 1,3 m 0,3 -1,3 -2,2 -2,1 -3,1 m 16,-17 -3,1 -2,1 -2,2 -1,3 m 0,3 1,3 2,2 2,1 3,1 m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2 m -17,-9 18,0 m -18,1 18,0')
    node.setAttribute('stroke', this.settings.SIGNS_COLOR)
    node.setAttribute('stroke-width', this.settings.SIGNS_STROKE.toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /**
 * Draw As symbol
 */
  ascendant(x: number, y: number): Element {
    // center symbol
    const xShift = 12 // px
    const yShift = -2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0')
    node.setAttribute('stroke', this.settings.SYMBOL_AXIS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')

    wrapper.appendChild(node)

    return wrapper
  }

  /**
 * Draw Ds symbol
 */
  descendant(x: number, y: number): Element {
    // center symbol
    const xShift = 22 // px
    const yShift = -1 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0')
    node.setAttribute('stroke', this.settings.SYMBOL_AXIS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /**
 * Draw MC symbol
 */
  mediumCoeli(x: number, y: number): Element {
    // center symbol
    const xShift = 19 // px
    const yShift = -4 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881')
    node.setAttribute('stroke', this.settings.SYMBOL_AXIS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  /**
 * Draw IC symbol
 */
  immumCoeli(x: number, y: number): Element {
    // center symbol
    const xShift = 19 // px
    const yShift = 2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm ' + x + ', ' + y + ' -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 m -11.4840902,-10.8796629 0,12.6929401')
    node.setAttribute('stroke', this.settings.SYMBOL_AXIS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.SYMBOL_AXIS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    return wrapper
  }

  number1(x: number, y: number): Element {
    // center symbol
    const xShift = 0 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_1))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number2(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_2))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number3(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_3))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' 0,-0.4545454 0.45454549,0 0,0.9090909 -0.90909089,0 0,-0.9090909 0.4545454,-0.9090909 0.45454549,-0.4545455 1.36363636,-0.4545454 1.36363635,0 1.3636364,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.4545455,0.4545454 -0.9090909,0.4545455 -1.36363635,0.4545454 m 2.27272725,-4.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.4545454,0.4545454 m -0.4545455,-3.6363636 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -0.90909095,0.4545454 m -0.9090909,0 0.9090909,0 1.36363635,0.4545455 0.4545455,0.45454542 0.4545454,0.90909091 0,1.36363637 -0.4545454,0.9090909 -0.9090909,0.4545455 -1.3636364,0.4545454 -1.3636364,0 -1.3636363,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.90909091 0.9090909,0 0,0.90909091 -0.4545455,0 0,-0.45454546 m 5,-1.81818182 0.4545455,0.90909091 0,1.36363637 -0.4545455,0.9090909 m -1.36363635,-4.0909091 0.90909095,0.4545455 0.4545454,0.90909088 0,1.81818182 -0.4545454,0.9090909 -0.45454549,0.4545455 -0.90909091,0.4545454')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number4(x: number, y: number): Element {
    // center symbol
    const xShift = 1 // px
    const yShift = -4 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_4))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -2.28678383,7.7750651 0.91471356,0 m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651 m 3.20149736,-9.6044922 -2.74414057,9.6044922 m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number5(x: number, y: number): Element {
    // center symbol
    const xShift = -2 // px
    const yShift = -5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_5))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -2.27272725,4.5454545 m 2.27272725,-4.5454545 4.54545455,0 m -4.54545455,0.4545454 3.63636365,0 m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454 m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909 m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number6(x: number, y: number): Element {
    // center symbol
    const xShift = 3 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_6))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' 0,-0.4545455 -0.4545455,0 0,0.9090909 0.9090909,0 0,-0.9090909 -0.4545454,-0.9090909 -0.909091,-0.4545454 -1.3636363,0 -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 1.36363637,0 1.36363633,-0.4545454 0.9090909,-0.9090909 0.4545455,-0.90909096 0,-1.36363636 -0.4545455,-0.90909088 -0.4545454,-0.4545455 -0.9090909,-0.4545454 -1.36363638,0 -0.90909092,0.4545454 -0.4545454,0.4545455 -0.4545455,0.90909088 m 1.36363636,-4.54545458 -0.90909086,1.3636364 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 4.0909091,-0.4545454 0.4545454,-0.90909096 0,-1.36363636 -0.4545454,-0.90909088 m -0.9090909,-5 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 1.36363637,0 0.90909093,-0.4545454 0.4545454,-0.4545455 0.4545455,-1.36363636 0,-1.81818182 -0.4545455,-0.90909092 -0.4545454,-0.4545454')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number7(x: number, y: number): Element {
    // center symbol
    const xShift = -4 // px
    const yShift = -4 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_7))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -0.9090909,2.7272727 m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818 m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818 m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0 m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363 m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number8(x: number, y: number): Element {
    // center symbol
    const xShift = -1 // px
    const yShift = -5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_8))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -1.3631244,0.4543748 -0.4543748,0.4543748 -0.4543748,0.9087496 0,1.3631244 0.4543748,0.9087496 0.9087496,0.4543748 1.3631244,0 1.3631244,-0.4543748 0.9087496,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 -0.9087496,-0.4543748 -1.8174992,0 m 0.9087496,0 -2.271874,0.4543748 m 0,0.4543748 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.4543748 m -0.4543748,0 1.3631244,0.4543748 m 0.4543748,0 1.8174992,-0.4543748 m 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 m 0.4543748,0 -1.8174992,-0.4543748 m -0.9087496,0 -0.9087496,0.9087496 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.9087496 m 1.3631244,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.8174992 -0.4543748,-0.9087496 m -2.7262488,4.543748 -1.8174992,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 1.3631244,0.4543748 1.8174992,0 1.8174992,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 -0.4543748,-0.45437484 -0.9087496,-0.4543748 m -0.9087496,0 -2.271874,0.4543748 m 0.4543748,0 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 m -0.4543748,0 2.271874,0.4543748 2.7262488,-0.4543748 m 0,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 m 0,-0.45437484 -1.3631244,-0.4543748 m -0.9087496,0 -0.9087496,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 0.4543748,0.4543748 m 1.8174992,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.81749916 -0.4543748,-0.90874964 -0.4543748,-0.4543748')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number9(x: number, y: number): Element {
    // center symbol
    const xShift = 1 // px
    const yShift = -2 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_9))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const node = document.createElementNS(this.context.root.namespaceURI, 'path')
    node.setAttribute('d', 'm' + x + ', ' + y + ' -0.4545455,0.9090909 -0.4545454,0.4545455 -0.9090909,0.45454542 -1.36363638,0 -0.90909092,-0.45454542 -0.4545454,-0.4545455 -0.4545455,-0.9090909 0,-1.3636364 0.4545455,-0.9090909 0.90909086,-0.9090909 1.36363637,-0.4545454 1.36363637,0 0.9090909,0.4545454 0.4545455,0.4545455 0.4545454,1.3636363 0,1.3636364 -0.4545454,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 -0.9090909,0.9090909 -1.36363638,0.4545454 -1.36363632,0 -0.909091,-0.4545454 -0.4545454,-0.9090909 0,-0.90909096 0.9090909,0 0,0.90909096 -0.4545455,0 0,-0.4545455 m 1.3636364,-3.1818182 -0.4545454,-0.9090909 0,-1.3636364 0.4545454,-0.9090909 m 4.0909091,-0.4545454 0.4545455,0.9090909 0,1.8181818 -0.4545455,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 m -1.81818178,-2.72727278 -0.45454546,-0.45454542 -0.45454546,-0.9090909 0,-1.8181819 0.45454546,-1.3636363 0.45454546,-0.4545455 0.90909091,-0.4545454 m 1.36363637,0 0.4545454,0.4545454 0.4545455,0.9090909 0,2.2727273 -0.4545455,1.81818182 -0.4545454,1.36363637 -0.4545455,0.90909091 -0.90909087,1.3636364 -0.90909091,0.4545454')
    node.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    node.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    node.setAttribute('fill', 'none')
    wrapper.appendChild(node)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number10(x: number, y: number): Element {
    // center symbol
    const xShift = -3 // px
    const yShift = -3.5 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_10))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const one = document.createElementNS(this.context.root.namespaceURI, 'path')
    one.setAttribute('d', 'm' + x + ', ' + y + ' -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915')
    one.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    one.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    one.setAttribute('fill', 'none')
    wrapper.appendChild(one)

    const numberXShift = 6.5 // px
    const numberYShift = -1.5 // px
    const zero = document.createElementNS(this.context.root.namespaceURI, 'path')
    zero.setAttribute('d', 'm' + (x + numberXShift) + ', ' + (y + numberYShift) + ' -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 0.90909092,0 1.36363638,-0.4545454 0.9090909,-0.9090909 0.9090909,-1.36363641 0.4545455,-1.36363637 0.4545454,-1.81818182 0,-1.3636364 -0.4545454,-1.3636363 -0.4545455,-0.4545455 -0.9090909,-0.4545454 -0.9090909,0 m -1.36363638,0.9090909 -0.90909092,0.9090909 -0.4545454,0.9090909 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 3.1818182,0 0.9090909,-0.9090909 0.4545454,-0.90909091 0.4545455,-1.36363637 0.4545455,-1.81818182 0,-1.8181818 -0.4545455,-0.9090909 m -1.8181818,-0.9090909 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 0.90909092,0 0.90909091,-0.4545454 0.90909087,-1.3636364 0.4545455,-0.90909091 0.4545454,-1.36363637 0.4545455,-1.81818182 0,-2.2727273 -0.4545455,-0.9090909 -0.4545454,-0.4545454')
    zero.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    zero.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    zero.setAttribute('fill', 'none')
    wrapper.appendChild(zero)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number11(x: number, y: number): Element {
    // center symbol
    const xShift = -3 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_11))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const one = document.createElementNS(this.context.root.namespaceURI, 'path')
    one.setAttribute('d', 'm' + x + ', ' + y + ' -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915')
    one.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    one.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    one.setAttribute('fill', 'none')
    wrapper.appendChild(one)

    const numberXShift = 6 // px
    const numberYShift = 0 // px
    const one2 = document.createElementNS(this.context.root.namespaceURI, 'path')
    one2.setAttribute('d', 'm' + (x + numberXShift) + ', ' + (y + numberYShift) + ' -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915')
    one2.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    one2.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    one2.setAttribute('fill', 'none')
    wrapper.appendChild(one2)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  number12(x: number, y: number): Element {
    // center symbol
    const xShift = -3 // px
    const yShift = -3 // px
    x = Math.round(x + (xShift * this.settings.SYMBOL_SCALE))
    y = Math.round(y + (yShift * this.settings.SYMBOL_SCALE))

    const wrapper = document.createElementNS(this.context.root.namespaceURI, 'g')
    wrapper.setAttribute('id', this.getHouseIdWrapper(this.settings.SYMBOL_CUSP_12))
    wrapper.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')

    const one = document.createElementNS(this.context.root.namespaceURI, 'path')
    one.setAttribute('d', 'm' + x + ', ' + y + ' -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915')
    one.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    one.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    one.setAttribute('fill', 'none')
    wrapper.appendChild(one)

    const numberXShift = 4 // px
    const numberYShift = 1 // px
    const two = document.createElementNS(this.context.root.namespaceURI, 'path')
    two.setAttribute('d', 'm' + (x + numberXShift) + ', ' + (y + numberYShift) + ' 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455')
    two.setAttribute('stroke', this.settings.CUSPS_FONT_COLOR)
    two.setAttribute('stroke-width', (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString())
    two.setAttribute('fill', 'none')
    wrapper.appendChild(two)

    if (this.settings.ADD_CLICK_AREA) wrapper.appendChild(this.createRectForClick(x, y))
    return wrapper
  }

  /**
 * Draw circular sector
 *
 * @param {int} x - circle x center position
 * @param {int} y - circle y center position
 * @param {int} radius - circle radius in px
 * @param {int} a1 - angleFrom in degree
 * @param {int} a2 - angleTo in degree
 * @param {int} thickness - from outside to center in px
 *
 * @return {SVGElement} segment
 *
 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
 */
  segment(x: number, y: number, radius: number, a1: number, a2: number, thickness: number, lFlag?: number, sFlag?: number): Element {
    // @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
    const LARGE_ARC_FLAG = lFlag || 0
    const SWEET_FLAG = sFlag || 0

    a1 = ((this.settings.SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180
    a2 = ((this.settings.SHIFT_IN_DEGREES - a2) % 360) * Math.PI / 180

    const segment = document.createElementNS(this.context.root.namespaceURI, 'path')
    segment.setAttribute('d', 'M ' + (x + thickness * Math.cos(a1)) + ', ' + (y + thickness * Math.sin(a1)) + ' l ' + ((radius - thickness) * Math.cos(a1)) + ', ' + ((radius - thickness) * Math.sin(a1)) + ' A ' + radius + ', ' + radius + ',0 ,' + LARGE_ARC_FLAG + ', ' + SWEET_FLAG + ', ' + (x + radius * Math.cos(a2)) + ', ' + (y + radius * Math.sin(a2)) + ' l ' + ((radius - thickness) * -Math.cos(a2)) + ', ' + ((radius - thickness) * -Math.sin(a2)) + ' A ' + thickness + ', ' + thickness + ',0 ,' + LARGE_ARC_FLAG + ', ' + 1 + ', ' + (x + thickness * Math.cos(a1)) + ', ' + (y + thickness * Math.sin(a1)))
    segment.setAttribute('fill', 'none')
    return segment
  }

  /**
 * Draw line in circle
 *
 * @param {int} x1
 * @param {int} y2
 * @param {int} x2
 * @param {int} y2
 * @param {String} color - HTML rgb
 *
 * @return {SVGElement} line
 */
  line(x1: number, y1: number, x2: number, y2: number): Element {
    const line = document.createElementNS(this.context.root.namespaceURI, 'line')
    line.setAttribute('x1', x1.toString())
    line.setAttribute('y1', y1.toString())
    line.setAttribute('x2', x2.toString())
    line.setAttribute('y2', y2.toString())
    return line
  }

  /**
 * Draw a circle
 *
 * @param {int} cx
 * @param {int} cy
 * @param {int} radius
 *
 * @return {SVGElement} circle
 */
  circle(cx: number, cy: number, radius: number): Element {
    const circle = document.createElementNS(this.context.root.namespaceURI, 'circle')
    circle.setAttribute('cx', cx.toString())
    circle.setAttribute('cy', cy.toString())
    circle.setAttribute('r', radius.toString())
    circle.setAttribute('fill', 'none')
    return circle
  }

  /**
 * Draw a text
 *
 * @param {String} text
 * @param {int} x
 * @param {int} y
 * @param {String} size - etc. "13px"
 * @param {String} color - HTML rgb
 *
 * @return {SVGElement} text
 */
  text(txt: string, x: number, y: number, size: string, color: string): Element {
    const text = document.createElementNS(this.context.root.namespaceURI, 'text')
    text.setAttribute('x', x.toString())
    text.setAttribute('y', y.toString())
    text.setAttribute('font-size', size)
    text.setAttribute('fill', color)
    text.setAttribute('font-family', 'serif')
    text.setAttribute('dominant-baseline', 'central')
    text.appendChild(document.createTextNode(txt))
    text.setAttribute('transform', 'translate(' + (-x * (this.settings.SYMBOL_SCALE - 1)) + ',' + (-y * (this.settings.SYMBOL_SCALE - 1)) + ') scale(' + this.settings.SYMBOL_SCALE + ')')
    return text
  }
}

export default SVG
