import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { ActivityIndicator } from 'react-native-paper'

const API_URL = 'https://opentdb.com/api.php?amount=1&difficulty=hard&type=multiple'

const QuizGame = () => {
    const [questions, setQuestions] = useState([]);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [score, setScore] = useState(0);
    /* const [index, setIndex] = useState(0); */

    const Separator = () => (
        <View style={styles.separator} />
    );

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.results)
            })
            .catch((error) => {
                Alert.alert('Error', error.message)
            });
    }
    /*const shuffleAnswers = [correct_answer, ...incorrect_answers].sort(
        () => Math.random() - 0.5
        ) */

    const nextQuestion = () => {
        wrongAnswers < 5 ? (
            getQuestions()
        ) : (
            Alert.alert(`Game over. Your score was ${score}`)
        )
    }
    const correctAnswer = () => {
        Alert.alert('Your answer "' + questions[0].correct_answer + '" was correct')
        setRightAnswers(rightAnswers + 1);
        setScore(score + 1);
        nextQuestion()
        /* setIndex(index + 1); */
    }
    const wrongAnswer1 = () => {
        Alert.alert('Your answer "' + questions[0].incorrect_answers[0] + '" was wrong')
        setWrongAnswers(wrongAnswers + 1);
        setScore(score - 1);
        nextQuestion()
        /* setIndex(index + 1); */
    }
    const wrongAnswer2 = () => {
        Alert.alert('Your answer "' + questions[0].incorrect_answers[1] + '" was wrong')
        setWrongAnswers(wrongAnswers + 1);
        setScore(score - 1);
        nextQuestion()
        /* setIndex(index + 1); */
    }
    const wrongAnswer3 = () => {
        Alert.alert('Your answer "' + questions[0].incorrect_answers[2] + '" was wrong')
        setWrongAnswers(wrongAnswers + 1);
        setScore(score - 1);
        nextQuestion()
        /* setIndex(index + 1); */
    }
    const playAgain = () => {
        setRightAnswers(rightAnswers === 0);
        setWrongAnswers(wrongAnswers === 0);
        setScore(score === 0);
        getQuestions();
    }

    const arr = [wrongAnswer1, wrongAnswer2, wrongAnswer3, correctAnswer]
    arr.sort(() => Math.random() - 0.5
    )

    return questions.length > 0 ? (
        <SafeAreaView style={styles.container}>
            <View>

            </View>
            <HTMLView
                style={styles.question}
                value={questions[0].question}
            /*  value={questions[index].question} */
            />

            <View style={styles.buttons}>
                <Button
                    title={questions[0].correct_answer}
                    onPress={correctAnswer}
                />
                <Separator />
                <Button
                    title={questions[0].incorrect_answers[0]}
                    onPress={wrongAnswer1}
                />
                <Separator />
                <Button
                    title={questions[0].incorrect_answers[1]}
                    onPress={wrongAnswer2}
                />
                <Separator />
                <Button
                    title={questions[0].incorrect_answers[2]}
                    onPress={wrongAnswer3}
                />
            </View>
            <Text style={styles.play}>
                <Button title='Play again' onPress={playAgain} />
            </Text>
            <Text style={styles.score}>
                Your score is {score}
            </Text>
            <Separator />
            <Text style={styles.score}>
                Right answers: {rightAnswers}
            </Text>
            <Separator />
            <Text style={styles.score}>
                Wrong answers: {wrongAnswers}
            </Text>
        </SafeAreaView>
    ) : (
        <SafeAreaView style={styles.loading}>
            <ActivityIndicator animating={true} color={'#00ADEF'} size={'large'} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    question: {
        width: '75%',
        marginTop: '5%',
        marginLeft: '11%',
        marginBottom: '5%'
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons: {
        textAlign: 'center',
        width: '55%',
        marginLeft: '22%'

    },
    play: {
        textAlign: 'center',
        marginBottom: '5%',
        marginTop: '10%'

    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default QuizGame;