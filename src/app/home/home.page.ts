import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ValidationsService } from '../services/validations.service';
import { AlertsService } from '../services/alerts.service';
import { HomeServiceService } from './home-service.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
    @Input() entryType: string;
    @Input() data: any;
    @ViewChild('nField', { static: false }) nField;
    goingOptions: any[];
    fixErrors = '';
    addMember: FormGroup;

    get nameField() {
        return this.addMember.get('name');
    }
    nameErr = '';

    get genderField() {
        return this.addMember.get('gender');
    }
    genderErr = '';

    get languagesField() {
        return this.addMember.get('languages');
    }
    languagesErr = '';

    get otherLanguagesField() {
        return this.addMember.get('otherLanguages');
    }
    otherLanguagesErr = '';

    get locationField() {
        return this.addMember.get('location');
    }
    locationErr = '';

    get contactField() {
        return this.addMember.get('contact');
    }
    contactErr = '';

    get emailField() {
        return this.addMember.get('email');
    }
    emailErr = '';

    get denominationField() {
        return this.addMember.get('denomination');
    }
    denominationErr = '';

    get denominationRoleField() {
        return this.addMember.get('denominationRole');
    }
    denominationRoleErr = '';

    get denominationPositionField() {
        return this.addMember.get('denominationPosition');
    }
    denominationPositionErr = '';

    get denominationOfficerField() {
        return this.addMember.get('denominationOfficer');
    }
    denominationOfficerErr = '';

    get holySpiritBaptiismField() {
        return this.addMember.get('holySpiritBaptiism');
    }
    holySpiritBaptiismErr = '';

    get occupationField() {
        return this.addMember.get('occupation');
    }
    occupationErr = '';

    get studentField() {
        return this.addMember.get('student');
    }
    studentErr = '';

    get workerField() {
        return this.addMember.get('worker');
    }
    workerErr = '';

    get joiningField() {
        return this.addMember.get('joining');
    }
    joiningErr = '';

    get outreachField() {
        return this.addMember.get('outreach');
    }
    outreachErr = '';

    get populateField() {
        return this.addMember.get('populate');
    }
    populateErr = '';

    submitSubscription: Subscription;

    constructor(
        private modalCtrl: ModalController,
        private fb: FormBuilder,
        private validations: ValidationsService,
        private alertCtrl: AlertsService,
        private addMemberService: HomeServiceService,
        private toastCtrl: ToastController
    ) {}

    ngOnInit() {
        this.createForm();
        this.goingOptions = [
            'Will go with you from the first day',
            'Will join you on Monday',
            'Will join you on Tuesday',
            'Will join you on Wednesday',
            'Will join you on Thursday',
            'Will join you on Friday'
        ];
    }

    createForm() {
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
    }
    // Input Form Validation
    validation(control: AbstractControl, message: any) {
        if (control.errors) {
            return this.validations.setErrorMessage(control).shift(0);
        } else {
            return '';
        }
      }

    // Submitting Entry
    async showToast(header, message, color) {
        const toast = await this.toastCtrl.create({
            header,
            message,
            position: 'top',
            duration: 5000,
            color
        });

        toast.present();
    }

    onSubmit() {
        if (this.addMember.valid) {
            this.alertCtrl.confirm(
                'CONFIRM REGISTRATION',
                'Are you sure you want to proceed with registration?',
                () => {
                    this.submitSubscription = this.addMemberService.addMember(this.addMember.value).subscribe(
                            data => {
                                if (data.hasOwnProperty('successMessage')) {
                                    this.addMember.reset();
                                    this.nField.setFocus();
                                    this.showToast(
                                        '',
                                        'Registration Successful',
                                        'success'
                                    );
                                    this.createForm();
                                } else {
                                    this.showToast(
                                        '',
                                        'Registration Unsuccessful',
                                        'danger'
                                    );
                                }
                            },
                            err => {
                                this.showToast(
                                    '',
                                    'Registration Unsuccessful. Please try again',
                                    'danger'
                                );
                            }
                        );
                }
            );
        } else {
            this.fixErrors = 'PLEASE FIX ALL ERRORS ON THE FORM BEFORE SUBMITTING';
            this.nField.setFocus();
        }
    }

    onCancel() {
        if (this.addMember.dirty) {
            this.alertCtrl.confirm(
                'CANCEL',
                'Are you sure you want to cancel?',
                () => {
                    this.addMember.reset();
                    this.modalCtrl.dismiss();
                    this.createForm();
                }
            );
        } else {
            this.modalCtrl.dismiss();
        }
    }

    ngOnDestroy() {
        this.submitSubscription.unsubscribe();
    }
}
