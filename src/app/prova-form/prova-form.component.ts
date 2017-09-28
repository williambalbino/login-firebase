import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova-form',
  templateUrl: './prova-form.component.html',
  styleUrls: ['./prova-form.component.css']
})
export class ProvaFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  verificaSeFormEValido(provaForm: NgForm): boolean {
    return provaForm.form.valid;
  }

}
