import * as React from 'react';
import {StyleSheet, Platform, Button} from 'react-native';

import {Text, View} from '../components/Themed';

export default function TabOneScreen({navigation, route}) {
    const { data } = route.params;

    return (
        // View = div
        // Text = p
        // Many other components at https://reactnative.dev/docs/components-and-apis
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            {Platform.select({
                ios: <Text>on ios</Text>,
                android: <Text>on android</Text>,
                web: <Text>on web</Text>
            })}
            <Text>{data}</Text>
            <Button title="Go to tab 2!" onPress={() => navigation.navigate("Root",
                {screen: 'TabTwo',
                params: { screen:'TabTwoScreen',
                    params: {moreData: 'jane' }}})}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
