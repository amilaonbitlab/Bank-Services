app.controller("createAccountController",function($scope,$http) {

    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.requestData = '';
        $scope.InputData.VerificationCode = '';
        $scope.InputData.SecurityToken = '';
        $scope.InputData.SessionID = '';
        $scope.InputData.TimeStamp = '';
        $scope.InputData.TransactionID = '';
        $scope.InputData.SecretTransactionKey = '';
        $scope.InputData.Tags = '';
        $scope.reqUrl = 'http://localhost:1337/account/preRegisterVerification';
    }

    $scope.responseData = '';

    $scope.requestData = '';

    $scope.reqUrl = 'http://localhost:1337/account/preRegisterVerification';

    $scope.CreateAccount = function(inputData){

        var reqData = {
            SecurityToken : inputData.SecurityToken,
            SessionID: inputData.SessionID,
            TimeStamp: inputData.TimeStamp,
            TransactionId: inputData.TransactionID,
            SecretTransactionKey: inputData.SecretTransactionKey,
            VerificationCode: inputData.VerificationCode,
            Tags: inputData.Tags
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