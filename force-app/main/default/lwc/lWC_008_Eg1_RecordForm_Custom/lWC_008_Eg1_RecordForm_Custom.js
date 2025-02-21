import { api, LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import IND_FIELD from '@salesforce/schema/Account.Industry';
import RAT_FIELD from '@salesforce/schema/Account.Rating';
import BC_FIELD from '@salesforce/schema/Account.BillingCity';
import ACC_NUM from '@salesforce/schema/Account.AccountNumber';
import SIC_Num from '@salesforce/schema/Account.Sic';
import Billing_Street from '@salesforce/schema/Account.BillingStreet';
import Billing_City from '@salesforce/schema/Account.BillingCity';
import Billing_Postal from '@salesforce/schema/Account.BillingPostalCode';

export default class LWC_008_Eg1_RecordForm_Custom extends LightningElement 
{

    @api recordId;

    objectnm = ACCOUNT_OBJECT;

    myfields =[NAME_FIELD,PHONE_FIELD,FAX_FIELD,IND_FIELD,RAT_FIELD,BC_FIELD,ACC_NUM,SIC_Num,Billing_Street,Billing_City,Billing_Postal];

    handleInputChange(event) {
        const field = event.target.name;
        let value = event.target.value;

        if (field === 'Phone') {
            value = value.replace(/\D/g, ''); // Allow only numeric values
        }

        if (value.length > 15) {
            value = value.substring(0, 15); // Restrict to 15 characters
        }

        event.target.value = value;
    }

}