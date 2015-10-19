app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
 // $urlRouterProvider.otherwise("state1");
  //
  // Now set up the states
    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go('accountAuthentication');
    });

  $stateProvider
      .state('accountAuthentication', {
          url: "/accountAuthenticationRequest",
          templateUrl: "app/AccountAuthentication/accountAuthenticationView.html",
          controller: "accountAuthenticationController"
      })
      .state('accountAuthorization', {
      url: "/accountAuthorizationRequest",
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