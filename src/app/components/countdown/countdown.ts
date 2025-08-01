import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data';

@Component({
  selector: 'app-countdown',
  standalone: false,
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss'
})
export class Countdown {
  userName: string | null = 'Invitado';
  timeLeft: { days: number; hours: number; minutes: number; seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  private intervalId: any;

  constructor(private userDataService: UserDataService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.userDataService.userName;
    if (!this.userName || !this.userDataService.userBirthday) {
      this.router.navigate(['/login']);
      return;
    }
    this.startCountdown();
  }

  startCountdown(): void {
    const userBirthday = this.userDataService.userBirthday!;
    const today = new Date();

    // Calcula la fecha del próximo cumpleaños
    let nextBirthday = new Date(today.getFullYear(), userBirthday.getMonth(), userBirthday.getDate());

    // Si el cumpleaños de este año ya pasó, calculamos para el siguiente año
    if (nextBirthday.getTime() < today.getTime()) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextBirthday.getTime() - now;

      if (distance < 0) {
        clearInterval(this.intervalId);
        // Podríamos redirigir a la página de cumpleaños si justo llega la fecha
        this.router.navigate(['/birthday']);
        return;
      }

      this.timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }, 1000);
  }

  ngOnDestroy(): void {
    // Es muy importante limpiar el intervalo para evitar fugas de memoria
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
