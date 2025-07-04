import {PageLayout} from "@/shared/layouts/PageLayout";
import {InputSearch} from "@/shared/components/InputSearch";
import {View} from "react-native";

const MedicationPage = () => {

    const onChange = (text:string) => {
        console.log(text);
    }

    return (
        <PageLayout>
            <InputSearch
                placeholder={"Buscar medicacion"}
                onHandleChange={onChange}/>
            <View>

            </View>
        </PageLayout>
    )
}

export default MedicationPage;