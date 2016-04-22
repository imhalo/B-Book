/**
 * Created by Halo on 16/4/20.
 */

"use strict"

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import BasePage from './basePage';

class DetailPage extends BasePage {
    constructor(props){
        super(props);
    }


    _toHomePage(){
        let navigator = this.props.navigator;
        navigator.push({name: 'homePage'});
    }

    /*_backPage(){
        let navigator = this.props.navigator;
        navigator.pop();
    }*/

    render() {
        return(
            <View>
                <Text style={styles.cc} onPress = {this._toHomePage.bind(this)} >DetailPage</Text>
                <Text style={styles.cc} onPress = {this._backPage.bind(this)} >back</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cc: {
        margin:100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default DetailPage;
