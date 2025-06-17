import {Stack} from "expo-router";
import {HeaderStack} from "@/shared/components/HeaderStack";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    header: () => <HeaderStack />
                }}
            />
        </Stack>
    )
}

export default StackLayout;