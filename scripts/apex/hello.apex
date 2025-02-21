// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

// string tempvar = 'Enter_your_name_here';
// System.debug('Hello World!');
// System.debug('My name is ' + tempvar);
// Database.executeBatch(testbatch, 2);
// Declare a variable of type testbatch and instantiate it
testbatch myTestBatch = new testbatch();

// Debugging statements
String tempvar = 'Enter_your_name_here';
System.debug('Hello World!');
System.debug('My name is ' + tempvar);

// Execute the batch job with a batch size of 2
Database.executeBatch(myTestBatch, 2);
