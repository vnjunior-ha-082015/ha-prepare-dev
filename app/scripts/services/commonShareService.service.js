(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hackathonApp.service:commonShareService
     * @description
     * # commonShareService
     */
    angular.module('hackathonApp')
      .service('commonShareService', commonShareService);

    commonShareService.$inject = ['$window'];

    function commonShareService($window) {
      var _staticTrips = [
          {
              avatarURL: 'images/avatar/jadlimcaco.jpg',
              fullname: 'John Doe',
              tripName: '4 people Around Dubai',
              description: 'Anyone interested in travel to Dubai mall, Bur Al Arab, Burj Khalifa, Creek ? This must be fun for four of us. Just 4000 AED for 2 days',
              price: 4000,
              currency: 'AED',
              fromDate: '07:00 10/09/2015',
              toDate: '20:00 11/09/2015',
              totalMember: 4,
              totalJoined: 2,
              comments: [
                  {
                      fullname: 'Dat Nguyen',
                      avatarURL: 'images/avatar/dat_nguyen.jpg',
                      comment: 'It\'s sound good'
                  },
                  {
                      fullname: 'Hien Pham',
                      avatarURL: 'images/avatar/hien_pham.jpg',
                      comment: 'That\'s great'
                  },
                  {
                      fullname: 'Hung Thai',
                      avatarURL: 'images/avatar/hung_thai.jpg',
                      comment: 'We should visit Bur Khalifa first, after that we can go to Dubai mall, they\'re in the same area'
                  },
                  {
                      fullname: 'Luu Le',
                      avatarURL: 'images/avatar/luu_le.jpg',
                      comment: 'I\'ll be on time'
                  },
                  {
                      fullname: 'Anh Diep',
                      avatarURL: 'images/avatar/anh_diep.jpg',
                      comment: 'How many room that we will booking'
                  }
              ]
          },
          {
              avatarURL: 'images/avatar/jsa.jpg',
              fullname: 'Sathiyan Duno',
              tripName: 'Let form a team of 6',
              description: 'Anyone interested in travel to Dubai mall, Bur Al Arab, Burj Khalifa, Creek ? This must be fun for four of us. Just 8000 AED for 4 days',
              price: 8000,
              currency: 'AED',
              fromDate: '07:00 10/09/2015',
              toDate: '20:00 13/09/2015',
              totalMember: 6,
              totalJoined: 3,
              comments: [
                  {
                      fullname: 'Dat Nguyen',
                      avatarURL: 'images/avatar/dat_nguyen.jpg',
                      comment: 'It\'s sound good'
                  },
                  {
                      fullname: 'Hien Pham',
                      avatarURL: 'images/avatar/hien_pham.jpg',
                      comment: 'That\'s great'
                  },
                  {
                      fullname: 'Hung Thai',
                      avatarURL: 'images/avatar/hung_thai.jpg',
                      comment: 'We should visit Bur Khalifa first, after that we can go to Dubai mall, they\'re in the same area'
                  },
                  {
                      fullname: 'Luu Le',
                      avatarURL: 'images/avatar/luu_le.jpg',
                      comment: 'I\'ll be on time'
                  },
                  {
                      fullname: 'Anh Diep',
                      avatarURL: 'images/avatar/anh_diep.jpg',
                      comment: 'How many room that we will booking'
                  }
              ]
          },
          {
              avatarURL: 'images/avatar/nzcode.jpg',
              fullname: 'Nhan Ly',
              tripName: 'Need 2 people for a trips',
              description: 'Anyone interested in travel to Dubai mall, Bur Al Arab, Burj Khalifa, Creek ? This must be fun for four of us. Just 4000 AED for 4 days',
              price: 4000,
              currency: 'AED',
              fromDate: '07:00 10/09/2015',
              toDate: '20:00 13/09/2015',
              totalMember: 3,
              totalJoined: 1,
              comments: [
                  {
                      fullname: 'Dat Nguyen',
                      avatarURL: 'images/avatar/dat_nguyen.jpg',
                      comment: 'It\'s sound good'
                  },
                  {
                      fullname: 'Hien Pham',
                      avatarURL: 'images/avatar/hien_pham.jpg',
                      comment: 'That\'s great'
                  },
                  {
                      fullname: 'Hung Thai',
                      avatarURL: 'images/avatar/hung_thai.jpg',
                      comment: 'We should visit Bur Khalifa first, after that we can go to Dubai mall, they\'re in the same area'
                  },
                  {
                      fullname: 'Luu Le',
                      avatarURL: 'images/avatar/luu_le.jpg',
                      comment: 'I\'ll be on time'
                  },
                  {
                      fullname: 'Anh Diep',
                      avatarURL: 'images/avatar/anh_diep.jpg',
                      comment: 'How many room that we will booking'
                  }
              ]
          },
          {
              avatarURL: 'images/avatar/pixeliris.jpg',
              fullname: 'Dat Nguyen',
              tripName: '4 people Around Dubai',
              description: '2000 USD for 2 days in Dubai',
              price: 2000,
              currency: 'USD',
              fromDate: '07:00 10/09/2015',
              toDate: '20:00 11/09/2015',
              totalMember: 4,
              totalJoined: 3,
              comments: [
                  {
                      fullname: 'Dat Nguyen',
                      avatarURL: 'images/avatar/dat_nguyen.jpg',
                      comment: 'It\'s sound good'
                  },
                  {
                      fullname: 'Hien Pham',
                      avatarURL: 'images/avatar/hien_pham.jpg',
                      comment: 'That\'s great'
                  },
                  {
                      fullname: 'Hung Thai',
                      avatarURL: 'images/avatar/hung_thai.jpg',
                      comment: 'We should visit Bur Khalifa first, after that we can go to Dubai mall, they\'re in the same area'
                  },
                  {
                      fullname: 'Luu Le',
                      avatarURL: 'images/avatar/luu_le.jpg',
                      comment: 'I\'ll be on time'
                  },
                  {
                      fullname: 'Anh Diep',
                      avatarURL: 'images/avatar/anh_diep.jpg',
                      comment: 'How many room that we will booking'
                  }
              ]
          },
          {
              avatarURL: 'images/avatar/syswarren.jpg',
              fullname: 'Syswarren Duno',
              tripName: 'Trips for a couple',
              description: 'I wanna find a bf here :)',
              price: 3000,
              currency: 'USD',
              fromDate: '07:00 09/09/2015',
              toDate: '20:00 13/09/2015',
              totalMember: 2,
              totalJoined: 1,
              comments: [
                  {
                      fullname: 'Dat Nguyen',
                      avatarURL: 'images/avatar/dat_nguyen.jpg',
                      comment: 'It\'s sound good'
                  },
                  {
                      fullname: 'Hien Pham',
                      avatarURL: 'images/avatar/hien_pham.jpg',
                      comment: 'That\'s great'
                  },
                  {
                      fullname: 'Hung Thai',
                      avatarURL: 'images/avatar/hung_thai.jpg',
                      comment: 'We should visit Bur Khalifa first, after that we can go to Dubai mall, they\'re in the same area'
                  },
                  {
                      fullname: 'Luu Le',
                      avatarURL: 'images/avatar/luu_le.jpg',
                      comment: 'I\'ll be on time'
                  },
                  {
                      fullname: 'Anh Diep',
                      avatarURL: 'images/avatar/anh_diep.jpg',
                      comment: 'How many room that we will booking'
                  }
              ]
          }
        ],
        _loginInfo = null;

        return {
            getInitTrips: getInitTrips,
            getLoginInfo: getLoginInfo,
            setLoginInfo: setLoginInfo
        };

        //==================== Function declaration ====================

        function getInitTrips() {
          return angular.copy(_staticTrips);
        }
        function getLoginInfo(){
          if (!_loginInfo) {
            var param = $window.sessionStorage.loginInfo;
            _loginInfo = param ? JSON.parse(param) : undefined;
          }
          return angular.copy(_loginInfo);
        }

        function setLoginInfo(param){
          var str = param;
          if (param) {
              str = JSON.stringify(param);
          }
          _loginInfo = param;
          $window.sessionStorage.loginInfo = str;
        }
    }

})();





