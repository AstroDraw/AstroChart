import Chart from "./chart"

describe.only('constructor', () => {
  test('should throw error when empty houses', () => {
    const chart = new Chart('paper', 1, 1)

    expect(() => {
      chart.radix({planets: {}, cusps: []})
    }).toThrowError(`Count of 'cusps' values has to be 12.`)
  })

  test('should throw error when houses are less than 12', () => {
    const chart = new Chart('paper', 1, 1)

    expect(() => {
      chart.radix({planets: {}, cusps: [1, 2, 3]})
    }).toThrowError(`Count of 'cusps' values has to be 12.`)
  })

})