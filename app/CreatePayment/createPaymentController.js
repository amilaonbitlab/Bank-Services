app.controller("createPaymentController",function($scope,$http) {
    
    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.requestData = '';
        $scope.reqUrl = 'http://localhost:1337/payment/transactionByBank';
        $scope.Payment.SecurityToken = '';
        $scope.Payment.SessionID = '';
        $scope.Payment.MessageRouteID = '';
        $scope.Payment.TimeStamp = '';
        $scope.Payment.TransactionID = '';
        $scope.Payment.SecretTransactionKey = '';
        $scope.Payment.PaymentMerchantID = '';
        $scope.Payment.PaymentMerchantName = '';
        $scope.Payment.PaymentMerchnatBank = '';
        $scope.Payment.PaymentMerchnatAccountID = '';
        $scope.Payment.TransactionCurrency = '';
        $scope.Payment.TransactionAmount = '';
        $scope.Payment.CallType = '';
        $scope.Payment.PPLKAccountID = '';
        $scope.Payment.Tags = '';

    }

    $scope.responseData = '';

    $scope.reqUrl = 'http://localhost:1337/payment/transactionByBank';

    $scope.requestData = '';

    $scope.CreatePayment = function(payment){

        var reqData = {
            SecurityToken: payment.SecurityToken,
            SessionID: payment.SessionID,
            MessageRouteID: payment.MessageRouteID,
            TimeStamp: payment.TimeStamp,
            TransactionID: payment.TransactionID,
            SecretTransactionKey: payment.SecretTransactionKey,
            PaymentMerchantID: payment.PaymentMerchantID,
            PaymentMerchantName: payment.PaymentMerchantName,
            PaymentMerchnatBank: payment.PaymentMerchnatBank,
            PaymentMerchnatAccountID: payment.PaymentMerchnatAccountID,
            TransactionCurrency: payment.TransactionCurrency,
            TransactionAmount: payment.TransactionAmount,
            CallType: payment.CallType,
            PPLKAccountID: payment.PPLKAccountID,
            Tags: payment.Tags
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