import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

import QuizScore from './QuizScore'
import QuizGame from './QuizGame'

const StartGame = () => {

    // create bottom navbar
    const Tab = createBottomTabNavigator()

    return (
        // navbar configuration
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    if (route.name === 'Play') {
                        return <FontAwesome name="gamepad" size={24} color="black" />

                    } else if (route.name === 'Highscores') {
                        return <SimpleLineIcons name="notebook" size={24} color="black" />
                    }
                },
            })}>
            <Tab.Screen title="QuizGame" name="Play" component={QuizGame} />
            <Tab.Screen title="QuizScore" name="Highscores" component={QuizScore} />
        </Tab.Navigator>
    );
}

export default StartGame;