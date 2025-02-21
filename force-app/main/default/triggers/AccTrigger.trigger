trigger AccTrigger on Account (before insert) {

    if (Trigger.isBefore && Trigger.isInsert) {

        List<Account> accountData = Trigger.new;
        for (Account account : accountData) {

        //     if(account.AccountNumber == null){
        //         account.AccountNumber.addError('Account Number is requried');
        //     }
        //     else if(account.AccountNumber <= '10'){
        //         account.AccountNumber.addError('Amount number must be greater than 10.');
        //     }
        //     if(account.Industry == null){
        //         account.Industry.addError('Industry is requried');
        //     }
        //     // if(account.SIC == null){
        //     //     account.SIC.addError('SIC is requried');
        //     // }
        //     if(account.Phone == null){
        //         account.Phone.addError('Phone Number is requried');
        //     }
        //     if(account.BillingStreet == null){ 
        //         account.BillingStreet.addError('Billing Street is requried');
        //     }
        //     if(account.BillingCity == null){
        //         account.BillingCity.addError('Billing City is requried');
        //     }
        //     if(account.BillingPostalCode == null){
        //         account.BillingPostalCode.addError('Billing Zip/Postal Code is requried');
        //     }          
          
         }
    }
}