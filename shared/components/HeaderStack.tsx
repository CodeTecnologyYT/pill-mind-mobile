import {Text, View} from "react-native";
import {ProgressCircular} from "@/shared/components/progress/ProgressCircular";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "@/shared/constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";

interface HeaderStackProps {
    progressPercentage: number;
    countAlarmIncompleted: number;
}

export const HeaderStack = ({progressPercentage, countAlarmIncompleted}: HeaderStackProps) => {
    return (
        <SafeAreaView
            edges={['top']}
            className="bg-white flex-row justify-between px-8 py-5 items-center">
            <View className="flex-row gap-3">
                <ProgressCircular progress={progressPercentage}/>
                <View>
                    <View className="flex-row">
                        <Text className="text-black_light">Hola,</Text>
                        <Text className="text-black_light font-bold">Bryan Rosas</Text>
                    </View>
                    <Text className="text-sm text-gray_light">
                        {countAlarmIncompleted === 0 ? "Haz completado todas tus tomas de hoy"
                            : `Hay ${countAlarmIncompleted} ${countAlarmIncompleted === 1 ? "toma" : "tomas"} que completar hoy`}
                    </Text>
                </View>
            </View>
            <Ionicons name={"notifications"} size={20} color={Colors.gray_light}/>
        </SafeAreaView>
    );
}