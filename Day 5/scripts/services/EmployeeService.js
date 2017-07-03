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
            getManagersList: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data, status, headers, config) {
                        // var returnData = [];
                        // var managersIds = [];
                        // var employeeId;
                        // for(var each in data){
                        //     if(data[each].managerId != null){
                        //         var found = false;
                        //         if(managersIds.length == 0){
                        //             found = false;
                        //         } else {
                        //             for(var current = 0; current < managersIds.length; current++){
                        //                 if(managersIds[current] == data[each].managerId.employeeId){
                        //                     found = true;
                        //                     break;
                        //                 }
                        //             }
                        //         }
                        //         if(!found){
                        //             managersIds.push(angular.copy(data[each].managerId.employeeId));
                        //         }
                        //     }
                        // }
                        // for(var current in managersIds){
                        //     for(var each in data){
                        //         if(managersIds[current] == data[each].eployeeId){
                        //             returnData.push(data[each]);
                        //         }
                        //     }
                        // }
                        // return returnData;


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
            }
        }
    }]
);