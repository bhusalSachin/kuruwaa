import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Rect, Circle, ClipPath, Defs } from "react-native-svg";
import { variables } from "./variables";

const BackgroundEffect = () => {
  return (
    <View
      style={{
        ...StyleSheet.absoluteFill,
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: variables.COLOR.primary,
        zIndex: -100,
      }}>
      <Svg
        height={variables.BACKGROUND.height}
        width={variables.DIMENSIONS.width}>
        <Defs>
          <ClipPath id="clip">
            <Circle r={variables.BACKGROUND.height} />
          </ClipPath>
        </Defs>
        <Rect
          x="0"
          y="0"
          height={"100%"}
          width={"100%"}
          fill={variables.COLOR.secondary}
          clipPath="#clip"
        />
      </Svg>
    </View>
  );
};

export default BackgroundEffect;
