import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userDataService: UserDataService
  ) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { name, birthday } = this.loginForm.value;

    // Guardamos los datos en el servicio
    this.userDataService.userName = name;
    // El input 'date' devuelve un string 'YYYY-MM-DD'. Lo convertimos a Date.
    // Añadimos T00:00:00 para evitar problemas con la zona horaria.
    this.userDataService.userBirthday = new Date(birthday + 'T00:00:00');

    const today = new Date();
    const userBday = this.userDataService.userBirthday;

    // Comparamos mes y día (ignorando el año)
    if (userBday.getMonth() === today.getMonth() && userBday.getDate() === today.getDate()) {
      this.router.navigate(['/birthday']);
    } else {
      this.router.navigate(['/countdown']);
    }
  }
}
