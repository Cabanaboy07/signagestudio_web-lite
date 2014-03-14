/**
 This independent class manages a set of elements all designed to provide user with UI for font settings
 @class FontSelector
 @constructor
 @return {Object} instantiated FontSelector
 **/
define(['jquery', 'backbone'], function ($, Backbone) {

    BB.SERVICES.FONT_SELECTOR = 'FontSelector';

    var FontSelector = BB.View.extend({

        /**
         Init the ChannelList component and enable sortable channels UI via drag and drop operations.
         @method initialize
         **/
        initialize: function () {
            var self = this;

            self.m_colorSettings = {
                animationSpeed: 50,
                animationEasing: 'swing',
                change: null,
                changeDelay: 0,
                control: 'hue',
                defaultValue: '',
                hide: null,
                hideSpeed: 100,
                inline: false,
                letterCase: 'lowercase',
                opacity: false,
                position: 'bottom left',
                show: null,
                showSpeed: 100,
                theme: 'bootstrap'
            };

            _.extend(self.m_colorSettings, self.options['colorSettings']);

            self.$el = $(Elements.FONT_SELECTOR_TEMPLATE).clone()
            self.el = self.$el[0];
            $(self.options.appendTo).append(self.el).fadeIn('fast');
            self.$el.show();
            self._initColorSelector();
        },

        events: {
            'click': '_onClick'
        },

        /**
         Init the minicolors widget under this created instance
         @method _initColorSelector
         **/
        _initColorSelector: function () {
            var self = this;
            self.$el.find(Elements.CLASS_FONT_SELECTOR_MINICOLOR).minicolors(self.m_colorSettings);
        },

        _onClick: function (e) {
            var self = this;
            $(e.target).closest('button').toggleClass('active');
        }

    });

    return FontSelector;

});