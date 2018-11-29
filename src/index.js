import React from 'react';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import { colors } from './theme';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const options = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
};

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City }
}, options);

const TabsBottom = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
});

const Tabs = createAppContainer(TabsBottom);

export default Tabs;