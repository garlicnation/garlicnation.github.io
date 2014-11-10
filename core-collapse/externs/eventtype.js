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

goog.provide('CoreCollapseEventType');


/**
 * Constants for event names fired by core-collapse elements.
 * @enum {string}
 */
CoreCollapseEventType = {
  // Fired when the `core-collapse`'s `opened` property changes.
  CORE_COLLAPSE-OPEN: 'core-collapse-open',
  // Fired when the target element has been resized as a result of the opened
  // state changing.
  CORE_RESIZE: 'core-resize'
};
