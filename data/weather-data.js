// return all CITYDATA
export function getAllCities(){
    return CITYDATA;
}

// for this function(method), return item only when id of item matches the id that's on the other file(cityWeatherScreen, HomeScreen in this case)
export function getCityById(id){
    return CITYDATA.find(item => item.id ===id);
}

export const CITYDATA = [
    {
        id: '001',
        title: 'Vancouver',
        time: 'Sat 5:47PM',
        icon: '🌧',
        weather: 'Rainy',
        currentDegree: '7',
        lowest: '2',
        highest: '13',
        gradient: ["rgba(123,163,175, 1)", "rgba(61, 208, 255, 0.24)"],
        week_icon:'🌧',
        week_lowest:'5',
        week_highest:'17',
    },
    {
        id: '002',
        title: 'Seoul',
        time: 'Sun 9:47PM',
        icon: '☀️',
        weather: 'Sunny',
        currentDegree: '15',
        lowest: '5',
        highest: '20',
        gradient: ["rgba(61,208,255, 1)", "rgba(61, 208, 255, 0.24)"],
        week_icon:'☀️',
        week_lowest:'7',
        week_highest:'17',

    },    {
        id: '003',
        title: 'London',
        time: 'Sat 8:47PM',
        icon: '❄️',
        weather: 'Snowy',
        currentDegree: '2',
        lowest: '0',
        highest: '9',
        gradient: ["rgba(146,61,255, 0.75)", "rgba(255, 61, 61, 0.40)"],
        week_icon:'❄️',
        week_lowest:'-2',
        week_highest:'7',

    },
    {
        id: '004',
        title: 'Rome',
        time: 'Sat 5:47PM',
        icon: '❄️',
        weather: 'Snowy',
        currentDegree: '4',
        lowest: '-2',
        highest: '8',
        gradient: ["rgba(146,61,255, 0.75)", "rgba(255, 61, 61, 0.40)"],
        week_icon:'❄️',
        week_lowest:'-2',
        week_highest:'7',

    },
    {
        id: '005',
        title: 'Paris',
        time: 'Sat 5:47PM',
        icon: '☀️',
        weather: 'Sunny',
        currentDegree: '15',
        lowest: '5',
        highest: '20',
        gradient: ["rgba(61,208,255, 1)", "rgba(61, 208, 255, 0.24)"],
        week_icon:'☀️',
        week_lowest:'7',
        week_highest:'17',

    },

];