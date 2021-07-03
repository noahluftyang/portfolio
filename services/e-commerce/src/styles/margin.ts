import { css } from '@emotion/react';

type Direction = 'bottom' | 'left' | 'right' | 'top';

type Unit = number | string;

function marginForCertainDirection(direction: Direction, unit: Unit) {
  const property = `margin-${direction}` as const;

  return css`
    ${property}: ${typeof unit === 'string' ? unit : `${unit}px`};
  `;
}

export function margin(unit: Unit) {
  return [margin.x(unit), margin.y(unit)];
}

margin.bottom = (unit: Unit) => {
  return marginForCertainDirection('bottom', unit);
};

margin.left = (unit: Unit) => {
  return marginForCertainDirection('left', unit);
};

margin.right = (unit: Unit) => {
  return marginForCertainDirection('right', unit);
};

margin.top = (unit: Unit) => {
  return marginForCertainDirection('top', unit);
};

margin.x = (unit: Unit) => {
  return [margin.left(unit), margin.right(unit)];
};

margin.y = (unit: Unit) => {
  return [margin.bottom(unit), margin.top(unit)];
};
