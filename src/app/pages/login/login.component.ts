import { Component } from '@angular/core';
import { DafaultLoginLayoutComponent } from '../../components/dafault-login-layout/dafault-login-layout.component';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DafaultLoginLayoutComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrigido o nome da propriedade
})
export class LoginComponent {}
