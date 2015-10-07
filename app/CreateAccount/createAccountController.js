app.controller("createAccountController",function($scope,$http) {
    
    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.Account.verificationCode = '';
        $scope.Account.SecurityToken = '';
        $scope.Account.sessionID = '';
        $scope.Account.timeStamp = '';
        $scope.Account.transactionId = '';
        $scope.Account.SecretTransactionKey = '';
        $scope.Account.Tags = '';
    }

    $scope.responseData = '';

    $scope.CreateAccount = function(account){

        var reqData = {
          SecurityToken : account.SecurityToken,
          sessionID: account.sessionID,
          timeStamp: account.timeStamp,
          transactionId: account.transactionId,
          SecretTransactionKey: account.SecretTransactionKey,
          verificationCode: account.verificationCode,
          Tags: account.Tags
        };

        var createReq = $http.post('http://localhost:1337/account/preRegisterVerification',reqData);

            createReq.success(function(data, status, header, config) {
              $scope.responseData = data;
              alert("Succefully Added Your Account Detalis | verificationCode : "+account.verificationCode);              
            });

            createReq.error(function(data, status, header, config) {
              alert("Error .......... :(");
            });
    }

});