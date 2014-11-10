/**
 * @fileoverview Generated closure compiler externs for core-input.
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

/** @constructor @extends {InputElement} **/
var CoreInputElement = new function() {};


/**
 * 
 * The "committed" value of the input, ie. the input value when the user
 * hits the "enter" key or blurs the input after changing the value. You
 * can bind to this value instead of listening for the "change" event.
 * Setting this property has no effect on the input value.
 * 
 * @type {string}
 */
CoreInputElement.prototype.committedValue


/**
 * 
 * Set to true to prevent invalid input from being entered.
 * 
 * @type {boolean}
 */
CoreInputElement.prototype.preventInvalidInput
