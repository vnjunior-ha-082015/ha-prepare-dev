(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hackathonApp.service:skyscannerCarHireService
     * @description
     * # skyscannerCarHireService
     */
    angular.module('hackathonApp')
      .service('skyscannerCarHireService', skyscannerCarHireService);

    skyscannerCarHireService.$inject = ['$http'];

    function skyscannerCarHireService($http) {
        return {
          testFunction: testFunction,
          getCurrencies: getCurrencies,
          getLocales: getLocales,
          getMarkets: getMarkets,
          getLocationAutosuggestListOfPlaces: getLocationAutosuggestListOfPlaces,
          getLocationAutosuggestPlaceInformation: getLocationAutosuggestPlaceInformation,
          getHotelsAutosuggest: getHotelsAutosuggest,
          getHotelsPriceListCreateSession: getHotelsPriceListCreateSession,
          getHotelsPriceListPollingTheSession: getHotelsPriceListPollingTheSession,
          getHotelsDetailsCreatingTheDetails: getHotelsDetailsCreatingTheDetails,
          getHotelsDetailsPollingTheDetails: getHotelsDetailsPollingTheDetails
        };

        //==================== Function declaration ====================

        function testFunction() {
          var req = {
            method: 'GET',
            url: '/apiservices/autosuggest/v1.0/UK/GBP/en?query=berlin&apikey=prtl6749387986743898559646983194',
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getCurrencies(){
          var req = {
            method: 'GET',
            url: '/apiservices/reference/v1.0/currencies?apikey=prtl6749387986743898559646983194',
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getLocales(){
          var req = {
            method: 'GET',
            url: '/apiservices/reference/v1.0/locales?apikey=prtl6749387986743898559646983194',
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getMarkets(){
          var req = {
            method: 'GET',
            url: '/apiservices/reference/v1.0/countries/en-US?apiKey=prtl6749387986743898559646983194',
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getLocationAutosuggestListOfPlaces(market, currency, locale, query){
          var URIString = '/apiservices/autosuggest/v1.0/'
                          + market +'/'
                          + currency + '/'
                          + locale + '/'
                          + '?query=' + query + '&apiKey=prtl6749387986743898559646983194';
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getLocationAutosuggestPlaceInformation(market, currency, locale, id){
          var URIString = '/apiservices/autosuggest/v1.0/'
                          + market +'/'
                          + currency + '/'
                          + locale + '/'
                          + '?id=' + id + '&apiKey=prtl6749387986743898559646983194';
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getLocationAutosuggestPlaceInformation(market, currency, locale, id){
          var URIString = '/apiservices/autosuggest/v1.0/'
                          + market +'/'
                          + currency + '/'
                          + locale + '/'
                          + '?id=' + id + '&apiKey=prtl6749387986743898559646983194';
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getHotelsAutosuggest(market, currency, locale, query){
          var URIString = '/apiservices/hotels/autosuggest/v2/'
                          + market +'/'
                          + currency + '/'
                          + locale + '/'
                          + query + '?apiKey=prtl6749387986743898559646983194';
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getHotelsPriceListCreateSession(market, currency, locale, entityid, checkindate, checkoutdate, guests, rooms){
          var URIString = '/apiservices/hotels/liveprices/v2/'
                          + market +'/'
                          + currency + '/'
                          + locale + '/'
                          + entityid + '/'
                          + checkindate + '/'
                          + checkoutdate + '/'
                          + guests + '/'
                          + rooms + '?apiKey=prtl6749387986743898559646983194';
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getHotelsPriceListPollingTheSession(market, currency, locale, pageSize, pageIndex, imageLimit, sortColumn,
                sortOrder, price, category, district, city,
                amenities, accommodationType, accommodationChain){
          if(!sessionStorage.hotelsPriceListSessionKey || !sessionStorage.hotelsPriceListEncryptedApiKey){
            return;
          }
          var URIString = '/apiservices/hotels/liveprices/v2/'
                          + sessionStorage.hotelsPriceListSessionKey
                          + '?apiKey=' + sessionStorage.hotelsPriceListEncryptedApiKey
          if(pageSize){
            URIString += '&pageSize=' + pageSize;
          }
          if(pageIndex){
            URIString += '&pageIndex=' + pageIndex;
          }
          if(imageLimit){
            URIString += '&imageLimit=' + imageLimit;
          }
          if(sortColumn){
            URIString += '&sortColumn=' + sortColumn;
          }
          if(sortOrder){
            URIString += '&sortOrder=' + sortOrder;
          }
          if(price){
            URIString += '&price=' + price;
          }
          if(category){
            URIString += '&category=' + category;
          }
          if(district){
            URIString += '&district=' + district;
          }
          if(city){
            URIString += '&city=' + city;
          }
          if(amenities){
            URIString += '&amenities=' + amenities;
          }
          if(accommodationType){
            URIString += '&accommodationType=' + accommodationType;
          }
          if(accommodationChain){
            URIString += '&accommodationChain=' + accommodationChain;
          }
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getHotelsDetailsCreatingTheDetails(hotelIds){
          if(!sessionStorage.hotelsPriceListSessionKey || !sessionStorage.hotelsPriceListEncryptedApiKey){
            return;
          }
          var URIString = '/apiservices/hotels/livedetails/v2/details/'
                          + sessionStorage.hotelsPriceListSessionKey
                          + '?apiKey=' + sessionStorage.hotelsPriceListEncryptedApiKey
                          + '&hotelIds=' + hotelIds;
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }

        function getHotelsDetailsPollingTheDetails(hotelIds){
          if(!sessionStorage.hotelsPriceListSessionKey || !sessionStorage.hotelsPriceListEncryptedApiKey){
            return;
          }
          var URIString = '/apiservices/hotels/livedetails/v2/polldetails/'
                          + sessionStorage.hotelsPriceListSessionKey
                          + '?apiKey=' + sessionStorage.hotelsPriceListEncryptedApiKey
                          + '&hotelIds=' + hotelIds;
          var req = {
            method: 'GET',
            url: URIString,
            headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              "Accept": 'application/json'
            }
          };
          return $http(req);
        }
    }

})();





