/**
 * @fileoverview Generated closure compiler externs for core-popup-menu.
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
var CorePopupMenuElement = new function() {};


/**
 * 
 * The element associated with this menu, usually the element that
 * causes the menu the open.
 * 
 * @type {Node}
 */
CorePopupMenuElement.prototype.relatedTarget


/**
 * 
 * If true, the menu is currently visible.
 * 
 * @type {boolean}
 */
CorePopupMenuElement.prototype.opened


/**
 * 
 * The horizontal alignment of the pulldown menu relative to the button.
 * 
 * @type {'left' | 'right' | 'auto'}
 */
CorePopupMenuElement.prototype.halign


/**
 * 
 * The vertical alignment of the pulldown menu relative to the button.
 * 
 * @type {'bottom' | 'top' | 'auto'}
 */
CorePopupMenuElement.prototype.valign


/**
 * 
 * The transition property specifies a string which identifies a 
 * <a href="../core-transition/">`core-transition`</a> element that 
 * will be used to help the overlay open and close. The default
 * `core-transition-fade` will cause the overlay to fade in and out.
 * 
 * @type {string}
 */
CorePopupMenuElement.prototype.transition


/**
 * 
 * Gets or sets the selected element.  Default to use the index
 * of the item element.
 * 
 * @type {Object}
 */
CorePopupMenuElement.prototype.selected


/**
 * 
 * Specifies the attribute to be used for "selected" attribute.
 * 
 * @type {string}
 */
CorePopupMenuElement.prototype.valueattr


/**
 * 
 * Specifies the CSS class to be used to add to the selected element.
 * 
 * @type {string}
 */
CorePopupMenuElement.prototype.selectedClass


/**
 * 
 * Specifies the property to be used to set on the selected element
 * to indicate its active state.
 * 
 * @type {string}
 */
CorePopupMenuElement.prototype.selectedProperty


/**
 * 
 * Specifies the attribute to set on the selected element to indicate
 * its active state.
 * 
 * @type {string}
 */
CorePopupMenuElement.prototype.selectedAttribute


/**
 * 
 * Returns the currently selected element.
 * 
 * @type {Object}
 */
CorePopupMenuElement.prototype.selectedItem


/**
 * 
 * In single selection, this returns the model associated with the
 * selected element.
 * 
 * @type {Object}
 */
CorePopupMenuElement.prototype.selectedModel


/**
 * 
 * In single selection, this returns the selected index.
 * 
 * @type {number}
 */
CorePopupMenuElement.prototype.selectedIndex
