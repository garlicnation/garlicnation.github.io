/**
 * @fileoverview Generated closure compiler externs for core-collapse.
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
var CoreCollapseElement = new function() {};


/**
 * 
 * The target element that will be opened when the `core-collapse` is 
 * opened. If unspecified, the `core-collapse` itself is the target.
 * 
 * @type {object}
 */
CoreCollapseElement.prototype.target


/**
 * 
 * If true, the orientation is horizontal; otherwise is vertical.
 * 
 * @type {boolean}
 */
CoreCollapseElement.prototype.horizontal


/**
 * 
 * Set opened to true to show the collapse element and to false to hide it.
 * 
 * @type {boolean}
 */
CoreCollapseElement.prototype.opened


/**
 * 
 * Collapsing/expanding animation duration in second.
 * 
 * @type {number}
 */
CoreCollapseElement.prototype.duration


/**
 * 
 * If true, the size of the target element is fixed and is set
 * on the element.  Otherwise it will try to 
 * use auto to determine the natural size to use
 * for collapsing/expanding.
 * 
 * @type {boolean}
 */
CoreCollapseElement.prototype.fixedSize


/**
 * 
 * By default the collapsible element is set to overflow hidden. This helps
 * avoid element bleeding outside the region and provides consistent overflow
 * style across opened and closed states. Set this property to true to allow 
 * the collapsible element to overflow when it's opened.
 * 
 * @type {boolean}
 */
CoreCollapseElement.prototype.allowOverflow
