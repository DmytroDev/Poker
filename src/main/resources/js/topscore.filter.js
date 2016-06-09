pokerApp.filter('humanize', function(){
    return function(input){
        if (parseInt(input) < 100000){
            return input;
        }else if (parseInt(input) < 10000000){
            return 'million';
        } else return 'billion';
    }
});
