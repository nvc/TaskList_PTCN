define(function () {
    var Account = Backbone.Model.extend({
        defaults: { username: 'nvc', password: 'nvc' }
    });

    return Account;
});
