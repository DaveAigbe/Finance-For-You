import React from 'react';
import {StyleSheet, View} from "react-native";
import StyledButton from "./StyledButton";

const Footer = () => {
    return (
        <View style={styles.container}>
                <StyledButton iconName={'home'}/>
            <StyledButton iconName={'web'}/>
                <StyledButton iconName={'bookmark'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
    },
});

export default Footer;
