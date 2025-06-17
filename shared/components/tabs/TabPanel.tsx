import {PropsWithChildren} from "react";
import {View} from "react-native";
import {useTabContext} from "@/shared/context/TabContext";

interface TabPanelProps extends PropsWithChildren{
    value: string;
    className?: string;
}

export const TabPanel = ({ value, children, className = '' }: TabPanelProps) => {
    const { tabActive } = useTabContext();

    if (tabActive !== value) {
        return null;
    }

    return (
        <View className="pt-4">
            {children}
        </View>
    );
};
