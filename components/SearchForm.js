import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, CheckBox, Button} from 'react-native';

const SearchForm = (props) => {
    
}

export default SearchForm;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 45,
        padding: 10,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center',
    },
    pickerStyle: {
        height: 50, 
        width: 200,
        borderColor: 'black',
        borderWidth: 2
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    buttonContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '45%'
    },
});