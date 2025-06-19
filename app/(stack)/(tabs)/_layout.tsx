import {Platform, View} from "react-native";
import {Tabs} from "expo-router";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {Colors} from "@/shared/constants/colors";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                tabBarInactiveTintColor: Colors.gray_light,
                tabBarActiveTintColor: Colors.primary,
                sceneStyle:{
                    backgroundColor: Colors.background
                },
                tabBarStyle:{
                    height: Platform.OS === "android"?110: 90,
                    paddingTop: 15,
                    paddingLeft: 10,
                    paddingRight: 10,
                }
            }}
        >

            <Tabs.Screen
                name="dose/index"
                options={{
                    title: 'Dosis',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="table" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="account/index"
                options={{
                    title: 'Cuenta',
                    tabBarIcon: ({color}) => <Ionicons size={28} name="person-outline" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="new-alarm/index"
                options={{
                    title: 'Alarma',
                    tabBarIcon: ({color}) => {
                        return (
                            <View className="bg-primary px-2 py-1.5 rounded-lg">
                                <FontAwesome size={16} name="plus" color="white"/>
                            </View>
                        );
                    }
                }}
            />
            <Tabs.Screen
                name="medication/index"
                options={{
                    title: 'Medicacion',
                    tabBarIcon: ({color}) => <Ionicons size={28} name="medkit-outline" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="setting/index"
                options={{
                    title: 'Configuracion',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="sliders" color={color}/>,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout;