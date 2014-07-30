/* global angular */
'use strict';

angular
.module('myApp', ['smartTable.table'])
.controller('mainCtrl', ['$scope', '$http','$timeout', function (scope, http,$timeout) {
		scope.subHeaders=[[{'label':'subheader1','formatFunction':'uppercase','cellClass':'subheader1'},{'label':'subheader2','formatFunction':'lowercase','cellClass':'subheader2'}]];
        scope.rowCollection = [{'test1':'Test 1','test2':'Test 1 column2'},{'test1':'Test 2 column1','test2':'Test 2'}];
        scope.columnCollection=[{'label':'Display Column 1','map':'test1','isSortable':true},{'label':'Display Column 2','map':'test2','isSortable':true}];
         scope.globalConfig= {
            isPaginationEnabled: false,
            isGlobalSearchActivated: true,
            selectionMode: 'single'
        };

}]);