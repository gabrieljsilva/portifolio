import Styled from "styled-components";
import { applyCssProperty } from "../../utils";
import { CSSProperties } from "react";

export interface BoxProps {
  width?: CSSProperties["width"];
  minWidth?: CSSProperties["minWidth"];
  maxWidth?: CSSProperties["maxWidth"];
  height?: CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
  maxHeight?: CSSProperties["maxHeight"];
  padding?: CSSProperties["padding"];
  margin?: CSSProperties["margin"];
  border?: CSSProperties["border"];
  borderBottom?: CSSProperties["borderBottom"];
  borderColor?: CSSProperties["borderColor"];
  backgroundColor?: CSSProperties["backgroundColor"];
  backgroundImage?: CSSProperties["backgroundImage"];
  backgroundRepeat?: CSSProperties["backgroundRepeat"];
  background?: CSSProperties["background"];
  filter?: CSSProperties["filter"];
  backgroundPosition?: CSSProperties["backgroundPosition"];
  backgroundSize?: CSSProperties["backgroundSize"];
  backdropFilter?: CSSProperties["backdropFilter"];
  position?: CSSProperties["position"];
  zIndex?: CSSProperties["zIndex"];
  top?: CSSProperties["top"];
}

export const Box = Styled.div<BoxProps>`
  ${applyCssProperty("width")}
  ${applyCssProperty("height")}
  ${applyCssProperty("minWidth")}
  ${applyCssProperty("minHeight")}
  ${applyCssProperty("padding")}
  ${applyCssProperty("margin")}
  ${applyCssProperty("border")}
  ${applyCssProperty("borderBottom")}
  ${applyCssProperty("borderColor")}
  ${applyCssProperty("backgroundColor")}
  ${applyCssProperty("background")}
  ${applyCssProperty("filter")}
  ${applyCssProperty("backgroundPosition")}
  ${applyCssProperty("backgroundSize")}
  ${applyCssProperty("backdropFilter")}
  ${applyCssProperty("backgroundImage")}
  ${applyCssProperty("backgroundRepeat")}
  ${applyCssProperty("top")}
  ${applyCssProperty("position")}
  ${applyCssProperty("zIndex")}
`;
