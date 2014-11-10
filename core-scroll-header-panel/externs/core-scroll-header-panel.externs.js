/**
 * @fileoverview Generated closure compiler externs for core-scroll-header-panel.
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

/** @constructor @extends {PolymerElement} **/
var CoreScrollHeaderPanelElement = new function() {};


/**
 * 
 * If true, the header's height will condense to `_condensedHeaderHeight`
 * as the user scrolls down from the top of the content area.
 * 
 * @type {boolean}
 */
CoreScrollHeaderPanelElement.prototype.condenses


/**
 * 
 * If true, no cross-fade transition from one background to another.
 * 
 * @type {boolean}
 */
CoreScrollHeaderPanelElement.prototype.noDissolve


/**
 * 
 * If true, the header doesn't slide back in when scrolling back up.
 * 
 * @type {boolean}
 */
CoreScrollHeaderPanelElement.prototype.noReveal


/**
 * 
 * If true, the header is fixed to the top and never moves away.
 * 
 * @type {boolean}
 */
CoreScrollHeaderPanelElement.prototype.fixed


/**
 * 
 * If true, the condensed header is always shown and does not move away.
 * 
 * @type {boolean}
 */
CoreScrollHeaderPanelElement.prototype.keepCondensedHeader


/**
 * 
 * The height of the header when it is at its full size.
 * 
 * By default, the height will be measured when it is ready.  If the height
 * changes later the user needs to either set this value to reflect the
 * new height or invoke `measureHeaderHeight()`.
 * 
 * @type {number}
 */
CoreScrollHeaderPanelElement.prototype.headerHeight


/**
 * 
 * The height of the header when it is condensed.
 * 
 * By default, `_condensedHeaderHeight` is 1/3 of `headerHeight` unless
 * this is specified.
 * 
 * @type {number}
 */
CoreScrollHeaderPanelElement.prototype.condensedHeaderHeight


/**
 * 
 * By default, the top part of the header stays when the header is being
 * condensed.  Set this to true if you want the top part of the header
 * to be scrolled away.
 * 
 * @type {boolean}
 */
CoreScrollHeaderPanelElement.prototype.scrollAwayTopbar
