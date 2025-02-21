import { LightningElement } from 'lwc';

export default class LWC_0602_eg2_myFirtstLWCComponent extends LightningElement {

    name = 'U Venkata Surendra';

    callme(event){

        this.name='Capital Info Solutions'
        
    }
}