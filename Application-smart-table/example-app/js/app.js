/* global angular */
'use strict';

angular
.module('myApp', ['smartTable.table'])
.controller('mainCtrl', ['$scope', '$http','$timeout', function (scope, http,$timeout) {

   /* http
    .get('http://localhost:8000')
    .then(function (res) {*/
    $timeout(function(){
	scope.subHeaders=[[{'label':'subheader1','formatFunction':'uppercase','cellClass':'subheader1'},{'label':'subheader2','formatFunction':'lowercase','cellClass':'subheader2'}]];
    },10);
        //scope.rowCollection = res.data;
        
        /*scope.columnCollection = Object.keys(scope.rowCollection[0]).map(function (key) {
            return {
                label: key,
                map: key
            };
        });*/
        scope.rowCollection = [{'test1':'Test 1','test2':'Test 1 column2'},{'test1':'Test 2 column1','test2':'Test 2'}];
        scope.columnCollection=[{'label':'Display Column 1','map':'test1'},{'label':'Display Column 2','map':'test2'}]
        
/*    }, function (err) {
        throw new Error (err);
    });*/

    angular.extend(scope, {

        search: function (e, column) {

            console.log(e, column);

        },

        sort: function (e, column) {

            var field = column.map,
                order = column.reverse ? 'ASC' : 'DESC';
            
            console.log(field, order);
        },

        globalConfig: {
            isPaginationEnabled: false,
            isGlobalSearchActivated: true,
            serverSideFilter: true,
            serverSideSort: true,
            selectionMode: 'single'
        }

    });

    scope.$on('search', scope.search);
    scope.$on('sortColumn', scope.sort);
    
}]);