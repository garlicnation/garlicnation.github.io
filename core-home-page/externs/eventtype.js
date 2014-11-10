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

goog.provide('CoreXhrEventType');


/**
 * Constants for event names fired by core-xhr elements.
 * @enum {string}
 */
CoreXhrEventType = {
  // Fired when a response is received.
  CORE_RESPONSE: 'core-response',
  // Fired when an error is received.
  CORE_ERROR: 'core-error',
  // Fired whenever a response or an error is received.
  CORE_COMPLETE: 'core-complete'
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

goog.provide('CoreSelectionEventType');


/**
 * Constants for event names fired by core-selection elements.
 * @enum {string}
 */
CoreSelectionEventType = {
  // The core-selection element is used to manage selection state. It has no
  // visual appearance and is typically used in conjuneciton with another element.
  // For example, <a href="core-selector.html">core-selector</a>
  // use a core-selection to manage selection.
  // 
  // To mark an item as selected, call the select(item) method on 
  // core-selection. Notice that the item itself is an argument to this method.
  // The core-selection element manages selection state for any given set of
  // items. When an item is selected, the `core-select` event is fired.
  // The attribute "multi" indicates if multiple items can be selected at once.
  // 
  // Example:
  // 
  //     <core-element name="selection-example">
  //        <template>
  //          <style>
  //            ::-webkit-distributed(> .selected) {
  //              font-weight: bold;
  //              font-style: italic;
  //            }
  //          </style>
  //          <ul on-tap="{{itemTapAction}}">
  //            <content></content>
  //          </ul>
  //          <core-selection id="selection" multi on-core-select="{{selectAction}}"></core-selection>
  //        </template>
  //        <script>
  //          Polymer('selection-example', {
  //            itemTapAction: function(e) {
  //              this.$.selection.select(e.target);
  //            },
  //            selectAction: function(e, detail) {
  //              detail.item.classList.toggle('selected', detail.isSelected);
  //            }
  //          });
  //        </script>
  //     </core-element>
  // 
  //     <selection-example>
  //       <li>Red</li>
  //       <li>Green</li>
  //       <li>Blue</li>
  //     </selection-example>
  // 
  // 
  // 
  // Fired when an item's selection state is changed. This event is fired both
  // when an item is selected or deselected. The `isSelected` detail property
  // contains the selection state.
  CORE_SELECT: 'core-select'
};
