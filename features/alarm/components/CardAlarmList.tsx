import {Text} from "react-native"
import {FlatList} from "react-native-gesture-handler";
import {CardAlarmSimple} from "@/features/alarm/components/CardAlarmSimple";
import {TabProvider} from "@/shared/context/TabContext";
import React from "react";
import {TabPanel} from "@/shared/components/tabs/TabPanel";
import {TabList} from "@/shared/components/tabs/TabList";
import {Tab} from "@/shared/components/tabs/Tab";
import {CardAlarmMultiple} from "@/features/alarm/components/CardAlarmMultiple";
import {useAlarmContext} from "@/features/alarm/context/AlarmContext";

export const CardAlarmList = () => {
    const {
        alarmComplete,
        alarmIncomplete,
        saveAlarmMutiAllIsCompleted,
        saveAlarmMultiIsCompleted,
        saveAlarmSimpleIsCompleted
    } = useAlarmContext();
    const [tabActive, setTabActive] = React.useState<string>("doses-incomplete");
    return (
        <TabProvider tabActive={tabActive}>
            <TabList onChange={setTabActive}>
                <Tab label="Tomas del dia" value="doses-incomplete"/>
                <Tab label="Tomas completadas" value="doses-complete"/>
            </TabList>
            <TabPanel value="doses-incomplete">
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerClassName="pb-safe-offset-12 gap-5"
                    data={alarmIncomplete}
                    keyExtractor={item => item.id}
                    renderItem={(data) => {
                        if (data.item.isMultiple) return (<CardAlarmMultiple
                            alarmMultiple={data.item}
                            onCompleteAll={saveAlarmMutiAllIsCompleted}
                            onComplete={saveAlarmMultiIsCompleted}/>)
                        return <CardAlarmSimple alarmSimple={data.item}
                                                onComplete={saveAlarmSimpleIsCompleted}/>
                    }}
                />
            </TabPanel>
            <TabPanel value="doses-complete">
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerClassName="pb-safe-offset-12 gap-5"
                    data={alarmComplete}
                    keyExtractor={item => item.id}
                    renderItem={(data) => {
                        if (data.item.isMultiple) return (<CardAlarmMultiple
                            alarmMultiple={data.item}
                            onCompleteAll={saveAlarmMutiAllIsCompleted}
                            onComplete={saveAlarmMultiIsCompleted}/>)
                        return <CardAlarmSimple alarmSimple={data.item}
                                                onComplete={saveAlarmSimpleIsCompleted}/>
                    }}
                />
            </TabPanel>
        </TabProvider>
    )
}