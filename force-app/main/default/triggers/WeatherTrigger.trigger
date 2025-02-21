trigger WeatherTrigger on Weather_API__c (before insert) {

    if (Trigger.isBefore && Trigger.isInsert) {
        List<Weather_API__c> weaList = Trigger.new;
        
        for (Weather_API__c wea : weaList) {
            if (wea.Search_City__c == null) {
                wea.addError('Search City can’t be empty!');
            }
        }
    }
}
