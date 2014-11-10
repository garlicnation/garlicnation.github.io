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

goog.provide('CoreSelectorEventType');


/**
 * Constants for event names fired by core-selector elements.
 * @enum {string}
 */
CoreSelectorEventType = {
  // Fired when an item's selection state is changed. This event is fired both
  // when an item is selected or deselected. The `isSelected` detail property
  // contains the selection state.
  CORE_SELECT: 'core-select',
  // Fired when an item element is tapped.
  CORE_ACTIVATE: 'core-activate'
};
