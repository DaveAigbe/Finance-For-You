import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const StyledButton = ({iconName}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Icon name={iconName} size={30} color="white"/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#1a1515',
        width: '20%',
        height: '80%',
        borderRadius: 20,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    }
});

export default StyledButton;
