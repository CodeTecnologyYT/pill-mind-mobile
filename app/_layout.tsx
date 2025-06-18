import {Slot} from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import "./global.css"
import {configureReanimatedLogger, ReanimatedLogLevel} from 'react-native-reanimated';
import {AlarmContext} from "@/features/alarm/context/AlarmContext";

configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

const RootLayout = () => {
    return (
        <AlarmContext>
            <GestureHandlerRootView style={{flex: 1}}>
                <Slot/>
            </GestureHandlerRootView>
        </AlarmContext>
    );
}
export default RootLayout;