import {View, Text} from "react-native";
import {Image} from "expo-image";
import {Colors} from "@/shared/constants/colors";
import {ProgressHorizontal} from "@/shared/components/progress/ProgressHorizontal";
import {CheckBox} from "@/shared/components/CheckBox";
import {AlarmGroup} from "@/features/alarm/models/AlarmGroup";

interface CardAlarmSimpleProps {
    alarmSimple: AlarmGroup;
    onComplete: (idAlarm: string) => void;
}

export const CardAlarmSimple = ({alarmSimple, onComplete}: CardAlarmSimpleProps) => {
    return (
        <View className={`rounded-lg px-6 py-8 gap-3 transition-colors duration-300 ease-in-out 
                          ${alarmSimple.isCompleted ? "bg-blue-100" : "bg-white"}`}>
            <View className="flex-row gap-3 self-baseline">
                <View
                    className={`transition-colors duration-300 ease-in-out rounded-xl px-4 items-center justify-center
                                ${alarmSimple.isCompleted ? "bg-blue-200 " : "bg-background"}`}>
                    <Image
                        source={require('@/assets/images/alarms/pills.svg')}
                        style={{
                            width: 30,
                            aspectRatio: 1,
                            tintColor: alarmSimple.isCompleted ? Colors.background : Colors.gray_icon,
                            display: 'flex',
                        }}
                        placeholder={"image"}
                        contentFit="contain"
                        transition={300}
                    />
                </View>
                <View className="gap-4">
                    <Text className={`font-bold text-black_light`}>{alarmSimple.name}</Text>
                    <View className="flex-row gap-2 items-center">
                        <Text className="bg-primary self-baseline text-white text-xs px-1.5 py-1.5 rounded-lg">
                            {alarmSimple.time}
                        </Text>
                        <Text className={`text-xs transition-colors duration-300 ease-in-out 
                            ${alarmSimple.isCompleted ? "text-black_slim" : "text-gray_light"}`}>
                            {alarmSimple.count} {alarmSimple.measure}
                        </Text>
                    </View>
                </View>
            </View>
            <ProgressHorizontal steps={1} stepCompleted={alarmSimple.isCompleted ? 1 : 0}
                                backgroundColor={alarmSimple.isCompleted ? Colors.background : Colors.gray_step}
                                textColor={alarmSimple.isCompleted ? Colors.black_slim : Colors.gray_light}/>
            <CheckBox checked={alarmSimple.isCompleted} onChange={() => onComplete(alarmSimple.id)}
                      className="absolute top-8 right-6"/>
        </View>
    )
}