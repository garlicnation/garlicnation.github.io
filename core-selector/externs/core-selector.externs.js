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
CoreSelectorElement.prototype.selected


/**
 * 
 * If true, multiple selections are allowed.
 * 
 * @type {boolean}
 */
CoreSelectorElement.prototype.multi


/**
 * 
 * Specifies the attribute to be used for "selected" attribute.
 * 
 * @type {string}
 */
CoreSelectorElement.prototype.valueattr


/**
 * 
 * Specifies the CSS class to be used to add to the selected element.
 * 
 * @type {string}
 */
CoreSelectorElement.prototype.selectedClass


/**
 * 
 * Specifies the property to be used to set on the selected element
 * to indicate its active state.
 * 
 * @type {string}
 */
CoreSelectorElement.prototype.selectedProperty


/**
 * 
 * Specifies the attribute to set on the selected element to indicate
 * its active state.
 * 
 * @type {string}
 */
CoreSelectorElement.prototype.selectedAttribute


/**
 * 
 * Returns the currently selected element. In multi-selection this returns
 * an array of selected elements.
 * Note that you should not use this to set the selection. Instead use
 * `selected`.
 * 
 * @type {Object}
 */
CoreSelectorElement.prototype.selectedItem


/**
 * 
 * In single selection, this returns the model associated with the
 * selected element.
 * Note that you should not use this to set the selection. Instead use 
 * `selected`.
 * 
 * @type {Object}
 */
CoreSelectorElement.prototype.selectedModel


/**
 * 
 * In single selection, this returns the selected index.
 * Note that you should not use this to set the selection. Instead use
 * `selected`.
 * 
 * @type {number}
 */
CoreSelectorElement.prototype.selectedIndex


/**
 * 
 * Nodes with local name that are in the list will not be included 
 * in the selection items.  In the following example, `items` returns four
 * `core-item`'s and doesn't include `h3` and `hr`.
 * 
 *     <core-selector excludedLocalNames="h3 hr">
 *       <h3>Header</h3>
 *       <core-item>Item1</core-item>
 *       <core-item>Item2</core-item>
 *       <hr>
 *       <core-item>Item3</core-item>
 *       <core-item>Item4</core-item>
 *     </core-selector>
 * 
 * @type {string}
 */
CoreSelectorElement.prototype.excludedLocalNames


/**
 * 
 * The target element that contains items.  If this is not set 
 * core-selector is the container.
 * 
 * @type {Object}
 */
CoreSelectorElement.prototype.target


/**
 * 
 * This can be used to query nodes from the target node to be used for 
 * selection items.  Note this only works if `target` is set
 * and is not `core-selector` itself.
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
CoreSelectorElement.prototype.itemsSelector


/**
 * 
 * The event that would be fired from the item element to indicate
 * it is being selected.
 * 
 * @type {string}
 */
CoreSelectorElement.prototype.activateEvent


/**
 * 
 * Set this to true to disallow changing the selection via the
 * `activateEvent`.
 * 
 * @type {boolean}
 */
CoreSelectorElement.prototype.notap
