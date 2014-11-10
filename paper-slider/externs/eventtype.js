/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt. The complete set of authors may be
 * found at http://polymer.github.io/AUTHORS.txt. The complete set of
 * contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt. Code
 * distributed by Google as part of the polymer project is also subject to an
 * additional IP rights grant found at http://polymer.github.io/PATENTS.txt.
 */

goog.provide('PaperSliderEventType');


/**
 * Constants for event names fired by paper-slider elements.
 * @enum {string}
 */
PaperSliderEventType = {
  // Fired when the slider's value changes.
  CORE_CHANGE: 'core-change',
  // Fired when the slider's value changes due to user interaction.
  // 
  // Changes to the slider's value due to changes in an underlying
  // bound variable will not trigger this event.
  CHANGE: 'change'
};
