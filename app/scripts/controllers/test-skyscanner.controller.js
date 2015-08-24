(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hackathonApp.controller:TestSkyscannerController
     * @description
     * # TestSkyscannerController
     * Controller of the hackathonApp
     */
    angular.module('hackathonApp')
      .controller('TestSkyscannerController', TestSkyscannerController);

    TestSkyscannerController.$inject = ['skyscannerCarHireService'];

    function TestSkyscannerController(skyscannerCarHireService){
        var vm = this,
            CONST_MARKET = 'AE',
            CONST_CURRENCY = 'AED',
            CONST_LOCALE = 'en-US';

        vm.testResponse = [];
        vm.listAPI = [];
        activate();

        //==================== Function declaration ====================
        function activate(){
            vm.listAPI = [
                {
                    "apiName": "testFunction",
                    "controllerFunction": testFunction,
                    "responseIndex": 0
                },
                {
                    "apiName": "getCurrencies",
                    "controllerFunction": getCurrencies,
                    "responseIndex": 1
                },
                {
                    "apiName": "getLocales",
                    "controllerFunction": getLocales,
                    "responseIndex": 2
                },
                {
                    "apiName": "getMarkets",
                    "controllerFunction": getMarkets,
                    "responseIndex": 3
                },
                {
                    "apiName": "getLocationAutosuggestListOfPlaces",
                    "controllerFunction": getLocationAutosuggestListOfPlaces,
                    "responseIndex": 4,
                    "params": [
                        {
                            "name": "queryString",
                            "model": "getLocationAutosuggestListOfPlacesQueryString"
                        }
                    ]
                },
                {
                    "apiName": "getLocationAutosuggestPlaceInformation",
                    "controllerFunction": getLocationAutosuggestPlaceInformation,
                    "responseIndex": 5,
                    "params": [
                        {
                            "name": "id",
                            "model": "getLocationAutosuggestPlaceInformationId"
                        }
                    ]
                },
                {
                    "apiName": "getHotelsAutosuggest",
                    "controllerFunction": getHotelsAutosuggest,
                    "responseIndex": 6,
                    "params": [
                        {
                            "name": "queryString",
                            "model": "getHotelsAutosuggestQueryString",
                            "defaultValue": "golden sand"
                        }
                    ]
                },
                {
                    "apiName": "getHotelsPriceListCreateSession",
                    "controllerFunction": getHotelsPriceListCreateSession,
                    "responseIndex": 7,
                    "params": [
                        {
                            "name": "entityid",
                            "model": "getHotelsPriceListCreateSessionEntityid",
                            "constraints":"The entity from the Hotels Auto Suggest service or a latitude, longitude pair (add '-latlong' at the end e.g. 41.37,2.14-latlong)",
                            "defaultValue": "82022525"
                        },
                        {
                            "name": "checkindate",
                            "model": "getHotelsPriceListCreateSessionCheckindate",
                            "constraints":"YYYY-mm-dd",
                            "defaultValue": "2015-10-15"
                        },
                        {
                            "name": "checkoutdate",
                            "model": "getHotelsPriceListCreateSessionCheckoutdate",
                            "constraints":"YYYY-mm-dd",
                            "defaultValue": "2015-10-18"
                        },
                        {
                            "name": "guests",
                            "model": "getHotelsPriceListCreateSessionGuests",
                            "constraints":"Maximum 10",
                            "defaultValue": "5"
                        },
                        {
                            "name": "rooms",
                            "model": "getHotelsPriceListCreateSessionRooms",
                            "constraints":"Maximum 5",
                            "defaultValue": "2"
                        }
                    ]
                },
                {
                    "apiName": "getHotelsPriceListPollingTheSession",
                    "controllerFunction": getHotelsPriceListPollingTheSession,
                    "responseIndex": 8,
                    "params": [
                        {
                            "name": "pageSize",
                            "model": "getHotelsPriceListPollingTheSessionPageSize",
                            "constraints":"Minimum 1, Maximum 50. Default is 10."
                        },
                        {
                            "name": "pageIndex",
                            "model": "getHotelsPriceListPollingTheSessionPageIndex",
                            "constraints":"Minimum 0, Default 0."
                        },
                        {
                            "name": "imageLimit",
                            "model": "getHotelsPriceListPollingTheSessionImageLimit",
                            "constraints":"Minimum 1, Maximum 50. Default is 1."
                        },
                        {
                            "name": "sortColumn",
                            "model": "getHotelsPriceListPollingTheSessionSortColumn",
                            "constraints":" rating, name, category, location, distance, price, relevance"
                        },
                        {
                            "name": "sortOrder",
                            "model": "getHotelsPriceListPollingTheSessionSortOrder",
                            "constraints":"asc, desc"
                        },
                        {
                            "name": "price",
                            "model": "getHotelsPriceListPollingTheSessionPrice",
                            "constraints":" min-max with integer values e.g. 100-200"
                        },
                        {
                            "name": "category",
                            "model": "getHotelsPriceListPollingTheSessionCategory",
                            "constraints":" CSV of IDs; 'list' for possible IDs"
                        },
                        {
                            "name": "district",
                            "model": "getHotelsPriceListPollingTheSessionDistrict",
                            "constraints":" CSV of IDs; 'list' for possible IDs"
                        },
                        {
                            "name": "city",
                            "model": "getHotelsPriceListPollingTheSessionCity",
                            "constraints":" CSV of IDs; 'list' for possible IDs"
                        },
                        {
                            "name": "amenities",
                            "model": "getHotelsPriceListPollingTheSessionAmenities",
                            "constraints":" CSV of IDs; 'list' for possible IDs"
                        },
                        {
                            "name": "accommodationType",
                            "model": "getHotelsPriceListPollingTheSessionAccommodationType",
                            "constraints":" CSV of IDs; 'list' for possible IDs"
                        },
                        {
                            "name": "accommodationChain",
                            "model": "getHotelsPriceListPollingTheSessionAccommodationChain",
                            "constraints":" CSV of IDs; 'list' for possible IDs"
                        }
                    ]
                },
                {
                    "apiName": "getHotelsDetailsCreatingTheDetails",
                    "controllerFunction": getHotelsDetailsCreatingTheDetails,
                    "responseIndex": 9,
                    "params": [
                        {
                            "name": "hotelIds",
                            "model": "getHotelsDetailsCreatingTheDetailsHotelIds",
                            "defaultValue": "82022525"
                        }
                    ]
                },
                {
                    "apiName": "getHotelsDetailsPollingTheDetails",
                    "controllerFunction": getHotelsDetailsPollingTheDetails,
                    "responseIndex": 10,
                    "params": [
                        {
                            "name": "hotelIds",
                            "model": "getHotelsDetailsPollingTheDetailsHotelIds",
                            "defaultValue": "82022525"
                        }
                    ]
                }
            ];
        }

        function testFunction(){
            skyscannerCarHireService.testFunction().then(function(response){
                vm.testResponse[0] = response;
            });
        }

        function getCurrencies(){
            skyscannerCarHireService.getCurrencies().then(function(response){
                vm.testResponse[1] = response;
            });
        }

        function getLocales(){
            skyscannerCarHireService.getLocales().then(function(response){
                vm.testResponse[2] = response;
            });
        }

        function getMarkets(){
            skyscannerCarHireService.getMarkets().then(function(response){
                vm.testResponse[3] = response;
            });
        }

        function getLocationAutosuggestListOfPlaces(){
            var queryString = vm.getLocationAutosuggestListOfPlacesQueryString?vm.getLocationAutosuggestListOfPlacesQueryString:"dubai";
            skyscannerCarHireService.getLocationAutosuggestListOfPlaces(CONST_MARKET, CONST_CURRENCY, CONST_LOCALE, queryString).then(function(response){
                vm.testResponse[4] = response;
            });
        }

        function getLocationAutosuggestPlaceInformation(){
            var id = vm.getLocationAutosuggestPlaceInformationId;
            skyscannerCarHireService.getLocationAutosuggestPlaceInformation(CONST_MARKET, CONST_CURRENCY, CONST_LOCALE, id).then(function(response){
                vm.testResponse[5] = response;
            });
        }

        function getHotelsAutosuggest(){
            var queryString = vm.getHotelsAutosuggestQueryString?vm.getHotelsAutosuggestQueryString:"dubai";
            skyscannerCarHireService.getHotelsAutosuggest(CONST_MARKET, CONST_CURRENCY, CONST_LOCALE, queryString).then(function(response){
                vm.testResponse[6] = response;
            });
        }

        function getHotelsPriceListCreateSession(){
            var entityid = vm.getHotelsPriceListCreateSessionEntityid;
            var checkindate = vm.getHotelsPriceListCreateSessionCheckindate;
            var checkoutdate = vm.getHotelsPriceListCreateSessionCheckoutdate;
            var guests = vm.getHotelsPriceListCreateSessionGuests;
            var rooms = vm.getHotelsPriceListCreateSessionRooms;
            skyscannerCarHireService.getHotelsPriceListCreateSession(CONST_MARKET
                , CONST_CURRENCY, CONST_LOCALE, entityid, checkindate, checkoutdate, guests, rooms).then(function(response){
                vm.testResponse[7] = response;
                var str =  response.headers('location');
                var str1 = str.replace('/apiservices/hotels/liveprices/v2/','');
                var arr = str1.split('?apikey=');
                vm.hotelsPriceListSessionKey = arr[0];
                vm.hotelsPriceListEncryptedApiKey = arr[1];
                sessionStorage.hotelsPriceListSessionKey = arr[0];
                sessionStorage.hotelsPriceListEncryptedApiKey = arr[1];
            });
        }

        function getHotelsPriceListPollingTheSession(){
            var pageSize = vm.getHotelsPriceListPollingTheSessionPageSize;
            var pageIndex = vm.getHotelsPriceListPollingTheSessionPageIndex;
            var imageLimit = vm.getHotelsPriceListPollingTheSessionImageLimit;
            var sortColumn = vm.getHotelsPriceListPollingTheSessionSortColumn;
            var sortOrder = vm.getHotelsPriceListPollingTheSessionSortOrder;
            var price = vm.getHotelsPriceListPollingTheSessionPrice;
            var category = vm.getHotelsPriceListPollingTheSessionCategory;
            var district = vm.getHotelsPriceListPollingTheSessionDistrict;
            var city = vm.getHotelsPriceListPollingTheSessionCity;
            var amenities = vm.getHotelsPriceListPollingTheSessionAmenities;
            var accommodationType = vm.getHotelsPriceListPollingTheSessionAccommodationType;
            var accommodationChain = vm.getHotelsPriceListPollingTheSessionAccommodationChain;

            skyscannerCarHireService.getHotelsPriceListPollingTheSession(CONST_MARKET
                , CONST_CURRENCY, CONST_LOCALE, pageSize, pageIndex, imageLimit, sortColumn,
                sortOrder, price, category, district, city,
                amenities, accommodationType, accommodationChain).then(function(response){
                vm.testResponse[8] = response;
            });
        }

        function getHotelsDetailsCreatingTheDetails(){
            var hotelIds = vm.getHotelsDetailsCreatingTheDetailsHotelIds;
            skyscannerCarHireService.getHotelsDetailsCreatingTheDetails(hotelIds).then(function(response){
                vm.testResponse[9] = response;
            });
        }

        function getHotelsDetailsPollingTheDetails(){
            var hotelIds = vm.getHotelsDetailsPollingTheDetailsHotelIds;
            skyscannerCarHireService.getHotelsDetailsPollingTheDetails(hotelIds).then(function(response){
                vm.testResponse[10] = response;
            });
        }


    }
})();





