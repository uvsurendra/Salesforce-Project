import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class LWC_010_eg1_LWCLDS_Imp_Create extends LightningElement {
    @track name;
    @track phone;
    @track fax;
     @track industry;
    // @track sicCode;

    callNm(event) {
        this.name = event.target.value;
    }

    callph(event) {
        this.phone = event.target.value;
    }

    callFx(event) {
        this.fax = event.target.value;
    }

    callInd(event) {
        this.industry = event.target.value;
    }
    // callSIC(event){
    //     this.sicCode = event.target.value;
    // }

    callMe() {
        const fields = {
            Name: this.name,
            Phone: this.phone,
            Fax: this.fax,
            Industry: this.industry,
           // SIC__c: this.sicCode,
            BillingStreet: 'Default Street',  // Adding required field
            //SIC__c: '1234',  // Adding required SIC Code
            AccountNumber: '000001'  // Adding required Account Number
        };

        const recordData = { apiName: 'Account', fields };

        createRecord(recordData)
            .then((record) => {
                console.log('Account created with Id:', record.id);
                alert('Account created successfully! : ' +  record.id);
            })
            .catch((error) => {
                console.error('Error creating account:', error);
                alert('Error creating account: ' + JSON.stringify(error.body));
            });
            
    }
}
