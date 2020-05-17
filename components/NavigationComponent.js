import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Menu from './MenuComponent';
import Dishdetail from './DishDetailComponent';
import Home from './HomeComponent';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }, 
},
    {
        initialRouteName: 'Menu',
    }
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
});

const CombinationalNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator, 
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    }, 
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
})

const MainNavigator = createAppContainer(CombinationalNavigator);

export default MainNavigator;