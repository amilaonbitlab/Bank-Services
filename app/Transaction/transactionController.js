app.controller("transactionController",function($scope,$http) {
    
    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.requestData = '';
        $scope.reqUrl = 'http://localhost:1337/payment/transactionByBank';
        $scope.InputData.SecurityToken = '';
        $scope.InputData.SessionID = '';
        $scope.InputData.MessageRouteID = '';
        $scope.InputData.TimeStamp = '';
        $scope.InputData.TransactionID = '';
        $scope.InputData.SecretTransactionKey = '';
        $scope.InputData.PaymentMerchantID = '';
        $scope.InputData.PaymentMerchantName = '';
        $scope.InputData.PaymentMerchnatBank = '';
        $scope.InputData.PaymentMerchnatAccountID = '';
        $scope.InputData.TransactionCurrency = '';
        $scope.InputData.TransactionAmount = '';
        $scope.InputData.CallType = '';
        $scope.InputData.PPLKAccountID = '';
        $scope.InputData.Tags = '';

    }

    $scope.responseData = '';

    $scope.reqUrl = 'http://localhost:1337/payment/transactionByBank';

    $scope.requestData = '';

    $scope.Transaction = function(inputData){

        var reqData = {
            SecurityToken: inputData.SecurityToken,
            SessionID: inputData.SessionID,
            MessageRouteID: inputData.MessageRouteID,
            TimeStamp: inputData.TimeStamp,
            TransactionID: inputData.TransactionID,
            SecretTransactionKey: inputData.SecretTransactionKey,
            PaymentMerchantID: inputData.PaymentMerchantID,
            PaymentMerchantName: inputData.PaymentMerchantName,
            PaymentMerchnatBank: inputData.PaymentMerchnatBank,
            PaymentMerchnatAccountID: inputData.PaymentMerchnatAccountID,
            TransactionCurrency: inputData.TransactionCurrency,
            TransactionAmount: inputData.TransactionAmount,
            CallType: inputData.CallType,
            PPLKAccountID: inputData.PPLKAccountID,
            Tags: inputData.Tags
        };

        $scope.requestData = reqData;

        var createReq = $http.post('http://localhost:1337/payment/transactionByBank',reqData);

        createReq.success(function(data, status, header, config) {
            $scope.responseData = data;
            //alert("Succefully Added Your account Detalis | verificationCode : "+account.VerificationCode);
        });

        createReq.error(function(data, status, header, config) {
            alert("Can not send Request Url : "+reqUrl);
        });
    }

});