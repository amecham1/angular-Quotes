angular.module('quoteApp')
.controller('mainCtrl',function($scope,mainService){


$scope.quotes=mainService.someQuotes();


$scope.removeQuote = function(text){
mainService.removeQuote(text);
}
$scope.addQuote = function(){
  var newQuote ={
  text: $scope.newQuote,
  author: $scope.newAuthor
}
if(mainService.addQuote(newQuote)){
  $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
}
}



})//end of controller
