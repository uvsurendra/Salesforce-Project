global with sharing class Test {
    
    String testPrim = 'Hello test';

    public String publicTest = 'Hello test Public';
    global void printTest(){
    System.debug(testPrim); 

    }  
    public void printMessage(String msg){
        System.debug(msg);
    } 

    public String getDay(Integer dayNumber){
        String dayString = '';
        switch on dayNumber {
            when 0 {
                dayString = 'Sunday';
            }
            when 1 {
                dayString = 'Monday';
            }
            when 2 {
                dayString = 'Tuesday';
            }
            when 3 {
                dayString = 'Wednesday';
            }
            when 4 {
                dayString = 'Thursday';
            }
            when 5 {
                dayString = 'Friday';
            }
            when 6 {
                dayString = 'Staturday';
            }
            when else {
                dayString ='Invalid day number';
            }
            
        }
        return dayString;
    }
    public String getDay(String dayAbbrevation){

        String dayString = '';
        switch on dayAbbrevation {
            when 'sun' {
                dayString = 'Sunday';
            }
            when 'mon' {
                dayString = 'Monday';
            }
            when 'tue' {
                dayString = 'Tuesday';
            }
            when 'wed' {
                dayString = 'Wednesday';
            }
            when 'thu' {
                dayString = 'Thursday';
            }
            when 'fri' {
                dayString = 'Friday';
            }
            when 'sat' {
                dayString = 'Staturday';
            }
            when else {
                dayString ='Invalid day abbrevation';
            }
            
        }
        return dayString;
    }
}