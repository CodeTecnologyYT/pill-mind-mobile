import {View, Text} from "react-native";
import {Image} from "expo-image";
import {Colors} from "@/shared/constants/colors";
import {HorizontalProgress} from "@/shared/components/progress/HorizontalProgress";
import {CheckBox} from "@/shared/components/CheckBox";
import {useState} from "react";

export const CardAlarmSimple = () => {

    const [checked, setChecked] = useState<boolean>(false);

    return (
        <View className={`rounded-lg px-6 py-8 gap-3 transition-colors duration-300 ease-in-out 
                          ${checked ? "bg-blue-100" : "bg-white"}`}>
            <View className="flex-row gap-3 self-baseline">
                <View
                    className={`transition-colors duration-300 ease-in-out rounded-xl px-4 items-center justify-center
                                ${checked ? "bg-blue-200 " : "bg-background"}`}>
                    <Image
                        source={require('@/assets/images/alarms/pills.svg')}
                        style={{
                            width: 30,
                            aspectRatio: 1,
                            tintColor: checked ? Colors.background : Colors.gray_icon,
                            display: 'flex',
                        }}
                        placeholder={"image"}
                        contentFit="contain"
                        transition={300}
                    />
                </View>
                <View className="gap-4">
                    <Text className={`font-bold text-black_light`}>Paracetamol</Text>
                    <View className="flex-row gap-2 items-center">
                        <Text
                            className="bg-primary self-baseline text-white text-xs px-1.5 py-1.5 rounded-lg">5:23pm</Text>
                        <Text className={`text-xs transition-colors duration-300 ease-in-out ${checked ? "text-black_slim" : "text-gray_light"}`}>1 capsula</Text>
                    </View>
                </View>
            </View>
            <HorizontalProgress steps={5} stepCompleted={2}
                                backgroundColor={checked ? Colors.background : Colors.gray_step}
                                textColor={checked ? Colors.black_slim : Colors.gray_light}/>
            <CheckBox checked={checked} onChange={setChecked} className="absolute top-8 right-6"/>
        </View>
    )
}