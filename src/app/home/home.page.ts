import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationsService } from '../services/validations.service';
import { AlertsService } from '../services/alerts.service';
import { HomeServiceService } from './home-service.service';
import { async } from '@angular/core/testing';
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

    addMember: FormGroup;

    get nameField() {
        return this.addMember.get('name');
    }
    nameErr: string;

    get genderField() {
        return this.addMember.get('gender');
    }
    genderErr: string;

    get languagesField() {
        return this.addMember.get('languages');
    }
    languagesErr: string;

    get locationField() {
        return this.addMember.get('location');
    }
    locationErr: string;

    get contactField() {
        return this.addMember.get('contact');
    }
    contactErr: string;

    get emailField() {
        return this.addMember.get('email');
    }
    emailErr: string;

    get denominationField() {
        return this.addMember.get('denomination');
    }
    denominationErr: string;

    get denominationRoleField() {
        return this.addMember.get('denominationRole');
    }
    denominationRoleErr: string;

    get denominationPositionField() {
        return this.addMember.get('denominationPosition');
    }
    denominationPositionErr: string;

    get denominationOfficerField() {
        return this.addMember.get('denominationOfficer');
    }
    denominationOfficerErr: string;

    get holySpiritBaptiismField() {
        return this.addMember.get('holySpiritBaptiism');
    }
    holySpiritBaptiismErr: string;

    get occupationField() {
        return this.addMember.get('occupation');
    }
    occupationErr: string;

    get studentField() {
        return this.addMember.get('student');
    }
    studentErr: string;

    get workerField() {
        return this.addMember.get('worker');
    }
    workerErr: string;

    get joiningField() {
        return this.addMember.get('joining');
    }
    joiningErr: string;

    get outreachField() {
        return this.addMember.get('outreach');
    }
    outreachErr: string;

    get populateField() {
        return this.addMember.get('populate');
    }
    populateErr: string;

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

    async showToast(header, message, color) {
        const toast = await this.toastCtrl.create({
            header,
            message,
            position: 'top',
            duration: 3000,
            color
        });

        toast.present();
    }

    onSubmit() {
        if (this.addMember.dirty) {
            this.alertCtrl.confirm(
                'CONFIRM REGISTRATION',
                'Are you sure you want to proceed with registration?',
                () => {
                    this.submitSubscription = this.addMemberService
                    .addMember(this.addMember.value)
                    .subscribe(
                        data => {
                            if (data.hasOwnProperty('successMessage')) {
                                this.nField.setFocus();
                                this.showToast(
                                    'Success',
                                    'Registration Successful',
                                    'success'
                                );
                                this.addMember.reset();

                            } else {
                                this.showToast(
                                    'Unsuccessful',
                                    'Registration Unsuccessful. Please fix errors and try again',
                                    'danger'
                                );
                            }
                        },
                        err => {
                            this.showToast(
                                'Unsuccessful',
                                'Registration Unsuccessful. Please try again',
                                'danger'
                            );
                        }
                    );
                }
            );
        } else {
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
