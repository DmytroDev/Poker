pokerApp.component('userserviceForm', {
    templateUrl: 'view/fragments/userservice.html',
    controller: function (userservice) {
        this.username = userservice.getName();
    }
});
