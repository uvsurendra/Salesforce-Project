trigger PaymentsTrigger on CustomObject1__c (before insert) { 

    // BEFORE INSERT: Validate the fields
    if (Trigger.isBefore && Trigger.isInsert) {

        List<CustomObject1__c> paymentList = Trigger.new;
        for (CustomObject1__c payment : paymentList) {
            // Validate Amount__c
            // if (payment.Amount__c == null || payment.Amount__c <= 0) {
            //     payment.Amount__c.addError('Amount must be greater than 0.');
            // }
            if(payment.Amount__c == null){
                payment.Amount__c.addError('Amount is requried');
            }
            else if(payment.Amount__c <= 0){
                payment.Amount__c.addError('Amount must be greater than 0.');
            }

            // Validate Payment_Mode__c
            if (String.isBlank(payment.Payment_Mode__c)) {
                payment.Payment_Mode__c.addError('Payment mode is required.');
            }
        }
    }

    // AFTER INSERT: Perform post-insert logic (e.g., create a related record)
    // if (Trigger.isAfter && Trigger.isInsert) {
    //     List<Related_Object__c> relatedRecords = new List<Related_Object__c>();
        
    //     for (CustomObject1__c payment : Trigger.new) {
    //         Related_Object__c related = new Related_Object__c();
    //         related.Name = 'Payment for ' + payment.Name;
    //         related.Payment__c = payment.Id; // Assuming a lookup field exists
    //         relatedRecords.add(related);
    //     }

    //     if (!relatedRecords.isEmpty()) {
    //         insert relatedRecords;
    //     }
    // }
}
