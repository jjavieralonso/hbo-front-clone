import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    { name: 'Javier', avatar: 'assets/images/user-avatar.png' },
    { name: 'Familia', avatar: 'assets/images/user-avatar.png' },
    { name: 'Carlitos', avatar: 'assets/images/user-avatar.png' },
    { name: 'Salomón', avatar: 'assets/images/user-avatar.png' },
    { name: 'Rondón', avatar: 'assets/images/user-avatar.png' },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }
  getFirstUser() {
    return this.users[0];
  }
  
}
