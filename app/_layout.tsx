import {Slot} from "expo-router";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import "./global.css"
import {configureReanimatedLogger, ReanimatedLogLevel} from 'react-native-reanimated';

configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
});

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Slot/>
        </GestureHandlerRootView>
    );
}
export default RootLayout;