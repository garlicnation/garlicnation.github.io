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

goog.provide('CoreOverlayEventType');


/**
 * Constants for event names fired by core-overlay elements.
 * @enum {string}
 */
CoreOverlayEventType = {
  // Fired when the `core-overlay`'s `opened` property changes.
  CORE_OVERLAY-OPEN: 'core-overlay-open',
  // Fired when the `core-overlay` has completely opened.
  CORE_OVERLAY-OPEN-COMPLETED: 'core-overlay-open-completed',
  // Fired when the `core-overlay` has completely closed.
  CORE_OVERLAY-CLOSE-COMPLETED: 'core-overlay-close-completed',
  // Fired when the `core-overlay` needs to position itself. Optionally, implement
  // in order to position an overlay via code. If the overlay was not otherwise
  // positioned, it's important to indicate how the overlay has been positioned by
  // setting the `dimensions.position` object. For example, if the overlay has been
  // positioned via setting `right` and `top`, set dimensions.position to an
  // object like this: `{v: 'top', h: 'right'}`.
  CORE_OVERLAY-POSITION: 'core-overlay-position'
};
