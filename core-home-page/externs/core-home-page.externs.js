/**
 * @fileoverview Generated closure compiler externs for core-layout.
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
var CoreLayoutElement = new function() {};


/**
 * 
 * Controls if the element lays out vertically or not.
 * 
 * @type {boolean}
 */
CoreLayoutElement.prototype.vertical


/**
 * 
 * Controls how the items are aligned in the flow direction. For 
 * example for a flow of `h`, this controls how each item is aligned
 * horizontally.
 * 
 * @type {string start|center|end|between}
 */
CoreLayoutElement.prototype.justify


/**
 * 
 * Controls how the items are aligned in cross-flow direction. For 
 * example for a flow of `h`, this controls how each item is aligned
 * vertically.
 * 
 * @type {string start|center|end}
 */
CoreLayoutElement.prototype.align


/**
 * 
 * Controls whether or not the items layout in reverse order.
 * 
 * @type {boolean}
 */
CoreLayoutElement.prototype.reverse
/**
 * @fileoverview Generated closure compiler externs for core-toolbar.
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
var CoreToolbarElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-theme-aware.
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
var CoreThemeAwareElement = new function() {};


/**
 * 
 *  // NOTE: Polymer.ThemeAware methods separately documented so they can be part
 *  // of core-theme-aware.
 * 
 * When no theme is specified, the value `defaultTheme` will be applied
 * as the theme class.
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * 
 * 
 * The `activeTheme` property stores the current theme. When the activeTheme
 * changes, the element's theme class is updated. An element can 
 * implement the `activeThemeChanged` method to do processing when the
 * theme changes.
 * 
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * 
 * 
 * The theme set by the user of the theme-aware element. The `theme`
 * property will only be set if the user has specifically given the
 * theme-aware element a theme attribute.
 * 
 * 
 * @type {string}
 */
CoreThemeAwareElement.prototype.defaultTheme


/**
 * 
 *  // NOTE: Polymer.ThemeAware methods separately documented so they can be part
 *  // of core-theme-aware.
 * 
 * When no theme is specified, the value `defaultTheme` will be applied
 * as the theme class.
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * 
 * 
 * The `activeTheme` property stores the current theme. When the activeTheme
 * changes, the element's theme class is updated. An element can 
 * implement the `activeThemeChanged` method to do processing when the
 * theme changes.
 * 
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * 
 * 
 * The theme set by the user of the theme-aware element. The `theme`
 * property will only be set if the user has specifically given the
 * theme-aware element a theme attribute.
 * 
 * 
 * @type {string}
 */
CoreThemeAwareElement.prototype.activeTheme


/**
 * 
 *  // NOTE: Polymer.ThemeAware methods separately documented so they can be part
 *  // of core-theme-aware.
 * 
 * When no theme is specified, the value `defaultTheme` will be applied
 * as the theme class.
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * 
 * 
 * The `activeTheme` property stores the current theme. When the activeTheme
 * changes, the element's theme class is updated. An element can 
 * implement the `activeThemeChanged` method to do processing when the
 * theme changes.
 * 
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * 
 * 
 * The theme set by the user of the theme-aware element. The `theme`
 * property will only be set if the user has specifically given the
 * theme-aware element a theme attribute.
 * 
 * 
 * @type {string}
 */
CoreThemeAwareElement.prototype.theme
/**
 * @fileoverview Generated closure compiler externs for Polymer.ThemeAware.
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
var Polymer.ThemeAwareElement = new function() {};


/**
 * 
 * When no theme is specified, the value `defaultTheme` will be applied
 * as the theme class.
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * @type {string}
 */
Polymer.ThemeAwareElement.prototype.defaultTheme


/**
 * 
 * The `activeTheme` property stores the current theme. When the activeTheme
 * changes, the element's theme class is updated. An element can 
 * implement the `activeThemeChanged` method to do processing when the
 * theme changes.
 * 
 * This is not typically intended for a user to set but is 
 * useful in an element that extends `core-theme-aware`.
 * 
 * @type {string}
 */
Polymer.ThemeAwareElement.prototype.activeTheme


/**
 * 
 * The theme set by the user of the theme-aware element. The `theme`
 * property will only be set if the user has specifically given the
 * theme-aware element a theme attribute.
 * 
 * @type {string}
 */
Polymer.ThemeAwareElement.prototype.theme
/**
 * @fileoverview Generated closure compiler externs for core-item.
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
var CoreItemElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-icon.
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
var CoreIconElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-iconset.
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
var CoreIconsetElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-meta.
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
var CoreMetaElement = new function() {};


/**
 * 
 * The type of meta-data.  All meta-data with the same type with be
 * stored together.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.type


/**
 * 
 * Returns a list of all meta-data elements with the same type.
 * 
 * @type {array}
 */
CoreMetaElement.prototype.list


/**
 * 
 * The URL of the iconset image.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.src


/**
 * 
 * The width of the iconset image. This must only be specified if the
 * icons are arranged into separate rows inside the image.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.width


/**
 * 
 * A space separated list of names corresponding to icons in the iconset
 * image file. This list must be ordered the same as the icon images
 * in the image file.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.icons


/**
 * 
 * The size of an individual icon. Note that icons must be square.
 * 
 * @type {number}
 */
CoreMetaElement.prototype.iconSize


/**
 * 
 * The horizontal offset of the icon images in the inconset src image.
 * This is typically used if the image resource contains additional images
 * beside those intended for the iconset.
 * 
 * @type {number}
 */
CoreMetaElement.prototype.offsetX


/**
 * 
 * The vertical offset of the icon images in the inconset src image.
 * This is typically used if the image resource contains additional images
 * beside those intended for the iconset.
 * 
 * @type {number}
 */
CoreMetaElement.prototype.offsetY


/**
 * 
 * The URL of an image for the icon. If the src property is specified,
 * the icon property should not be.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.src


/**
 * 
 * Specifies the size of the icon in pixel units.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.size


/**
 * 
 * Specifies the icon name or index in the set of icons available in
 * the icon's icon set. If the icon property is specified,
 * the src property should not be.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.icon


/**
 * 
 * The URL of an image for the icon.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.src


/**
 * 
 * Specifies the icon from the Polymer icon set.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.icon


/**
 * 
 * Specifies a link target.
 * 
 * Example:
 * 
 *     <core-item icon="favorite" label="Favorite" href="http://www.polymer-project.org/"></core-item>
 * 
 * If you want more control on the link, e.g. specify the target for where to
 * open the linked document, you can put &lt;a> directly inside the item.
 * 
 * Example:
 * 
 *     <core-item icon="favorite" label="Favorite">
 *       <a href="http://www.polymer-project.org/" target="_self"></a>
 *     </core-item>
 * 
 * @type {string}
 */
CoreMetaElement.prototype.href


/**
 * 
 * Specifies the label for the menu item.
 * 
 * @type {string}
 */
CoreMetaElement.prototype.label
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
 * `standard`, `seamed`, `waterfall`, `waterfall-tall`, `scroll` and `cover`.
 * Default is `standard`.
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
 * @type {string}
 */
CoreHeaderPanelElement.prototype.mode
/**
 * @fileoverview Generated closure compiler externs for core-icon-button.
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
var CoreIconButtonElement = new function() {};


/**
 * 
 * The URL of an image for the icon.  Should not use `icon` property
 * if you are using this property.
 * 
 * @type {string}
 */
CoreIconButtonElement.prototype.src


/**
 * 
 * If true, border is placed around the button to indicate it's
 * active state.
 * 
 * @type {boolean}
 */
CoreIconButtonElement.prototype.active


/**
 * 
 * Specifies the icon name or index in the set of icons available in
 * the icon set.  Should not use `src` property if you are using this
 * property.
 * 
 * @type {string}
 */
CoreIconButtonElement.prototype.icon
/**
 * @fileoverview Generated closure compiler externs for highlightjs-element.
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
var HighlightjsElementElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-ajax.
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
var CoreAjaxElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-xhr.
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
var CoreXhrElement = new function() {};


/**
 * 
 * The URL target of the request.
 * 
 * @type {string}
 */
CoreXhrElement.prototype.url


/**
 * 
 * Specifies what data to store in the `response` property, and
 * to deliver as `event.response` in `response` events.
 * 
 * One of:
 * 
 *    `text`: uses `XHR.responseText`.
 *    
 *    `xml`: uses `XHR.responseXML`.
 *    
 *    `json`: uses `XHR.responseText` parsed as JSON.
 *  
 * @type {string}
 */
CoreXhrElement.prototype.handleAs


/**
 * 
 * If true, automatically performs an Ajax request when either `url` or `params` changes.
 * 
 * @type {boolean}
 */
CoreXhrElement.prototype.auto


/**
 * 
 * Parameters to send to the specified URL, as JSON.
 *  
 * @type {string (JSON)}
 */
CoreXhrElement.prototype.params


/**
 * 
 * Returns the response object.
 * 
 * @type {Object}
 */
CoreXhrElement.prototype.response


/**
 * 
 * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
 * Default is 'GET'.
 * 
 * @type {string}
 */
CoreXhrElement.prototype.method


/**
 * 
 * HTTP request headers to send.
 * 
 * Example:
 * 
 *     <core-ajax 
 *         auto
 *         url="http://somesite.com"
 *         headers='{"X-Requested-With": "XMLHttpRequest"}'
 *         handleAs="json"
 *         on-core-response="{{handleResponse}}"></core-ajax>
 *  
 * @type {Object}
 */
CoreXhrElement.prototype.headers


/**
 * 
 * Optional raw body content to send when method === "POST".
 * 
 * Example:
 * 
 *     <core-ajax method="POST" auto url="http://somesite.com"
 *         body='{"foo":1, "bar":2}'>
 *     </core-ajax>
 *  
 * @type {Object}
 */
CoreXhrElement.prototype.body


/**
 * 
 * Content type to use when sending data.
 * 
 * @type {string}
 */
CoreXhrElement.prototype.contentType


/**
 * 
 * Set the withCredentials flag on the request.
 * 
 * @type {boolean}
 */
CoreXhrElement.prototype.withCredentials
/**
 * @fileoverview Generated closure compiler externs for core-doc-page.
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
var CoreDocPageElement = new function() {};


/**
 * 
 * 
 * Set url to add documentation from that location to the view.
 * 
 * @type {String}
 */
CoreDocPageElement.prototype.url
/**
 * @fileoverview Generated closure compiler externs for core-menu.
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

/** @constructor @extends {CoreSelectorElement} **/
var CoreMenuElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-selector.
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
var CoreSelectorElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-selection.
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
var CoreSelectionElement = new function() {};


/**
 * 
 * If true, multiple selections are allowed.
 * 
 * @type {boolean}
 */
CoreSelectionElement.prototype.multi


/**
 * 
 * Gets or sets the selected element.  Default to use the index
 * of the item element.
 * 
 * If you want a specific attribute value of the element to be
 * used instead of index, set "valueattr" to that attribute name.
 * 
 * Example:
 * 
 *     <core-selector valueattr="label" selected="foo">
 *       <div label="foo"></div>
 *       <div label="bar"></div>
 *       <div label="zot"></div>
 *     </core-selector>
 * 
 * In multi-selection this should be an array of values.
 * 
 * Example:
 * 
 *     <core-selector id="selector" valueattr="label" multi>
 *       <div label="foo"></div>
 *       <div label="bar"></div>
 *       <div label="zot"></div>
 *     </core-selector>
 * 
 *     this.$.selector.selected = ['foo', 'zot'];
 * 
 * @type {Object}
 */
CoreSelectionElement.prototype.selected


/**
 * 
 * If true, multiple selections are allowed.
 * 
 * @type {boolean}
 */
CoreSelectionElement.prototype.multi


/**
 * 
 * Specifies the attribute to be used for "selected" attribute.
 * 
 * @type {string}
 */
CoreSelectionElement.prototype.valueattr


/**
 * 
 * Specifies the CSS class to be used to add to the selected element.
 * 
 * @type {string}
 */
CoreSelectionElement.prototype.selectedClass


/**
 * 
 * Specifies the property to be used to set on the selected element
 * to indicate its active state.
 * 
 * @type {string}
 */
CoreSelectionElement.prototype.selectedProperty


/**
 * 
 * Specifies the property to be used to set on the selected element
 * to indicate its active state.
 * 
 * @type {string}
 */
CoreSelectionElement.prototype.selectedProperty


/**
 * 
 * Returns the currently selected element. In multi-selection this returns
 * an array of selected elements.
 * 
 * @type {Object}
 */
CoreSelectionElement.prototype.selectedItem


/**
 * 
 * In single selection, this returns the model associated with the
 * selected element.
 * 
 * @type {Object}
 */
CoreSelectionElement.prototype.selectedModel


/**
 * 
 * In single selection, this returns the selected index.
 * 
 * @type {number}
 */
CoreSelectionElement.prototype.selectedIndex


/**
 * 
 * The target element that contains items.  If this is not set 
 * core-selector is the container.
 * 
 * @type {Object}
 */
CoreSelectionElement.prototype.target


/**
 * 
 * This can be used to query nodes from the target node to be used for 
 * selection items.  Note this only works if the 'target' property is set.
 * 
 * Example:
 * 
 *     <core-selector target="{{$.myForm}}" itemsSelector="input[type=radio]"></core-selector>
 *     <form id="myForm">
 *       <label><input type="radio" name="color" value="red"> Red</label> <br>
 *       <label><input type="radio" name="color" value="green"> Green</label> <br>
 *       <label><input type="radio" name="color" value="blue"> Blue</label> <br>
 *       <p>color = {{color}}</p>
 *     </form>
 * 
 * @type {string}
 */
CoreSelectionElement.prototype.itemSelector


/**
 * 
 * The event that would be fired from the item element to indicate
 * it is being selected.
 * 
 * @type {string}
 */
CoreSelectionElement.prototype.activateEvent


/**
 * 
 * Set this to true to disallow changing the selection via the
 * `activateEvent`.
 * 
 * @type {boolean}
 */
CoreSelectionElement.prototype.notap
/**
 * @fileoverview Generated closure compiler externs for core-doc-toc.
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
var CoreDocTocElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-doc-viewer.
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
var CoreDocViewerElement = new function() {};
/**
 * @fileoverview Generated closure compiler externs for core-home-page.
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
var CoreHomePageElement = new function() {};
