/**
 * @fileoverview Generated closure compiler externs for core-drawer-panel.
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
var CoreDrawerPanelElement = new function() {};


/**
 * 
 * Width of the drawer panel.
 * 
 * @type {string}
 */
CoreDrawerPanelElement.prototype.drawerWidth


/**
 * 
 * Max-width when the panel changes to narrow layout.
 * 
 * @type {string}
 */
CoreDrawerPanelElement.prototype.responsiveWidth


/**
 * 
 * The panel that is being selected. `drawer` for the drawer panel and
 * `main` for the main panel.
 * 
 * @type {string}
 */
CoreDrawerPanelElement.prototype.selected


/**
 * 
 * The panel to be selected when `core-drawer-panel` changes to narrow
 * layout.
 * 
 * @type {string}
 */
CoreDrawerPanelElement.prototype.defaultSelected


/**
 * 
 * Returns true if the panel is in narrow layout.  This is useful if you
 * need to show/hide elements based on the layout.
 * 
 * @type {boolean}
 */
CoreDrawerPanelElement.prototype.narrow


/**
 * 
 * If true, position the drawer to the right.
 * 
 * @type {boolean}
 */
CoreDrawerPanelElement.prototype.rightDrawer


/**
 * 
 * If true, swipe to open/close the drawer is disabled.
 * 
 * @type {boolean}
 */
CoreDrawerPanelElement.prototype.disableSwipe


/**
 * 
 * This property specifies an attribute on elements that should
 * toggle the drawer on tap.
 * 
 * @type {string}
 */
CoreDrawerPanelElement.prototype.toggleAttribute


/**
 * 
 * If true, ignore `responsiveWidth` setting and force the narrow layout.
 * 
 * @type {boolean}
 */
CoreDrawerPanelElement.prototype.forceNarrow
