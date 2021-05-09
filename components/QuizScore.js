import {
    StyleSheet, Text, View, TextInput, Button,
    SafeAreaView, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

// initialize database
const db = SQLite.openDatabase('Highscoresds.db');

const QuizScore = () => {
    const [title, setTitle] = useState('');
    const [scoreArray, setScoreArray] = useState([]);

    useEffect(() => {
        //create sql table
        db.transaction(tx => {
            tx.executeSql('create table if not exists item (id integer primary key not null, title text);');
        }, null, updateList);
    }, []);

    // save score to database
    const saveScore = () => {
        db.transaction(tx => {
            tx.executeSql('insert into item (title) values (?);',
                [title]);
        }, null, updateList
        )
    }

    // 
    const deleteScore = (id) => {
        db.transaction(tx => {
            tx.executeSql('delete from item where id = ?;', [id]);
        }, null, updateList
        )
    }

    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from item;', [], (_, { rows }) =>
                setScoreArray(rows._array)
            );
        });
    }

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder='Score' style={{ marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1 }}
                keyboardType="numeric"
                onChangeText={(title) => setTitle(title)}
                value={title} />
            <Separator />
            <Button onPress={saveScore} title="Save" />
            <Text style={{ marginTop: 30, fontSize: 20 }}>Highscores</Text>
            <Separator />
            <FlatList
                style={{ marginLeft: "5%" }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.listcontainer}>
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, color: '#0000ff' }} onPress={() => deleteScore(item.id)}> delete score </Text>
                    </View>
                }
                data={scoreArray}
                ItemSeparatorComponent={Separator}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listcontainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default QuizScore;