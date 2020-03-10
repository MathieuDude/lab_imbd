import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker, CheckBox, Button } from 'react-native';
import Header from './Header.js';
import FilmItem from './FilmItem.js';

const SearchForm = (props) => {
    //this is how you use states in functions I guess
    //hooks allow you to use states without writing a class
    
    const [title, setTitle] = useState();
    const [starring, setStarring] = useState();
    const [director, setDirector] = useState();
    const [genre, setGenre] = useState(); //THIS SET IS LEFT
    const [basedOnNovel, setBasedOnNovel] = useState(false);//THIS SET IS LEFT
    const [releaseYear, setReleaseYear] = useState();
    const [duration, setDuration] = useState();

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
                        <Picker style={styles.pickerStyle} selectedValue = {genre} onValueChange = {setGenre}>
                            <Picker.Item label="None" value="none" />
                            <Picker.Item label="Adventure" value="Adventure" />
                            <Picker.Item label="Anticipation" value="Anticipation" />
                            <Picker.Item label="Bio" value="Bio" />
                            <Picker.Item label="Black" value="Black" />
                            <Picker.Item label="Christmas" value="Christmas" />
                            <Picker.Item label="Comedy" value="Comedy" />
                            <Picker.Item label="Crime" value="Crime" />
                            <Picker.Item label="Cyberpunk" value="Cyberpunk" />
                            <Picker.Item label="Drama" value="Drama" />
                            <Picker.Item label="Dystopie" value="Dystopie" />
                            <Picker.Item label="Epic" value="Epic" />
                            <Picker.Item label="Family" value="Family" />
                            <Picker.Item label="Fantasy" value="Fantasy" />
                            <Picker.Item label="Gangster" value="Gangster" />
                            <Picker.Item label="Heist" value="Heist" />
                            <Picker.Item label="Horror" value="Horror" />
                            <Picker.Item label="Live-action" value="Live-action" />
                            <Picker.Item label="Lovestory" value="Lovestory" />
                            <Picker.Item label="Mystery" value="Mystery" />
                            <Picker.Item label="Neo-western" value="Neo-western" />
                            <Picker.Item label="Prison" value="Prison" />
                            <Picker.Item label="Psychological" value="Psychological" />
                            <Picker.Item label="Romatic" value="Romatic" />
                            <Picker.Item label="Science-fiction" value="Science-fiction" />
                            <Picker.Item label="Sport" value="Sport" />
                            <Picker.Item label="War" value="War" />
                        </Picker>
                    </View>
                </View>
                {//BASED ON BOOK? ADD STATE
                }
                <View style={styles.flexContainer}>
                    <Text style={{ fontSize: 22, paddingLeft: 10 }}>Based on a book:</Text>
                    <CheckBox
                     value={basedOnNovel}
                     onValueChange={setBasedOnNovel}/>
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
                        //onPress={displayResults} //Ceci devrai marcher?
                        style={styles.button}
                    />
                </View>
            </View>
        </View>
    );
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