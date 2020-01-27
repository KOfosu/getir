import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alertCtrl: AlertController) { }

  confirm(alertHeader: string, alertMessage: string, yes: any) {
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
}
