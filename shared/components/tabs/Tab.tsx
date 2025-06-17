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
            className={`py-3 px-4 flex-1 border-b ${className} ${isCurrentlyActive ? 'border-primary' : 'border-gray_light'}`}>
            <Text className={`text-center text-sm font-medium text-black_light
                ${isCurrentlyActive ? 'color-primary' : 'color-gray_light'}`}>
                {label}
            </Text>
        </Pressable>
    )
}
