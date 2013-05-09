define(['models/account'], function (Account) {
    var Accounts = Backbone.Collection.extend({
        model: Account,
        url: '/api/Accounts/Get'
    });

    return Accounts;
});