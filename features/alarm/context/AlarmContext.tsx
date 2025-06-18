import {createContext, PropsWithChildren, useContext} from "react";
import {AlarmGroup} from "@/features/alarm/models/AlarmGroup";
import {useAlarmData} from "@/features/alarm/hooks/useAlarmData";

interface AlarmProviderState {
    // State
    alarmIncomplete: AlarmGroup[];
    alarmComplete: AlarmGroup[];
    progressPercentage: number;
    countAllAlarmsIncomplete: number;
    // Methods
    saveAlarmSimpleIsCompleted: (id: string) => void,
    saveAlarmMultiIsCompleted: (idGroup: string, id: string) => void,
    saveAlarmMutiAllIsCompleted: (idGroup: string) => void,
}

const AlarmProvider = createContext<AlarmProviderState>({} as AlarmProviderState)

export const AlarmContext = ({children}: PropsWithChildren) => {
    const {
        alarmIncomplete,
        alarmComplete,
        countAllAlarms,
        countAllAlarmsCompleted,
        countAllAlarmsIncomplete,
        saveAlarmMultiIsCompleted,
        saveAlarmSimpleIsCompleted,
        saveAlarmMutiAllIsCompleted
    } = useAlarmData();
    return (
        <AlarmProvider.Provider value={{
            alarmComplete,
            alarmIncomplete,
            progressPercentage:  Math.round((countAllAlarmsCompleted / countAllAlarms) * 100),
            countAllAlarmsIncomplete,
            saveAlarmMultiIsCompleted,
            saveAlarmSimpleIsCompleted,
            saveAlarmMutiAllIsCompleted
        }}>
            {children}
        </AlarmProvider.Provider>
    )
};

export const useAlarmContext = () => {
    const context = useContext(AlarmProvider);
    if (!context) {
        throw new Error('useAlarmContext must be used within a AlarmContext');
    }
    return context;
};