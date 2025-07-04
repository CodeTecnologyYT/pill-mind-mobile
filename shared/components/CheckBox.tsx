import {ColorValue, Pressable, Text} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Colors} from "@/shared/constants/colors";

interface CheckBoxProps {
    checked: boolean;
    size?: number;
    onChange?: (newValue: boolean) => void;
    color?: ColorValue,
    className?: string;
}

export const CheckBox = ({
                             checked,
                             size = 20,
                             onChange,
                             className,
                             color = Colors.primary
                         }: CheckBoxProps) => {
    const handlePress = () => {
        if (onChange) {
            onChange(!checked);
        }
    }
    return (
        <Pressable onPress={handlePress}
                   style={{
                       width: size,
                       height: size,
                   }}
                   className={`border rounded-md justify-center items-center 
                   ${checked ? "bg-primary border-primary" : "border-gray_light"} 
                   ${className}`}
        >
            {checked && <FontAwesome name="check" size={11} color={"white"}/>}
        </Pressable>
    )

}