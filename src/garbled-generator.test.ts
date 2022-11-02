import { generateAllGarbled, generateGarbled } from './garbled-generator';

test('generateGarbled', () => {
  const actual = generateGarbled('火花', 'UTF-8_SHIFT-JIS');
  expect(actual).toBe('轣ｫ闃ｱ');
});

test('generateAllGarbled', () => {
  const actual = generateAllGarbled('火花');
  expect(actual['UTF-8_SHIFT-JIS']).toBe('轣ｫ闃ｱ');
  expect(actual['UTF-8_EUC-JP']).toBe('������');
  expect(actual['EUC-JP_SHIFT-JIS']).toBe('ｲﾐｲﾖ');
});
