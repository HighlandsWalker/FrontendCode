hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            getDepartmentsList: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: getDepartmentsList" + status);
                        return "getDepartmentsList ERROR!"
                    });
            },
            getEmployeesList: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: getManagersList" + status);
                        return "getManagersList ERROR!"
                    });
            },
            getJobsList: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: getJobsList" + status);
                        return "getJobsList ERROR!"
                    });
            },
            getManagersFromEmployeeList: function(data){
                var managersIds = {};
                var returnData = [];
                for(var each in data) {
                    var manager = data[each].managerId;
                    if(manager != null && managersIds[manager.employeeId] == undefined) {
                        managersIds[manager.employeeId] = true;
                        returnData.push(angular.copy(manager));
                    }
                }
                return returnData;
            }
        }
    }]
);