function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      <h1 id=\"com-name\">KINGDOM ADVANCE OUTREACH</h1>\n      <ion-label id=\"area\">KWAHU PEPEASE FOR JESUS 2020</ion-label>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addMember\">\n    <ion-list lines=\"none\">\n      <!-- -------------------------------------------------------- Personal Information -->\n      <ion-card>\n        <ion-card-header> Personal Information</ion-card-header>\n        <ion-card-content>\n          <!-- Full Name -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Full Name</ion-label>\n              <ion-input type=\"text\" formControlName=\"name\" placeholder=\"Enter full name\"\n                [ngClass]=\"{'error-field': !!nameErr}\" (focusin)=\"(nameErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!nameErr\">\n              <ion-label class=\"error-msg\">{{nameErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Gender -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Gender</ion-label>\n              <ion-select placeholder=\"Select Gender\" formControlName=\"gender\" [ngClass]=\"{'error-field': !!genderErr}\"\n                (focusin)=\"(genderErr='')\">\n                <ion-select-option value=\"f\">Female</ion-select-option>\n                <ion-select-option value=\"m\">Male</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!genderErr\">\n              <ion-label class=\"error-msg\">{{genderErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Languages Spoken -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Local Language Spoken</ion-label>\n              <ion-input type=\"text\" formControlName=\"languages\"\n                placeholder=\"Enter local languages that you can speak eg. Twi, Ga, Ewe etc\"\n                [ngClass]=\"{'error-field': !!languagesErr}\" (focusin)=\"(languagesErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!languagesErr\">\n              <ion-label class=\"error-msg\">{{languagesErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Contact Information -->\n      <ion-card>\n        <ion-card-header>Contact Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">City of Residence</ion-label>\n              <ion-input type=\"text\" formControlName=\"location\" placeholder=\"Enter city/town you live in\"\n                [ngClass]=\"{'error-field': !!locationErr}\" (focusin)=\"(locationErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!locationErr\">\n              <ion-label class=\"error-msg\">{{locationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Contact Number</ion-label>\n              <ion-input type=\"text\" formControlName=\"contact\" placeholder=\"Enter contact number\"\n                [ngClass]=\"{'error-field': !!contactErr}\" (focusin)=\"(contactErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!contactErr\">\n              <ion-label class=\"error-msg\">{{contactErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Email Address</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Enter email address\"\n                [ngClass]=\"{'error-field': !!emailErr}\" (focusin)=\"(emailErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!emailErr\">\n              <ion-label class=\"error-msg\">{{emailErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Religious Information-->\n      <ion-card>\n        <ion-card-header>Religious Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">What Church Do You Attend?</ion-label>\n              <ion-input type=\"text\" formControlName=\"denomination\" placeholder=\"Enter name of denomination\"\n                [ngClass]=\"{'error-field': !!denominationErr}\" (focusin)=\"(denominationErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationErr\">\n              <ion-label class=\"error-msg\">{{denominationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">What Role Do You Play In Your\n                Church?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationRole\"\n                [ngClass]=\"{'error-field': !!denominationRoleErr}\" (focusin)=\"(denominationRoleErr='')\">\n                <ion-select-option value=\"member\">Member</ion-select-option>\n                <ion-select-option value=\"leader\">Leader</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationRoleErr\">\n              <ion-label class=\"error-msg\">{{denominationRoleErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">If A Leader, Please Specify Your\n                Position?</ion-label>\n              <ion-input type=\"text\" formControlName=\"denominationPosition\" placeholder=\"Enter position\"\n                [ngClass]=\"{'error-field': !!denominationPositionErr}\" (focusin)=\"(denominationPositionErr='')\">\n              </ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationPositionErr\">\n              <ion-label class=\"error-msg\">{{denominationPositionErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Are You An Ordained Officer?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationOfficer\"\n                [ngClass]=\"{'error-field': !!denominationOfficerErr}\" (focusin)=\"(denominationOfficerErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationOfficerErr\">\n              <ion-label class=\"error-msg\">{{denominationOfficerErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Education / Employment Information -->\n      <ion-card>\n        <ion-card-header>Employment/Education Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">If Student, Please Specify Your Area of\n                Study?</ion-label>\n              <ion-input type=\"text\" formControlName=\"student\" placeholder=\"Enter area of study\"\n                [ngClass]=\"{'error-field': !!studentErr}\" (focusin)=\"(studentErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!studentErr\">\n              <ion-label class=\"error-msg\">{{studentErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">If Worker, Please Specify Your Area of\n                Work?</ion-label>\n              <ion-input type=\"text\" formControlName=\"worker\" placeholder=\"Enter area of work\"\n                [ngClass]=\"{'error-field': !!workerErr}\" (focusin)=\"(workerErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!workerErr\">\n              <ion-label class=\"error-msg\">{{workerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">If A Worker, Please Specify The Day You Will\n                Join Us</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"joining\"\n                [ngClass]=\"{'error-field': !!joiningErr}\" (focusin)=\"(joiningErr='')\">\n                <ion-select-option value=\"yes\" *ngFor=\"let option of goingOptions\">{{ option }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!joiningErr\">\n              <ion-label class=\"error-msg\">{{joiningErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Outreach Information -->\n      <ion-card>\n        <ion-card-header>Outreach Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Have You Been To Kingdom Advance Outreach\n                Mission Before?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"outreach\"\n                [ngClass]=\"{'error-field': !!outreachErr}\" (focusin)=\"(outreachErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!outreachErr\">\n              <ion-label class=\"error-msg\">{{outreachErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Are You Ready To Populate Heaven?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"populate\"\n                [ngClass]=\"{'error-field': !!populateErr}\" (focusin)=\"(populateErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!populateErr\">\n              <ion-label class=\"error-msg\">{{populateErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-button fill=\"outline\" class=\"ion-float-start\" (click)=\"onSubmit()\">\n                    <ion-label>Submit</ion-label>\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button type=\"submit\" fill=\"outline\" color=\"danger\" class=\"ion-float-end\" (click)=\"onCancel()\">\n                    <ion-label>Cancel</ion-label>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </form>\n</ion-content>\n\n<!-- <ion-footer padding-horizontal>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" class=\"ion-float-start\" (click)=\"onSubmit()\">\n            <ion-label>Submit</ion-label>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button fill=\"outline\" color=\"danger\" class=\"ion-float-end\" (click)=\"onCancel()\">\n            <ion-label>Cancel</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->";
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


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background:#091804;\n}\nion-header ion-toolbar ion-title {\n  font-family: \"Montserrat\";\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: var(--ion-color-light);\n}\nion-header ion-toolbar ion-title h1 {\n  margin-top: 0;\n  margin-bottom: 2px;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bolder;\n  text-shadow: 2px 2px 2px;\n}\nion-header ion-toolbar ion-title ion-label {\n  font-family: \"Open Sans\";\n  font-size: 1.1rem;\n}\nion-content ion-list {\n  background-image: url('sky.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding-top: 15px;\n}\nion-content ion-list ion-card {\n  width: 60%;\n  margin: 10px auto;\n  border-radius: 10px;\n  padding-bottom: 10px;\n  --background: white;\n}\nion-content ion-list ion-card ion-card-header {\n  font-family: \"Open Sans\";\n  font-weight: bolder;\n  font-size: 1.1em;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  --highlight-height: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content ion-list ion-item ion-label {\n  font-family: \"Open Sans\";\n  font-weight: 200;\n  font-size: 1rem;\n  font-weight: 400;\n}\nion-content ion-list ion-item ion-input,\nion-content ion-list ion-item ion-select {\n  font-family: \"Open Sans\";\n  font-size: 0.9rem;\n  border: 1px solid var(--ion-color-light-shade);\n  margin-top: 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --padding-start: 10px;\n}\n@media screen and (max-width: 736px) {\n  #com-name {\n    font-size: 1rem;\n  }\n\n  #area {\n    font-size: 0.9rem;\n  }\n\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFFvcGhpXFxEZXNrdG9wXFxXZWIgRGV2ZWxvcG1lbnRcXHJlZ2lzdHJhdGlvbi1mb3JtL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0FDQVI7QURFUTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQVo7QURFWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNBaEI7QURFWTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7QUNBaEI7QURRSTtFQUNJLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDTFI7QURNUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0paO0FETVk7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKaEI7QURRUTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7QUNOWjtBRE9ZO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xoQjtBRE9ZOztFQUVJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDTGhCO0FEbUNBO0VBQ0k7SUFDSSxlQUFBO0VDaENOOztFRG1DRTtJQUNJLGlCQUFBO0VDaENOOztFRHFDVTtJQUNJLFVBQUE7RUNsQ2Q7QUFDRjtBRHVDQTtFQUdZO0lBQ0ksVUFBQTtFQ3ZDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiMwOTE4MDQ7XG4gICAgICAgXG4gICAgICAgIGlvbi10aXRsZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnc3JjL2Fzc2V0cy9za3kuanBnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4OyBcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0LFxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlvbi1saXN0OjphZnRlciB7XG4gICAgLy8gICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICB1cmwoJ3NyYy9hc3NldHMvc2t5LmpwZycpO1xuICAgIC8vICAgICBvcGFjaXR5OiAwLjU7XG4gICAgLy8gICAgIHRvcDogMDtcbiAgICAvLyAgICAgbGVmdDogMDtcbiAgICAvLyAgICAgYm90dG9tOiAwO1xuICAgIC8vICAgICByaWdodDogMDtcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICB6LWluZGV4OiAtMTsgICBcbiAgICAvLyAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vICAgfVxufVxuXG4vLyBpb24tZm9vdGVyIHtcbi8vICAgICBpb24tYnV0dG9uIHtcbi8vICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgICAgICBpb24tbGFiZWwge1xuLy8gICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gICAgI2NvbS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyAgIFxuICAgIH1cblxuICAgICNhcmVhIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07IFxuICAgIH1cblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgICBpb24tY29udGVudCB7XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDojMDkxODA0O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSBoMSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvc2t5LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0LFxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgI2NvbS1uYW1lIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAjYXJlYSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICBpb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59Il19 */";
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

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(modalCtrl, fb, validations, alertCtrl) {
        _classCallCheck(this, HomePage);

        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.validations = validations;
        this.alertCtrl = alertCtrl;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addMember = this.fb.group({
            name: ['', [this.validations.emptyTextField]],
            gender: ['', [this.validations.emptyTextField]],
            languages: ['', [this.validations.emptyTextField]],
            location: [''],
            contact: [''],
            email: [''],
            denomination: [''],
            denominationRole: [''],
            denominationPosition: [''],
            denominationOfficer: [''],
            student: [''],
            worker: [''],
            joining: [''],
            outreach: [''],
            populate: ['']
          });

          if (this.entryType === 'Update') {
            this.addMember.patchValue({
              name: this.data.name,
              location: this.data.pAddress,
              contact1: this.data.location,
              contact2: this.data.mobile,
              email: this.data.telephone
            });
          }

          this.goingOptions = ['Will go with you from the first day', 'Will join you on Monday', 'Will join you on Tuesday', 'Will join you on Wednesday', 'Will join you on Thursday', 'Will join you on Friday'];
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // Validations
          // this.nameField.errors
          //     ? (this.nameErr = this.validations.setErrorMessage(this.nameField))
          //     : (this.nameErr = '');
          // this.locationField.errors
          //     ? (this.locationErr = this.validations.setErrorMessage(
          //           this.locationField
          //       ))
          //     : (this.locationErr = '');
          // this.emailField.errors
          //     ? (this.emailErr = this.validations.setErrorMessage(
          //           this.emailField
          //       ))
          //     : (this.emailErr = '');
          // Submitting entries
          // if (this.addMember.valid) {
          // }
          alert('Clicked on Submit');
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          var _this = this;

          if (this.addMember.dirty) {
            this.alertCtrl.confirm('CANCEL', 'Are you sure you want to cancel?', function () {
              _this.addMember.reset();

              _this.modalCtrl.dismiss();
            });
          } else {
            this.modalCtrl.dismiss();
          }
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
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], HomePage.prototype, "entryType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HomePage.prototype, "data", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"], _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]])], HomePage);
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
          emptyField: 'Please field cannot be empty',
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
        key: "wrongUsername",
        value: function wrongUsername(control) {
          if (control.value === '') {
            return {
              wrongUsername: true
            };
          }

          return null;
        }
      }, {
        key: "wrongPassword",
        value: function wrongPassword(control) {
          if (control.value === '') {
            return {
              wrongPassword: true
            };
          }

          return null;
        }
      }, {
        key: "setErrorMessage",
        value: function setErrorMessage(control) {
          var _this2 = this;

          if ((control.pristine || control.dirty || control.touched) && control.errors) {
            return Object.keys(control.errors).map(function (key) {
              return _this2.errorMessages[key];
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