import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const FilmItem = (props) => {
    return(
        <View style={styles.todoItem}>
            <Text>
                {
                    props.title + " was released in " + props.releaseYear + " created by " + props.director + "\n" + ". It is a " + props.genre + "movie." + "\n" +
                    "This movie last " + props.duration + " minutes and stars " + props.starring
                }
            </Text>
            

        </View>
    );

}

const styles = StyleSheet.create({
    text: {


    }
})

export default FilmItem;