import { LightningElement, api, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getWeatherData from '@salesforce/apex/WeatherController.getWeatherData';

export default class WeatherAPI extends LightningElement {

    @track city = '';

    handleCityChange(event) {

        this.city = event.target.value;
    }

    handleGenerateClick() {
        getWeatherData({ cityName: this.city })
            .then(result => {
                this.showToast('Success', 'Weather data fetched successfully!', 'success');
                console.log('Weather Data:', result);
            })
            .catch(error => {
                this.showToast('Error', 'Failed to fetch weather data', 'error');
                console.error('Error:', error);
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                title,
                message,
                variant
            })
        );
    }
}