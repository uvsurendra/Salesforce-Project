import { LightningElement } from 'lwc';
import LWC_016_eg1_Lwcevent_declaratively from 'c/lWC016Eg1LwceventDeclaratively';

export default class LWC_eg1_017_lwcevent_vlcplayer extends LightningElement 
{

    vol=0;

    handleVolIncraese(event){
        if(this.vol<101){
            this.vol=this.vol+1
        }
    }
    handleVolDecraese(event){
        if(this.vol>0){
            this.vol=this.vol-1
        }
    }

}