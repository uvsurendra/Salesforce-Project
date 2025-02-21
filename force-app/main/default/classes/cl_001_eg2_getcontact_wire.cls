public with sharing class cl_001_eg2_getcontact_wire 
{
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactList()
    {
        try{
            return[select Id,FirstName,LastName,Phone,Email from Contact];
        }
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }
    @AuraEnabled(cacheable= true)
    public static List<Account> getAccountList()
    {
        try{
            return[select Id,Name,AccountNumber,Industry,Type from Account];
        }
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }
}