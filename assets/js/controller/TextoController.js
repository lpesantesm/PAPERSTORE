angular.module('appFRAMEWORK')
  .controller('TextoAController', ['$scope', '$http', function($scope, $http) {
    $scope.init = function() {

      //console.log('Hola MUNDO');
      //$scope.fechaNacimientoAux="2014-10-31";
      $scope.ENTIDAD = ": PROSPECTO";

    };


    $scope.ConcatenarNombres = function() {
      $scope.nombreCompleto = $scope.nombres + ' ' + $scope.apellidos;

    };


    $scope.CalculaEdad = function() {  // ESTA FUNCION DEBE IR COMO SERVICIO

      if ($scope.prospecto){
        var fecha = $scope.prospecto.fechaNacimiento;
        var edad;
        if(fecha){
            var edad = Math.abs(moment(new Date(fecha)).diff(moment(), 'years'));
            console.log(edad);
        }else {
            edad =0;
        }
        $scope.prospecto.edad   = parseInt(edad);

      }
    };

    $scope.ConsultarProspecto = function() {

      $http.post('/prospecto/buscarid', {
        id: '55dc9bff4065db0413d939eb'
        //id: '55daa4ac3f42883716fe6b41'
      }).success(function(prospecto) {


/*
      $http.post('/prospecto/buscar', {
        primerNombre:   $scope.prospecto.primerNombre,
        primerApellido: $scope.prospecto.primerApellido,
        numDocumento:   $scope.prospecto.numDocumento
      }).success(function(prospecto) {
*/


       if (prospecto.prospecto){
           //console.log(prospecto.resultado);
           //console.log(prospecto.mensaje);
              $scope.prospecto.primerNombre     = prospecto.prospecto.primerNombre;
              $scope.prospecto.segundoNombre    = prospecto.prospecto.segundoNombre;
              $scope.prospecto.primerApellido   = prospecto.prospecto.primerApellido;
              $scope.prospecto.segundoApellido  = prospecto.prospecto.segundoApellido;
              $scope.prospecto.tipDocumento     = prospecto.prospecto.tipDocumento;
              $scope.prospecto.numDocumento     = prospecto.prospecto.numDocumento;

              var fecha = prospecto.prospecto.fechaNacimiento;
              $scope.prospecto.fechaNacimiento  = new Date(fecha);

              if (prospecto.prospecto.edad){
                $scope.prospecto.edad   = prospecto.prospecto.edad;
              }



              //var date = new Date(prospecto.prospecto.fechaNacimiento);
              //console.log(moment.utc(date).format('DD/MM/YYYYZ'));
              //$scope.fechaNacimiento  = new Date(moment.utc(date).format('DD/MM/YYYY'));
              //$scope.fechaNacimiento  = moment(date).format('YYYY/MM/DD');
              $scope.prospecto.email            = prospecto.prospecto.email;
              $scope.prospecto.movilPrincipal   = prospecto.prospecto.movilPrincipal;
              $scope.prospecto.genero  = prospecto.prospecto.genero;
      }else {
              alert(prospecto.mensaje);
      }



      });
    };


    $scope.GuardarProspecto = function() {


       if ($scope.prospecto){

          var NuevoProspecto={
                              primerNombre:    $scope.prospecto.primerNombre,// .toUpperCase(),
                              segundoNombre:   $scope.prospecto.segundoNombre,
                              primerApellido:  $scope.prospecto.primerApellido,
                              segundoApellido: $scope.prospecto.segundoApellido,
                              numDocumento:    $scope.prospecto.numDocumento,
                              tipDocumento:    $scope.prospecto.tipDocumento,
                              fechaNacimiento: $scope.prospecto.fechaNacimiento,
                              edad:            $scope.prospecto.edad,
                              genero:          $scope.prospecto.genero,
                              email:           $scope.prospecto.email,
                              _EmpresaOwner:   'uuuuuuuuuuuuuuuuuuuuuuu',
                              _Owner:          'XXXXXXXXXXXXXXXXXXXXXXXX'
                            };

                            $http.post('/prospecto/adicionar', NuevoProspecto).success(function(prospecto) {
                               if (prospecto){
                                   alert(prospecto.mensaje);
                               }else{
                                   alert('ERROR');
                               }
                            });
       }else {
          alert('No Hay datos');
       }
    };


    $scope.CancelarIngresoProspecto = function() {
            $scope.prospecto= null;


    };

    $scope.ValorPorDefecto = function() {
      $scope.nombreCompleto = 'F2' + $scope.primerNombre + ' ' + $scope.segundoNombre + ' ' + $scope.primerApellido + ' ' + $scope.segundoApellido;
      alert("failure message: " + JSON.stringify({
        data: data
      }));
    };

    $scope.init();
  }]);
