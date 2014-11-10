/**
 * @fileoverview Generated closure compiler externs for core-animated-pages.
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

/** @constructor @extends {CoreSelectorElement} **/
var CoreAnimatedPagesElement = new function() {};


/**
 * 
 * A space-delimited string of transitions to use when switching between pages in this element.
 * The strings are `id`s of `core-transition-pages` elements included elsewhere. See the
 * individual transition's document for specific details.
 * 
 * @type {string}
 */
CoreAnimatedPagesElement.prototype.transitions


/**
 * 
 * The last page selected. This property is useful to dynamically set transitions based
 * on incoming and outgoing pages.
 * 
 * @type {Object}
 */
CoreAnimatedPagesElement.prototype.lastSelected
