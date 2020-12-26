import { numberToUnit } from './utils/mod';

type Direction = 'vertical' | 'horizontal';

export interface GutterOption {
  direction?: Direction;
  selector?: string;
  space?: number;
}

export function gutter({ direction = 'vertical', selector = '*', space = 16 }: GutterOption) {
  if (direction === 'horizontal') {
    return `
      & > ${selector} ~ ${selector} {
        margin-left: ${numberToUnit(space)};
      }
    `;
  }

  return `
    & > ${selector} ~ ${selector} {
      margin-top: ${numberToUnit(space)};
    }
  `;
}
