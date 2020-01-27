import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {

  menuItems = [
      {
        label: 'Change Password',
        click: () => {
          this.popCtrl.dismiss();
          alert('hey');
        }
      },
      {
        label: 'Sign Out',
        click: () => {
          this.popCtrl.dismiss();
          this.route.navigate(['/login']);
        }
      }
    ];

  constructor(private route: Router,
              private popCtrl: PopoverController) { }

  ngOnInit() {}
}
