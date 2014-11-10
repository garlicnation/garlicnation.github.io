/**
 * @fileoverview Generated closure compiler externs for core-dropdown.
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

/** @constructor @extends {CoreOverlayElement} **/
var CoreDropdownElement = new function() {};


/**
 * 
 * The element associated with this dropdown, usually the element that triggers
 * the menu. If unset, this property will default to the target's parent node
 * or shadow host.
 * 
 * @type {Node}
 */
CoreDropdownElement.prototype.relatedTarget


/**
 * 
 * The horizontal alignment of the popup relative to `relatedTarget`. `left`
 * means the left edges are aligned together. `right` means the right edges
 * are aligned together.
 * 
 * @type {'left' | 'right'}
 */
CoreDropdownElement.prototype.halign


/**
 * 
 * The vertical alignment of the popup relative to `relatedTarget`. `top` means
 * the top edges are aligned together. `bottom` means the bottom edges are
 * aligned together.
 * 
 * @type {'top' | 'bottom'}
 */
CoreDropdownElement.prototype.valign
