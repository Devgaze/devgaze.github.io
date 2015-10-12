/**
 * esb.js v1.0.0
 * https://github.com/Devgaze/expandable-search
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @module ESB
 */
 ;(function(window, document, undefined){

  'use strict';

  /**
   * ESB class that binds listeners to elements of provided form element
   *
   * @class ESB
   * @constructor
   * @param {DOMElement} formElement
   */
  function ESB (formElement) {
    
    try {

      var formId = (formElement !== '') ?  formElement : 'searchForm';

      this.formElement = document.getElementById(formId);
      
      if (this.formElement === null) {

        throw new Error('You have to specify form to use this plugin or add/change your form ID to "searchForm"');
      
      }
      
      // identify control container & controls
      this.container = document.querySelector('form#' + this.formElement.getAttribute('id') + ' div');
      if (this.container === null) {

        throw new Error('Container element is missing! Please check example code for proper markup.');
      
      }

      this.textField = document.querySelector('form#' + this.formElement.getAttribute('id') + ' .search-query');
      if (this.textField === null) {

        throw new Error('Text field ID is missing! Please check example code for proper markup.');
      
      }

      this.buttonField = document.querySelector('form#' + this.formElement.getAttribute('id') + ' .search-btn');
      if (this.buttonField === null) {

        throw new Error('Search button ID is missing! Please check example code for proper markup.');
      
      }
      


    } catch (e) {
      // gracefully report
      console.error(e.message);
    }
    
  }

  window.ESB = ESB;

})(window, document);