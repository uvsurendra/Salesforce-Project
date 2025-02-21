trigger ConTrigger on Contact (before insert, after insert) {

    if (Trigger.isBefore && Trigger.isInsert) {
        List<Contact> conList = Trigger.new;
        
        for (Contact con : conList) {
            if (con.Phone == null) {
                con.Phone.addError('Phone number cant be empty!');
            }
            if (con.HomePhone == null) {
                con.HomePhone.addError('Home Phone number cant be empty!');
            }
        }
    }

    if(Trigger.isAfter && Trigger.isInsert){ 
        List<Opportunity>oppList = new List<Opportunity>();
        for(Contact con1 : trigger.new){
            Opportunity opp =new Opportunity();
            opp.Name = 'New Opportunity';
            opp.CloseDate= Date.today();
            opp.AccountId = con1.AccountId;
            opp.StageName = 'Prospecting';
            opplist.add(opp);
        }
        insert oppList;
    }
}





