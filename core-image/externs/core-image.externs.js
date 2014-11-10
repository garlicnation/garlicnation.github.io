/**
 * @fileoverview Generated closure compiler externs for core-image.
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
var CoreImageElement = new function() {};


/**
 * 
 * The URL of an image.
 * 
 * @type {string}
 */
CoreImageElement.prototype.src


/**
 * 
 * When false, the image is prevented from loading and any placeholder is
 * shown.  This may be useful when a binding to the src property is known to
 * be invalid, to prevent 404 requests.
 * 
 * @type {string}
 */
CoreImageElement.prototype.src


/**
 * 
 * Sets a sizing option for the image.  Valid values are `contain` (full 
 * aspect ratio of the image is contained within the element and 
 * letterboxed) or `cover` (image is cropped in order to fully cover the
 * bounds of the element), or `null` (default: image takes natural size).
 * 
 * @type {string}
 */
CoreImageElement.prototype.sizing


/**
 * 
 * When a sizing option is uzed (`cover` or `contain`), this determines
 * how the image is aligned within the element bounds.
 * 
 * @type {string}
 */
CoreImageElement.prototype.position


/**
 * 
 * When `true`, any change to the `src` property will cause the `placeholder`
 * image to be shown until the 
 * 
 * @type {boolean}
 */
CoreImageElement.prototype.preload


/**
 * 
 * This image will be used as a background/placeholder until the src image has
 * loaded.  Use of a data-URI for placeholder is encouraged for instant rendering.
 * 
 * @type {string}
 */
CoreImageElement.prototype.placeholder


/**
 * 
 * When `preload` is true, setting `fade` to true will cause the image to
 * fade into place.
 * 
 * @type {boolean}
 */
CoreImageElement.prototype.fade


/**
 * 
 * Read-only value that tracks the loading state of the image when the `preload`
 * option is used.
 * 
 * @type {boolean}
 */
CoreImageElement.prototype.loading


/**
 * 
 * Can be used to set the width of image (e.g. via binding); size may also be
 * set via CSS.
 * 
 * @type {number}
 */
CoreImageElement.prototype.width


/**
 * 
 * Can be used to set the height of image (e.g. via binding); size may also be
 * set via CSS.
 * 
 * @type {number}
 */
CoreImageElement.prototype.height
