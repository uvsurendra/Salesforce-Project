import Field from '@salesforce/schema/AccountHistory.Field';
import { LightningElement, api } from 'lwc';

export default class LWC_008_Eg1_LDS_Record_Edit_Form extends LightningElement 
{
    @api recordId;
     
    cancelme(event)
    {

        const inputFields = this.template.querySelectorAll('lightning-input-field');
        inputFields.forEach(Field=>{Field.reset();});
    }
    submitme(event){
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        inputFields.forEach(Field=>{Field.reset();});
    }

}   