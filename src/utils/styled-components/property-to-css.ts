import kebabCase from "kebab-case";
import { CSSProperties } from "styled-components";

export function applyCssProperty(property: keyof CSSProperties) {
  return (props: any) => {
    const value = props[property] as string | number;
    return props[property] && `${kebabCase(property as string)}: ${value};`;
  };
}
