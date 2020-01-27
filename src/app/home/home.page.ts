import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationsService } from '../services/validations.service';
import { AlertsService } from '../services/alerts.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    @Input() entryType: string;
    @Input() data: any;
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




    constructor(
        private modalCtrl: ModalController,
        private fb: FormBuilder,
        private validations: ValidationsService,
        private alertCtrl: AlertsService
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
            student: [''],
            worker: [''],
            joining: [''],
            outreach: [''],
            populate: [''],
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

        this.goingOptions = [
          'Will go with you from the first day',
          'Will join you on Monday',
          'Will join you on Tuesday',
          'Will join you on Wednesday',
          'Will join you on Thursday',
          'Will join you on Friday'
        ]
    }

    onSubmit() {
        // Validations
        this.nameField.errors
            ? (this.nameErr = this.validations.setErrorMessage(this.nameField))
            : (this.nameErr = '');
        this.locationField.errors
            ? (this.locationErr = this.validations.setErrorMessage(
                  this.locationField
              ))
            : (this.locationErr = '');
        this.emailField.errors
            ? (this.emailErr = this.validations.setErrorMessage(
                  this.emailField
              ))
            : (this.emailErr = '');

        // Submitting entries
        if (this.addMember.valid) {
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
}
