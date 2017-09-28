import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';


@Component({
  selector: 'menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent {

  constructor(private afAuth: AngularFireAuth,  private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(["/login"])
  }

}
