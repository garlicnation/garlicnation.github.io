/**
 * @fileoverview Generated closure compiler externs for core-icon.
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
var CoreIconElement = new function() {};


/**
 * 
 * The URL of an image for the icon. If the src property is specified,
 * the icon property should not be.
 * 
 * @type {string}
 */
CoreIconElement.prototype.src


/**
 * 
 * Specifies the icon name or index in the set of icons available in
 * the icon's icon set. If the icon property is specified,
 * the src property should not be.
 * 
 * @type {string}
 */
CoreIconElement.prototype.icon


/**
 * 
 * Alternative text content for accessibility support.
 * If alt is present and not empty, it will set the element's role to img and add an aria-label whose content matches alt.
 * If alt is present and is an empty string, '', it will hide the element from the accessibility layer
 * If alt is not present, it will set the element's role to img and the element will fallback to using the icon attribute for its aria-label.
 * 
 * @type {string}
 */
CoreIconElement.prototype.alt
