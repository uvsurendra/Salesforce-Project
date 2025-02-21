import { LightningElement, track, wire } from 'lwc';
import findContacts from '@salesforce/apex/cl_002_eg1_Wire.findContacts';

export default class LWC_eg1_WireaFunction_OR_Property extends LightningElement {

    @track searchKey = '';
    @track rupData;
    @track rupError;



    handleOnChange(event) {
        this.searchKey = event.target.value;
    }

    //Wire a Property
     @wire(findContacts, { searchText: '$searchKey' }) contact;

    //Wire a Function 

    @wire(findContacts, { searchText: '$searchKey' }) contactf({ error, data }) 
    {
        if(data)
        {
            this.rupData =data;

        }
        else{

            this.rupError =error;
            this.rupData = undefined
        }


    };


}