import { LightningElement, track, wire } from 'lwc';
import findContacts from '@salesforce/apex/cl_002_eg1_Wire.findContacts';

const colum =[
    { label: "Name", fieldName: "Name", type: "text",editable:true},
    { label: "Phone", fieldName: "Phone", type: "phone",editable:true },
    { label: "Email", fieldName: "Email", type: "email",editable:true}
]

export default class LWC_015_eg2_LWCLDS_Wire extends LightningElement 
{
     @track col = colum;
     @track searchKey = '';
     @wire(findContacts, { searchText: '$searchKey' }) contact;

    handleOnChange(event) {
        this.searchKey = event.target.value;
    }


    
}