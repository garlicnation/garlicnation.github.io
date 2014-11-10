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

goog.provide('CoreAnimationEventType');


/**
 * Constants for event names fired by core-animation elements.
 * @enum {string}
 */
CoreAnimationEventType = {
  // Fired when the animation completes.
  CORE_ANIMATION-FINISH: 'core-animation-finish',
  // Fired when the web animation object changes.
  CORE_ANIMATION-CHANGE: 'core-animation-change'
};
