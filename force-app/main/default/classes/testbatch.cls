global with sharing class testbatch implements Database.batchable<sobject>{
   
    Global database.querylocator start(database.Batchablecontext bc){
        string qurey= 'Select Id,Name FROM Contact WHERE AccountId = null';
        return database.getquerylocator(qurey);
    }

    global void execute(database.Batchablecontext bc, List<Contact>conList){
        for(Contact con: conList){
            con.AccountId= '001NS00000ubfQYYAY';
        }
        update conList;
    }

    global void finish(database.Batchablecontext bc){

    }
}