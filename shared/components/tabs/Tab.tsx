import {Pressable, Text, View} from "react-native";

interface TabProps {
    value: string;
    label: string;
    tabActive?: string,
    className?: string;
    onChange?: (newValue: string) => void;
}

export const Tab = ({
                        value,
                        label,
                        tabActive,
                        onChange,
                        className = ''
                    }: TabProps) => {
    const isCurrentlyActive = tabActive === value;

    const handlePress = () => {
        if (onChange) {
            onChange(value);
        }
    }

    return (
        <Pressable
            onPress={handlePress}
            className={`py-2 px-2 rounded-lg${className} ${isCurrentlyActive ? 'bg-white' : ''}`}>
            <Text className={`text-center text-sm font-medium text-black_light
                ${isCurrentlyActive ? 'color-black_light' : 'color-gray_light'}`}>
                {label}
            </Text>
        </Pressable>
    )
}
