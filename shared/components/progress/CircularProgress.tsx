import {Text, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Colors} from "@/shared/constants/colors";

interface CircularProgressProps {
    size?: number;
    strokeWidth?: number;
    progress: number; // 0 to 100
    color?: string;
    backgroundColor?: string;
}

export const CircularProgress = ({
                                     size = 35,
                                     strokeWidth = 2,
                                     progress,
                                     color = Colors.primary,
                                     backgroundColor = Colors.background
                                 }: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <View style={{width: size, height: size}}>
            <Svg width={size} height={size}>
                {/* Background circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                {/* Progress circle */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>
            {/* Progress text */}
            <Text className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-xs text-gray_light">
                {progress}%
            </Text>
        </View>);
}