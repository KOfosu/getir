(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title id=\"title\" class=\"ion-text-center\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img src=\"../assets/logo.jpg\">\n        </ion-avatar>\n        <h1 text-wrap>KINGDOM ADVANCE OUTREACH</h1>\n      </ion-item>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div id=\"headerTitle\" >\n    <ion-grid >\n      <ion-row>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../assets/logo.jpg\">\n          </ion-avatar>\n          <h1 text-wrap>KINGDOM ADVANCE OUTREACH</h1>\n        </ion-item>\n      </ion-row>\n      <ion-row >\n        <ion-label>KWAHU PEPEASE FOR JESUS 2020 </ion-label> <br>\n      </ion-row>\n      <ion-row>\n        <ion-label>(Registration Form)</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <form [formGroup]=\"addMember\">\n    <ion-list lines=\"none\">\n      <!-- -------------------------------------------------------- Personal Information -->\n      <ion-card>\n        <ion-card-header> Personal Information</ion-card-header>\n        <ion-card-content>\n          <!-- Full Name -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Full Name</ion-label>\n              <ion-input type=\"text\" formControlName=\"name\" #nField placeholder=\"Enter full name\"\n                [ngClass]=\"{'error-field': !!nameErr}\" (focusin)=\"(nameErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!nameErr\">\n              <ion-label class=\"error-msg\">{{nameErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Gender -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Gender</ion-label>\n              <ion-select placeholder=\"Select Gender\" formControlName=\"gender\" [ngClass]=\"{'error-field': !!genderErr}\"\n                (focusin)=\"(genderErr='')\">\n                <ion-select-option value=\"femail\">Female</ion-select-option>\n                <ion-select-option value=\"male\">Male</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!genderErr\">\n              <ion-label class=\"error-msg\">{{genderErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Languages Spoken -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Local Language Spoken</ion-label>\n              <ion-input type=\"text\" formControlName=\"languages\"\n                placeholder=\"Enter local languages spoken eg. Twi, Ga, Ewe etc\"\n                [ngClass]=\"{'error-field': !!languagesErr}\" (focusin)=\"(languagesErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!languagesErr\">\n              <ion-label class=\"error-msg\">{{languagesErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Contact Information -->\n      <ion-card>\n        <ion-card-header>Contact Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">City of Residence</ion-label>\n              <ion-input type=\"text\" formControlName=\"location\" placeholder=\"Enter city/town you live in\"\n                [ngClass]=\"{'error-field': !!locationErr}\" (focusin)=\"(locationErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!locationErr\">\n              <ion-label class=\"error-msg\">{{locationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Contact Number</ion-label>\n              <ion-input type=\"text\" formControlName=\"contact\" placeholder=\"Enter contact number\"\n                [ngClass]=\"{'error-field': !!contactErr}\" (focusin)=\"(contactErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!contactErr\">\n              <ion-label class=\"error-msg\">{{contactErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Email Address</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Enter email address\"\n                [ngClass]=\"{'error-field': !!emailErr}\" (focusin)=\"(emailErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!emailErr\">\n              <ion-label class=\"error-msg\">{{emailErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Religious Information-->\n      <ion-card>\n        <ion-card-header>Religious Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>What Church Do You Attend?</ion-label>\n              <ion-input type=\"text\" formControlName=\"denomination\" placeholder=\"Enter name of denomination\"\n                [ngClass]=\"{'error-field': !!denominationErr}\" (focusin)=\"(denominationErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationErr\">\n              <ion-label class=\"error-msg\">{{denominationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>What Role Do You Play In Your\n                Church?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationRole\"\n                [ngClass]=\"{'error-field': !!denominationRoleErr}\" (focusin)=\"(denominationRoleErr='')\">\n                <ion-select-option value=\"member\">Member</ion-select-option>\n                <ion-select-option value=\"leader\">Leader</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationRoleErr\">\n              <ion-label class=\"error-msg\">{{denominationRoleErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If A Leader, Please Specify Your\n                Position?</ion-label>\n              <ion-input type=\"text\" formControlName=\"denominationPosition\" placeholder=\"Enter position\"\n                [ngClass]=\"{'error-field': !!denominationPositionErr}\" (focusin)=\"(denominationPositionErr='')\">\n              </ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationPositionErr\">\n              <ion-label class=\"error-msg\">{{denominationPositionErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Are You An Ordained Officer?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationOfficer\"\n                [ngClass]=\"{'error-field': !!denominationOfficerErr}\" (focusin)=\"(denominationOfficerErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationOfficerErr\">\n              <ion-label class=\"error-msg\">{{denominationOfficerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Have You Been Baptized By The Holy Spirit?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"holySpiritBaptiism\"\n                [ngClass]=\"{'error-field': !!holySpiritBaptiismErr}\" (focusin)=\"(holySpiritBaptiismErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!holySpiritBaptiismErr\">\n              <ion-label class=\"error-msg\">{{holySpiritBaptiismErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Education / Employment Information -->\n      <ion-card>\n        <ion-card-header>Employment/Education Information</ion-card-header>\n        <ion-card-content>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Occupation</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"occupation\"\n                [ngClass]=\"{'error-field': !!occupationErr}\" (focusin)=\"(occupationErr='')\">\n                <ion-select-option value=\"Student\">Student</ion-select-option>\n                <ion-select-option value=\"Worker\">Worker</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!occupationErr\">\n              <ion-label class=\"error-msg\">{{occupationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If Student, Please Specify Your Area of\n                Study?</ion-label>\n              <ion-input type=\"text\" formControlName=\"student\" placeholder=\"Enter area of study\"\n                [ngClass]=\"{'error-field': !!studentErr}\" (focusin)=\"(studentErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!studentErr\">\n              <ion-label class=\"error-msg\">{{studentErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If Worker, Please Specify Your Area of\n                Work?</ion-label>\n              <ion-input type=\"text\" formControlName=\"worker\" placeholder=\"Enter area of work\"\n                [ngClass]=\"{'error-field': !!workerErr}\" (focusin)=\"(workerErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!workerErr\">\n              <ion-label class=\"error-msg\">{{workerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If A Worker, Please Specify The Day You Will\n                Join Us</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"joining\"\n                [ngClass]=\"{'error-field': !!joiningErr}\" (focusin)=\"(joiningErr='')\">\n                <ion-select-option *ngFor=\"let option of goingOptions\" value=\"{{option}}\">{{ option }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!joiningErr\">\n              <ion-label class=\"error-msg\">{{joiningErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Outreach Information -->\n      <ion-card>\n        <ion-card-header>Outreach Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Have You Been To Kingdom Advance Outreach\n                Mission Before?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"outreach\"\n                [ngClass]=\"{'error-field': !!outreachErr}\" (focusin)=\"(outreachErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!outreachErr\">\n              <ion-label class=\"error-msg\">{{outreachErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Are You Ready To Populate Heaven And Depopulate Hell?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"populate\"\n                [ngClass]=\"{'error-field': !!populateErr}\" (focusin)=\"(populateErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!populateErr\">\n              <ion-label class=\"error-msg\">{{populateErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-button fill=\"solid\" class=\"ion-float-start\" (click)=\"onSubmit()\">\n                    <ion-label>Submit</ion-label>\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button type=\"submit\" fill=\"solid\" color=\"danger\" class=\"ion-float-end\" (click)=\"onCancel()\">\n                    <ion-label>Reset</ion-label>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </form>\n</ion-content>\n\n<!-- <ion-footer padding-horizontal>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"outline\" class=\"ion-float-start\" (click)=\"onSubmit()\">\n            <ion-label>Submit</ion-label>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button fill=\"outline\" color=\"danger\" class=\"ion-float-end\" (click)=\"onCancel()\">\n            <ion-label>Cancel</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/home/home-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/home/home-service.service.ts ***!
  \**********************************************/
/*! exports provided: HomeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() { return HomeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HomeServiceService = class HomeServiceService {
    constructor(http) {
        this.http = http;
    }
    // Adding created Member
    addMember(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('/home', data, httpOptions);
    }
};
HomeServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HomeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeServiceService);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: #005099;\n}\nion-header ion-toolbar ion-title {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: var(--ion-color-light);\n}\nion-header ion-toolbar ion-title ion-item {\n  width: 50%;\n  --background: transparent;\n  margin: 0 auto -15px auto;\n}\nion-header ion-toolbar ion-title ion-item ion-avatar {\n  width: 3.5rem;\n  height: 3.5rem;\n}\nion-header ion-toolbar ion-title ion-item h1 {\n  margin-top: 0;\n  margin-bottom: 2px;\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  text-shadow: 1px 1px 2px;\n  font-family: \"Montserrat\";\n  display: inline-block;\n}\nion-header ion-toolbar ion-title ion-label {\n  font-family: \"Open Sans\";\n  font-size: 1.3rem;\n}\nion-content #headerTitle {\n  background-color: #005099;\n}\nion-content #headerTitle ion-item {\n  width: 50%;\n  --background: transparent;\n  margin: 0 auto -15px auto;\n}\nion-content #headerTitle ion-item ion-avatar {\n  width: 3.5rem;\n  height: 3.5rem;\n}\nion-content #headerTitle ion-item h1 {\n  margin-top: 0;\n  margin-bottom: 1px;\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  text-shadow: 1px 1px 2px;\n  font-family: \"Montserrat\";\n  display: inline-block;\n}\nion-content #headerTitle ion-label {\n  font-family: \"Open Sans\";\n  font-size: 1.3rem;\n  margin: 0 auto;\n  color: white;\n}\nion-content #lbl {\n  word-wrap: break-word;\n  word-break: break-all;\n}\nion-content ion-list {\n  background-color: #b3cbe0;\n  padding-top: 15px;\n}\nion-content ion-list ion-card {\n  width: 60%;\n  margin: 10px auto;\n  border-radius: 10px;\n  padding-bottom: 10px;\n  --background: white;\n}\nion-content ion-list ion-card ion-card-header {\n  font-family: \"Open Sans\";\n  font-weight: bolder;\n  font-size: 1.1em;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  --highlight-height: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content ion-list ion-item ion-label {\n  font-family: \"Open Sans\";\n  font-weight: 200;\n  font-size: 1rem;\n  font-weight: 400;\n}\nion-content ion-list ion-item ion-input,\nion-content ion-list ion-item ion-select {\n  font-family: \"Open Sans\";\n  font-size: 0.9rem;\n  border: 1px solid var(--ion-color-light-shade);\n  margin-top: 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --padding-start: 10px;\n}\n@media screen and (max-width: 736px) {\n  #headerTitle ion-grid ion-item {\n    width: 100%;\n    margin: 0;\n  }\n\n  #headerTitle ion-grid ion-item h1 {\n    font-size: 1.1rem;\n  }\n\n  #headerTitle ion-grid ion-label {\n    font-size: 0.9rem;\n  }\n\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 1024px) {\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFFvcGhpXFxEZXNrdG9wXFxXZWIgRGV2ZWxvcG1lbnRcXHJlZ2lzdHJhdGlvbi1mb3JtL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0FDQVI7QURFUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ0FaO0FERVk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0FoQjtBRENnQjtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDQ3BCO0FEQ2dCO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0NwQjtBREdZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQ0RoQjtBRFFJO0VBQ0kseUJBQUE7QUNMUjtBRE1RO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNKWjtBREtZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNIaEI7QURLWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNIaEI7QURPUTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0xaO0FEUUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FDTlI7QURTSTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNQUjtBRFNRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDUFo7QURTWTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1BoQjtBRFdRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtBQ1RaO0FEV1k7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVGhCO0FEWVk7O0VBRUksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNWaEI7QUR3Q0E7RUFrQkk7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFQ3RETjs7RUR3REU7SUFDSSxpQkFBQTtFQ3JETjs7RUR3REU7SUFDSSxpQkFBQTtFQ3JETjs7RUQwRFU7SUFDSSxVQUFBO0VDdkRkO0FBQ0Y7QUQ2REE7RUFHWTtJQUNJLFVBQUE7RUM3RGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzAwNTA5OTtcblxuICAgICAgICBpb24tdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJSA7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAtMTVweCBhdXRvO1xuICAgICAgICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgICNoZWFkZXJUaXRsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDUwOTk7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIC0xNXB4IGF1dG87XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2xibCB7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IzY2JlMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG5cbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pbnB1dCxcbiAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW9uLWxpc3Q6OmFmdGVyIHtcbiAgICAvLyAgICAgY29udGVudDogXCJcIjtcbiAgICAvLyAgICAgYmFja2dyb3VuZDogIHVybCgnc3JjL2Fzc2V0cy9za3kuanBnJyk7XG4gICAgLy8gICAgIG9wYWNpdHk6IDAuNTtcbiAgICAvLyAgICAgdG9wOiAwO1xuICAgIC8vICAgICBsZWZ0OiAwO1xuICAgIC8vICAgICBib3R0b206IDA7XG4gICAgLy8gICAgIHJpZ2h0OiAwO1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIHotaW5kZXg6IC0xOyAgIFxuICAgIC8vICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gICB9XG59XG5cbi8vIGlvbi1mb290ZXIge1xuLy8gICAgIGlvbi1idXR0b24ge1xuLy8gICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgICAvLyAjaGVhZGVyVGl0bGUge1xuICAgIC8vICAgICBpb24taXRlbSB7XG4gICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgbWFyZ2luOiAwO1xuICAgIC8vICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAvLyAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGgxIHtcbiAgICAvLyAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGlvbi1sYWJlbCB7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWl0ZW0gaDEge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG5cbiAgICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwNTA5OTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwIGF1dG8gLTE1cHggYXV0bztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDMuNXJlbTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGlvbi1pdGVtIGgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuaW9uLWNvbnRlbnQgI2hlYWRlclRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTA5OTtcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSBpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCBhdXRvIC0xNXB4IGF1dG87XG59XG5pb24tY29udGVudCAjaGVhZGVyVGl0bGUgaW9uLWl0ZW0gaW9uLWF2YXRhciB7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMy41cmVtO1xufVxuaW9uLWNvbnRlbnQgI2hlYWRlclRpdGxlIGlvbi1pdGVtIGgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tY29udGVudCAjbGJsIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2NiZTA7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCxcbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2hlYWRlclRpdGxlIGlvbi1ncmlkIGlvbi1pdGVtIGgxIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuXG4gICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG5cbiAgaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBpb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alerts.service */ "./src/app/services/alerts.service.ts");
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-service.service */ "./src/app/home/home-service.service.ts");







let HomePage = class HomePage {
    constructor(modalCtrl, fb, validations, alertCtrl, addMemberService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.validations = validations;
        this.alertCtrl = alertCtrl;
        this.addMemberService = addMemberService;
        this.toastCtrl = toastCtrl;
    }
    get nameField() {
        return this.addMember.get('name');
    }
    get genderField() {
        return this.addMember.get('gender');
    }
    get languagesField() {
        return this.addMember.get('languages');
    }
    get locationField() {
        return this.addMember.get('location');
    }
    get contactField() {
        return this.addMember.get('contact');
    }
    get emailField() {
        return this.addMember.get('email');
    }
    get denominationField() {
        return this.addMember.get('denomination');
    }
    get denominationRoleField() {
        return this.addMember.get('denominationRole');
    }
    get denominationPositionField() {
        return this.addMember.get('denominationPosition');
    }
    get denominationOfficerField() {
        return this.addMember.get('denominationOfficer');
    }
    get holySpiritBaptiismField() {
        return this.addMember.get('holySpiritBaptiism');
    }
    get occupationField() {
        return this.addMember.get('occupation');
    }
    get studentField() {
        return this.addMember.get('student');
    }
    get workerField() {
        return this.addMember.get('worker');
    }
    get joiningField() {
        return this.addMember.get('joining');
    }
    get outreachField() {
        return this.addMember.get('outreach');
    }
    get populateField() {
        return this.addMember.get('populate');
    }
    ngOnInit() {
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
            holySpiritBaptiism: [''],
            occupation: [''],
            student: [''],
            worker: [''],
            joining: [''],
            outreach: [''],
            populate: ['']
        });
        this.goingOptions = [
            'Will go with you from the first day',
            'Will join you on Monday',
            'Will join you on Tuesday',
            'Will join you on Wednesday',
            'Will join you on Thursday',
            'Will join you on Friday'
        ];
    }
    showToast(header, message, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                header,
                message,
                position: 'top',
                duration: 3000,
                color
            });
            toast.present();
        });
    }
    onSubmit() {
        if (this.addMember.dirty) {
            this.alertCtrl.confirm('CONFIRM REGISTRATION', 'Are you sure you want to proceed with registration?', () => {
                this.submitSubscription = this.addMemberService
                    .addMember(this.addMember.value)
                    .subscribe(data => {
                    if (data.hasOwnProperty('successMessage')) {
                        this.nField.setFocus();
                        this.showToast('Success', 'Registration Successful', 'success');
                        this.addMember.reset();
                    }
                    else {
                        this.showToast('Unsuccessful', 'Registration Unsuccessful. Please fix errors and try again', 'danger');
                    }
                }, err => {
                    this.showToast('Unsuccessful', 'Registration Unsuccessful. Please try again', 'danger');
                });
            });
        }
        else {
            this.nField.setFocus();
        }
    }
    onCancel() {
        if (this.addMember.dirty) {
            this.alertCtrl.confirm('CANCEL', 'Are you sure you want to cancel?', () => {
                this.addMember.reset();
                this.modalCtrl.dismiss();
            });
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
    ngOnDestroy() {
        this.submitSubscription.unsubscribe();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"] },
    { type: _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"] },
    { type: _home_service_service__WEBPACK_IMPORTED_MODULE_6__["HomeServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], HomePage.prototype, "entryType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HomePage.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nField', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HomePage.prototype, "nField", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"],
        _services_alerts_service__WEBPACK_IMPORTED_MODULE_5__["AlertsService"],
        _home_service_service__WEBPACK_IMPORTED_MODULE_6__["HomeServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/alerts.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/alerts.service.ts ***!
  \********************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertsService = class AlertsService {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    confirm(alertHeader, alertMessage, yes) {
        this.alertCtrl.create({
            header: alertHeader,
            message: alertMessage,
            buttons: [
                {
                    text: 'No',
                    cssClass: 'alertNo',
                    role: 'cancel'
                },
                {
                    text: 'Yes',
                    handler: yes,
                    cssClass: 'alertYes'
                }
            ]
        }).then(alertCtrl => alertCtrl.present());
    }
};
AlertsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertsService);



/***/ }),

/***/ "./src/app/services/validations.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/validations.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsService", function() { return ValidationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValidationsService = class ValidationsService {
    constructor() {
        this.errorMessages = {
            emptyField: 'Please field cannot be empty',
            wrongUsername: 'Please username is incorrect',
            wrongPassword: 'Please password is incorrect'
        };
    }
    emptyTextField(control) {
        if (control.value === '') {
            return { emptyField: true };
        }
        return null;
    }
    wrongUsername(control) {
        if (control.value === '') {
            return { wrongUsername: true };
        }
        return null;
    }
    wrongPassword(control) {
        if (control.value === '') {
            return { wrongPassword: true };
        }
        return null;
    }
    setErrorMessage(control) {
        if ((control.pristine || control.dirty || control.touched) && control.errors) {
            return Object.keys(control.errors).map(key => this.errorMessages[key]);
        }
    }
};
ValidationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ValidationsService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map