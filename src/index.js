/**
 * Created by Halo on 16/4/20.
 */

"use strict"

import React, {
    Component,
    Navigator
} from 'react-native';

import HomePage from './pages/home';
import DetailPage from './pages/detail';

class BBook extends Component {

    configureScene(route){
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(route, navigator){
        var Componen = null;
        console.log('---> route', route);
        switch(route.name){
            case "homePage":
                Componen = HomePage;
                break;
            case "detailPage":
                Componen = DetailPage;
                break;
            default: //default view
                Componen = HomePage;
        }

        return (<Componen navigator={navigator} route={route}/>);
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'homePage'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );

    }
}

export default BBook;