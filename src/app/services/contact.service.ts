import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private dbPath = '/contacts';

  contactRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.contactRef = db.list(this.dbPath);
  }

  saveContact(contact: any): any {
    return this.contactRef.push(contact);
  }
}