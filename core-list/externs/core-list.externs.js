/**
 * @fileoverview Generated closure compiler externs for core-list.
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
var CoreListElement = new function() {};


/**
 * 
 * 
 * An array of source data for the list to display.
 * 
 * @type {array}
 */
CoreListElement.prototype.data


/**
 * 
 * 
 * An optional element on which to listen for scroll events.
 * 
 * @type {Element}
 */
CoreListElement.prototype.scrollTarget


/**
 * 
 * 
 * The height of a list item. `core-list` currently supports only fixed-height
 * list items. This height must be specified via the height property.
 * 
 * @type {number}
 */
CoreListElement.prototype.height


/**
 * 
 * 
 * The number of extra items rendered above the minimum set required to
 * fill the list's height.
 * 
 * @type {number}
 */
CoreListElement.prototype.extraItems


/**
 * 
 * 
 * When true, tapping a row will select the item, placing its data model
 * in the set of selected items retrievable via the `selection` property.
 * 
 * Note that tapping focusable elements within the list item will not
 * result in selection, since they are presumed to have their own action.
 * 
 * @type {{boolean}}
 */
CoreListElement.prototype.selectionEnabled


/**
 * 
 * 
 * Set to true to support multiple selection.  Note, existing selection
 * state is maintained only when changing `multi` from `false` to `true`;
 * it is cleared when changing from `true` to `false`.
 * 
 * @type {boolean}
 */
CoreListElement.prototype.multi


/**
 * 
 * 
 * Data record (or array of records, if `multi: true`) corresponding to
 * the currently selected set of items.
 * 
 * @type {{any}}
 */
CoreListElement.prototype.selection
