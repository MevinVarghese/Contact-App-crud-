import { Component } from '@angular/core';
import { contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contacts: contact[] = [
    {
      id: 1,
      name: 'John',
      age: 30,
      email: 'john@gmail.com',
      contactNo: '8769879702',
    },
    {
      id: 2,
      name: 'Sofi',
      age: 25,
      email: 'sofi@gmail.com',
      contactNo: '8654938405',
    },
    {
      id: 3,
      name: 'Kevin',
      age: 23,
      email: 'kevin@gmail.com',
      contactNo: '8643986563',
    },
  ];
  selectedContact: contact | null = null;

  addContact(): void {
    this.selectedContact = {
      id: 0,
      name: '',
      age: 0,
      email: '',
      contactNo: '',
    };
  }

  editContact(contact: contact): void {
    this.selectedContact = { ...contact }; // Create a copy to avoid direct mutation
  }

  saveContact(): void {
    if (this.selectedContact) {
      if (this.selectedContact.id === 0) {
        // Add new contact
        this.selectedContact.id = Date.now(); // Temporary unique ID
        this.contacts.push(this.selectedContact);
      } else {
        // Update existing contact
        const index = this.contacts.findIndex(
          (c) => c.id === this.selectedContact!.id
        );
        if (index !== -1) this.contacts[index] = { ...this.selectedContact };
      }
      this.selectedContact = null;
    }
  }

  onDeleteContact(): void {
    if (this.selectedContact?.id) {
      this.deleteContact(this.selectedContact.id);
    } else {
      console.warn('No contact selected to delete.');
    }
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.selectedContact = null;
  }
}
