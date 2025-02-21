import { LightningElement } from 'lwc';

export default class LWC_019_eg1_lwcevent_programetically extends LightningElement 
{

    fireme(event)
    {
        this.dispatchEvent(new CustomEvent('Pevent',{detail:'Hi Surendra'}));
         
    }
}