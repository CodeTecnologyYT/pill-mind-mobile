import {useEffect, useRef} from "react";
import {Animated} from "react-native";
import {Line, Rect} from "react-native-svg";

interface AnimatedProgressLineProps {
    x: string;
    width: string;
    height: number;
    isCompleted: boolean;
    completedColor: string;
    defaultColor: string;
    duration?: number;
}

const AnimatedLine = Animated.createAnimatedComponent(Rect);


export const AnimateLine = ({
                                        x,
                                        width,
                                        height,
                                        isCompleted,
                                        completedColor,
                                        defaultColor,
                                        duration = 300
                                    }: AnimatedProgressLineProps) => {
    const colorAnimation = useRef(new Animated.Value(isCompleted ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(colorAnimation, {
            toValue: isCompleted ? 1 : 0,
            duration,
            useNativeDriver: false,
        }).start();
    }, [isCompleted, duration, colorAnimation]);

    const animatedColor = colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [defaultColor, completedColor],
    });

    return (
        <AnimatedLine
            x={x}
            y={0}
            width={width}
            height={height}
            fill={animatedColor}
            rx={height / 2}
            ry={height / 2}
            strokeLinecap="round"
        />
    );

};