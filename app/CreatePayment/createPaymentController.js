app.controller("createPaymentController",function($scope,$http) {
    
    $scope.message = "All reserved @sampath.com";

    $scope.reSetData = function(){
        $scope.responseData = '';
        $scope.requestData = '';
        $scope.reqUrl = 'http://localhost:1337/payment/transactionByBank';
        $scope.payment.SecurityToken = '';
        $scope.payment.SessionID = '';
        $scope.payment.MessageRouteID = '';

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
            PaymentMerchnatBank: payment.PaymentMerchnatBank,
            PaymentMerchnatAccountID: payment.PaymentMerchnatAccountID,
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