angular.module('appFRAMEWORK')
//PENDING: MOVE TO CONFIG
// app.config(function(toastrConfig) {
//   angular.extend(toastrConfig, {
//     allowHtml: false,
//     autoDismiss: false,
//     closeButton: false,
//     closeHtml: '<button>&times;</button>',
//     containerId: 'toast-container',
//     extendedTimeOut: 1000,
//     iconClasses: {
//       error: 'toast-error',
//       info: 'toast-info',
//       success: 'toast-success',
//       warning: 'toast-warning'
//     },
//     maxOpened: 0,
//     messageClass: 'toast-message',
//     newestOnTop: true,
//     onHidden: null,
//     onShown: null,
//     positionClass: 'toast-top-center',
//     preventDuplicates: false,
//     preventOpenDuplicates: false,
//     progressBar: false,
//     tapToDismiss: true,
//     target: 'body',
//     timeOut: 3000,
//     titleClass: 'toast-title',
//     toastClass: 'toast'
//   });
// });

.controller('MenuController', ['$scope', '$http', 'toastr', '$sessionStorage', function($scope, $http, toastr, $sessionStorage) {
  $scope.init = function() {

    $scope.$storage = $sessionStorage;

    $scope.usuarioSesion = {
      nombreUsuario: $scope.$storage.nombres
    };


    console.log($scope.usuarioSesion.nombreUsuario);

    $http.get('/csrfToken')
      .success(function(csrfObj) {
        $scope.csrfToken = csrfObj._csrf;
    });

  };


  // $scope.submitSignupForm = function() {
  //   $scope.signupForm.loading = true;
  //
  //   $http.post('/', {
  //       nombres: $scope.signupForm.nombres,
  //       identificacion: $scope.signupForm.identificacion,
  //       correo: $scope.signupForm.correo,
  //       password: $scope.signupForm.password,
  //       _csrf: $scope.csrfToken
  //     })
  //     .then(function onSuccess() {
  //       $http.put('/login', {
  //           correo: $scope.signupForm.correo,
  //           password: $scope.signupForm.password,
  //           _csrf: $scope.csrfToken
  //         })
  //         .then(function onSuccess() {
  //           // Refresh the page now that we've been logged in.
  //           window.location = '/';
  //         });
  //       //console.log($scope.signupForm);
  //     })
  //     .catch(function onError(err) {
  //       toastr.error(err.data);
  //     })
  //     .finally(function eitherWay() {
  //       $scope.signupForm.loading = false;
  //     });
  // };



  // $scope.submitLoginForm = function() {
  //   // Set the loading state (i.e. show loading spinner)
  //   $scope.loginForm.loading = true;
  //
  //   // Submit request to Sails.
  //   $http.put('/login', {
  //       usuario: $scope.loginForm.usuario,
  //       password: $scope.loginForm.password,
  //       _csrf: $scope.csrfToken
  //     })
  //     .then(function onSuccess(session) {
  //       // console.log("session",session);
  //       $scope.$storage = $sessionStorage;
  //       $scope.$storage.userid = session.data.id;
  //       $scope.$storage.nombres = session.data.nombres;
  //       console.log($scope.$storage);
  //       console.log('HOLA MUNDO');
  //       window.location = '/';
  //     })
  //     .catch(function onError(err) {
  //       toastr.error(err.data);
  //
  //       $scope.loginForm.loading = false;
  //     });
  // };
   $scope.init();
}]);
