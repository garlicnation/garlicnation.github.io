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

goog.provide('CoreTransitionPagesEventType');


/**
 * Constants for event names fired by core-transition-pages elements.
 * @enum {string}
 */
CoreTransitionPagesEventType = {
  // Fired when the transition completes.
  CORE_TRANSITIONEND: 'core-transitionend'
};
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

goog.provide('CoreAnimatedPagesEventType');


/**
 * Constants for event names fired by core-animated-pages elements.
 * @enum {string}
 */
CoreAnimatedPagesEventType = {
  // Fired before a page transition occurs. Both pages involved in the transition are visible when
  // this event fires. This is useful if there is something the client needs to do when a page becomes
  // visible.
  CORE_ANIMATED-PAGES-TRANSITION-PREPARE: 'core-animated-pages-transition-prepare',
  // Fired when a page transition completes.
  CORE_ANIMATED-PAGES-TRANSITION-END: 'core-animated-pages-transition-end'
};
