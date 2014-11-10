/**
 * @fileoverview Generated closure compiler externs for core-style.
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
var CoreStyleElement = new function() {};


/**
 * 
 * The `id` property should be set if the `core-style` is a producer
 * of styles. In this case, the `core-style` should have text content
 * that is cssText.
 * 
 * @type {string}
 */
CoreStyleElement.prototype.id


/**
 * 
 * The `ref` property should be set if the `core-style` element is a 
 * consumer of styles. Set it to the `id` of the desired `core-style`
 * element.
 * 
 * @type {string}
 */
CoreStyleElement.prototype.ref


/**
 * 
 * The `list` is a map of all `core-style` producers stored by `id`. It 
 * should be considered readonly. It's useful for nesting one `core-style`
 * inside another.
 * 
 * @type {object (readonly)}
 */
CoreStyleElement.prototype.list
