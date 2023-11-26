import { useEffect, useState } from 'react';

import { TextInput, StyleSheet, View, FlatList, Animated, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, Avatar } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import getProperIcon from '../components/MyIcon';

export default function CityListScreen({ navigation }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);
    const fetchUri = "https://api.openweathermap.org/data/2.5/group?appid=f7c2bc8296afef7ed69acb5b448e836e&id=6173331,1816670,1853909,6455259,3530597,6545158&units=metric";

    useEffect(() => {

        fetch(fetchUri)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setDataResult(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <View style={styles.container}>
            {displayData(error, isLoaded, dataResult, navigation)}
        </View>
    );
}

function displayData(error, isLoaded, dataResult, navigation) {

    if (error) {
        // load error statement
        return (
            <View>
                <Text>
                    there was an error loading your data
                </Text>
            </View>
        );
    }
    else if (!isLoaded) {
        // show spinner
        return (
            <View style={styles.container2}>
                <ActivityIndicator />
                <Text style={styles.loading}>
                    Loading...
                </Text>
            </View>
        );
    }
    else if (dataResult.cnt === undefined || dataResult.cnt <= 0) {
        return (
            <View>
                <Text>
                    NO records found
                </Text>
            </View>
        );
    }
    else {
        const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

        // display the data
        const cityline = ({ item }) => {

            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Weather', {
                        detailId: item.id,
                    })}
                >
                    <AnimatedLinearGradient
                        style={listStyles.container}
                        colors={["rgba(4, 100, 131, 1)", "rgba(5, 5, 5, 0.8)"]}
                    >
                        <Avatar
                            style={listStyles.icon}
                            source={getProperIcon(item.weather[0].icon)}
                        />
                        <View style={listStyles.colB}>
                            <Text style={listStyles.degree}>
                                {Math.round(item.main.temp)}°C
                            </Text>
                        </View>
                        <View style={listStyles.colC}>
                            <Text style={listStyles.text}>
                                {item.name}
                            </Text>
                        </View>
                    </AnimatedLinearGradient>
                </TouchableOpacity>

            );
        }

        return (
            <ScrollView>
                <AnimatedLinearGradient
                    style={styles.container}
                    colors={["rgba(0, 0, 0, 0.8)", "rgba(4, 100, 131, 0.8)"]}
                >
                    <TouchableOpacity
                        style={styles.menuIcon}
                    >
                        <MaterialIcons
                            name="location-on"
                            size={50}
                            color="white"
                            onPress={() => navigation.navigate('Home')}
                        />
                        <MaterialIcons
                            name="add"
                            size={60}
                            color="white"
                        />
                    </TouchableOpacity>

                    <Text style={styles.h1}>
                        Weather
                    </Text>

                    <TextInput
                        style={styles.searchbar}
                        placeholder='search your location'
                        placeholderTextColor='white'
                    />

                    <FlatList
                        data={dataResult.list}
                        renderItem={({ item }) => cityline({ item, navigation })}
                        keyExtractor={(cItem) => cItem.id}
                    />
                </AnimatedLinearGradient >
            </ScrollView>
        );
    }

}

// LISTPAGE STYLE
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        color: 'white',
        paddingTop: 80,
    },
    h1: {
        fontSize: 40,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Cinzel_400Regular'
    },
    menuIcon: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 60,
    },
    searchbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginBottom: 10,
        marginTop: 0,
        marginHorizontal: 10,
        borderRadius: 24,
        backgroundColor: 'rgba(200,200,200,.5)',
        fontFamily: 'JuliusSansOne_400Regular',
        fontSize: 18,
    },
    placeholder: {
        fontSize: 20,
    },
    searchIcon: {
        backgroundColor: "rgb(230,230,230,.5)",
        alignItems: "center",
        paddingTop: 6,
    },
    loading: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Cinzel_400Regular'
    }

});

// FLAT LIST STYLE
const listStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginVertical: 6,
        marginHorizontal: 10,
        borderRadius: 24,
    },
    colA: {
        paddingLeft: 15,
        alignSelf: 'center',
    },
    colB: {
        flexGrow: 1,
        alignSelf: 'center',
        paddingLeft: 20,
    },
    colC: {
        alignSelf: 'center',
        paddingRight: 10
    },
    icon: {
        width: "12%",
    },
    degree: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'Cinzel_400Regular'
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'Cinzel_400Regular'
    },

});

