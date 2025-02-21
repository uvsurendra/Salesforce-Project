trigger CreateLead on Lead (before insert) {

    for(Lead lead : Trigger.new){
        lead.Salutation = 'Mr.';
        lead.LastName = 'Surendra Bluepal';
        lead.LeadSource = 'Web';
        lead.Company = 'ABC Solutions';
    }
}