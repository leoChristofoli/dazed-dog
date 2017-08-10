import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from '../shared/item.service';
import { Item } from '../shared/item';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  providers: [ItemService],

})
export class ItemsListComponent implements OnInit {

  public items: FirebaseListObservable<Item[]>;

  constructor(private itemSvc: ItemService, private authService: AuthService, private router: Router) {
   }

  ngOnInit() {
    this.items = this.itemSvc.getItemsList({limitToLast: 5});
  }

  deleteItems() {
    this.itemSvc.deleteAll();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
