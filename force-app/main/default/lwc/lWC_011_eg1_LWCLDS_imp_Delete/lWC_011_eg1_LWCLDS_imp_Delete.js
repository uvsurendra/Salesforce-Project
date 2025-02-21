import { api, LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

export default class LWC_011_eg1_LWCLDS_imp_Delete extends LightningElement 
{

    @api recordID;

    deleteMe(event){

        deleteRecord(this.recordID).then((record)=>{ 
            this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        });}).catch(error=>{} );
 

    }
}