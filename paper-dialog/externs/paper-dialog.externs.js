/**
 * @fileoverview Generated closure compiler externs for paper-dialog.
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
var PaperDialogElement = new function() {};


/**
 * 
 * Set opened to true to show the dialog and to false to hide it.
 * A dialog may be made intially opened by setting its opened attribute.
 * @type {boolean}
 */
PaperDialogElement.prototype.opened


/**
 * 
 * If true, the dialog has a backdrop darkening the rest of the screen.
 * The backdrop element is attached to the document body and may be styled
 * with the class `core-overlay-backdrop`. When opened the `core-opened`
 * class is applied.
 * 
 * @type {boolean}
 */
PaperDialogElement.prototype.backdrop


/**
 * 
 * If true, the dialog is guaranteed to display above page content.
 * 
 * @type {boolean}
 */
PaperDialogElement.prototype.layered


/**
 * 
 * By default a dialog will close automatically if the user
 * taps outside it or presses the escape key. Disable this
 * behavior by setting the `autoCloseDisabled` property to true.
 * @type {boolean}
 */
PaperDialogElement.prototype.autoCloseDisabled


/**
 * 
 * This property specifies a selector matching elements that should
 * close the dialog on tap.
 * 
 * @type {string}
 */
PaperDialogElement.prototype.closeSelector


/**
 * 
 * @type {string}
 */
PaperDialogElement.prototype.heading


/**
 * 
 * Set this property to the id of a `core-transition` element to specify
 * the transition to use when opening/closing this dialog.
 * 
 * @type {string}
 */
PaperDialogElement.prototype.transition
