import * as Iconv from 'iconv-lite';
import { garbledDefinitions, GarbledType, garbledTypes } from './garbled';

/**
 * 文字化けしたテキストを生成します。
 * @param prettyText 文字化けしていない元のテキスト。
 * @param garbledType 文字化けの種類。
 * @returns 文字化けしたテキスト。
 */
export function generateGarbled(
  prettyText: string,
  garbledType: GarbledType
): string {
  const garbledDefinition = garbledDefinitions[garbledType];
  const encoded = Iconv.encode(prettyText, garbledDefinition.truth);
  const garbled = Iconv.decode(encoded, garbledDefinition.mistake);
  return garbled;
}

/**
 * 全種類の文字化けしたテキストを生成します。
 * @param prettyText 文字化けしていない元のテキスト。
 * @returns 文字化けしたテキスト。
 */
export function generateAllGarbled(prettyText: string): {
  [key in GarbledType]: string;
} {
  const generatedGarbledList = garbledTypes.map((garbledType) => ({
    [garbledType]: generateGarbled(prettyText, garbledType),
  }));
  const merged = Object.assign({}, ...generatedGarbledList) as {
    [key in GarbledType]: string;
  };
  return merged;
}
