/**
 * @fileoverview Generated closure compiler externs for core-splitter.
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
var CoreSplitterElement = new function() {};


/**
 * 
 * Possible values are `left`, `right`, `up` and `down`.
 * 
 * @type {string}
 */
CoreSplitterElement.prototype.direction


/**
 * 
 * Minimum width to which the splitter target can be sized, e.g. 
 * `minSize="100px"`
 * 
 * @type {string}
 */
CoreSplitterElement.prototype.minSize


/**
 * 
 * Locks the split bar so it can't be dragged.
 * 
 * @type {boolean}
 */
CoreSplitterElement.prototype.locked


/**
 * 
 * By default the parent and siblings of the splitter are set to overflow hidden. This helps
 * avoid elements bleeding outside the splitter regions. Set this property to true to allow
 * these elements to overflow.
 * 
 * @type {boolean}
 */
CoreSplitterElement.prototype.allowOverflow
