import {View} from "react-native";
import {PropsWithChildren} from "react";

export const PageLayout = ({children}: PropsWithChildren) => {
    return (
        <View className="px-8 py-5">
            {children}
        </View>
    )
}