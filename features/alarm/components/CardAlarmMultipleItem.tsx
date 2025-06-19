import {CheckBox} from "@/shared/components/CheckBox";
import {Text, Pressable, View} from "react-native";

interface CardAlarmMultipleItemProps {
    checked: boolean;
    name: string;
    count: number;
    measure: string;
    onChange: (checked: boolean) => void;
}

export const CardAlarmMultipleItem = ({checked, onChange, name, count, measure}: CardAlarmMultipleItemProps) => {
    return (
        <Pressable className="flex-row gap-2 items-start" onPress={() => onChange(!checked)}>
            <CheckBox size={18} checked={checked} onChange={onChange}/>
            <View>
                <Text className={`text-sm text-black_slim ${checked ? "line-through" : ""}`}>{name}</Text>
                <Text className={`text-xs text-black_slim`}>{count} {measure}</Text>
            </View>
        </Pressable>
    )
}