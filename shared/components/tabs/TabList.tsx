import React, {PropsWithChildren} from "react";
import {View} from "react-native";
import {useTabContext} from "@/shared/context/TabContext";

interface TabListProps extends PropsWithChildren{
    onChange?: (newValue: string) => void;
    className?: string;
}
export const TabList = ({
                            children,
                            onChange,
                            className = ''
                        }: TabListProps) => {
    const {tabActive} = useTabContext();
    return (
        <View className={`flex-row  ${className}`}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as any, {
                        tabActive,
                        onChange
                    });
                }
                return child;
            })}
        </View>
    );
};

