import {useState} from "react";
import {Text, View} from "react-native";
import {Image} from "expo-image";
import {Colors} from "@/shared/constants/colors";
import {ProgressHorizontal} from "@/shared/components/progress/ProgressHorizontal";
import {CheckBox} from "@/shared/components/CheckBox";
import {CardAlarmMultipleItem} from "@/features/alarm/components/CardAlarmMultipleItem";
import {AlarmGroup} from "@/features/alarm/models/AlarmGroup";

interface CardAlarmMultipleProps {
    alarmMultiple: AlarmGroup;
    onComplete: (idGroup: string, id: string) => void;
    onCompleteAll: (idGroup: string) => void;
}

export const CardAlarmMultiple = ({
                                      alarmMultiple,
                                      onComplete,
                                      onCompleteAll
                                  }: CardAlarmMultipleProps) => {

    return (
        <View className={`rounded-lg px-6 py-8 gap-2 transition-colors duration-300 ease-in-out 
                          ${alarmMultiple.isCompleted ? "bg-blue-100" : "bg-white"}`}>
            <View className="flex-row gap-3">
                <View className={`items-start justify-start`}>
                    <View className={`transition-colors duration-300 ease-in-out rounded-xl px-4 py-4
                          self-baseline ${alarmMultiple.isCompleted ? "bg-blue-200 " : "bg-background"}`}>
                        <Image
                            source={require('@/assets/images/alarms/pills.svg')}
                            style={{
                                width: 20,
                                aspectRatio: 1,
                                tintColor: alarmMultiple.isCompleted ? Colors.background : Colors.gray_icon,
                            }}
                            placeholder={"image"}
                            contentFit="contain"
                            transition={300}
                        />
                    </View>
                </View>
                <View className="gap-1">
                    <Text className={`font-bold text-black_light`}>{alarmMultiple.name}</Text>
                    <View className="flex-row gap-2 items-center">
                        <Text className="bg-primary self-baseline text-white text-xs px-1.5 py-1.5 rounded-lg">
                            {alarmMultiple.time}
                        </Text>
                        <Text className={`text-xs transition-colors duration-300 ease-in-out 
                                            ${alarmMultiple.isCompleted ? "text-black_slim" : "text-gray_light"}`}>
                            {alarmMultiple.count} {alarmMultiple.measure}
                        </Text>
                    </View>
                    <View className="gap-2 pt-3">
                        {
                            alarmMultiple.group.map(item =>
                                <CardAlarmMultipleItem
                                    key={item.id}
                                    name={item.name}
                                    count={item.count}
                                    measure={item.measure}
                                    checked={item.isCompleted}
                                    onChange={() => onComplete(alarmMultiple.id, item.id)}
                                />
                            )
                        }
                    </View>
                </View>
            </View>
            <ProgressHorizontal steps={alarmMultiple.count}
                                stepCompleted={alarmMultiple.group.filter(item => item.isCompleted).length}
                                backgroundColor={alarmMultiple.isCompleted ? Colors.background : Colors.gray_step}
                                textColor={alarmMultiple.isCompleted ? Colors.black_slim : Colors.gray_light}/>
            <CheckBox checked={alarmMultiple.group.every(item => item.isCompleted)}
                      onChange={() => onCompleteAll(alarmMultiple.id)}
                      className="absolute top-8 right-6"/>
        </View>
    )
};