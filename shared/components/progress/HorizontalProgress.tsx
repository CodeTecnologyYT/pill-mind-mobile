import {Text, View} from "react-native";
import Svg, {Line} from 'react-native-svg';
import {Colors} from "@/shared/constants/colors";

interface HorizontalProgressProps {
    steps: number;
    stepCompleted: number;
    strokeWidth?: number;
    color?: string;
    textColor?: string;
    backgroundColor?: string;
    gap?: number;
}

export const HorizontalProgress = ({
                                       steps,
                                       stepCompleted = 0,
                                       strokeWidth = 4,
                                       color = Colors.primary,
                                       textColor = Colors.gray_light,
                                       backgroundColor = Colors.gray_step,
                                       gap = 2
                                   }: HorizontalProgressProps) => {
    const stepWidth = (100 - (gap * (steps - 1))) / steps;

    return (
        <View className="gap-2">
            <Text className={"text-xs"} style={{
                color: stepCompleted === steps ? Colors.primary : textColor,
                transitionProperty: "color",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-in-out"
            }}>{stepCompleted === steps ? "Completado" : `${stepCompleted}/${steps}`}</Text>
            <View style={{width: "100%", height: strokeWidth}}>
                <Svg style={{width: "100%", height: strokeWidth}}>
                    {
                        Array.from({length: steps}, (_, index) => {
                                const startX = index * (stepWidth + gap);
                                const endX = startX + stepWidth;
                                const isCompleted = index < stepCompleted;
                                return (
                                    <Line
                                        key={index}
                                        x1={`${startX}%`}
                                        x2={`${endX}%`}
                                        stroke={isCompleted ? color : backgroundColor}
                                        strokeWidth={strokeWidth}
                                    />
                                )
                            }
                        )
                    }
                </Svg>
            </View>
        </View>
    );
};