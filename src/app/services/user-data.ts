import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userName: string | null = null;
  userBirthday: Date | null = null;

  constructor() { }
}
