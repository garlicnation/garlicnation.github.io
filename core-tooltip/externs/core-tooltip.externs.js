/**
 * @fileoverview Generated closure compiler externs for core-tooltip.
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

/** @constructor @extends {CoreFocusableElement} **/
var CoreTooltipElement = new function() {};


/**
 * 
 * A simple string label for the tooltip to display. To display a rich
 * HTML tooltip instead, omit `label` and include the `tip` attribute
 * on a child node of `core-tooltip`.
 * 
 * @type {string}
 */
CoreTooltipElement.prototype.label


/**
 * 
 * Forces the tooltip to display. If `disabled` is set, this property is ignored.
 * 
 * @type {boolean}
 */
CoreTooltipElement.prototype.show


/**
 * 
 * Positions the tooltip to the top, right, bottom, left of its content.
 * 
 * @type {string}
 */
CoreTooltipElement.prototype.position


/**
 * 
 * If true, the tooltip an arrow pointing towards the content.
 * 
 * @type {boolean}
 */
CoreTooltipElement.prototype.noarrow


/**
 * 
 * Customizes the attribute used to specify which content
 * is the rich HTML tooltip.
 * 
 * @type {string}
 */
CoreTooltipElement.prototype.tipAttribute
