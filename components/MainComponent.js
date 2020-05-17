import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import MenuNavigator from './Navigator';


class Main extends Component {

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }}>
                <MenuNavigator />
            </View>
            );
    }

}

export default Main