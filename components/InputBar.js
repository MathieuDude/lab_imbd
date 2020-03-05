import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>

            {
                // -- TEXT INPUT
                /*
                    les props:
                    placeholder -> ce qui affiche quand il n'y a rien
                    onChangeText -> permet de definir une fonction qui vas etre appeler quand le text change de valeur
                    value -> ce que la barre " Text Input " vas contenir (Idealement le text qu'on entre dans la barre)
                */
            }
            <TextInput
                style={styles.input}
                placeholder="Type here to add entries!"
                onChangeText={(txtInput) => props.onChangeText(txtInput)}
                value={props.txtInput}
            />

            {
                // -- TOUCHABLE OPACITY
                /*
                    les props:
                    onPress -> Action qui est déclenché quand on touche "TouchableOpacity" 
                */
            }

            <TouchableOpacity style={styles.homeMadeButton}
                onPress={props.action}>
                <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 45,
    },

    homeMadeButton: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3'
    },

    buttonText: {
        textAlign: 'center',
        color: 'white'
    }

});

export default InputBar