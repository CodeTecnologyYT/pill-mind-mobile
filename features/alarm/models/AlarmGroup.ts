import {Alarm} from "@/features/alarm/models/Alarm";

export interface AlarmGroup {
    id: string;
    name: string;
    time: string;
    date: string;
    count: number;
    measure: string;
    isCompleted: boolean;
    isMultiple: boolean;
    group: Alarm[];
}