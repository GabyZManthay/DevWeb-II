import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { AuthService } from '../../services/auth-service';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-perfil',
  imports: [CommonModule, Navbar],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil implements OnInit {

   user: any;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const username = this.authService.getUsername();

    if (username) {
      this.userService
        .getUserByUsername(username)
        .subscribe(data => {
          this.user = data;
          this.cdr.detectChanges();
        });
    } else {
      this.userService
        .getUser(1)
        .subscribe(data => {
          this.user = data;
          this.cdr.detectChanges();
        });
    }
  }

}
