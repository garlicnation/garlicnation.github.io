/**
 * @fileoverview Generated closure compiler externs for core-menu-button.
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
var CoreMenuButtonElement = new function() {};


/**
 * 
 * The icon to display.
 * @type {string}
 */
CoreMenuButtonElement.prototype.icon


/**
 * 
 * Set to true to open the menu.
 * @type {boolean}
 */
CoreMenuButtonElement.prototype.opened


/**
 * 
 * Set to true to cause the menu popup to be displayed inline rather
 * than in its own layer.
 * @type {boolean}
 */
CoreMenuButtonElement.prototype.inlineMenu


/**
 * 
 * Horizontally align the overlay with the button.
 * @type {string}
 */
CoreMenuButtonElement.prototype.halign


/**
 * 
 * Display the overlay on top or below the button.
 * @type {string}
 */
CoreMenuButtonElement.prototype.valign


/**
 * 
 * If true, the selection will persist when the menu is opened
 * and closed multiple times.
 * 
 * @type {boolean}
 */
CoreMenuButtonElement.prototype.stickySelection


/**
 * 
 * The index of the selected menu item.
 * @type {number}
 */
CoreMenuButtonElement.prototype.selected


/**
 * 
 * Specifies the attribute to be used for "selected" attribute.
 * 
 * @type {string}
 */
CoreMenuButtonElement.prototype.valueattr


/**
 * 
 * Specifies the CSS class to be used to add to the selected element.
 * 
 * @type {string}
 */
CoreMenuButtonElement.prototype.selectedClass


/**
 * 
 * Specifies the property to be used to set on the selected element
 * to indicate its active state.
 * 
 * @type {string}
 */
CoreMenuButtonElement.prototype.selectedProperty


/**
 * 
 * Specifies the attribute to set on the selected element to indicate
 * its active state.
 * 
 * @type {string}
 */
CoreMenuButtonElement.prototype.selectedAttribute


/**
 * 
 * Returns the currently selected element. In multi-selection this returns
 * an array of selected elements.
 * Note that you should not use this to set the selection. Instead use
 * `selected`.
 * 
 * @type {Object}
 */
CoreMenuButtonElement.prototype.selectedItem


/**
 * 
 * In single selection, this returns the model associated with the
 * selected element.
 * Note that you should not use this to set the selection. Instead use
 * `selected`.
 * 
 * @type {Object}
 */
CoreMenuButtonElement.prototype.selectedModel


/**
 * 
 * In single selection, this returns the selected index.
 * Note that you should not use this to set the selection. Instead use
 * `selected`.
 * 
 * @type {number}
 */
CoreMenuButtonElement.prototype.selectedIndex


/**
 * 
 * Nodes with local name that are in the list will not be included
 * in the selection items.
 * 
 * @type {string}
 */
CoreMenuButtonElement.prototype.excludedLocalNames
