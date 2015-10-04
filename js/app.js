(function() {

   'use strict';

   function AdsCtrl($scope, $firebase) {
      $scope.ads = $firebase(new Firebase('https://adsystem.firebaseio.com/'));

      $scope.saveAd = function() {
         if (Object.keys($scope.ad).length > 4) {
            $scope.ad.$save();
         } else {
            $scope.ads.$add($scope.ad);
         }
      };

      $scope.editAd = function(adId) {
         $scope.ad = $firebase(new Firebase('https://adsystem.firebaseio.com/' + adId));
      };

      $scope.deleteAd = function(adId) {
         $firebase(new Firebase('https://adsystem.firebaseio.com/' + adId)).$remove();
      };
   }
   
   angular
      .module('adsystemApp', ['firebase'])
      .controller('AdsCtrl', AdsCtrl);

})();