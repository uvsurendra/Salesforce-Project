 import { LightningElement } from 'lwc';

export default class LWC_016_eg1_Lwcevent_declaratively extends LightningElement 
{


    inchandle(event){

         //Create event
         const inc = new CustomEvent('increase');
         
         //Dispatch event
         this.dispatchEvent(inc);
    
    }
    dechandle(event){

        //Create event
        this.dispatchEvent(new CustomEvent('decrease'));


    }
    

}