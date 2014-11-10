/**
 * @fileoverview Generated closure compiler externs for paper-slider.
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

/** @constructor @extends {CoreRangeElement} **/
var PaperSliderElement = new function() {};


/**
 * 
 * If true, the slider thumb snaps to tick marks evenly spaced based
 * on the `step` property value.
 * 
 * @type {boolean}
 */
PaperSliderElement.prototype.snaps


/**
 * 
 * If true, a pin with numeric value label is shown when the slider thumb 
 * is pressed.  Use for settings for which users need to know the exact 
 * value of the setting.
 * 
 * @type {boolean}
 */
PaperSliderElement.prototype.pin


/**
 * 
 * If true, this slider is disabled.  A disabled slider cannot be tapped
 * or dragged to change the slider value.
 * 
 * @type {boolean}
 */
PaperSliderElement.prototype.disabled


/**
 * 
 * The number that represents the current secondary progress.
 * 
 * @type {number}
 */
PaperSliderElement.prototype.secondaryProgress


/**
 * 
 * If true, an input is shown and user can use it to set the slider value.
 * 
 * @type {boolean}
 */
PaperSliderElement.prototype.editable


/**
 * 
 * The immediate value of the slider.  This value is updated while the user
 * is dragging the slider.
 * 
 * @type {number}
 */
PaperSliderElement.prototype.immediateValue
