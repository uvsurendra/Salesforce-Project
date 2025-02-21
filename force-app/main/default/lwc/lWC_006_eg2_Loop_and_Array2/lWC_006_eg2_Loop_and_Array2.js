import { LightningElement, track } from 'lwc';

export default class LWC_006_eg2_Loop_and_Array2 extends LightningElement {

 evnnum =[2,8,10,18,4,12,6,14,20,16];
 student ={'Name':'Surendra','Age':26,'City':'Hyderabad','Salary':90000.00}

   @track students = [

        {'Name':'Surendra','Age':26,'City':'Hyderabad','Salary':90000.00},
        {'Name':'Jhon William','Age':26,'City':'USA','Salary':35000.00},
        {'Name':'Virat Kholi','Age':32,'City':'Banglore','Salary':55000.00},
        {'Name':'Hardik Pandya','Age':30,'City':'Mumbai','Salary':60000.00},
        {'Name':'Pat cummins','Age':34,'City':'Aus','Salary':80000.00}

    ];


}