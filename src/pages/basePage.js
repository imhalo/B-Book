/**
 * Created by Halo on 16/4/22.
 */

"use strict"

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

class BasePage extends Component {

    constructor(props){
        super(props);
    }

    _backPage(){
        let navigator = this.props.navigator;
        navigator.pop();
    }

}

export default BasePage;