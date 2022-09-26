(()=>{"use strict";var e={editButtonProfile:".profile__edit-button",titleProfile:".profile__title",subtitleProfile:".profile__subtitle",addCardButton:".profile__add-button",popup:".popup",popupProfile:".popup_data_profile",popupOpen:".popup_opened",closePopupButton:".popup__button-close",popupInput:".popup__input",popupInputName:".popup__input_data_name",popupInputJob:".popup__input_data_job",popupContainer:".popup__container",buttonSubmit:".popup__button-save",buttonDisabled:".popup__button-save_disabled",popupTextError:".popup__error",popupCard:".popup_data_card",popupFormCard:".popup__form_data_card",closePopupCardButton:".popup__button-close_data_card",popupCardInputName:".popup__input_data_name-card",popupCardInputLink:".popup__input_data_link",templateCard:".template-card",card:".card",cardsSpace:".cards",likeButton:".card__like",likeButtonActive:".card__like_active",likeBtnActive:"card__like_active",deleteButton:".card__delete",imageCard:".card__image",imageCaption:".popup__caption",cardTitle:".card__title",popupImage:".popup_data_image",closePopupImagedButton:".popup__button-close_data_image",formPopup:".popup__form",imagePopup:".popup__image"},t=document.querySelector(e.editButtonProfile),n=document.querySelector(e.popupProfile),r=n.querySelector(e.popupInputName),o=n.querySelector(e.popupInputJob),i=(document.querySelector(e.popupCard),document.querySelector(e.addCardButton)),u=document.querySelector(e.templateCard).content,a={buttonSubmin:".popup__button-save",buttonDisabled:"popup__button-save_disabled",inputBorderError:"popup__input_data_error",inputPopup:".popup__input",popupTextError:".popup__error",buttonClosePopup:".popup__button-close"};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._template=n,this._handleCardClick=o,this._imageCard=r.imageCard,this._titleCard=r.cardTitle,this._buttonLike=r.likeButton,this._buttonDelete=r.deleteButton,this._buttonActiveLike=r.likeBtnActive,this._templateCard=r.templateCard,this._selectorCard=r.card}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateCard).content.querySelector(this._selectorCard).cloneNode(!0)}},{key:"createCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(this._imageCard),t=this._element.querySelector(this._titleCard);return e.src=this._link,e.alt=this._name,t.textContent=this._name,this._element}},{key:"_likeCard",value:function(){var e=this;this._element.querySelector(this._buttonLike).addEventListener("click",(function(t){t.target.classList.toggle(e._buttonActiveLike)}))}},{key:"_deleteCard",value:function(){var e=this;this._element.querySelector(this._buttonDelete).addEventListener("click",(function(){e._element.remove(),e._element=null}))}},{key:"_openCardImage",value:function(){var e=this;this._element.querySelector(this._imageCard).addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_setEventListeners",value:function(){this._likeCard(),this._deleteCard(),this._openCardImage()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=document.querySelector(t),this._config=n,this._configButtonDisabled=n.buttonDisabled,this._inputBorderError=n.buttonDisabled,this._configButtonSubmit=n.buttonSubmin,this._popupInput=n.inputPopup,this._popupTextError=n.popupTextError,this._closePopupButtons=document.querySelectorAll(n.buttonClosePopup),this._buttonSubmit=this._form.querySelector(n.buttonSubmin),this._inputArr=Array.from(this._form.querySelectorAll(this._popupInput)),this._spanArr=Array.from(this._form.querySelectorAll(this._popupTextError))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(e){var t=this;this._form.addEventListener("input",(function(e){return t._handleFormInput(e)}))}},{key:"_handleFormInput",value:function(e){var t=e.target,n=e.currentTarget;this._setInputState(t),this._setFieldError(t),this._toggleButtonState(n)}},{key:"_toggleButtonState",value:function(e,t){e.checkValidity()?this._activateSubmitButton():this._disableSubmitButton()}},{key:"_setInputState",value:function(e,t){e.checkValidity()?(e.classList.remove(this._inputBorderError),this._activateSubmitButton(),this._resetErrorSpan(),this._resetErrorInput()):(e.classList.add(this._inputBorderError),this._disableSubmitButton(),this._resetErrorSpan(),this._resetErrorInput())}},{key:"_setFieldError",value:function(e){e.nextElementSibling.textContent=e.validationMessage}},{key:"_disableSubmitButton",value:function(){this._buttonSubmit.setAttribute("disabled",!0),this._buttonSubmit.classList.add(this._configButtonDisabled)}},{key:"_activateSubmitButton",value:function(){this._buttonSubmit.removeAttribute("disabled"),this._buttonSubmit.classList.remove(this._configButtonDisabled)}},{key:"_resetErrorInput",value:function(){var e=this;this._inputArr.forEach((function(t){return t.classList.remove(e._configButtonDisabled)}))}},{key:"_resetErrorSpan",value:function(){this._spanArr.forEach((function(e){return e.textContent=""}))}},{key:"resetValidation",value:function(){this._disableSubmitButton(),this._resetErrorInput(),this._resetErrorSpan()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._buttonClosePopup=this._popup.querySelector(n.closePopupButton),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonClosePopup.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._closePopupOverlay(t)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t,n){var r,o=n.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e,t))._form=r._popup.querySelector(t.formPopup),r._inputArray=r._popup.querySelectorAll(t.popupInput),r._handleFormSubmit=o,r}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._valueForms={},this._inputArray.forEach((function(t){e._valueForms[t.name]=t.value})),this._valueForms}},{key:"setInputValues",value:function(e){this._inputArray.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){m(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;m(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorName=t,this._selectorJob=n,this._name=document.querySelector(this._selectorName),this._job=document.querySelector(this._selectorJob)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={name:this._name.textContent,job:this._job.textContent},this._user}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._job.textContent=t}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e,t))._imagePopup=n._popup.querySelector(t.imagePopup),n._imageCaption=n._popup.querySelector(t.imageCaption),n}return t=u,(n=[{key:"open",value:function(e,t){this._imagePopup.src=t,this._imagePopup.alt=e,this._imageCaption.textContent=e,j(q(u.prototype),"open",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h),T=new x(e.popupImage,e);function A(e,t){T.open(e,t)}function R(t){return new c(t,u,e,A).createCard()}T.setEventListeners();var D=new d({items:[{name:"Еревавн",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Калининград",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Дербент",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Эльбрус",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Санкт-Петербург",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Черногория",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){D.addItem(R(e))}},e.cardsSpace);D.renderItems();var F=new P(e.titleProfile,e.subtitleProfile),V=new C(e.popupProfile,e,{handleFormSubmit:function(e){var t=e.popupProfileName,n=e.popupJob;F.setUserInfo(t,n),V.close()}});V.setEventListeners();var N=new C(e.popupCard,e,{handleFormSubmit:function(e){var t={name:e.popupNameCard,link:e.popupLink};D.addItem(R(t)),N.close()}});N.setEventListeners();var J=new l('.popup__form[name = "popupProfileForm"]',a);J.enableValidation();var U=new l('.popup__form[name = "popupCardForm"]',a);U.enableValidation(),t.addEventListener("click",(function(){var e=F.getUserInfo(),t=e.name,n=e.job;r.value=t,o.value=n,J.resetValidation(),V.open()})),i.addEventListener("click",(function(){N.open(),U.resetValidation()}))})();