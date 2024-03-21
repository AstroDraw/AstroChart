import Radix from './radix';
import SVG from './svg';
import default_settings from './settings';

describe('Radix', () => {
  const data = {
    planets: {
      Sun: [0],
      Moon: [90],
    },
    cusps: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
  };

  it('should draw aspect lines with default colors', () => {
    document.body.innerHTML = '<div id="chart"></div>';
    const settings = default_settings;
    const paper = new SVG('chart', 500, 500, settings);
    const radix = new Radix(paper, 500, 500, 500, data, settings);
    radix.aspects();

    const aspectLines = document.querySelectorAll('#chart-astrology-aspects > line');
    expect(aspectLines[0].getAttribute('stroke')).toBe(default_settings.ASPECTS.square.color);
  });

  it('should draw aspect lines with custom colors via settings', () => {
    document.body.innerHTML = '<div id="chart"></div>';

    const settings = {
      ...default_settings,
      ASPECTS: {
        square: { degree: 90, orbit: 10, color: 'purple' },
      },
    };

    const paper = new SVG('chart', 500, 500, settings);
    const radix = new Radix(paper, 500, 500, 500, data, settings);
    radix.aspects();

    const aspectLines = document.querySelectorAll('#chart-astrology-aspects > line');
    expect(aspectLines[0].getAttribute('stroke')).toBe('purple');
  });
});
