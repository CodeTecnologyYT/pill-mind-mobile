import {alarmsData} from "@/features/alarm/data/alarmsData";
import {Alarm} from "@/features/alarm/models/Alarm";
import {useEffect, useState} from "react";
import {AlarmGroup} from "@/features/alarm/models/AlarmGroup";

interface GroupedAlarmsHour {
    [hour: string]: Alarm[];
}

export const useAlarmData = () => {

    const [alarms, setAlarms] = useState<AlarmGroup[]>([]);

    const getAlarmsData = () => {
        const timeToMinutes = (time: string): number => {
            const [hours, minutes] = time.split(':').map(Number);
            return hours * 60 + minutes;
        };

        const sortAlarmsByTime = (alarms: Alarm[]): Alarm[] => {
            return alarms.sort((a, b) => {
                const timeA = timeToMinutes(a.time);
                const timeB = timeToMinutes(b.time);
                return timeA - timeB;
            });
        };

        const groupAlarmsByHour = (alarms: Alarm[]): AlarmGroup[] => {
            const alarmGroups: AlarmGroup[] = [];
            const groupedAlarmHour = alarms.reduce((grouped: GroupedAlarmsHour, alarm) => {
                if (!grouped[alarm.time]) {
                    grouped[alarm.time] = [];
                }

                grouped[alarm.time].push(alarm);
                return grouped;
            }, {})

            const isMultiple = (alarmGroup: Alarm[]) => alarmGroup.length > 1;

            Object.values(groupedAlarmHour).forEach(alarmsByHour => {
                alarmGroups.push(
                    {
                        id: alarmsByHour[0].id,
                        name: isMultiple(alarmsByHour) ? "Medicamentos" : alarmsByHour[0].name,
                        time: alarmsByHour[0].time,
                        date: alarmsByHour[0].date,
                        count: isMultiple(alarmsByHour) ? alarmsByHour.length : alarmsByHour[0].count,
                        measure: isMultiple(alarmsByHour) ? "Medicamentos" : alarmsByHour[0].measure,
                        isCompleted: isMultiple(alarmsByHour) ?
                            alarmsByHour.every(alarm => alarm.isCompleted) : alarmsByHour[0].isCompleted,
                        isMultiple: isMultiple(alarmsByHour),
                        group: isMultiple(alarmsByHour) ? alarmsByHour : []
                    })
            })
            return alarmGroups;
        };

        const sortedAlarms = sortAlarmsByTime(alarmsData);
        const groupedAlarms = groupAlarmsByHour(sortedAlarms);
        setAlarms(groupedAlarms);
    }

    const saveAlarmMultiIsCompleted = (idGroup: string, id: string) => {
        setAlarms((prevState) => {
            const newState = [...prevState];
            const alarm = newState.find(alarm => alarm.id === idGroup);
            if (!alarm) return prevState;
            const alarmItem = alarm.group.find(item => item.id === id);
            if (!alarmItem) return prevState;
            alarmItem.isCompleted = !alarmItem.isCompleted;
            alarm.isCompleted = alarm.group.every(item => item.isCompleted);
            return newState;
        });
    }

    const saveAlarmMutiAllIsCompleted = (idGroup: string) => {
        setAlarms((prevState) => {
            const newState = [...prevState];
            const alarm = newState.find(alarm => alarm.id === idGroup);
            if (!alarm) return prevState;
            alarm.isCompleted = !alarm.isCompleted;
            alarm.group.forEach(item => item.isCompleted = alarm.isCompleted);
            return newState;
        });
    }

    const saveAlarmSimpleIsCompleted = (id: string) => {
        setAlarms((prevState) => {
            const newState = [...prevState];
            const alarm = newState.find(alarm => alarm.id === id);
            if (!alarm) return prevState;
            alarm.isCompleted = !alarm.isCompleted;
            return newState;
        });
    }

    const countAllAlarms = (alarms: AlarmGroup[]): number => {
        return alarms.reduce((total, alarm) => {
            const count = alarm.group.length === 0 ? 1 : alarm.group.length;
            return total + count;
        }, 0);
    }

    const countAllAlarmsCompleted = (alarms: AlarmGroup[]): number => {
        return alarms.reduce((total, alarm) => {
            const countAlarmCompleteSimple = alarm.isCompleted ? 1 : 0;
            const countAlarmCompleteMultiple = alarm.group.filter(item => item.isCompleted).length
            const countAlarmComplete = alarm.group.length === 0 ? countAlarmCompleteSimple : countAlarmCompleteMultiple;
            return total + countAlarmComplete;
        }, 0);
    }

    useEffect(() => {
        getAlarmsData()
    }, []);

    return {
        // State
        alarmIncomplete: alarms.filter(alarm => !alarm.isCompleted),
        alarmComplete: alarms.filter(alarm => alarm.isCompleted),
        countAllAlarms: countAllAlarms(alarms),
        countAllAlarmsCompleted: countAllAlarmsCompleted(alarms),
        countAllAlarmsIncomplete: countAllAlarms(alarms) - countAllAlarmsCompleted(alarms),
        // Methods
        saveAlarmSimpleIsCompleted,
        saveAlarmMultiIsCompleted,
        saveAlarmMutiAllIsCompleted,
    }
};