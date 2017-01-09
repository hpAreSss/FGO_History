/**
 * Created by hpAreS on 11/15/2016.
 */

var app = angular.module('myApp', []);
app.config(function($provide) {
    $provide.service('servents', function() {
        return [
            {
                firstName: "Altria",
                lastName: "Pendragon",
                postfix: "None",
                Class: "Saber",
                imgUrl: "images/Servents/Altria.jpg",
                fullName: "Altria Pendragon",
                Atk: 11221,
                Hp: 15150,
                Star: 5
            },
            {
                firstName: "Altria",
                lastName: "Pendragon",
                postfix: "Lily",
                Class: "Saber",
                imgUrl: "images/Servents/AltriaLily.jpg",
                fullName: "Altria Pendragon(Lily)",
                Atk: 7726,
                Hp: 10623,
                Star: 4
            },
            {
                firstName: "Emiya",
                lastName: "None",
                postfix: "None",
                Class: "Archer",
                imgUrl: "images/Servents/Emiya.jpg",
                fullName: "Emiya",
                Atk: 9398,
                Hp: 11521,
                Star: 4
            },
            {
                firstName: "Gilgamesh",
                lastName: "None",
                postfix: "None",
                Class: "Archer",
                imgUrl: "images/Servents/Gilgamesh.jpg",
                fullName: "Gilgamesh",
                Atk: 12280,
                Hp: 13097,
                Star: 5
            },
            {
                firstName: "Cu",
                lastName: "Chulainn",
                postfix: "None",
                Class: "Lancer",
                imgUrl: "images/Servents/CuChulainn.jpg",
                fullName: "Cu Chulainn",
                Atk: 7239,
                Hp: 9593,
                Star: 3
            },
            {
                firstName: "Diarmuid",
                lastName: "Ua Duibhne",
                postfix: "None",
                Class: "Lancer",
                imgUrl: "images/Servents/Diamuid.jpg",
                fullName: "Diarmuid Ua Duibhne",
                Atk: 6877,
                Hp: 10098,
                Star: 3
            },
            {
                firstName: "Medusa",
                lastName: "None",
                postfix: "None",
                Class: "Rider",
                imgUrl: "images/Servents/Medusa.jpg",
                fullName: "Medusa",
                Atk: 7200,
                Hp: 8937,
                Star: 3
            },
            {
                firstName: "Georgius",
                lastName: "None",
                postfix: "None",
                Class: "Rider",
                imgUrl: "images/Servents/Georgius.jpg",
                fullName: "Georgius",
                Atk: 5236,
                Hp: 9200,
                Star: 2
            },
            {
                firstName: "El-Melloi",
                lastName: "II",
                postfix: "None",
                Class: "Caster",
                imgUrl: "images/Servents/El-Melloi.jpg",
                fullName: "El-Melloi II",
                Atk:10598,
                Hp: 14259,
                Star: 5
            },
            {
                firstName: "Medea",
                lastName: "None",
                postfix: "Lily",
                Class: "Caster",
                imgUrl: "images/Servents/MedeaLily.jpg",
                fullName: "Medea(Lily)",
                Atk: 7766,
                Hp: 13070,
                Star: 4
            },
            {
                firstName: "Sasaki",
                lastName: "Koujirou",
                postfix: "None",
                Class: "Assassin",
                imgUrl: "images/Servents/Sasaki.jpg",
                fullName: "Sasaki Koujirou",
                Atk:5735,
                Hp: 6220,
                Star: 1
            },
            {
                firstName: "Mysterious",
                lastName: "Heroine X",
                postfix: "None",
                Class: "Assassin",
                imgUrl: "images/Servents/Mysterious.jpg",
                fullName: "Mysterious Heroine X",
                Atk: 11761,
                Hp: 12696,
                Star: 5
            },
            {
                firstName: "Hercules",
                lastName: "None",
                postfix: "None",
                Class: "Berserker",
                imgUrl: "images/Servents/Hercules.jpg",
                fullName: "Hercules",
                Atk:10655,
                Hp: 10327,
                Star: 4
            },
            {
                firstName: "Lancelot",
                lastName: "None",
                postfix: "None",
                Class: "Berserker",
                imgUrl: "images/Servents/Lancelot.jpg",
                fullName: "Lancelot",
                Atk: 10477,
                Hp: 10327,
                Star: 4
            },
            {
                firstName: "Jeanne",
                lastName: "d'Arc",
                postfix: "None",
                Class: "Ruler",
                imgUrl: "images/Servents/Jeanne.jpg",
                fullName: "Jeanne d'Arc",
                Atk:9593,
                Hp: 16500,
                Star: 5
            },
            {
                firstName: "Shirou",
                lastName: "Kotomine",
                postfix: "None",
                Class: "Ruler",
                imgUrl: "images/Servents/Shirou.jpg",
                fullName: "Shirou Kotomine",
                Atk: 10972,
                Hp: 14107,
                Star: 5
            },
            {
                firstName: "Edmond",
                lastName: "Dantes",
                postfix: "None",
                Class: "Avenger",
                imgUrl: "images/Servents/Edmond.jpg",
                fullName: "Edmond Dantes",
                Atk:12641,
                Hp: 12177,
                Star: 5
            },
            {
                firstName: "Jeanne",
                lastName: "d'Arc",
                postfix: "Alter",
                Class: "Avenger",
                imgUrl: "images/Servents/JeanneAlter.jpg",
                fullName: "Jeanne d'Arc(Alter)",
                Atk: 13244,
                Hp: 11761,
                Star: 5
            },
            {
                firstName: "Matthew",
                lastName: "Kyrielite",
                postfix: "None",
                Class: "Shielder",
                imgUrl: "images/Servents/Matthew.jpg",
                fullName: "Matthew Kyrielite",
                Atk:8730,
                Hp: 12877,
                Star: 4
            }
        ];
    });
});

app.config(function($provide) {
    $provide.service('serventClas', function() {
       return ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker", "Ruler", "Avenger"];
    });
});
app.controller('searchController', function ($scope, servents, serventClas) {
    $scope.serventArr = servents;
    $scope.serventClas = serventClas;
    $scope.checkClas = ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker", "Ruler", "Avenger", "Shielder"];

    var updateSelected = function(action,className){
        if(action == 'add' && $scope.checkClas.indexOf(className) == -1){
            $scope.checkClas.push(className);
            }
        if(action == 'remove' && $scope.checkClas.indexOf(className)!=-1){
            var idx = $scope.checkClas.indexOf(className);
            $scope.checkClas.splice(idx,1);
            }
    }

    $scope.updateSelection = function($event, classCheck, className){
        var action = (classCheck == true? 'add':'remove');
        updateSelected(action,className);
        var serventArr = [];
        angular.forEach(servents, function(data) {
            if ($scope.checkClas.indexOf(data.Class) !== -1) {
                serventArr.push(data);
            }
        });
        $scope.serventArr = serventArr;
    }

    $scope.orderType = 'Atk';
    $scope.order = '-';

    $scope.changeOrder = function(ord) {
        $scope.orderType = ord;
        if ($scope.order === '') {
            $scope.order = '-';
        } else {
            $scope.order = '';
        }
    };
});

