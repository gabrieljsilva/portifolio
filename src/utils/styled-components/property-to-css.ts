import { css, CSSObject } from "styled-components";

export function propertyToCSS(property: keyof CSSObject, value: CSSObject[keyof CSSObject]) {
  return (
    value &&
    css`
      ${property}: ${value}
    `
  );
}
