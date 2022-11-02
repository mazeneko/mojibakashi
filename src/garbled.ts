import { Encoding } from './iconv-lite-types';

/** 文字化けの種類のリスト。 */
// TODO: もう何種類か増やしたい
export const garbledTypes = [
  'UTF-8_SHIFT-JIS',
  'UTF-8_EUC-JP',
  'EUC-JP_SHIFT-JIS',
] as const;

/** 文字化けの種類。 */
export type GarbledType = typeof garbledTypes[number];

/** 文字化けさせるためのエンコーディングの組み合わせ。 */
export type GarbledDefinition = {
  /** 正しいエンコーディング。 */
  readonly truth: Encoding;
  /** 誤って使われるエンコーディング。 */
  readonly mistake: Encoding;
};

/** 文字化けさせるためのエンコーディングの組み合わせのリスト。 */
export const garbledDefinitions: {
  readonly [key in GarbledType]: GarbledDefinition;
} = {
  'UTF-8_SHIFT-JIS': { truth: 'UTF-8', mistake: 'SHIFT-JIS' },
  'UTF-8_EUC-JP': { truth: 'UTF-8', mistake: 'EUC-JP' },
  'EUC-JP_SHIFT-JIS': { truth: 'EUC-JP', mistake: 'SHIFT-JIS' },
};
