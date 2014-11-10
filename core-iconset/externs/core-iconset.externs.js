/**
 * @fileoverview Generated closure compiler externs for core-iconset.
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

/** @constructor @extends {CoreMetaElement} **/
var CoreIconsetElement = new function() {};


/**
 * 
 * The URL of the iconset image.
 * 
 * @type {string}
 */
CoreIconsetElement.prototype.src


/**
 * 
 * The width of the iconset image. This must only be specified if the
 * icons are arranged into separate rows inside the image.
 * 
 * @type {number}
 */
CoreIconsetElement.prototype.width


/**
 * 
 * A space separated list of names corresponding to icons in the iconset
 * image file. This list must be ordered the same as the icon images
 * in the image file.
 * 
 * @type {string}
 */
CoreIconsetElement.prototype.icons


/**
 * 
 * The size of an individual icon. Note that icons must be square.
 * 
 * @type {number}
 */
CoreIconsetElement.prototype.iconSize


/**
 * 
 * The horizontal offset of the icon images in the inconset src image.
 * This is typically used if the image resource contains additional images
 * beside those intended for the iconset.
 * 
 * @type {number}
 */
CoreIconsetElement.prototype.offsetX


/**
 * 
 * The vertical offset of the icon images in the inconset src image.
 * This is typically used if the image resource contains additional images
 * beside those intended for the iconset.
 * 
 * @type {number}
 */
CoreIconsetElement.prototype.offsetY
