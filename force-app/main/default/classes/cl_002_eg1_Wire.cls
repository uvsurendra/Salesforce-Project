public with sharing class cl_002_eg1_Wire {
    @AuraEnabled(cacheable=true)
    public static List<contact> findContacts(String searchText){
        try {

            String key = '%' +searchText+ '%';
            return [ SELECT Id,Name,Phone,Email from contact where FirstName like : key];

            
        } catch (Exception e) {

            throw new AuraHandledException(e.getMessage());
            
        }
    }
}