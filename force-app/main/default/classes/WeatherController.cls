public with sharing class WeatherController {
    @AuraEnabled(cacheable=true)
    public static String getWeatherData(String cityName) {
        // Dummy response: Replace this with actual API call logic
        return 'Weather data for ' + cityName;
    }
}