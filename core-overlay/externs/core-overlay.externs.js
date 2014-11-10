/**
 * @fileoverview Generated closure compiler externs for core-overlay.
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
var CoreOverlayElement = new function() {};


/**
 * 
 * The target element that will be shown when the overlay is 
 * opened. If unspecified, the core-overlay itself is the target.
 * 
 * @type {Object}
 */
CoreOverlayElement.prototype.target


/**
 * 
 * A `core-overlay`'s size is guaranteed to be 
 * constrained to the window size. To achieve this, the sizingElement
 * is sized with a max-height/width. By default this element is the 
 * target element, but it can be specifically set to a specific element
 * inside the target if that is more appropriate. This is useful, for 
 * example, when a region inside the overlay should scroll if needed.
 * 
 * @type {Object}
 */
CoreOverlayElement.prototype.sizingTarget


/**
 * 
 * Set opened to true to show an overlay and to false to hide it.
 * A `core-overlay` may be made initially opened by setting its
 * `opened` attribute.
 * @type {boolean}
 */
CoreOverlayElement.prototype.opened


/**
 * 
 * If true, the overlay has a backdrop darkening the rest of the screen.
 * The backdrop element is attached to the document body and may be styled
 * with the class `core-overlay-backdrop`. When opened the `core-opened`
 * class is applied.
 * 
 * @type {boolean}
 */
CoreOverlayElement.prototype.backdrop


/**
 * 
 * If true, the overlay is guaranteed to display above page content.
 * 
 * @type {boolean}
 */
CoreOverlayElement.prototype.layered


/**
 * 
 * By default an overlay will close automatically if the user
 * taps outside it or presses the escape key. Disable this
 * behavior by setting the `autoCloseDisabled` property to true.
 * @type {boolean}
 */
CoreOverlayElement.prototype.autoCloseDisabled


/**
 * 
 * By default an overlay will focus its target or an element inside
 * it with the `autoFocus` attribute. Disable this
 * behavior by setting the `autoFocusDisabled` property to true.
 * @type {boolean}
 */
CoreOverlayElement.prototype.autoFocusDisabled


/**
 * 
 * This property specifies an attribute on elements that should
 * close the overlay on tap. Should not set `closeSelector` if this
 * is set.
 * 
 * @type {string}
 */
CoreOverlayElement.prototype.closeAttribute


/**
 * 
 * This property specifies a selector matching elements that should
 * close the overlay on tap. Should not set `closeAttribute` if this
 * is set.
 * 
 * @type {string}
 */
CoreOverlayElement.prototype.closeSelector


/**
 * 
 * The transition property specifies a string which identifies a 
 * <a href="../core-transition/">`core-transition`</a> element that 
 * will be used to help the overlay open and close. The default
 * `core-transition-fade` will cause the overlay to fade in and out.
 * 
 * @type {string}
 */
CoreOverlayElement.prototype.transition
