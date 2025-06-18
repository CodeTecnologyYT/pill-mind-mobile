import {Animated, ColorValue} from "react-native";
import {Circle, Linecap} from "react-native-svg";
import {useEffect, useRef} from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface AnimatedCircleProps {
    cx: number;
    cy: number;
    r: number;
    stroke: string;
    strokeWidth: number;
    fill: ColorValue;
    strokeDasharray: number;
    strokeDashoffset: number;
    strokeLinecap: Linecap;
    transform: string;
    duration?: number;
}

export const AnimateCircle = ({
                                  cx,
                                  cy,
                                  r,
                                  stroke,
                                  strokeWidth,
                                  fill = "transparent",
                                  strokeDasharray,
                                  strokeDashoffset,
                                  strokeLinecap = "round",
                                  transform,
                                  duration = 300
                              }: AnimatedCircleProps) => {

    const radiusCircleAnimation = useRef(new Animated.Value(strokeDashoffset)).current;

    useEffect(() => {
        Animated.timing(radiusCircleAnimation,{
            toValue: strokeDashoffset,
            duration,
            useNativeDriver: false,
        }).start();
    }, [strokeDashoffset, duration, radiusCircleAnimation]);


    return (
        <AnimatedCircle
            cx={cx}
            cy={cy}
            r={r}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={fill}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={radiusCircleAnimation}
            strokeLinecap={strokeLinecap}
            transform={transform}
        />
    )
};