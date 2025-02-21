trigger CreateAccount on Lead (before insert) {

    
    for(Account accRecord : Trigger.new){

        accRecord.Name = 'Surendra Salesforce88';

        accRecord.Active__c	= 'Yes';

        accRecord.SLA__c = 'Gold';

        accRecord.SLAExpirationDate__c= Date.newInstance(2025, 2, 19);

        accRecord.SLASerialNumber__c = '6767';

        if(String)

    }
}