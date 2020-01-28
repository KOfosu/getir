(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div id=\"headerTitle\" >\n    <ion-grid >\n      <ion-row>\n        <ion-item lines=\"none\">\n          <ion-avatar slot=\"start\">\n            <img src=\"../assets/logo.jpg\">\n          </ion-avatar>\n          <h1 text-wrap>KINGDOM ADVANCE OUTREACH</h1>\n        </ion-item>\n      </ion-row>\n      <ion-row >\n        <ion-label>KWAHU PEPEASE FOR JESUS 2020 </ion-label> <br>\n      </ion-row>\n      <ion-row >\n        <ion-label class=\"date\">7th - 14th June, 2020 </ion-label> <br>\n      </ion-row>\n      <ion-row>\n        <ion-label>(Registration Form)</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <form [formGroup]=\"addMember\">\n    <ion-list lines=\"none\">\n      <ion-card>\n        <ion-card-content>\n          <ion-label color=\"danger\">All fields marked with (*) are required fields</ion-label>\n        </ion-card-content>\n      </ion-card>\n      <!-- -------------------------------------------------------- Personal Information -->\n      <ion-card>\n        <ion-card-header> Personal Information</ion-card-header>\n        <ion-card-content>\n          <!-- Full Name -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Full Name <span> *</span></ion-label>\n              <ion-input type=\"text\" formControlName=\"name\" #nField placeholder=\"Enter full name\"\n                [ngClass]=\"{'error-field': !!nameErr}\" (focusin)=\"(nameErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!nameErr\">\n              <ion-label class=\"error-msg\">{{nameErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Gender -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Gender<span> *</span></ion-label>\n              <ion-select placeholder=\"Select Gender\" formControlName=\"gender\" [ngClass]=\"{'error-field': !!genderErr}\"\n                (focusin)=\"(genderErr='')\">\n                <ion-select-option value=\"female\">Female</ion-select-option>\n                <ion-select-option value=\"male\">Male</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!genderErr\">\n              <ion-label class=\"error-msg\">{{genderErr}}</ion-label>\n            </div>\n          </div>\n\n          <!-- Languages Spoken -->\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Local Language Spoken</ion-label>\n              <ion-input type=\"text\" formControlName=\"languages\"\n                placeholder=\"Enter local languages spoken eg. Twi, Ga, etc\"\n                [ngClass]=\"{'error-field': !!languagesErr}\" (focusin)=\"(languagesErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!languagesErr\">\n              <ion-label class=\"error-msg\">{{languagesErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Contact Information -->\n      <ion-card>\n        <ion-card-header>Contact Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">City of Residence</ion-label>\n              <ion-input type=\"text\" formControlName=\"location\" placeholder=\"Enter city/town you live in\"\n                [ngClass]=\"{'error-field': !!locationErr}\" (focusin)=\"(locationErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!locationErr\">\n              <ion-label class=\"error-msg\">{{locationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Contact Number<span> *</span></ion-label>\n              <ion-input type=\"text\" formControlName=\"contact\" placeholder=\"Enter contact number\"\n                [ngClass]=\"{'error-field': !!contactErr}\" (focusin)=\"(contactErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!contactErr\">\n              <ion-label class=\"error-msg\">{{contactErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Email Address</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Enter email address\"\n                [ngClass]=\"{'error-field': !!emailErr}\" (focusin)=\"(emailErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!emailErr\">\n              <ion-label class=\"error-msg\">{{emailErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Religious Information-->\n      <ion-card>\n        <ion-card-header>Religious Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>What Church Do You Attend?</ion-label>\n              <ion-input type=\"text\" formControlName=\"denomination\" placeholder=\"Enter name of denomination\"\n                [ngClass]=\"{'error-field': !!denominationErr}\" (focusin)=\"(denominationErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationErr\">\n              <ion-label class=\"error-msg\">{{denominationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>What Role Do You Play In Your\n                Church?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationRole\"\n                [ngClass]=\"{'error-field': !!denominationRoleErr}\" (focusin)=\"(denominationRoleErr='')\">\n                <ion-select-option value=\"member\">Member</ion-select-option>\n                <ion-select-option value=\"leader\">Leader</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationRoleErr\">\n              <ion-label class=\"error-msg\">{{denominationRoleErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If A Leader, Please Specify Your\n                Position</ion-label>\n              <ion-input type=\"text\" formControlName=\"denominationPosition\" placeholder=\"Enter position\"\n                [ngClass]=\"{'error-field': !!denominationPositionErr}\" (focusin)=\"(denominationPositionErr='')\">\n              </ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationPositionErr\">\n              <ion-label class=\"error-msg\">{{denominationPositionErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Are You An Ordained Officer?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"denominationOfficer\"\n                [ngClass]=\"{'error-field': !!denominationOfficerErr}\" (focusin)=\"(denominationOfficerErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!denominationOfficerErr\">\n              <ion-label class=\"error-msg\">{{denominationOfficerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Have You Been Baptized By The Holy Spirit?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"holySpiritBaptiism\"\n                [ngClass]=\"{'error-field': !!holySpiritBaptiismErr}\" (focusin)=\"(holySpiritBaptiismErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!holySpiritBaptiismErr\">\n              <ion-label class=\"error-msg\">{{holySpiritBaptiismErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Education / Employment Information -->\n      <ion-card>\n        <ion-card-header>Employment/Education Information</ion-card-header>\n        <ion-card-content>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\">Occupation</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"occupation\"\n                [ngClass]=\"{'error-field': !!occupationErr}\" (focusin)=\"(occupationErr='')\">\n                <ion-select-option value=\"Student\">Student</ion-select-option>\n                <ion-select-option value=\"Worker\">Worker</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!occupationErr\">\n              <ion-label class=\"error-msg\">{{occupationErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If Student, Please Specify Your Area of\n                Study</ion-label>\n              <ion-input type=\"text\" formControlName=\"student\" placeholder=\"Enter area of study\"\n                [ngClass]=\"{'error-field': !!studentErr}\" (focusin)=\"(studentErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!studentErr\">\n              <ion-label class=\"error-msg\">{{studentErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If Worker, Please Specify Your Area of\n                Work</ion-label>\n              <ion-input type=\"text\" formControlName=\"worker\" placeholder=\"Enter area of work\"\n                [ngClass]=\"{'error-field': !!workerErr}\" (focusin)=\"(workerErr='')\"></ion-input>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!workerErr\">\n              <ion-label class=\"error-msg\">{{workerErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>If A Worker, Please Specify The Day You Will\n                Join Us</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"joining\"\n                [ngClass]=\"{'error-field': !!joiningErr}\" (focusin)=\"(joiningErr='')\">\n                <ion-select-option *ngFor=\"let option of goingOptions\" value=\"{{option}}\" text-wrap>{{ option }}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!joiningErr\">\n              <ion-label class=\"error-msg\">{{joiningErr}}</ion-label>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- ----------------------------------------------------- Outreach Information -->\n      <ion-card>\n        <ion-card-header>Outreach Information</ion-card-header>\n        <ion-card-content>\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Have You Been To Kingdom Advance Outreach\n                Mission Before?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"outreach\"\n                [ngClass]=\"{'error-field': !!outreachErr}\" (focusin)=\"(outreachErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!outreachErr\">\n              <ion-label class=\"error-msg\">{{outreachErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-item>\n              <ion-label position=\"stacked\" text-wrap>Are You Ready To Populate Heaven And Depopulate Hell?</ion-label>\n              <ion-select placeholder=\"Select option\" formControlName=\"populate\"\n                [ngClass]=\"{'error-field': !!populateErr}\" (focusin)=\"(populateErr='')\">\n                <ion-select-option value=\"yes\">Yes</ion-select-option>\n                <ion-select-option value=\"no\">No</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <div class=\"error-field-message\" *ngIf=\"!!populateErr\">\n              <ion-label class=\"error-msg\">{{populateErr}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-button fill=\"solid\" class=\"ion-float-start\" (click)=\"onSubmit()\">\n                    <ion-label>Submit</ion-label>\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button type=\"submit\" fill=\"solid\" color=\"danger\" class=\"ion-float-end\" (click)=\"onCancel()\">\n                    <ion-label>Reset</ion-label>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </form>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #b3cbe0;\n}\nion-content #headerTitle {\n  background-color: #005099;\n  box-shadow: 2px 2px 5px #686161;\n}\nion-content #headerTitle ion-item {\n  width: 50%;\n  --background: transparent;\n  margin: 0 auto 0 auto;\n}\nion-content #headerTitle ion-item ion-avatar {\n  width: 3.5rem;\n  height: 3.5rem;\n}\nion-content #headerTitle ion-item h1 {\n  margin-top: 0;\n  color: white;\n  font-size: 2rem;\n  font-weight: bolder;\n  text-shadow: 1px 1px 2px;\n  font-family: \"Montserrat\";\n  display: inline-block;\n}\nion-content #headerTitle .date {\n  font-size: 1rem;\n  font-family: cursive;\n  padding-bottom: 5px;\n}\nion-content #headerTitle ion-label {\n  font-family: \"Open Sans\";\n  font-size: 1.3rem;\n  margin: 0 auto;\n  color: white;\n}\nion-content ion-list {\n  background-color: #b3cbe0;\n  margin-top: 5px;\n}\nion-content ion-list ion-card {\n  width: 60%;\n  margin: 10px auto;\n  border-radius: 10px;\n  padding-bottom: 5px;\n  --background: white;\n}\nion-content ion-list ion-card ion-card-header {\n  font-family: \"Open Sans\";\n  font-weight: bolder;\n  font-size: 1em;\n}\nion-content ion-list ion-item {\n  --background: transparent;\n  --highlight-height: 0;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\nion-content ion-list ion-item ion-label {\n  font-family: \"Open Sans\";\n  font-weight: 200;\n}\nion-content ion-list ion-item ion-input,\nion-content ion-list ion-item ion-select {\n  font-family: \"Open Sans\";\n  font-size: 0.9rem;\n  border: 1px solid var(--ion-color-light-shade);\n  margin-top: 10px;\n  margin-bottom: 5px;\n  border-radius: 4px;\n  --padding-start: 10px;\n}\nion-content ion-list ion-item span {\n  color: red;\n}\n@media screen and (min-width: 320px) and (max-width: 480px) {\n  #headerTitle ion-grid ion-item {\n    width: 100%;\n    margin: 0;\n  }\n\n  #headerTitle ion-grid ion-item h1 {\n    font-size: 1.1rem;\n  }\n\n  #headerTitle ion-grid ion-label {\n    font-size: 0.9rem;\n  }\n\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n@media screen and (max-width: 736px) {\n  #headerTitle ion-grid ion-item {\n    width: 100%;\n    margin: 0;\n  }\n\n  #headerTitle ion-grid ion-item h1 {\n    font-size: 1.1rem;\n  }\n\n  #headerTitle ion-grid ion-label {\n    font-size: 0.9rem;\n  }\n\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  #headerTitle ion-grid ion-item {\n    width: 50%;\n    margin: 0 auto 0 auto;\n  }\n\n  #headerTitle ion-grid ion-item h1 {\n    font-size: 1.2rem;\n  }\n\n  #headerTitle ion-grid ion-label {\n    font-size: 1rem;\n  }\n\n  ion-content ion-list ion-card {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFFvcGhpXFxEZXNrdG9wXFxXZWIgRGV2ZWxvcG1lbnRcXHJlZ2lzdHJhdGlvbi1mb3JtL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7QURDSTtFQUNJLHlCQUFBO0VBQ0EsK0JBQUE7QUNDUjtBRENRO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNDWjtBRENZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDaEI7QURFWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQWhCO0FESVE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FESVE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNGWjtBRFFJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDTlI7QURRUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05aO0FEUVk7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ05oQjtBRFVRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtBQ1JaO0FEVVk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEV1k7O0VBRUksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNUaEI7QURZVztFQUNLLFVBQUE7QUNWaEI7QURnQkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxTQUFBO0VDYk47O0VEZ0JFO0lBQ0ksaUJBQUE7RUNiTjs7RURnQkU7SUFDSSxpQkFBQTtFQ2JOOztFRGtCVTtJQUNJLFVBQUE7RUNmZDtBQUNGO0FEcUJBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsU0FBQTtFQ25CTjs7RURzQkU7SUFDSSxpQkFBQTtFQ25CTjs7RURzQkU7SUFDSSxpQkFBQTtFQ25CTjs7RUR3QlU7SUFDSSxVQUFBO0VDckJkO0FBQ0Y7QUQyQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtFQ3pCTjs7RUQ0QkU7SUFDSSxpQkFBQTtFQ3pCTjs7RUQ0QkU7SUFDSSxlQUFBO0VDekJOOztFRDhCVTtJQUNJLFVBQUE7RUMzQmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYjNjYmUwO1xuXG4gICAgI2hlYWRlclRpdGxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTA5OTtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDEwNCwgOTcsIDk3KTtcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcblxuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgIFxuICAgIH1cblxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IzY2JlMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuXG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taW5wdXQsXG4gICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgI2hlYWRlclRpdGxlIGlvbi1ncmlkIGlvbi1pdGVtIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuXG4gICAgI2hlYWRlclRpdGxlIGlvbi1ncmlkIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cblxuICAgIGlvbi1jb250ZW50IHtcbiAgICAgICAgaW9uLWxpc3Qge1xuICAgICAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cblxuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI2hlYWRlclRpdGxlIGlvbi1ncmlkIGlvbi1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICAgIH1cblxuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24tbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICBpb24tbGlzdCB7XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjNjYmUwO1xufVxuaW9uLWNvbnRlbnQgI2hlYWRlclRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTA5OTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzY4NjE2MTtcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSBpb24taXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDMuNXJlbTtcbiAgaGVpZ2h0OiAzLjVyZW07XG59XG5pb24tY29udGVudCAjaGVhZGVyVGl0bGUgaW9uLWl0ZW0gaDEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1jb250ZW50ICNoZWFkZXJUaXRsZSAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24tY29udGVudCAjaGVhZGVyVGl0bGUgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNjYmUwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tY2FyZCB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCxcbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBzcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSBoMSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkge1xuICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24taXRlbSBoMSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAjaGVhZGVyVGl0bGUgaW9uLWdyaWQgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xuICB9XG5cbiAgI2hlYWRlclRpdGxlIGlvbi1ncmlkIGlvbi1pdGVtIGgxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gICNoZWFkZXJUaXRsZSBpb24tZ3JpZCBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59Il19 */");

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