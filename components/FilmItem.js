import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const FilmItem = (props) => {
    return(
        <View style={styles.todoItem}>
            <Text></Text>
            

        </View>
    );

}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingTop: 5
    },

})

export default FilmItem;
