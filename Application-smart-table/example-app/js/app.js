/* global angular */
'use strict';

angular
.module('myApp', ['smartTable.table'])
.controller('mainCtrl', ['$scope', '$http','$timeout', function (scope, http,$timeout) {
	scope.subHeaders=[[{'label':'subheader1','formatFunction':'uppercase','cellClass':'subheader1'},{'label':'subheader2','formatFunction':'lowercase','cellClass':'subheader2'}]];
        scope.rowCollection = [{'test1':'Test 1','test2':'Test 1 column2'},{'test1':'Test 2 column1','test2':'Test 2'}];
        scope.columnCollection=[{'label':'Display Column 1','map':'test1'},{'label':'Display Column 2','map':'test2'}]
        
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