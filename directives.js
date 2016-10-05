// DIRECTIVES

// Directives
/* 
    restrict 'E' - restrict the directive to only be an HTML element
    replace - contents of the directive will replace the placeholder
    scope - isolate the scope to avoid headaches down the line.
            - poke a hole into the scope using attributes on the directive
            - '=' represents two-way binding which allows passing an object
            - '&' represents a function to be passed to the directive
            - '@' represents an interpolated string to be passed to the directive (one-way binding)
*/
weatherApp.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});