import { LightningElement } from 'lwc';

export default class LWC_0100_eg3_mySecondLWCComponent extends LightningElement {
    name = 'U Venkata Surendra  ';

    callme(event){

        this.name='Capital Info Solutions'
        
    }
    listenName(event){
        this.name = event.target.value;
    }
}