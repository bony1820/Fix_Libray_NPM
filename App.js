import React, { Component } from 'react';
import { Animated, Dimensions, View, Text } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import { Slider } from '@miblanchard/react-native-slider';

export default function App() {
  let [state, setState] = React.useState(2);
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#fff', paddingTop: 100, paddingHorizontal: 20}}>
      <Slider 
        value={2}
        minimumValue={0}
        maximumValue={5}
        trackMarks={[0, 1, 2, 3, 4, 5]}
        trackClickable
        renderTrackMarkComponent={() => {
          return <View style={{ 
            width: 10,
            height: 10,
            borderRadius: 20,
            backgroundColor: '#f00'
          }}/>
        }}
        renderTrackMarkComponentActive={() => {
          return <View style={{ 
            width: 10,
            height: 10,
            borderRadius: 20,
            backgroundColor: '#0f0'
          }}/>
        }}
        step={1}
        onValueChange={(value) => {
          // setState(value)
        }}
        renderBelowThumbComponent={() => <Text style={{ fontSize: 12 }}>B</Text>}
        colorBelowThumbComponent={'#f00'}
        colorBelowThumbComponentActive={'#0f0'}
        minimumTrackTintColor={'#0f0'}
        maximumTrackTintColor={'#f00'}
        thumbTintColor={'#0f0'}
        />

    </View>

  )

}