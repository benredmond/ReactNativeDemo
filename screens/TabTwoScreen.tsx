import * as React from 'react';
import {Platform, StyleSheet, Button} from 'react-native';
import styled from 'styled-components/native'

import {Text, View} from '../components/Themed';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  font-size: 20;
  font-weight: bold;
`

export default function TabTwoScreen({route}) {
    let moreData = route.params ? route.params.moreData : "";
    return (
        <StyledView>
            <StyledText>Tab Two</StyledText>
            {Platform.select({
                android: <Text>android exclusive</Text>,
            })}
            <Text>{moreData}</Text>
        </StyledView>
    );
}

