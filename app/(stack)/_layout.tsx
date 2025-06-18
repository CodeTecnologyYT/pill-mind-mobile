import {Stack} from "expo-router";
import {HeaderStack} from "@/shared/components/HeaderStack";
import {useAlarmContext} from "@/features/alarm/context/AlarmContext";

const StackLayout = () => {
    const {progressPercentage, countAllAlarmsIncomplete} = useAlarmContext();
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{
                    header: () => <HeaderStack progressPercentage={progressPercentage}
                                               countAlarmIncompleted={countAllAlarmsIncomplete}/>
                }}
            />
        </Stack>
    )
}

export default StackLayout;