import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-prova-form',
  templateUrl: './prova-form.component.html',
  styleUrls: ['./prova-form.component.css']
})
export class ProvaFormComponent implements OnInit {

  provas: Array<any>;

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.provas = new Array<any>();
  }

  verificaSeFormEValido(f: NgForm): boolean {
    return f.form.valid;
  }

  form_cadastro(f: NgForm){
    this.angularFire.list("provas").push({
      disciplina: f.form.controls.disciplina.value,
      curso: f.form.controls.curso.value,
      periodo: f.form.controls.periodo.value,
      questao: f.form.controls.questao.value
    }).then((t: any) => console.log('Dados Salvos: ' + t.key)),
    (e: any) => console.log(e.message);
    f.controls.disciplina.setValue('');
    f.controls.curso.setValue('');
    f.controls.periodo.setValue('');
    f.controls.questao.setValue('');
  
    //   this.provas.push({
  //     disciplina: f.form.controls.disciplina.value,
  //     curso: f.form.controls.curso.value,
  //     periodo: f.form.controls.periodo.value,
  //     questao: f.form.controls.questao.value,
  //   });
  //   console.log(this.provas);
  

  }
}
