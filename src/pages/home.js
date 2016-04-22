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

class HomePage extends Component {
    constructor(props) {
        console.log('HomeP cons por', props);
        super(props);
        this.state = {};
        console.log('this', this);
        //this.props = props;
    }

    componentDidMount(){
        console.log('componentDidMount this:', this);
    }

    toDetailPage() {
        let navigator = this.props.navigator;
        navigator.push({name: 'detailPage'});
    }

    render() {
        return(
            <Text style = {styles.cc} onPress={this.toDetailPage.bind(this)}>homePage</Text>
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

export default HomePage;
