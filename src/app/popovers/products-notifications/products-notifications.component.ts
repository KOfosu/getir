import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-products-notifications',
  templateUrl: './products-notifications.component.html',
  styleUrls: ['./products-notifications.component.scss'],
})
export class ProductsNotificationsComponent implements OnInit {
  menuItems = [
    {
      label: 'About to Expire',
      click: () => {
        this.popCtrl.dismiss();
        alert('hey');
      }
    },
    {
      label: 'Expired Products',
      click: () => {
        this.popCtrl.dismiss();
        alert('hey');
      }
    },
    {
      label: 'Above Maximum Level',
      click: () => {
        this.popCtrl.dismiss();
        alert('hey');
      }
    },
    {
      label: 'Below Restock Level',
      click: () => {
        this.popCtrl.dismiss();
        alert('hey');
      }
    },
    {
      label: 'Below Minimum Level',
      click: () => {
        this.popCtrl.dismiss();
        alert('hey');
      }
    }
  ];

  constructor(private route: Router, private popCtrl: PopoverController) { }

  ngOnInit() {}

}
