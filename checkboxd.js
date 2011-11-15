// jQuery Checkboxd Plugin
// Replaces checkboxes and radio buttons with styled spans
// version 0.1, 19 October 2011
// by Alex Torrance (hello@alextorrance.co.uk)

(function($) {

  // here we go!
  $.checkboxd = function(element, options) {

    // plugin's default options
    // this is private property and is  accessible only from inside the plugin
    var defaults = {
      checkboxClass: 'checkboxd',
      radioClass:    'radiod',
      checkedClass:  'checked',
      activeClass:   'active'
    };

    // to avoid confusions, use "plugin" to reference the current instance of the object
    var plugin = this;

    // this will hold the merged default, and user-provided options
    // plugin's properties will be available through this object like:
    // plugin.settings.propertyName from inside the plugin or
    // element.data('checkboxd').settings.propertyName from outside the plugin, where "element" is the
    // element the plugin is attached to;
    plugin.settings = {};

    var $element = $(element),  // reference to the jQuery version of DOM element the plugin is attached to
    element = element;          // reference to the actual DOM element

    // the "constructor" method that gets called when the object is created
    plugin.init = function() {
      // the plugin's final properties are the merged default and user-provided options (if any)
      plugin.settings = $.extend({}, defaults, options);

      // code goes here
      var spanClass;
      
      if (element.type == 'checkbox') {
        spanClass = plugin.settings.checkboxClass;
      } else if (element.type == 'radio') {
        spanClass = plugin.settings.radioClass;
      }
      
      var $span = $('<span class="'+spanClass+'"></span>').insertBefore($element.hide());
      if ($element.is(':checked')) $span.addClass(plugin.settings.checkedClass);
    
      $span.bind('mousedown', function(e) { $(this).addClass(plugin.settings.activeClass); })
        .bind('mouseup mouseout', function(e) { $(this).removeClass(plugin.settings.activeClass); })
        .bind('click', function(e) {
          element.checked = (!$element.is(':checked'));
          $element.change(); // setting element.checked doesn't fire change event, so do it manually
        });

      $element.bind('change', function(e) {
        if ($element.is(':checked')) { $span.addClass(plugin.settings.checkedClass);
        } else { $span.removeClass(plugin.settings.checkedClass); }
        
        if (element.type == 'radio') {
          $('input[name='+element.name+']').not($element).siblings('span.checkbox').removeClass(plugin.settings.checkedClass);
        }
      });
    };

    // fire up the plugin!
    // call the "constructor" method
    plugin.init();
  };

  // add the plugin to the jQuery.fn object
  $.fn.checkboxd = function(options) {
    // iterate through the DOM elements we are attaching the plugin to
    return this.each(function() {
      // if plugin has not already been attached to the element
      if (undefined == $(this).data('checkboxd')) {

        // create a new instance of the plugin
        // pass the DOM element and the user-provided options as arguments
        var plugin = new $.checkboxd(this, options);

        // in the jQuery version of the element
        // store a reference to the plugin object
        // you can later access the plugin and its methods and properties like
        // element.data('checkboxd').publicMethod(arg1, arg2, ... argn) or
        // element.data('checkboxd').settings.propertyName
        $(this).data('checkboxd', plugin);
      }
    });
  };
})(jQuery);