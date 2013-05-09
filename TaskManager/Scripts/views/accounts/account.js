define(['text!templates/accounts/account.html'], function (template) {
    var AccountView = Backbone.View.extend({
        tagName: 'li',
        template: _.template(template),

        initialize: function (app) {
            this.app = app;
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return AccountView;
});
