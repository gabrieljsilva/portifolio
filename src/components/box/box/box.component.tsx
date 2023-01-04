import Styled from "styled-components";
import { applyCssProperty } from "../../../utils";
import { CSSProperties } from "react";

export interface BoxProps {
  // Dimensions
  width?: CSSProperties["width"];
  minWidth?: CSSProperties["minWidth"];
  maxWidth?: CSSProperties["maxWidth"];
  height?: CSSProperties["height"];
  minHeight?: CSSProperties["minHeight"];
  maxHeight?: CSSProperties["maxHeight"];

  // Spacing
  padding?: CSSProperties["padding"];
  margin?: CSSProperties["margin"];
  marginTop?: CSSProperties["marginTop"];
  marginBottom?: CSSProperties["marginBottom"];
  marginLeft?: CSSProperties["marginLeft"];
  marginRight?: CSSProperties["marginRight"];
  gap?: CSSProperties["gap"];

  // Background
  backgroundColor?: CSSProperties["backgroundColor"];
  backgroundImage?: CSSProperties["backgroundImage"];
  backgroundRepeat?: CSSProperties["backgroundRepeat"];
  background?: CSSProperties["background"];
  backgroundPosition?: CSSProperties["backgroundPosition"];
  backgroundSize?: CSSProperties["backgroundSize"];
  backdropFilter?: CSSProperties["backdropFilter"];

  // Positioning
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  right?: CSSProperties["right"];

  // Miscellaneous
  zIndex?: CSSProperties["zIndex"];
  filter?: CSSProperties["filter"];
  border?: CSSProperties["border"];
  borderBottom?: CSSProperties["borderBottom"];
  borderColor?: CSSProperties["borderColor"];
  display?: CSSProperties["display"];
  overflow?: CSSProperties["overflow"];
  borderRadius?: CSSProperties["borderRadius"];
  boxShadow?: CSSProperties["boxShadow"];
}

export const Box = Styled.div<BoxProps>`
  // Dimensions
  ${applyCssProperty("width")}
  ${applyCssProperty("minWidth")}
  ${applyCssProperty("maxWidth")}
  ${applyCssProperty("height")}
  ${applyCssProperty("minHeight")}
  ${applyCssProperty("maxHeight")}
  
  // Spacing
  ${applyCssProperty("padding")}
  ${applyCssProperty("margin")}
  ${applyCssProperty("marginTop")}
  ${applyCssProperty("marginBottom")}
  ${applyCssProperty("marginLeft")}
  ${applyCssProperty("marginRight")}
  ${applyCssProperty("gap")}
  
  // Background
  ${applyCssProperty("backgroundColor")}
  ${applyCssProperty("background")}
  ${applyCssProperty("backgroundPosition")}
  ${applyCssProperty("backgroundSize")}
  ${applyCssProperty("backdropFilter")}
  ${applyCssProperty("backgroundImage")}
  ${applyCssProperty("backgroundRepeat")}
  
  // Positioning
  ${applyCssProperty("top")}
  ${applyCssProperty("bottom")}
  ${applyCssProperty("left")}
  ${applyCssProperty("right")}
  ${applyCssProperty("position")}
  ${applyCssProperty("zIndex")}
  
  // Miscellaneous
  ${applyCssProperty("border")}
  ${applyCssProperty("borderBottom")}
  ${applyCssProperty("borderColor")}
  ${applyCssProperty("filter")}
  ${applyCssProperty("display")}
  ${applyCssProperty("borderRadius")}
  ${applyCssProperty("boxShadow")}
`;
