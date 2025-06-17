import {Text} from "react-native"
import {FlatList} from "react-native-gesture-handler";
import {CardAlarmSimple} from "@/features/alarm/components/CardAlarmSimple";
import {TabProvider} from "@/shared/context/TabContext";
import React from "react";
import {TabPanel} from "@/shared/components/tabs/TabPanel";
import {TabList} from "@/shared/components/tabs/TabList";
import {Tab} from "@/shared/components/tabs/Tab";
import {CardAlarmMultiple} from "@/features/alarm/components/CardAlarmMultiple";

export const CardAlarmList = () => {
    const alarms: { id: string, name: string }[] = [{id: "1", name: "bryan"}];
    const [tabActive, setTabActive] = React.useState<string>("doses-incomplete");
    return (
        <TabProvider tabActive={tabActive}>
            <TabList onChange={setTabActive}>
                <Tab label="Tomas del dia" value="doses-incomplete"/>
                <Tab label="Tomas completadas" value="doses-complete"/>
            </TabList>
            <TabPanel value="doses-incomplete">
                <FlatList
                    data={alarms}
                    keyExtractor={item => item.id}
                    renderItem={() => <CardAlarmMultiple/>
                    }
                />
            </TabPanel>
            <TabPanel value="doses-complete">
                <Text>Tab 2</Text>
            </TabPanel>
        </TabProvider>
    )
}