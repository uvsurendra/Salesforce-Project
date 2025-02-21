@RestResource(urlMapping='/pythonlife/int/*')
global class IntegratedClass {
  
    @httpGet
    global static Account dodebug(){
       System.debug('Integration sucessfully');
       RestRequest request = Restcontext.request;
      // string RequestId = request.requestURI;
       string RequestId = request.requestURI.substring(request.requestURI.lastIndexof('/')+1);

       return [Select Id,Name,Phone,Fax FROM Account WHERE Id=:RequestId];
 // return  [SELECT Id, Name, Phone, Fax FROM Account WHERE Id = '001NS00000ucnqfYAA'];



    }

} 