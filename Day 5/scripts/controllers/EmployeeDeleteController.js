hrApp.controller('EmployeeDeleteController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        $scope.employee = {};
        $scope.departments = [];
        $scope.managers = [];
        $scope.jobs = [];

        $http({url: CommonResourcesFactory.findAllDepartmentsUrl, method: 'GET'})
            .success(function(res){
                $scope.departments = res.data;
            });
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function(res){
                $scope.jobs = res.data;
            });
        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function(res){
                var data = res.data;
                var managersIds = {};
                var returnData = [];
                for(var each in data) {
                    var manager = data[each].managerId;
                    if(manager != null && managersIds[manager.employeeId] == undefined) {
                        managersIds[manager.employeeId] = true;
                        returnData.push(angular.copy(manager));
                    }
                }
                $scope.managers = returnData;
            });

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */

        $scope.acceptDelete = function (employee) {
            $http({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE', data: employee, headers: {
                "Content-Type": "application/json"
            }})
                .success(function (res) {
                    console.log(res);
                    $location.url('/employeeList');
                });
        };
        $scope.denyDelete = function (employeeId) {
            $location.url('/employeeList');
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);