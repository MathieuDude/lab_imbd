import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, CheckBox, Button } from 'react-native';
import Header from './Header.js';
import FilmItem from './FilmItem.js';

//this is how you use states in functions I guess
    //hooks allow you to use states without writing a class
    

const SearchForm = (props) => {
    
    const [title, setTitle] = useState('default');
    const [starring, setStarring] = useState('default');
    const [director, setDirector] = useState('default');
    const [genre, setGenre] = useState('default'); //THIS SET IS LEFT
    const [basedOnNovel, setBasedOnNovel] = useState(false);//THIS SET IS LEFT
    const [releaseYear, setReleaseYear] = useState('default');
    const [duration, setDuration] = useState('default');

    return(
        <View style={styles.mainContainer}>
            <Header title="(not) IMBD" />
            <View style={styles.content}>
                <View style={styles.flexContainer}>
                    <Text style={{ fontSize: 28, paddingLeft: 10 }}>Advanced Search</Text>
                    <Button
                        title="Back to results"
                        onPress={() => null}
                        style={styles.button}
                    />
                </View>
                {//title input bar
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Title"
                    onChangeText={setTitle}
                />
                {//Starring input bar 
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Starring"
                    onChangeText={setStarring}

                />
                {//Director input bar 
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Director"
                    onChangeText={setDirector}

                />
                {//Genre ADD DROPDOWN LIST + SET THE STATE ON THIS
                }
                <View style={styles.flexContainer}>
                    <Text style={{ fontSize: 22, paddingLeft: 10 }}>Genre:</Text>
                    <View>
                    <Text style = {styles.text}>{genre}</Text>
                        <Picker selectedValue = {genre} onValueChange = {setGenre}>
                        <Picker.Item label = "Steve" value = "Steve" />
                        <Picker.Item label = "Ellen" value = "Ellen" />
                        <Picker.Item label = "Maria" value = "Maria" />
                        </Picker>
                    </View>
                </View>
                {//BASED ON BOOK? ADD STATE
                }
                <View style={styles.flexContainer}>
                    <Text style={{ fontSize: 22, paddingLeft: 10 }}>Based on a book:</Text>
                    <CheckBox></CheckBox>
                </View>
                {//RELEASE TEAR
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Release Year"
                    onChangeText={setReleaseYear}

                />
                {//MOVIE DURATION
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Duration in minutes"
                    onChangeText={setDuration}

                />
                {//RESET AND CONFIRM BUTTONS
                }
                <View style={styles.flexContainer}>
                    <Button
                        title="RESET"
                        onPress={() => null}
                        style={styles.button}
                    />
                    <Button
                        title="CONFIRM"
                        onPress={displayResults(title, starring, director, genre, basedOnNovel, releaseYear, duration)} //Ceci devrai marcher?
                        style={styles.button}
                    />
                </View>
            </View>
        </View>
    );
}

function displayResults(title, starring, director, genre, basedOnNovel, releaseYear, duration)
{
    return null; //this will return the applicable flatlist, we are probably only searching on 1 value at a time from my current understanding of the project

    
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
        width: '45%',
        paddingRight: 400,
        backgroundColor: "#f5e942",
        margin: 10,
    },
    inputBar: {
        backgroundColor: '#DFDFDF',
        fontSize: 18,
        height: 45,
        padding: 10,
        marginVertical: 5,
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
     },
});