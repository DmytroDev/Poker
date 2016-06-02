/*pokerApp.controller('MainController', function MainController() {
    this.helloTest = '1234';
    this.louder = function () {
        this.helloTest += '!';
        /!*   $scope.helloTest = '1234';
         $scope.louder = function () {
         $scope.helloTest += '!';*!/
    }
});*/
/* create controller*/

pokerApp.controller('MainController', function MainController() {
    this.louder = $(document).on("click", "a#signin-ref", function (event) {
        event.preventDefault();
        $.get("/signin", function (data) {
            $("#container").html(data);
        });
    });

});
