import React from 'react';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import DrawerContent from './drawer-content';

export type RootDrawerParamList = {
  Collections: undefined;
  Men: undefined;
  Women: undefined;
  About: undefined;
  Contact: undefined;
  Drawer: undefined;
};

export type Props = DrawerScreenProps<RootDrawerParamList, 'Collections'>;

export default function Router() {
  const { Navigator, Screen } = createDrawerNavigator<RootDrawerParamList>();

  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={() => <DrawerContent />}
      initialRouteName='Collections'
    >
      <Screen name='Collections' component={Dashboard} />
      <Screen name='Men' component={Dashboard} />
      <Screen name='Women' component={Dashboard} />
      <Screen name='About' component={Dashboard} />
      <Screen name='Contact' component={Dashboard} />
    </Navigator>
  );
}
