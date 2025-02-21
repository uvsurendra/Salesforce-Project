public with sharing class AddOpportunity {
    @AuraEnabled
    public static Opportunity createNewOpportunity(String name, Decimal amount, String stage) {
        
        Opportunity opp = new Opportunity(
            Name = name,
            Amount = amount,
            StageName = stage,
            CloseDate = Date.today().addDays(30)
        );
        insert opp;
        return opp;
    }
}