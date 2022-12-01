(()=>{"use strict";var e={popup:".popup",popupProfile:".popup_data_profile",popupAvatar:".popup_data_avatar",popupCard:".popup_data_card",popupImage:".popup_data_image",editButtonProfile:".profile__edit-button",titleProfile:".profile__title",subtitleProfile:".profile__subtitle",addCardButton:".profile__add-button",avatarProfilePc:".profile__image",popupOpen:".popup_opened",closePopupButton:".popup__button-close",popupInput:".popup__input",popupInputName:".popup__input_data_name",popupInputJob:".popup__input_data_job",popupContainer:".popup__container",buttonSubmit:".popup__button-save",buttonSubmitCard:".popup__button-save_data_card",buttonDisabled:".popup__button-save_disabled",popupTextError:".popup__error",popupFormCard:".popup__form_data_card",closePopupCardButton:".popup__button-close_data_card",popupCardInputName:".popup__input_data_name-card",popupCardInputLink:".popup__input_data_link",templateCard:".template-card",card:".card",cardsSpace:".cards",likeButton:".card__like",likeButtonActive:".card__like_active",likeBtnActive:"card__like_active",deleteButton:".card__delete",imageCard:".card__image",imageCaption:".popup__caption",cardTitle:".card__title",closePopupImagedButton:".popup__button-close_data_image",formPopup:".popup__form",imagePopup:".popup__image",cardLikeCounter:".card__like-counter",popupDeleteCard:".popup_data_delete-card"},t=document.querySelector(e.editButtonProfile),n=document.querySelector(e.popupProfile),r=n.querySelector(e.popupInputName),o=n.querySelector(e.popupInputJob),i=document.querySelector(e.avatarProfilePc),u=document.querySelector(e.addCardButton),a=document.querySelector(e.templateCard).content,c={buttonSubmin:".popup__button-save",buttonDisabled:"popup__button-save_disabled",inputBorderError:"popup__input_data_error",inputPopup:".popup__input",popupTextError:".popup__error",buttonClosePopup:".popup__button-close"};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n=t.item,r=t.template,o=t.selectors,i=t.userToken,u=t.handleCardClick,a=t.openPopupDeleteCard,c=t.handleAddLike,s=t.handleRevomeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._id=n._id,this._ownerId=n.ownerId,this._likes=n.likes,this._template=r,this._userToken=i,this._handleCardClick=u,this.openPopupDeleteCard=a,this._handleAddLike=c,this._handleRevomeLike=s,this._likeCounterSelector=o.cardLikeCounter,this._imageCard=o.imageCard,this._titleCard=o.cardTitle,this._buttonLike=o.likeButton,this._buttonActiveLike=o.likeBtnActive,this._buttonDelete=o.deleteButton,this._buttonActiveLike=o.likeBtnActive,this._templateCard=o.templateCard,this._selectorCard=o.card}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateCard).content.querySelector(this._selectorCard).cloneNode(!0)}},{key:"_openCardImage",value:function(){var e=this;this._element.querySelector(this._imageCard).addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_likeCard",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._setLikeStatus(),e._setLikesCounter()}))}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userToken}))}},{key:"_setLikeStatus",value:function(){this.isLiked()?this._likeButton.classList.add(this._buttonActiveLike):this._likeButton.classList.remove(this._buttonActiveLike)}},{key:"_setLikesCounter",value:function(){this.isLiked()?(this._likeButton.classList.remove(this._buttonActiveLike),this._handleRevomeLike(this._id)):(this._likeButton.classList.add(this._buttonActiveLike),this._handleAddLike(this._id))}},{key:"setCounter",value:function(e){this._likeCounter.textContent=e.length,this._likes=e}},{key:"_removeIconDelete",value:function(){this._ownerId==this._userToken&&this._element.querySelector(this._buttonDelete).remove()}},{key:"_deleteCard",value:function(){var e=this;this._element.querySelector(this._buttonDelete).addEventListener("click",(function(){e.openPopupDeleteCard(e._id,e._element)}))}},{key:"createCard",value:function(){this._element=this._getTemplate(),this._likeButton=this._element.querySelector(this._buttonLike),this._likeCounter=this._element.querySelector(this._likeCounterSelector);var e=this._element.querySelector(this._imageCard),t=this._element.querySelector(this._titleCard);return e.src=this._link,e.alt=this._name,t.textContent=this._name,this._likeCounter.textContent=this._likes.length,this._setLikeStatus(),this._removeIconDelete(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._likeCard(),this._openCardImage(),this._deleteCard()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=document.querySelector(t),this._config=n,this._configButtonDisabled=n.buttonDisabled,this._inputBorderError=n.buttonDisabled,this._configButtonSubmit=n.buttonSubmin,this._popupInput=n.inputPopup,this._popupTextError=n.popupTextError,this._closePopupButtons=document.querySelectorAll(n.buttonClosePopup),this._buttonSubmit=this._form.querySelector(n.buttonSubmin),this._inputArr=Array.from(this._form.querySelectorAll(this._popupInput)),this._spanArr=Array.from(this._form.querySelectorAll(this._popupTextError))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(e){var t=this;this._form.addEventListener("input",(function(e){return t._handleFormInput(e)}))}},{key:"_handleFormInput",value:function(e){var t=e.target,n=e.currentTarget;this._setInputState(t),this._setFieldError(t),this._toggleButtonState(n)}},{key:"_toggleButtonState",value:function(e,t){e.checkValidity()?this._activateSubmitButton():this._disableSubmitButton()}},{key:"_setInputState",value:function(e,t){e.checkValidity()?(e.classList.remove(this._inputBorderError),this._activateSubmitButton(),this._resetErrorSpan(),this._resetErrorInput()):(e.classList.add(this._inputBorderError),this._disableSubmitButton(),this._resetErrorSpan(),this._resetErrorInput())}},{key:"_setFieldError",value:function(e){e.nextElementSibling.textContent=e.validationMessage}},{key:"_disableSubmitButton",value:function(){this._buttonSubmit.setAttribute("disabled",!0),this._buttonSubmit.classList.add(this._configButtonDisabled)}},{key:"_activateSubmitButton",value:function(){this._buttonSubmit.removeAttribute("disabled"),this._buttonSubmit.classList.remove(this._configButtonDisabled)}},{key:"_resetErrorInput",value:function(){var e=this;this._inputArr.forEach((function(t){return t.classList.remove(e._configButtonDisabled)}))}},{key:"_resetErrorSpan",value:function(){this._spanArr.forEach((function(e){return e.textContent=""}))}},{key:"resetValidation",value:function(){this._disableSubmitButton(),this._resetErrorInput(),this._resetErrorSpan()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._buttonClosePopup=this._popup.querySelector(n.closePopupButton),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._buttonClosePopup.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._closePopupOverlay(t)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t,n){var r,o=n.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e,t))._form=r._popup.querySelector(t.formPopup),r._inputArray=r._popup.querySelectorAll(t.popupInput),r._handleFormSubmit=o,r._buttonSubmit=r._popup.querySelector(t.buttonSubmit),r._buttonSubmitValue=r._buttonSubmit.value,r}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._valueForms={},this._inputArray.forEach((function(t){e._valueForms[t.name]=t.value})),this._valueForms}},{key:"setInputValues",value:function(e){this._inputArray.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){m(C(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":this._buttonSubmitValue}},{key:"setEventListeners",value:function(){var e=this;m(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selectorName=t,this._selectorJob=n,this._selectorAvatar=r,this._name=document.querySelector(this._selectorName),this._job=document.querySelector(this._selectorJob),this._avatar=document.querySelector(this._selectorAvatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._user={name:this._name.textContent,about:this._job.textContent},this._user}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._name.textContent=t,this._job.textContent=n,this._avatar.style.backgroundImage="url(".concat(r,")")}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e,t))._imagePopup=n._popup.querySelector(t.imagePopup),n._imageCaption=n._popup.querySelector(t.imageCaption),n}return t=u,(n=[{key:"open",value:function(e,t){this._imagePopup.src=t,this._imagePopup.alt=e,this._imageCaption.textContent=e,j(R(u.prototype),"open",this).call(this)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"getUserProfile",value:function(){var e=this;return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkServerResponse(t)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return t._checkServerResponse(e)}))}},{key:"changeUserProfile",value:function(e,t){var n=this;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then((function(e){return n._checkServerResponse(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then((function(e){return n._checkServerResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkServerResponse(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkServerResponse(e)}))}},{key:"addLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkServerResponse(e)}))}},{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function J(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function G(e){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(e)}var H,M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function u(e,t,n){var r,o=n.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e,t))._popupSelector=e,r._popup=document.querySelector(r._popupSelector),r._popupForm=r._popup.querySelector(t.formPopup),r._handleFormSubmit=o,r}return t=u,(n=[{key:"getInfoCard",value:function(e,t){this._id=e,this._card=t}},{key:"setEventListeners",value:function(){var e=this;V(G(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._id,e._card)}))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=new D({url:"https://mesto.nomoreparties.co/v1/cohort-50/",headers:{authorization:"eb1591ce-bee2-43ed-8aa3-111b6ba7c5d9","content-type":"application/json"}});function K(e,t){Y.open(e,t)}function Q(t){var n=new l({item:t,template:a,selectors:e,userToken:H,handleCardClick:K,openPopupDeleteCard:function(e,t){ne.open(),ne.getInfoCard(e,t)},handleAddLike:function(e){$.addLikeCard(e).then((function(e){n.setCounter(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRevomeLike:function(e){$.deleteLikeCard(e).then((function(e){n.setCounter(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return n.createCard()}Promise.all([$.getUserProfile(),$.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo({name:o.name,about:o.about,avatar:o.avatar}),H=o._id,X.renderItems(i)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var W=new E(e.titleProfile,e.subtitleProfile,e.avatarProfilePc),X=new h({renderer:function(e){X.addItem(Q(e))}},e.cardsSpace),Y=new T(e.popupImage,e);Y.setEventListeners();var Z=new P(e.popupProfile,e,{handleFormSubmit:function(e){Z.renderLoading(!0);var t=e.popupProfileName,n=e.popupJob;$.changeUserProfile(t,n).then((function(e){W.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),Z.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Z.renderLoading(!1)}))}});Z.setEventListeners();var ee=new P(e.popupCard,e,{handleFormSubmit:function(e){ee.renderLoading(!0);var t=e.popupNameCard,n=e.popupLink;$.addNewCard(t,n).then((function(e){X.addItem(Q(e)),ee.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ee.renderLoading(!1)}))}});ee.setEventListeners();var te=new P(e.popupAvatar,e,{handleFormSubmit:function(e){te.renderLoading(!0);var t=e.input_data_avatar;$.changeAvatar(t).then((function(e){W.setUserInfo({name:e.name,about:e.about,avatar:e.avatar}),te.close()})).then((function(){te.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){te.renderLoading(!1)}))}});te.setEventListeners();var ne=new M(e.popupDeleteCard,e,{handleFormSubmit:function(e,t){$.deleteCard(e).then((function(){t.remove(),t=null,ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});ne.setEventListeners();var re=new f('.popup__form[name = "popupProfileForm"]',c);re.enableValidation();var oe=new f('.popup__form[name = "popupCardForm"]',c);oe.enableValidation();var ie=new f('.popup__form[name = "popupAvatarForm"]',c);ie.enableValidation(),t.addEventListener("click",(function(){var e=W.getUserInfo(),t=e.name,n=e.about;r.value=t,o.value=n,re.resetValidation(),Z.open()})),u.addEventListener("click",(function(){ee.open(),oe.resetValidation()})),i.addEventListener("click",(function(){te.open(),ie.resetValidation()}))})();
//# sourceMappingURL=main.js.map