define(['text!templates/accounts/accountlist.html', 'views/accounts/account'], function (template, AccountView) {
    var AccountListView = Backbone.View.extend({
        //el: '#list-editor',
        template: _.template(template),

        initialize: function (app) {
            this.app = app;
        },

        renderAccount: function(accountModel){
            var accountView = new AccountView({ model: accountModel });
            var $el = this.$el.find('#account-list-container');
            $el.append(accountView.render().el);
        },

        render: function () {
            this.$el.html(this.template());
            var self = this;

            this.collection.fetch({
                reset: true,
                success: function () {
                    self.collection.each(function (account) {
                        self.renderAccount(account);
                    });
                }
            });

            return this;
        }
    });

    return AccountListView;
});
