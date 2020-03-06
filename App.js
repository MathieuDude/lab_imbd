import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, TextInput, CheckBox, DatePickerAndroid } from 'react-native';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import FilmItem from './components/FilmItem';
import InputBar from './components/InputBar';
import Select from 'react-select';

export default function App() {
    // const fetchUrl = 'https://movies-420kcg-lg.herokuapp.com';
    // let promise = fetch(fetchUrl);

    let movies = [{ "title": "The matrix", "director": "Lana & Lilly Wachowski", "genre": ["Cyberpunk", "Science-fiction"], "basedOnNovel": false, "releaseYear": 1999, "duration": 136, "staring": ["Keanu Reeves", "Laurence Fishburne", "Hugo Weaving", "Joe Pantoliano"] }, { "title": "V for Vendetta", "director": "James McTeigue", "genre": ["Anticipation", "Thriller", "Science-fiction"], "basedOnNovel": true, "releaseYear": 2006, "duration": 132, "staring": ["Natalie Portman", "Hugo Weaving", "Stephen Rea", "John Hurt"] }, { "title": "Fight club", "director": "David Fincher", "genre": ["Drama", "Thriller"], "basedOnNovel": true, "releaseYear": 1999, "duration": 139, "staring": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter", "Meat Loaf Aday", "Jared Leto"] }, { "title": "The Social Network", "director": "David Fincher", "genre": ["Bio", "Drama"], "basedOnNovel": false, "releaseYear": 2010, "duration": 120, "staring": ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake", "Armie Hammer", "Max Minghella"] }, { "title": "Le grand bleu", "director": "Luc Besson", "genre": ["Drama", "Lovestory"], "basedOnNovel": false, "releaseYear": 1988, "duration": 168, "staring": ["Rosanna Arquette", "Jean-Marc Barr", "Jean Reno", "Paul Shenar", "Sergio Castellitto", "Marc Duret", "Griffin Dunne"] }, { "title": "A Clockwork Orange", "director": "Stanley Kubrick", "genre": ["Dystopie", "Crime"], "basedOnNovel": true, "releaseYear": 1972, "duration": 136, "staring": ["Malcolm McDowell", "Patrick Magee", "Adrienne Corri", "Miriam Karlin"] }, { "title": "The Silence of the Lambs", "director": "Jonathan Demme", "genre": ["Psychological", "Horror"], "basedOnNovel": true, "releaseYear": 1991, "duration": 118, "staring": ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"] }, { "title": "The Beat That My Heart Skipped", "director": "Jacques Audiard", "genre": ["Drama"], "basedOnNovel": false, "releaseYear": 2005, "duration": 107, "staring": ["Romain Duris", "Niels Arestrup", "Jonathan Zaccaï", "Gilles Cohen", "Linh Dan Pham", "Aure Atika", "Emmanuelle Devos", "Melanie Laurent"] }, { "title": "The Moustache", "director": "Emmanuel Carrère", "genre": ["Drama", "Mystery"], "basedOnNovel": true, "releaseYear": 2005, "duration": 87, "staring": ["Vincent Lindon"] }, { "title": "Ocean's Eleven", "director": "Steven Soderbergh", "genre": ["Heist"], "basedOnNovel": false, "releaseYear": 2001, "duration": 117, "staring": ["George Clooney", "Matt Damon", "Andy García", "Brad Pitt", "Julia Roberts"] }, { "title": "The Martian", "director": "Ridley Scott", "genre": ["Science-fiction"], "basedOnNovel": true, "releaseYear": 2015, "duration": 141, "staring": ["Matt Damon", "Jessica Chastain", "Kristen Wiig", "Jeff Daniels", "Michael Peña", "Kate Mara", "Sean Bean", "Sebastian Stan", "Aksel Hennie", "Benedict Wong", "Donald Glover", "Chiwetel Ejiofor"] }, { "title": "Cool Runnings", "director": "Jon Turteltaub", "genre": ["Comedy", "Sport"], "basedOnNovel": false, "releaseYear": 1993, "duration": 98, "staring": ["Leon Robinson", "Doug E. Doug", "Rawle D. Lewis", "Malik Yoba", "John Candy"] }, { "title": "No Country for Old Men", "director": "Joel & Ethan Coen", "genre": ["Neo-western", "Crime", "Thriller"], "basedOnNovel": true, "releaseYear": 2007, "duration": 122, "staring": ["Tommy Lee Jones", "Javier Bardem", "Josh Brolin"] }, { "title": "A Prophet", "director": "Jacques Audiard", "genre": ["Prison", "Drama", "Crime"], "basedOnNovel": false, "releaseYear": 2009, "duration": 155, "staring": ["Tahar Rahim", "Niels Arestrup", "Adel Bencherif"] }, { "title": "Black Swan", "director": "Darren Aronofsky", "genre": ["Psycology", "Drama"], "basedOnNovel": true, "releaseYear": 2010, "duration": 108, "staring": ["Natalie Portman", "Vincent Cassel", "Mila Kunis", "Barbara Hershey", "Winona Ryder"] }, { "title": "Eastern Promises", "director": "David Cronenberg", "genre": ["Gangster", "Drama"], "basedOnNovel": false, "releaseYear": 2007, "duration": 101, "staring": ["Viggo Mortensen", "Naomi Watts", "Vincent Cassel", "Sinéad Cusack", "Armin Mueller-Stahl"] }, { "title": "Ali", "director": "Michael Mann", "genre": ["Bio", "Drama", "Sport"], "basedOnNovel": false, "releaseYear": 2001, "duration": 157, "staring": ["Will Smith", "Jamie Foxx", "Jon Voight", "Mario Van Peebles", "Ron Silver", "Jeffrey Wright", "Mykelti Williamson"] }, { "title": "What's in a Name?", "director": "Alexandre de La Patellière et Matthieu Delaporte", "genre": ["Comedy"], "basedOnNovel": false, "releaseYear": 2012, "duration": 109, "staring": ["Patrick Bruel", "Valérie Benguigui", "Charles Berling", "Judith El Zein", "Guillaume de Tonquédec"] }, { "title": "La La Land", "director": "Alexandre de La Patellière et Matthieu Delaporte", "genre": ["Comedy"], "basedOnNovel": false, "releaseYear": 2012, "duration": 109, "staring": ["Patrick Bruel", "Valérie Benguigui", "Charles Berling", "Judith El Zein", "Guillaume de Tonquédec"] }, { "title": "Once Upon a Time in Hollywood", "director": "Damien Chazelle", "genre": ["Romatic", "Musical"], "basedOnNovel": false, "releaseYear": 2016, "duration": 128, "staring": ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"] }, { "title": "Santa Claus Is a Stinker", "director": "Jean-Marie Poiré", "genre": ["Comedy"], "basedOnNovel": false, "releaseYear": 1982, "duration": 128, "staring": ["Anémone", "Josiane Balasko", "Marie-Anne Chazel", "Christian Clavier", "Gérard Jugnot", "Thierry Lhermitte", "Bruno Moynot"] }, { "title": "The Santa Clause", "director": "John Pasquin", "genre": ["Christmas", "Fantasy", "Family", "Drama", "Comedy"], "basedOnNovel": false, "releaseYear": 1994, "duration": 97, "staring": ["Tim Allen", "Judge Reinhold", "Wendy Crewson", "David Krumholtz", "Peter Boyle"] }, { "title": "Home Alone", "director": "Chris Columbus", "genre": ["Comedy"], "basedOnNovel": false, "releaseYear": 1990, "duration": 103, "staring": ["Macaulay Culkin", "Joe Pesci", "Daniel Stern", "John Heard", "Catherine O'Hara"] }, { "title": "Honey, I Shrunk the Kids", "director": "Joe Johnston", "genre": ["Comedy", "Science-Fiction"], "basedOnNovel": false, "releaseYear": 1989, "duration": 101, "staring": ["Rick Moranis", "Matt Frewer", "Marcia Strassman", "Kristine Sutherland"] }, { "title": "Beethoven", "director": "Brian Levant", "genre": ["Comedy", "Family"], "basedOnNovel": false, "releaseYear": 1992, "duration": 87, "staring": ["Charles Grodin", "Bonnie Hunt", "Dean Jones", "Oliver Platt", "Stanley Tucci"] }, { "title": "Stuart Little", "director": "Rob Minkoff", "genre": ["Comedy", "Family", "Live-action"], "basedOnNovel": true, "releaseYear": 1999, "duration": 84, "staring": ["Geena Davis", "Hugh Laurie", "Jonathan Lipnicki"] }, { "title": "Jumanji", "director": "Joe Johnston", "genre": ["Comedy", "Fantasy", "Adventure"], "basedOnNovel": false, "releaseYear": 1995, "duration": 104, "staring": ["Robin Williams", "Kirsten Dunst", "David Alan Grier", "Bonnie Hunt", "Jonathan Hyde", "Bebe Neuwirth"] }, { "title": "Mrs. Doubtfire", "director": "Chris Columbus", "genre": ["Comedy", "Drama"], "basedOnNovel": true, "releaseYear": 1993, "duration": 120, "staring": ["Robin Williams", "Sally Field", "Pierce Brosnan", "Harvey Fierstein", "Robert Prosky"] }, { "title": "Braveheart", "director": "Mel Gibson", "genre": ["Epic", "War"], "basedOnNovel": false, "releaseYear": 1995, "duration": 178, "staring": ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan", "Catherine McCormack"] }, { "title": "Green Street Hooligans", "director": "Lexi Alexander", "genre": ["Sport", "Drama"], "basedOnNovel": false, "releaseYear": 2005, "duration": 109, "staring": ["Elijah Wood", "Charlie Hunnam", "Claire Forlani", "Leo Gregory"] }, { "title": "The Girl with the Dragon Tattoo", "director": "Niels Arden Oplev", "genre": ["Crime", "Thriller"], "basedOnNovel": false, "releaseYear": 2009, "duration": 153, "staring": ["Michael Nyqvist", "Noomi Rapace"] }, { "title": "The Clink of Ice", "director": "Bertrand Blier", "genre": ["Comedy", "Black"], "basedOnNovel": false, "releaseYear": 2010, "duration": 87, "staring": ["Jean Dujardin", "Albert Dupontel"] }];

    //this is how you use states in functions I guess
    const [title, setTitle] = useState('test');
    const [starring, setStarring] = useState(null);
    const [director, setDirector] = useState(null);
    const [genre, setGenre] = useState(null);
    const [basedOnNovel, setBasedOnNovel] = useState(null);
    const [releaseYear, setReleaseYear] = useState(null);
    const [duration, setDuration] = useState(null);

    return (
        //Search Dialog
        <View style={styles.mainContainer}>
            <Header title="(not) IMBD"/>
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
                    value={title.value}
                />
                {//Starring input bar 
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Starring"
                    //onChangeText={(txtInput) => props.onChangeText(txtInput)}
                    //value={props.txtInput}
                />
                {//Director input bar 
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Director"
                    //onChangeText={(txtInput) => props.onChangeText(txtInput)}
                    //value={props.txtInput}
                />
                {//Genre
                }
                <View style={styles.flexContainer}>
                    <Text style={{ fontSize: 22, paddingLeft: 10 }}>Genre:</Text>
                </View>
                {//BASED ON BOOK?
                }
                <View style={styles.flexContainer}>
                    <Text style={{ fontSize: 22, paddingLeft: 10 }}>Based on a book:</Text>
                    <CheckBox></CheckBox>
                </View>
                {//RELEASE DATE PROBABLY NEEDS TO BE A DATE PICKER
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Release Date"
                    //onChangeText={(txtInput) => props.onChangeText(txtInput)}
                    //value={props.txtInput}
                />
                {//MOVIE DURATION
                }
                <TextInput
                    style={styles.inputBar}
                    placeholder="Duration"
                    //onChangeText={(txtInput) => props.onChangeText(txtInput)}
                    //value={props.txtInput}
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
                        onPress={displayResults()}
                        style={styles.button}
                    />
                </View>
            </View>
        </View>
    );

    function displayResults(title, starring, director, genre, basedOnNovel, releaseYear, duration)
    {
        return null; //this will return the applicable flatlist, we are probably only searching on 1 value at a time from my current understanding of the project

        
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center',
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
    mainContainer: {
        

    },
    content: {
        padding:10,

    },

});