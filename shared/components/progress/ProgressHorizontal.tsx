import {Text, View} from "react-native";
import Svg from 'react-native-svg';
import {Colors} from "@/shared/constants/colors";
import {AnimateLine} from "@/shared/components/animate/AnimateLine";

interface HorizontalProgressProps {
    steps: number;
    stepCompleted: number;
    strokeWidth?: number;
    color?: string;
    textColor?: string;
    backgroundColor?: string;
    gap?: number;
}

export const ProgressHorizontal = ({
                                       steps,
                                       stepCompleted = 0,
                                       strokeWidth = 4,
                                       color = Colors.primary,
                                       textColor = Colors.gray_light,
                                       backgroundColor = Colors.gray_step,
                                       gap = 1
                                   }: HorizontalProgressProps) => {
    const stepWidth = (100 - (gap * (steps - 1))) / steps;
    return (
        <View className="gap-2">
            <Text className={"text-xs"} style={{
                color: stepCompleted === steps ? Colors.primary_dark : textColor,
                transitionProperty: "color",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-in-out"
            }}>{stepCompleted === steps ? "Completado" : `${stepCompleted}/${steps}`}</Text>
            <View style={{width: "100%", height: strokeWidth}}>
                <Svg style={{width: "100%", height: strokeWidth}}>
                    {
                        Array.from({length: steps}, (_, index) => {
                                const startX = index * (stepWidth + gap);
                                const isCompleted = index < stepCompleted;
                                return (
                                    <AnimateLine
                                        key={index}
                                        x={`${startX}%`}
                                        width={`${stepWidth}%`}
                                        height={strokeWidth}
                                        isCompleted={isCompleted}
                                        completedColor={Colors.primary}
                                        defaultColor={backgroundColor}
                                        duration={300}
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