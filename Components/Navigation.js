import React from 'react';
import {StyleSheet, Text, View} from "react-native";


const Navigation = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionFont}>Progress | For You</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: 55,
        zIndex: 1,
    },
    sectionFont: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Navigation;
