import {Text, View} from "react-native";
import {CircularProgress} from "@/shared/components/progress/CircularProgress";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "@/shared/constants/colors";
import {SafeAreaView} from "react-native-safe-area-context";

export const HeaderStack = () => {
    return (
        <SafeAreaView
            edges={['top']}
            className="bg-white flex-row justify-between px-8 py-5 items-center">
            <View className="flex-row gap-3">
                <CircularProgress progress={10} />
                <View>
                    <View className="flex-row">
                        <Text className="text-black_light">Hola,</Text>
                        <Text className="text-black_light font-bold">Bryan Rosas</Text>
                    </View>
                    <Text className="text-xs text-gray_light">Hay 8 tomas que completar hoy</Text>
                </View>
            </View>
            <Ionicons name={"notifications"} size={20} color={Colors.gray_light}/>
        </SafeAreaView>
    );
}