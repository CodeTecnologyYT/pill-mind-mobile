import {CheckBox} from "@/shared/components/CheckBox";
import {useState} from "react";
import {Text, View} from "react-native";

export const CardAlarmMultipleItem = () => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <View className="flex-row gap-2 items-center">
            <CheckBox size={18} checked={checked} onChange={setChecked} />
            <Text className="text-sm text-black_slim">Paracetamol</Text>
        </View>
    )
}