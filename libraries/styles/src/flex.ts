import { CSSProperties } from 'react';

export interface FlexOption {
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
}

export function flex({
  align = 'flex-start',
  direction = 'row',
  justify = 'flex-start',
}: FlexOption) {
  return `
    align-items: ${align};
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
  `;
}
