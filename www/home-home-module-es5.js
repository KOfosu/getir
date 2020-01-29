function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div id=\"headerTitle\">\n    <ion-grid>\n      <ion-row>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../assets/logo.jpg\" />\n          </ion-avatar>\n          <h1 text-wrap>KINGDOM ADVANCE OUTREACH</h1>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-label>KWAHU PEPEASE FOR JESUS 2020 </ion-label> <br />\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"date\">7th - 14th June, 2020 </ion-label>\n        <br />\n      </ion-row>\n      <ion-row>\n        <ion-label>(Registration Form)</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <form [formGroup]=\"addMember\">\n    <ion-list lines=\"none\">\n      <ion-card>\n        <ion-card-content>\n          <ion-label color=\"danger\">All fields marked with (*) are required</ion-label>\n          <p *ngIf=\"fixErrors !== ''\">{{ fixErrors }}</p>\n        </ion-card-content>\n\n\n      </ion-card>\n      <!-- -------------------------------------------------------- Personal Information -->\n      <ion-card>\n        <ion-card-header> Personal Information</ion-card-header>\n        <ion-card-content>\n          <!-- Full Name -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Full Name <span> *</span></ion-label>\n              <ion-input type=\"text\" formControlName=\"name\" #nField placeholder=\"Enter full name\"\n                [ngClass]=\"{'error-field': nameErr !== ''}\" (focusin)=\"(nameErr = '')\"\n                (ionBlur)=\" nameErr = validation(nameField)\">\n              </ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"nameErr !== ''\">\n              <ion-label class=\"error-msg\">{{ nameErr }}</ion-label>\n            </div>\n          </div>\n\n          <!-- Gender -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Gender<span> *</span></ion-label>\n              <ion-select placeholder=\"Select Gender\" formControlName=\"gender\"\n                [ngClass]=\"{'error-field': genderErr !== ''}\" (focusin)=\"(genderErr='')\"\n                (ionBlur)=\" genderErr = validation(genderField)\">\n                <ion-select-option value=\"Female\">Female</ion-select-option>\n                <ion-select-option value=\"Male\">Male</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"genderErr !== ''\">\n              <ion-label class=\"error-msg\">{{genderErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Languages Spoken -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Local Language Spoken<span> *</span></ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"languages\"\n                [ngClass]=\"{'error-field': languagesErr !== ''}\" (focusin)=\"(languagesErr='')\"\n                (ionBlur)=\" languagesErr = validation(languagesField)\" multiple>\n                <ion-select-option value=\"English\">English</ion-select-option>\n                <ion-select-option value=\"Twi\">Twi</ion-select-option>\n                <ion-select-option value=\"Other\">Other Language(s)</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"languagesErr !== ''\">\n              <ion-label class=\"error-msg\">{{languagesErr}}</ion-label>\n            </div>\n          </div>\n\n          <div *ngIf=\"languagesField.value && languagesField.value.indexOf('Other') >= 0\">\n            <ion-item>\n              <ion-input placeholder=\"Specify Other Languages\" formControlName=\"otherLanguages\"></ion-input>\n            </ion-item>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Contact Information -->\n      <ion-card>\n        <ion-card-header>Contact Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">City of Residence<span> *</span></ion-label>\n              <ion-input type=\"text\" formControlName=\"location\" placeholder=\"Enter city/town you live in\"\n                [ngClass]=\"{'error-field': locationErr !== ''}\" (focusin)=\"(locationErr='')\"\n                (ionBlur)=\" locationErr = validation(locationField)\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"locationErr !== ''\">\n              <ion-label class=\"error-msg\">{{locationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Contact Number<span> *</span></ion-label>\n              <ion-input type=\"text\" formControlName=\"contact\" placeholder=\"Enter contact number\"\n                [ngClass]=\"{'error-field': contactErr !== ''}\" (focusin)=\"(contactErr='')\"\n                (ionBlur)=\" contactErr = validation(contactField)\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"contactErr !== ''\">\n              <ion-label class=\"error-msg\">{{contactErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Email Address</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Enter email address\"\n                [ngClass]=\"{'error-field': emailErr !== ''}\" (focusin)=\"(emailErr='')\"\n                (ionBlur)=\" emailErr = validation(emailField)\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"emailErr !== ''\">\n              <ion-label class=\"error-msg\">{{emailErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Religious Information-->\n      <ion-card>\n        <ion-card-header>Religious Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>What Church Do You Attend?<span>\n                  *</span></ion-label>\n              <ion-input type=\"text\" formControlName=\"denomination\" placeholder=\"Enter name of denomination\"\n                [ngClass]=\"{'error-field': denominationErr !== ''}\" (focusin)=\"(denominationErr='')\"\n                (ionBlur)=\" denominationErr = validation(denominationField)\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"denominationErr !== ''\">\n              <ion-label class=\"error-msg\">{{denominationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>What Role Do You Play In Your Church?<span>\n                  *</span></ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationRole\"\n                [ngClass]=\"{'error-field': denominationRoleErr !== ''}\" (focusin)=\"(denominationRoleErr='')\"\n                (ionBlur)=\" denominationRoleErr = validation(denominationRoleField)\">\n                <ion-select-option value=\"Leader\">Leader</ion-select-option>\n                <ion-select-option value=\"Member\">Member</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"denominationRoleErr !== ''\">\n              <ion-label class=\"error-msg\">{{denominationRoleErr}}</ion-label>\n            </div>\n          </div>\n\n          <div *ngIf=\"denominationRoleField.value === 'Leader'\">\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Please Specify Your Position</ion-label>\n              <ion-input type=\"text\" formControlName=\"denominationPosition\" placeholder=\"Enter position\"\n                [ngClass]=\"{'error-field': denominationPositionErr !== ''}\" (focusin)=\"(denominationPositionErr='')\"\n                (ionBlur)=\" denominationPositionErr = validation(denominationPositionField)\">\n              </ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"denominationPositionErr !== ''\">\n              <ion-label class=\"error-msg\">{{denominationPositionErr}}</ion-label>\n            </div>\n          </div>\n\n          <div *ngIf=\"denominationRoleField.value === 'Leader'\">\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Are You An Ordained Officer?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationOfficer\"\n                [ngClass]=\"{'error-field': denominationOfficerErr !== ''}\" (focusin)=\"(denominationOfficerErr='')\"\n                (ionBlur)=\" denominationOfficerErr = validation(denominationOfficerField)\">\n                <ion-select-option value=\"Yes\">Yes</ion-select-option>\n                <ion-select-option value=\"No\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"denominationOfficerErr !== ''\">\n              <ion-label class=\"error-msg\">{{denominationOfficerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Have You Been Baptized By The Holy Spirit?<span>\n                  *</span>\n              </ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"holySpiritBaptiism\"\n                [ngClass]=\"{'error-field': holySpiritBaptiismErr !== ''}\" (focusin)=\"(holySpiritBaptiismErr='')\"\n                (ionBlur)=\" holySpiritBaptiismErr = validation(holySpiritBaptiismField)\">\n                <ion-select-option value=\"Yes\">Yes</ion-select-option>\n                <ion-select-option value=\"No\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"holySpiritBaptiismErr !== ''\">\n              <ion-label class=\"error-msg\">{{holySpiritBaptiismErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Education / Employment Information -->\n      <ion-card>\n        <ion-card-header>Employment/Education Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Occupation<span> *</span></ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"occupation\"\n                [ngClass]=\"{'error-field': occupationErr !== ''}\" (focusin)=\"(occupationErr='')\"\n                (ionBlur)=\" occupationErr = validation(occupationField)\">\n                <ion-select-option value=\"Student\">Student</ion-select-option>\n                <ion-select-option value=\"Worker\">Worker</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"occupationErr !== ''\">\n              <ion-label class=\"error-msg\">{{occupationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div *ngIf=\"occupationField.value === 'Student'\">\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Please Specify Your Area of Study</ion-label>\n              <ion-input type=\"text\" formControlName=\"student\" placeholder=\"Enter area of study\"\n                [ngClass]=\"{'error-field': studentErr !== ''}\" (focusin)=\"(studentErr='')\"\n                (ionBlur)=\" studentErr = validation(studentField)\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"studentErr !== ''\">\n              <ion-label class=\"error-msg\">{{studentErr}}</ion-label>\n            </div>\n          </div>\n\n          <div *ngIf=\"occupationField.value === 'Worker'\">\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Please Specify Your Area of Work</ion-label>\n              <ion-input type=\"text\" formControlName=\"worker\" placeholder=\"Enter area of work\"\n                [ngClass]=\"{'error-field': workerErr !== ''}\" (focusin)=\"(workerErr='')\"\n                (ionBlur)=\" workerErr = validation(workerField)\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"workerErr !== ''\">\n              <ion-label class=\"error-msg\">{{workerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div *ngIf=\"occupationField.value === 'Worker'\">\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Please Specify The Day You Will Join\n                Us</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"joining\"\n                [ngClass]=\"{'error-field': joiningErr !== ''}\" (focusin)=\"(joiningErr='')\"\n                (ionBlur)=\" joiningErr = validation(joiningField)\">\n                <ion-select-option *ngFor=\"let option of goingOptions\" value=\"{{option}}\" text-wrap>{{ option }}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"joiningErr !== ''\">\n              <ion-label class=\"error-msg\">{{joiningErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Outreach Information -->\n      <ion-card>\n        <ion-card-header>Outreach Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Have You Been To Kingdom Advance Outreach\n                Mission Before?<span> *</span></ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"outreach\"\n                [ngClass]=\"{'error-field': outreachErr !== ''}\" (focusin)=\"(outreachErr='')\"\n                (ionBlur)=\" outreachErr = validation(outreachField)\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"outreachErr !== ''\">\n              <ion-label class=\"error-msg\">{{outreachErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Are You Ready To Populate Heaven And Depopulate\n                Hell?<span> *</span></ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"populate\"\n                [ngClass]=\"{'error-field': populateErr !== ''}\" (focusin)=\"(populateErr='')\"\n                (ionBlur)=\" populateErr = validation(populateField)\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"populateErr !== ''\">\n              <ion-label class=\"error-msg\">{{populateErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-button type=\"submit\" fill=\"solid\" class=\"ion-float-start\" (click)=\"onSubmit()\">\n                    <ion-label>Submit</ion-label>\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button fill=\"solid\" color=\"danger\" class=\"ion-float-end\" (click)=\"onCancel()\">\n                    <ion-label>Reset</ion-label>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-service.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/home-service.service.ts ***!
    \**********************************************/

  /*! exports provided: HomeServiceService */

  /***/
  function srcAppHomeHomeServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeServiceService", function () {
      return HomeServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HomeServiceService =
    /*#__PURE__*/
    function () {
      function HomeServiceService(http) {
        _classCallCheck(this, HomeServiceService);

        this.http = http;
      } // Adding created Member


      _createClass(HomeServiceService, [{
        key: "addMember",
        value: function addMember(data) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('/home', data, httpOptions);
        }
      }]);

      return HomeServiceService;
    }();

    HomeServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HomeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HomeServiceService);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #b3cbe0;\n}\nion-content p {\n  color: red;\n}\nion-content #headerTitle {\n  background-color: #005099;\n  box-shadow: 2px 2px 5px #686161;\n}\nion-content #headerTitle ion-item {\n  width: auto;\n  --background: transparent;\n  margin: 0 auto 0 auto;\n}\nion-content #headerTitle ion-item ion-avatar {\n  width: 3.5rem;\n  height: 3.5rem;\n}\nion-content #headerTitle ion-item h1 {\n  margin-top: 0;\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  text-shadow: 1px 1px 2px;\n  font-family: \"Montserrat\";\n  display: inline-block;\n}\nion-content #headerTitle .date {\n  font-size: 0.95rem;\n  font-family: \"Open Sans\";\n  padding-bottom: 5px;\n}\nion-content #headerTitle ion-label {\n  font-family: \"Open Sans\";\n  font-size: 1.3rem;\n  margin: 0 auto;\n  color: white;\n}\nion-content ion-list {\n  background-color: #b3cbe0;\n  margin-top: 5px;\n}\nion-content ion-list ion-card {\n  width: 60%;\n  margin: 10px auto;\n  border-radius: 10px;\n  padding-bottom: 5px;\n  --background: white;\n}\nion-content ion-list ion-card ion-card-header {\n  font-family: \"Open Sans\";\n  font-weight: bolder;\n  font-size: 1em;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  --highlight-height: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content ion-list ion-item ion-label {\n  font-family: \"Open Sans\";\n  font-weight: 200;\n}\nion-content ion-list ion-item ion-input,\nion-content ion-list ion-item ion-select {\n  font-family: \"Open Sans\";\n  font-size: 0.9rem;\n  border: 1px solid var(--ion-color-light-shade);\n  margin-top: 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --padding-start: 10px;\n}\nion-content ion-list ion-item span {\n  color: red;\n}\n@media screen and (min-width: 320px) and (max-width: 1024px) {\n  #headerTitle ion-grid ion-item h1 {\n    font-size: 1.2rem;\n  }\n\n  #headerTitle ion-grid ion-label {\n    font-size: 1rem;\n  }\n\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFFvcGhpXFxEZXNrdG9wXFxXZWIgRGV2ZWxvcG1lbnRcXHJlZ2lzdHJhdGlvbi1mb3JtL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURDSTtFQUNJLFVBQUE7QUNDUjtBRENJO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NaO0FEQ1k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0NoQjtBREVZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNBaEI7QURJUTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FESVE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNGWjtBRFFJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDTlI7QURRUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05aO0FEUVk7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ05oQjtBRFVRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtBQ1JaO0FEVVk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEV1k7O0VBRUksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNUaEI7QURZVztFQUNLLFVBQUE7QUNWaEI7QURnQkE7RUFDSTtJQUNJLGlCQUFBO0VDYk47O0VEZ0JFO0lBQ0ksZUFBQTtFQ2JOOztFRGtCVTtJQUNJLFVBQUE7RUNmZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNiM2NiZTA7XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgI2hlYWRlclRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTA5OTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDEwNCwgOTcsIDk3KTtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XG5cbiAgICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNjYmUwO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCxcbiAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjNjYmUwO1xufVxuaW9uLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiByZWQ7XG59XG5pb24tY29udGVudCAjaGVhZGVyVGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MDk5O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjNjg2MTYxO1xufVxuaW9uLWNvbnRlbnQgI2hlYWRlclRpdGxlIGlvbi1pdGVtIHtcbiAgd2lkdGg6IGF1dG87XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDMuNXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG5pb24tY29udGVudCAjaGVhZGVyVGl0bGUgaW9uLWl0ZW0gaDEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAjaGVhZGVyVGl0bGUgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNjYmUwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCxcbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgI2hlYWRlclRpdGxlIGlvbi1ncmlkIGlvbi1pdGVtIGgxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/validations.service */
    "./src/app/services/validations.service.ts");
    /* harmony import */


    var _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/alerts.service */
    "./src/app/services/alerts.service.ts");
    /* harmony import */


    var _home_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-service.service */
    "./src/app/home/home-service.service.ts");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(modalCtrl, fb, validations, alertCtrl, addMemberService, toastCtrl) {
        _classCallCheck(this, HomePage);

        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.validations = validations;
        this.alertCtrl = alertCtrl;
        this.addMemberService = addMemberService;
        this.toastCtrl = toastCtrl;
        this.fixErrors = '';
        this.nameErr = '';
        this.genderErr = '';
        this.languagesErr = '';
        this.otherLanguagesErr = '';
        this.locationErr = '';
        this.contactErr = '';
        this.emailErr = '';
        this.denominationErr = '';
        this.denominationRoleErr = '';
        this.denominationPositionErr = '';
        this.denominationOfficerErr = '';
        this.holySpiritBaptiismErr = '';
        this.occupationErr = '';
        this.studentErr = '';
        this.workerErr = '';
        this.joiningErr = '';
        this.outreachErr = '';
        this.populateErr = '';
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.goingOptions = ['Will go with you from the first day', 'Will join you on Monday', 'Will join you on Tuesday', 'Will join you on Wednesday', 'Will join you on Thursday', 'Will join you on Friday'];
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.addMember = this.fb.group({
            name: ['', [this.validations.emptyTextField, this.validations.onlyStringsField]],
            gender: ['', [this.validations.emptyTextField]],
            languages: ['', [this.validations.emptyTextField, this.validations.onlyStringsField]],
            otherLanguages: [''],
            location: ['', [this.validations.emptyTextField, this.validations.onlyStringsField]],
            contact: ['', [this.validations.emptyTextField, this.validations.onlyNumbersField, this.validations.contactField]],
            email: ['', this.validations.emailField],
            denomination: ['', [this.validations.emptyTextField]],
            denominationRole: ['', [this.validations.emptyTextField]],
            denominationPosition: ['', this.validations.onlyStringsField],
            denominationOfficer: [''],
            holySpiritBaptiism: ['', [this.validations.emptyTextField]],
            occupation: ['', [this.validations.emptyTextField]],
            student: ['', this.validations.onlyStringsField],
            worker: ['', this.validations.onlyStringsField],
            joining: [''],
            outreach: ['', [this.validations.emptyTextField]],
            populate: ['', [this.validations.emptyTextField]]
          });
        } // Input Form Validation

      }, {
        key: "validation",
        value: function validation(control, message) {
          if (control.errors) {
            return this.validations.setErrorMessage(control).shift(0);
          } else {
            return '';
          }
        } // Submitting Entry

      }, {
        key: "showToast",
        value: function showToast(header, message, color) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      header: header,
                      message: message,
                      position: 'top',
                      duration: 5000,
                      color: color
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          if (this.addMember.valid) {
            this.alertCtrl.confirm('CONFIRM REGISTRATION', 'Are you sure you want to proceed with registration?', function () {
              _this.submitSubscription = _this.addMemberService.addMember(_this.addMember.value).subscribe(function (data) {
                if (data.hasOwnProperty('successMessage')) {
                  _this.fixErrors = '';

                  _this.addMember.reset();

                  _this.nField.setFocus();

                  _this.showToast('', 'Registration Successful', 'success');

                  _this.createForm();
                } else {
                  _this.showToast('', 'Registration Unsuccessful', 'danger');
                }
              }, function (err) {
                _this.showToast('', 'Registration Unsuccessful. Please try again', 'danger');
              });
            });
          } else {
            this.fixErrors = 'PLEASE FIX ALL ERRORS ON THE FORM BEFORE SUBMITTING';
            this.nField.setFocus();
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          var _this2 = this;

          if (this.addMember.dirty) {
            this.alertCtrl.confirm('CANCEL', 'Are you sure you want to cancel?', function () {
              _this2.addMember.reset();

              _this2.modalCtrl.dismiss();

              _this2.createForm();
            });
          } else {
            this.modalCtrl.dismiss();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.submitSubscription.unsubscribe();
        }
      }, {
        key: "nameField",
        get: function get() {
          return this.addMember.get('name');
        }
      }, {
        key: "genderField",
        get: function get() {
          return this.addMember.get('gender');
        }
      }, {
        key: "languagesField",
        get: function get() {
          return this.addMember.get('languages');
        }
      }, {
        key: "otherLanguagesField",
        get: function get() {
          return this.addMember.get('otherLanguages');
        }
      }, {
        key: "locationField",
        get: function get() {
          return this.addMember.get('location');
        }
      }, {
        key: "contactField",
        get: function get() {
          return this.addMember.get('contact');
        }
      }, {
        key: "emailField",
        get: function get() {
          return this.addMember.get('email');
        }
      }, {
        key: "denominationField",
        get: function get() {
          return this.addMember.get('denomination');
        }
      }, {
        key: "denominationRoleField",
        get: function get() {
          return this.addMember.get('denominationRole');
        }
      }, {
        key: "denominationPositionField",
        get: function get() {
          return this.addMember.get('denominationPosition');
        }
      }, {
        key: "denominationOfficerField",
        get: function get() {
          return this.addMember.get('denominationOfficer');
        }
      }, {
        key: "holySpiritBaptiismField",
        get: function get() {
          return this.addMember.get('holySpiritBaptiism');
        }
      }, {
        key: "occupationField",
        get: function get() {
          return this.addMember.get('occupation');
        }
      }, {
        key: "studentField",
        get: function get() {
          return this.addMember.get('student');
        }
      }, {
        key: "workerField",
        get: function get() {
          return this.addMember.get('worker');
        }
      }, {
        key: "joiningField",
        get: function get() {
          return this.addMember.get('joining');
        }
      }, {
        key: "outreachField",
        get: function get() {
          return this.addMember.get('outreach');
        }
      }, {
        key: "populateField",
        get: function get() {
          return this.addMember.get('populate');
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"]
      }, {
        type: _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]
      }, {
        type: _home_service_service__WEBPACK_IMPORTED_MODULE_6__["HomeServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HomePage.prototype, "entryType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HomePage.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nField', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HomePage.prototype, "nField", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"], _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"], _home_service_service__WEBPACK_IMPORTED_MODULE_6__["HomeServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/services/alerts.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/alerts.service.ts ***!
    \********************************************/

  /*! exports provided: AlertsService */

  /***/
  function srcAppServicesAlertsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsService", function () {
      return AlertsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var AlertsService =
    /*#__PURE__*/
    function () {
      function AlertsService(alertCtrl) {
        _classCallCheck(this, AlertsService);

        this.alertCtrl = alertCtrl;
      }

      _createClass(AlertsService, [{
        key: "confirm",
        value: function confirm(alertHeader, alertMessage, yes) {
          this.alertCtrl.create({
            header: alertHeader,
            message: alertMessage,
            buttons: [{
              text: 'No',
              cssClass: 'alertNo',
              role: 'cancel'
            }, {
              text: 'Yes',
              handler: yes,
              cssClass: 'alertYes'
            }]
          }).then(function (alertCtrl) {
            return alertCtrl.present();
          });
        }
      }]);

      return AlertsService;
    }();

    AlertsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    AlertsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], AlertsService);
    /***/
  },

  /***/
  "./src/app/services/validations.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/validations.service.ts ***!
    \*************************************************/

  /*! exports provided: ValidationsService */

  /***/
  function srcAppServicesValidationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationsService", function () {
      return ValidationsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ValidationsService =
    /*#__PURE__*/
    function () {
      function ValidationsService() {
        _classCallCheck(this, ValidationsService);

        this.errorMessages = {
          emptyField: 'Field is required',
          onlyStringField: 'Field must contain only letters',
          onlyNumbersField: 'Field must contain only numbers',
          contactLength: 'Contact must be 10 digits',
          emailField: 'Email must be in the correct format eg. a@a.com',
          wrongUsername: 'Please username is incorrect',
          wrongPassword: 'Please password is incorrect'
        };
      }

      _createClass(ValidationsService, [{
        key: "emptyTextField",
        value: function emptyTextField(control) {
          if (control.value === '') {
            return {
              emptyField: true
            };
          }

          return null;
        }
      }, {
        key: "onlyStringsField",
        value: function onlyStringsField(control) {
          if (control.value !== '') {
            if (!isNaN(control.value)) {
              return {
                onlyStringField: true
              };
            }

            return null;
          }
        }
      }, {
        key: "onlyNumbersField",
        value: function onlyNumbersField(control) {
          if (isNaN(control.value)) {
            return {
              onlyNumbersField: true
            };
          }

          return null;
        }
      }, {
        key: "emailField",
        value: function emailField(control) {
          if (control.value !== '') {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(control.value)) {
              return {
                emailField: true
              };
            }

            return null;
          }
        }
      }, {
        key: "contactField",
        value: function contactField(control) {
          if (control.value) {
            if (control.value.length > 10 || control.value.length < 10) {
              return {
                contactLength: true
              };
            } else {
              return null;
            }
          }
        } // Setting Message to display to user

      }, {
        key: "setErrorMessage",
        value: function setErrorMessage(control) {
          var _this3 = this;

          if ((control.dirty || control.touched) && control.errors) {
            return Object.keys(control.errors).map(function (key) {
              return _this3.errorMessages[key];
            });
          }
        }
      }]);

      return ValidationsService;
    }();

    ValidationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ValidationsService);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map