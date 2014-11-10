/**
 * @fileoverview Generated closure compiler externs for paper-focusable.
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
var PaperFocusableElement = new function() {};


/**
 * 
 * If true, the button is currently active either because the
 * user is holding down the button, or the button is a toggle
 * and is currently in the active state.
 * 
 * @type {boolean}
 */
PaperFocusableElement.prototype.active


/**
 * 
 * If true, the element currently has focus due to keyboard
 * navigation.
 * 
 * @type {boolean}
 */
PaperFocusableElement.prototype.focused


/**
 * 
 * If true, the user is currently holding down the button.
 * 
 * @type {boolean}
 */
PaperFocusableElement.prototype.pressed


/**
 * 
 * If true, the user cannot interact with this element.
 * 
 * @type {boolean}
 */
PaperFocusableElement.prototype.disabled


/**
 * 
 * If true, the button toggles the active state with each tap.
 * Otherwise, the button becomes active when the user is holding
 * it down.
 * 
 * @type {boolean}
 */
PaperFocusableElement.prototype.isToggle
