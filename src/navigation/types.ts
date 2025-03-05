import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StackScreenProps } from "@react-navigation/stack";

export interface CourseItem {
    id: number;
    name: string;
}

export type StackNavigatorParamsList =  {
    Home: undefined;
    Details: { course: CourseItem};
    AddCourse: undefined;
    // Details: { course: CourseItem} | undefined;
}

export type TabNavigatorParamsList = {
    HomeStack: undefined;
    InfoTab: undefined;
    Settings: undefined;
}

export type DrawerNavigatorParamsList = {
    Info: undefined;
    Native: undefined;
    About: undefined;
}


export type StackNavProps<T extends keyof StackNavigatorParamsList> = StackScreenProps<StackNavigatorParamsList, T>;
// type HomeScreenProps<T extends keyof StackNavigatorParamsList> = StackScreenProps<StackNavigatorParamsList, T>;
// type DetailsScreenProps<T extends keyof StackNavigatorParamsList> = StackScreenProps<StackNavigatorParamsList, T>
// ;

export type TabNavProps<T extends keyof TabNavigatorParamsList> = BottomTabScreenProps<TabNavigatorParamsList, T>;

export type DrawerNavProps<T extends keyof DrawerNavigatorParamsList> = DrawerScreenProps<DrawerNavigatorParamsList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends StackNavigatorParamsList, TabNavigatorParamsList, DrawerNavigatorParamsList {}
    }
}

