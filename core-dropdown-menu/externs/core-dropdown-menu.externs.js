/**
 * @fileoverview Generated closure compiler externs for core-dropdown-menu.
 *
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 * found at http://polymer.github.io/AUTHORS.txt. The complete set of
 * contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 * distributed by Google as part of the polymer project is also subject to an
 * additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
 */

/** @constructor @extends {PolymerElement} **/
var CoreDropdownMenuElement = new function() {};


/**
 * 
 * True if the menu is open.
 * 
 * @type {boolean}
 */
CoreDropdownMenuElement.prototype.opened


/**
 * 
 * A label for the control. The label is displayed if no item is selected.
 * 
 * @type {string}
 */
CoreDropdownMenuElement.prototype.label


/**
 * 
 * The currently selected element. By default this is the index of the item element.
 * If you want a specific attribute value of the element to be used instead of the
 * index, set `valueattr` to that attribute name.
 * 
 * @type {Object}
 */
CoreDropdownMenuElement.prototype.selected


/**
 * 
 * Specifies the attribute to be used for "selected" attribute.
 * 
 * @type {string}
 */
CoreDropdownMenuElement.prototype.valueattr


/**
 * 
 * Specifies the CSS class to be used to add to the selected element.
 * 
 * @type {string}
 */
CoreDropdownMenuElement.prototype.selectedClass


/**
 * 
 * Specifies the property to be used to set on the selected element
 * to indicate its active state.
 * 
 * @type {string}
 */
CoreDropdownMenuElement.prototype.selectedProperty


/**
 * 
 * Specifies the attribute to set on the selected element to indicate
 * its active state.
 * 
 * @type {string}
 */
CoreDropdownMenuElement.prototype.selectedAttribute


/**
 * 
 * The currently selected element.
 * 
 * @type {Object}
 */
CoreDropdownMenuElement.prototype.selectedItem


/**
 * 
 * Horizontally align the overlay with the control.
 * 
 * @type {"left" | "right"}
 */
CoreDropdownMenuElement.prototype.halign


/**
 * 
 * Vertically align the dropdown menu with the control.
 * 
 * @type {"top" | "bottom"}
 */
CoreDropdownMenuElement.prototype.valign


/**
 * 
 * If true, the overlay is guaranteed to display above page content.
 * 
 * @type {boolean}
 */
CoreDropdownMenuElement.prototype.layered
