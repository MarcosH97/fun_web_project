import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-birthday',
  standalone: false,
  templateUrl: './birthday.html',
  styleUrl: './birthday.scss'
})
export class Birthday implements OnInit, OnDestroy {
  userName: string | null = 'Invitado';
  backgroundImage: string = '';
  backgroundImages : Array<string> = ['https://sanctifyingdisciplines.com/wp-content/uploads/2018/11/Fireworks.jpg', 'https://i.pinimg.com/originals/fb/f7/8a/fbf78a127f4111d408d11fab61f8f770.jpg'];

  secondaryText : Array<string> = [];

  constructor(private userDataService: UserDataService, private router: Router) {}
  ngOnInit(): void {
    this.userName = this.userDataService.userName;
    if(this.userName?.includes('Yipsi')) {
      this.userName = 'mi amor';
      this.backgroundImage = this.backgroundImages[1];
    }else{
      this.backgroundImage = this.backgroundImages[0];
    }
    // Si no hay nombre de usuario (ej: recarga la página), volvemos al login
    if (!this.userName) {
      this.router.navigate(['/login']);
      return;
    }
    this.launchCelebration();
  }

  backgroundImageContainer(){
    return {
      'background-image': `url(${this.backgroundImage})`,
    };
  }

  launchCelebration(): void {
    // Lanzamiento inicial de confeti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });

    // Globos y más confeti
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Confeti desde los lados
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }

  ngOnDestroy(): void {
    // Limpia cualquier posible residuo de la animación de confeti si es necesario
    confetti.reset();
  }
}
