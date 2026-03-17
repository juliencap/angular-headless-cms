import { FormatDatePipe } from './format-date.pipe';

describe('FormatDatePipe', () => {
  let pipe: FormatDatePipe;

  beforeEach(() => {
    pipe = new FormatDatePipe();
  });

  it('should format date with full format', () => {
    const result = pipe.transform('2025-06-24T19:29:00');

    expect(result).toBe('24 juin 2025 à 19h29');
  });

  it('should format date with short format', () => {
    const result = pipe.transform('2025-06-24T19:29:00', 'short');

    expect(result).toBe('24/06');
  });

  it('should return empty string if no value', () => {
    const result = pipe.transform(null as any);

    expect(result).toBe('');
  });
});
