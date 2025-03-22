import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: User | undefined;

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the current user's information when the component initializes
    this.currentUser = this.usersService.getCurrentUser();

    // Redirect to login if the user is not authenticated
    if (!this.usersService.isUserAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.usersService.logoutUser();
    this.router.navigate(['/login']);
  }
}
