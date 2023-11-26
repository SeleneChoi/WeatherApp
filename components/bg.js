export default function getProperBg(iconCode) {

    switch (iconCode) {
        case '01d':
            return ["rgba(61,208,255, 1)", "rgba(61,150,255, 0.8)"];
        case '01n':
            return ["rgba(146,61,255, 0.75)", "rgba(255, 61, 61, 0.40)"];
        case '02d':
        case '03d':
        case '04d':
            return ["rgba(108,181,205, 0.75)", "rgba(37, 28, 13, 0.75)"];
        case '02n':
        case '03n':
        case '04n':
            return ["rgba(146,61,255, 0.8)", "rgba(37, 28, 13, 0.9)"];
        case '09d':
        case '10d':
        case '09n':
        case '10n':
        case '11d':
        case '11n':
            return ["rgba(0, 0, 0, 0.65)", "rgba(4, 50, 80, 0.8)"];
        case '13d':
        case '13n':
            return ["rgba(190,61,255, 0.75)", "rgba(61,150,255, 0.75)"];
        case '50d':
        case '50n':
            return ["rgba(100, 100, 150, 0.65)", "rgba(100, 100, 100, 1)"];
        default:
            return ["rgba(61,208,255, 1)", "rgba(61,150,255, 0.8)"];
    }
}
