angular.module('myApp',[])
.controller('controller1', function ($scope){
    $scope.mensaje = 'Mensaje del controller 1'
    $scope.counter2 = 100
    $scope.value = "Si miran mis sandalias, hay tabla!"
    $scope.people = [
        {name: 'Stan', lastname: 'Marsh', age: 18, study: false, picture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
        {name: 'Eric', lastname: 'Cartman', age: 47, study: true, picture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png'},
        {name: 'Wendy', lastname: 'Testaburger', age: 37, study: true, picture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'},
        {name: 'Lisa', lastname: 'Berger', age: 23, study: false, picture: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'},
    ]
})