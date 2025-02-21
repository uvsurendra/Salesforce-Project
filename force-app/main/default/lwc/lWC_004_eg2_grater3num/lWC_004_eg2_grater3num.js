import { LightningElement, track } from "lwc";

export default class LWC_004_eg2_grater3num extends LightningElement {

    // Num1;
    // Num2;
    // Num3;
    // Result;

    // firstnum(event) {
    //     this.Num1 = event.target.value;
    // }
    // secondtnum(event) {
    //     this.Num2= event.target.value;
    // }
    // thirdnum(event) {
    //     this.Num3= event.target.value;
    // }

    // calculateme(event) {

    //     const a = parseInt(this.Num1);
    //     const b = parseInt(this.Num2);
    //     const c = parseInt(this.Num3);
    //     if (a > b && a > c) {
    //         alert("The grater number is " + a);
    //     } else if (b > a && b > c) {
    //         alert("The grater number is " + b);
    //     } else {
    //         alert("The grater number is " + c);
    //     }


    // }
    // clearme(event) { 

    //     this.Num1= '';
    //     this.Num2= '';
    //     this.Num3= '';
    // }

    @track Num1 = "";
    @track Num2 = "";
    @track Num3 = "";
    @track Result = "";

    firstnum(event) {
        this.Num1 = Number(event.target.value); // Store as a number
    }

    secondtnum(event) {
        this.Num2 = Number(event.target.value);
    }

    thirdnum(event) {
        this.Num3 = Number(event.target.value);
    }

    calculateme() {
        const a = this.Num1;
        const b = this.Num2;
        const c = this.Num3;

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            this.Result = "Please enter valid numbers.";
            return;
        }
       

        this.Result = Math.max(a, b, c);
    }

    clearme() {
        this.Num1 = "";
        this.Num2 = "";
        this.Num3 = "";
        this.Result = "";

        this.template.querySelectorAll("lightning-input").forEach((input) => {
            input.value = "";
        });
    }
}
