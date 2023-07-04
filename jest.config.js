/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['./project/src/**/*.{ts,js}'],
  testEnvironment: 'jsdom'
}
