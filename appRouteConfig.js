app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
 // $urlRouterProvider.otherwise("state1");
  //
  // Now set up the states
    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go('account');
    });

  $stateProvider
    .state('account', {
      url: "/createAccountRequest",
        templateUrl: "app/CreateAccount/createAccountView.html",
        controller: "createAccountController"
    })
    .state('payment', {
        url: "/createPaymentRequest",
        templateUrl: "app/CreatePayment/createPaymentView.html",
        controller: "createPaymentController"
      })
      .state('transactionTimeOutCalls', {
          url: "/transactionTimeOutCalls",
          templateUrl: "app/TransactionTimeOutCalls/transactionTimeOutCallsView.html",
          controller: "transactionTimeOutCallsController"
      })
      .state('merchantIDVerification', {
          url: "/merchantIDVerification",
          templateUrl: "app/MerchantIDVerification/merchantIDVerificationView.html",
          controller: "merchantIDVerificationController"
      });
});