'use strict'

import React, {Component} from 'react';
import {
    View,
    ActivityIndicator,
    Platform
} from 'react-native';
var createReactClass = require('create-react-class');

var GiftedSpinner = createReactClass({
    _getSpinner() {
        if (Platform.OS === 'android') {
            return (
                <ActivityIndicator style={{height:20}} styleAttr="Inverse" {...this.props} />
            );
        } else {
            return (
                <ActivityIndicator animating={true} size = "small" {...this.props} />
            );
        }
    },
    render() {
        return (
            <View>
                {this._getSpinner()}
            </View >
        );
    },
});


module.exports = GiftedSpinner;