import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {MainStackParams} from './MainStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeScreen} from '../features/home/HomeScreen';

export type TabNavigatorParams = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

const bottomTabNavigator = createBottomTabNavigator<TabNavigatorParams>();

type Props = NativeStackScreenProps<MainStackParams, 'TabNavigator'>;

export const TabNavigator = () => {
  return (
    <bottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <bottomTabNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <bottomTabNavigator.Screen name="ProfileScreen" component={HomeScreen} />
    </bottomTabNavigator.Navigator>
  );
};
