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

goog.provide('PaperToastEventType');


/**
 * Constants for event names fired by paper-toast elements.
 * @enum {string}
 */
PaperToastEventType = {
  // Fired when the `paper-toast`'s `opened` property changes.
  CORE_OVERLAY-OPEN: 'core-overlay-open',
  // Fired when the `paper-toast` has completely opened.
  CORE_OVERLAY-OPEN-COMPLETED: 'core-overlay-open-completed',
  // Fired when the `paper-toast` has completely closed.
  CORE_OVERLAY-CLOSE-COMPLETED: 'core-overlay-close-completed'
};
