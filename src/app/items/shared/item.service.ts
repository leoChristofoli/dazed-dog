import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Item } from './item';

@Injectable()
export class ItemService {

  private basePath = '/items';

  items: FirebaseListObservable<Item[]> = null;
  item: FirebaseObjectObservable<Item> = null;

  constructor(private db: AngularFireDatabase) {
    console.log('serv contr');
  }

  getItemsList(query = {}) {
    this.items = this.db.list(this.basePath, {
      query: query
    });

    return this.items;
  }

  getItem(key: string): FirebaseObjectObservable<Item> {
    const itemPath = `${this.basePath}/${key}`;
    this.item = this.db.object(itemPath);

    return this.item;
  }

  createItem(item: Item): void  {
   this.items.push(item)
     .catch(error => this.handleError(error));
 }

  // Update an existing item
  updateItem(key: string, value: any): void {
    this.items.update(key, value)
      .catch(error => this.handleError(error));
  }

  // Deletes a single item
  deleteItem(key: string): void {
      this.items.remove(key)
        .catch(error => this.handleError(error));
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.items.remove()
        .catch(error => this.handleError(error));
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log('++++++++++++++++++++++++++++');
    console.log(error);
  }

}
