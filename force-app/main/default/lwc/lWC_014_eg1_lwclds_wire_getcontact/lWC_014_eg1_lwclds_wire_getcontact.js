import { LightningElement, track, wire } from "lwc";
import getContactList from "@salesforce/apex/cl_001_eg2_getcontact_wire.getContactList";
import getAccountList from "@salesforce/apex/cl_001_eg2_getcontact_wire.getAccountList";
import { updateRecord } from "lightning/uiRecordApi";
import FirstName from "@salesforce/schema/Contact.FirstName";
import LastName from "@salesforce/schema/Contact.LastName";
import Phone from "@salesforce/schema/Contact.Phone";
import Email from "@salesforce/schema/Contact.Email";
import Id from "@salesforce/schema/Contact.Id";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";

const colm = [

    { label: "First Name", fieldName: "FirstName", type: "text", editable: true },
    { label: "Last Name", fieldName: "LastName", type: "text", editable: true },
    { label: "Phone", fieldName: "Phone", type: "text", editable: true },
    { label: "Email", fieldName: "Email", type: "text", editable: true }
    
];
const accColm = [

    { label: "Account Name", fieldName: "AccountName", type: "text" },
    { label: "Account Number", fieldName: "AccountNumber", type: "text" },
    { label: "Industry", fieldName: "Industry", type: "text" },
    { label: "Type", fieldName: "Type", type: "text" }

];

export default class LWC_014_eg1_lwclds_wire_getcontact extends LightningElement {
    @track col = colm;
    @track draftValues = [];

    @wire(getContactList) storeData;

    handleSave(event) {
        console.log("Draft values:", JSON.stringify(event.detail.draftValues));

        const recordInputs = event.detail.draftValues.map((draft) => {
            return {
                fields: {
                    Id: draft.Id,
                    FirstName: draft.FirstName,
                    LastName: draft.LastName,
                    Phone: draft.Phone,
                    Email: draft.Email
                }
            };
        });
        console.log("Record Inputs:", JSON.stringify(recordInputs));

        const promises = recordInputs.map((recordInput) =>
            updateRecord(recordInput)
        );

        Promise.all(promises)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Success",
                        message: "Contacts updated successfully",
                        variant: "success"
                    })
                );
                this.draftValues = [];
                return refreshApex(this.storeData);
            })

            .catch((error) => {
                console.error("Error updating records:", error);
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Error updating records",
                        message: error.body.message,
                        variant: "error"
                    })
                );
            });
    }

    @track acccol = accColm;

    @wire(getAccountList) storeAccData;
}
