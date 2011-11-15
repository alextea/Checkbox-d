# Checkbox'd #

__Checkbox'd__ is a simple, unobtrusive jQuery based replacement script for checkbox and radio inputs.

__Checkbox'd__ makes minimal changes to the existing DOM and does not come with any supplied CSS or other assets. The implementation and styling is completely down to you.

## Basic Usage ##

include jQuery and __Checkbox'd__ and apply to your elements.

```html
<label><input type="checkbox" name="foo" value="" /> Yes, I understand.</label>

<label for="radio_1">Option 1</label>
<input type="radio" name="foobar" value="foo" id="radio_1" />

<label for="radio_2">Option 2</label>
<input type="radio" name="foobar" value="bar" id="radio_2" />

<script>
  $('input[type="checkbox"],input[type="radio"]').checkboxd();
</script>
```

__Checkbox'd__ will insert a `span` before your `input` elements and hide them from view. The `span`s can then be styled with different classes for checked and unchecked states with an additional active class added as the input is checked.

All events are handled through the `input`'s native event handlers.

## Options ##

There are some basic options to help customise the plugin. These are passed as an object on initialisation.

```javascript
$('input.checkbox').checkboxd({
  checkboxClass: 'checkboxd',
  radioClass:    'radiod',
  checkedClass:  'checked',
  activeClass:   'active'
});
```
The options are as follows:

`checkboxClass` _string_
default: _checboxd_
The class applied to the checkbox replacement span.

`radioClass` _string_
default: _radiod_
The class applied to the radio replacement span.

`checkedClass` _string_
default: _checked_
The class applied to the replacement span when the input is checked.

`activeClass` _string_
default: _active_
The class applied to the replacement span when the input is being checked.


