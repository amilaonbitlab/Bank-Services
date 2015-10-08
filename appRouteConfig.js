app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
 // $urlRouterProvider.otherwise("state1");
  //
  // Now set up the states
    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go('accountAuthorization');
    });

  $stateProvider
    .state('accountAuthorization', {
      url: "/createAccountRequest",
        templateUrl: "app/AccountAuthorization/accountAuthorizationView.html",
        controller: "accountAuthorizationController"
    })
    .state('transaction', {
        url: "/transactionRequest",
        templateUrl: "app/Transaction/transactionView.html",
        controller: "transactionController"
      })
      .state('transactionTimeOutCalls', {
          url: "/transactionTimeOutCallsRequest",
          templateUrl: "app/TransactionTimeOutCalls/transactionTimeOutCallsView.html",
          controller: "transactionTimeOutCallsController"
      })
      .state('merchantIDVerification', {
          url: "/merchantIDVerificationRequest",
          templateUrl: "app/MerchantIDVerification/merchantIDVerificationView.html",
          controller: "merchantIDVerificationController"
      });
});