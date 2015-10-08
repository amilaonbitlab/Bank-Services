app.controller("createAccountController",function($scope,$http) {

    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.requestData = '';
        $scope.Account.VerificationCode = '';
        $scope.Account.SecurityToken = '';
        $scope.Account.SessionID = '';
        $scope.Account.TimeStamp = '';
        $scope.Account.TransactionID = '';
        $scope.Account.SecretTransactionKey = '';
        $scope.Account.Tags = '';
        $scope.reqUrl = 'http://localhost:1337/account/preRegisterVerification';
    }

    $scope.responseData = '';

    $scope.requestData = '';

    $scope.reqUrl = 'http://localhost:1337/account/preRegisterVerification';

    $scope.CreateAccount = function(account){

        var reqData = {
            SecurityToken : account.SecurityToken,
            SessionID: account.SessionID,
            TimeStamp: account.TimeStamp,
            TransactionId: account.TransactionID,
            SecretTransactionKey: account.SecretTransactionKey,
            VerificationCode: account.VerificationCode,
            Tags: account.Tags
        };
        $scope.requestData = reqData;

        var createReq = $http.post('http://localhost:1337/account/preRegisterVerification',reqData);

        createReq.success(function(data, status, header, config) {
            $scope.responseData = data;
            //alert("Succefully Added Your account Detalis | verificationCode : "+account.VerificationCode);
        });

        createReq.error(function(data, status, header, config) {
            alert("Can not send Request Url : "+reqUrl);
        });
    }

});