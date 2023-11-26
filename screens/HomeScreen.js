import { useEffect, useState } from 'react';

import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Cinzel_400Regular, Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import { JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';

import { Text, Avatar } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import getProperIcon from '../components/MyIcon';
import getProperBg from '../components/bg';

export default function HomeScreen({ navigation }) {

    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currCity, setCurrCity] = useState(null);
    const detailId = 6173331;
    const fetchUri = `https://api.openweathermap.org/data/2.5/weather?id=${detailId}&appid=f7c2bc8296afef7ed69acb5b448e836e&units=metric`;

    // Use google font package
    const [fontsLoaded] = useFonts({
        Cinzel_400Regular, Cinzel_700Bold, JuliusSansOne_400Regular
    });

    useEffect(() => {

        fetch(fetchUri)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCurrCity(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (!fontsLoaded, !isLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.loading}>
                    Loading...
                </Text>
            </View>
        );
    }
    else if (error) {
        return (
            <View>
                <Text>
                    there was an error loading your data
                </Text>
            </View>
        );
    }
    else if (!currCity) {
        return null;
    }
    else {
        // example for local icons
        // source={require('../assets/icons/' + currCity.weather[0].icon + '@2x.png')}

        return (
            <AnimatedLinearGradient
                style={styles.container}
                colors={getProperBg(currCity.weather[0].icon)}
            >

                <TouchableOpacity
                    onPress={() => navigation.navigate('City')}
                    style={styles.menuIcon}
                >
                    <MaterialIcons
                        name="menu"
                        size={50}
                        color="white"
                    />
                </TouchableOpacity>

                {/* Current weather */}
                <View>
                    <Text style={styles.h1}>
                        My Location
                    </Text>
                    <Text style={styles.time}>
                        {currCity.name}
                    </Text>
                    <View style={styles.main}>
                        <Avatar
                            style={styles.icon}
                            source={getProperIcon(currCity.weather[0].icon)}
                        />
                        <Text style={styles.h2}>
                            {currCity.weather[0].main}
                        </Text>
                    </View>
                    <Text style={styles.h3}>
                        {Math.round(currCity.main.temp)}°c
                    </Text>
                    <Text style={styles.h4}>
                        {Math.round(currCity.main.temp_min)}°c / {Math.round(currCity.main.temp_max)}°c
                    </Text>
                </View>
                <View style={styles.add}>
                    <View style={styles.box}>
                        <FontAwesomeIcon
                            name="tint"
                            size={40}
                            color="white"
                        />
                        <Text style={styles.h5}>
                            {currCity.main.humidity}%
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesomeIcon
                            name="wind"
                            size={40}
                            color="white"
                        />
                        <Text style={styles.h5}>
                            {currCity.wind.speed}km/h
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesomeIcon
                            name="thermometer-half"
                            size={40}
                            color="white"
                        />
                        <Text style={styles.h5}>
                            {currCity.main.feels_like}°C
                        </Text>
                    </View>

                </View>

            </AnimatedLinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        paddingTop: 40,
    },
    menuIcon: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 20,
    },
    h1: {
        fontSize: 40,
        marginTop: 30,
        marginBottom: 0,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular',
    },
    time: {
        fontSize: 24,
        marginTop: 5,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular',
    },
    h2: {
        fontSize: 34,
        marginTop: 20,
        marginBottom: 0,
        marginHorizontal: 10,
        paddingBottom: 15,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular',
    },
    icon: {
        width: "20%",
    },
    h3: {
        fontSize: 70,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular',
    },
    h4: {
        fontSize: 28,
        marginTop: 0,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular',
    },
    main: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    add: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    box: {
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h5: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular',
    },
});
