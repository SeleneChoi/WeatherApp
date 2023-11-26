export default function getProperIcon(iconCode) {

    switch (iconCode) {
        case '01d':
            return require('../assets/icons/clearday.png');
        case '01n':
            return require('../assets/icons/clearnight.png');
        case '02d':
            return require('../assets/icons/fewcloudsday.png');
        case '02n':
            return require('../assets/icons/fewcloudsnight.png');
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return require('../assets/icons/scatteredclouds.png');
        case '09d':
        case '10d':
            return require('../assets/icons/rainday.png');
        case '09n':
        case '10n':
            return require('../assets/icons/rainnight.png');
        case '11d':
        case '11n':
            return require('../assets/icons/thunderstorm.png');
        case '13d':
        case '13n':
            return require('../assets/icons/snow.png');
        case '50d':
        case '50n':
            return require('../assets/icons/mist.png');

        default:
            return require('../assets/icons/clearday.png');
    }
}
