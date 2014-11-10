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

goog.provide('CoreMediaQueryEventType');


/**
 * Constants for event names fired by core-media-query elements.
 * @enum {string}
 */
CoreMediaQueryEventType = {
  // core-media-query can be used to data bind to a CSS media query.
  // The "query" property is a bare CSS media query.
  // The "queryMatches" property will be a boolean representing if the page matches that media query.
  // 
  // core-media-query uses media query listeners to dynamically update the "queryMatches" property.
  // A "core-media-change" event also fires when queryMatches changes.
  // 
  // Example:
  // 
  //      <core-media-query query="max-width: 640px" queryMatches="{{phoneScreen}}"></core-media-query>
  // 
  // 
  // 
  // Fired when the media query state changes
  CORE_MEDIA-CHANGE: 'core-media-change'
};
