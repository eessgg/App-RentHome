import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import HouseMap from './screens/HouseMap'
import HouseDetails from "./screens/HouseDetails";

import SelectMap from './screens/AddNewHouse/SelectMap';
import HouseData from './screens/AddNewHouse/HouseData';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="HouseMap" component={HouseMap} />
        <Screen
          name="Details"
          component={HouseDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Details" />,
          }}
        />
        <Screen
          name="SelectMap"
          component={SelectMap}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="SelectMap" />,
          }}
        />
        <Screen
          name="HouseData"
          component={HouseData}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="HouseData" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
