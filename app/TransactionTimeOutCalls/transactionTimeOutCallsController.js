app.controller("transactionTimeOutCallsController",function($scope,$http) {
    
    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.requestData = '';
        $scope.reqUrl = 'http://localhost:1337/account/preRegisterVerification';
        $scope.InputData.SecurityToken = '';
        $scope.InputData.SessionID = '';
        $scope.InputData.TimeStamp = '';
        $scope.InputData.SecretTransactionKey = '';
        $scope.InputData.TransactionID = '';
        $scope.InputData.SessionRequestType = '';
        $scope.InputData.StatusCode = '';
        $scope.InputData.StatusDescription = '';
        $scope.InputData.Tags = '';

    }

    $scope.responseData = '';

    $scope.reqUrl = 'http://localhost:1337/account/preRegisterVerification';

    $scope.requestData = '';

    $scope.TransactionTimeOutCalls = function(inputData){

        var reqData = {
            SecurityToken: inputData.SecurityToken,
            SessionID: inputData.SessionID,
            TimeStamp: inputData.TimeStamp,
            SecretTransactionKey: inputData.SecretTransactionKey,
            TransactionID: inputData.TransactionID,
            SessionRequestType: inputData.SessionRequestType,
            StatusCode: inputData.StatusCode,
            StatusDescription: inputData.StatusDescription,
            Tags: inputData.Tags
        };

        $scope.requestData = reqData;

        var createReq = $http.post($scope.reqUrl,reqData);

        createReq.success(function(data, status, header, config) {
            $scope.responseData = data;
            //alert("Succefully Added Your account Detalis | verificationCode : "+account.VerificationCode);
        });

        createReq.error(function(data, status, header, config) {
            alert("Can not send Request Url : "+reqUrl);
        });
    }

});