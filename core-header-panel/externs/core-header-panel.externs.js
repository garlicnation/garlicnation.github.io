/**
 * @fileoverview Generated closure compiler externs for core-header-panel.
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
var CoreHeaderPanelElement = new function() {};


/**
 * 
 * Controls header and scrolling behavior. Options are
 * `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and 
 * `cover`. Default is `standard`.
 * 
 * `standard`: The header is a step above the panel. The header will consume the
 * panel at the point of entry, preventing it from passing through to the
 * opposite side.
 * 
 * `seamed`: The header is presented as seamed with the panel.
 * 
 * `waterfall`: Similar to standard mode, but header is initially presented as
 * seamed with panel, but then separates to form the step.
 * 
 * `waterfall-tall`: The header is initially taller (`tall` class is added to
 * the header).  As the user scrolls, the header separates (forming an edge)
 * while condensing (`tall` class is removed from the header).
 * 
 * `scroll`: The header keeps its seam with the panel, and is pushed off screen.
 * 
 * `cover`: The panel covers the whole `core-header-panel` including the
 * header. This allows user to style the panel in such a way that the panel is
 * partially covering the header.
 * 
 *     <style>
 *       core-header-panel[mode=cover]::shadow #mainContainer {
 *         left: 80px;
 *       }
 *       .content {
 *         margin: 60px 60px 60px 0;
 *       }
 *     </style>
 * 
 *     <core-header-panel mode="cover">
 *       <core-toolbar class="tall">
 *         <core-icon-button icon="menu"></core-icon-button>
 *       </core-toolbar>
 *       <div class="content"></div>
 *     </core-header-panel>
 * 
 * @type {string}
 */
CoreHeaderPanelElement.prototype.mode


/**
 * 
 * The class used in waterfall-tall mode.  Change this if the header
 * accepts a different class for toggling height, e.g. "medium-tall"
 * 
 * @type {string}
 */
CoreHeaderPanelElement.prototype.tallClass


/**
 * 
 * If true, the drop-shadow is always shown no matter what mode is set to.
 * 
 * @type {boolean}
 */
CoreHeaderPanelElement.prototype.shadow
