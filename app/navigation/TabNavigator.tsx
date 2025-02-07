import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainStackParams} from './MainStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeScreen} from '../features/home/HomeScreen';
import {TabBarMenu} from './components/TabBarMenu';

export type TabNavigatorParams = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const bottomTabNavigator = createBottomTabNavigator<TabNavigatorParams>();

type Props = NativeStackScreenProps<MainStackParams, 'TabNavigator'>;

export const TabNavigator = () => {
  const tabBarMenu = (props: JSX.IntrinsicAttributes & BottomTabBarProps) => (
    <TabBarMenu {...props} />
  );
  return (
    <bottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={tabBarMenu}>
      <bottomTabNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <bottomTabNavigator.Screen name="ProfileScreen" component={HomeScreen} />
    </bottomTabNavigator.Navigator>
  );
};
