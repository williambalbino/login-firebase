import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login-cadastro-form',
  templateUrl: './login-cadastro-form.component.html',
  styleUrls: ['./login-cadastro-form.component.css']
})
export class LoginCadastroFormComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() { }


  

  verificaSeFormEValido(f: NgForm): boolean {
    return f.form.valid;
  }

  form_cadastro(f: NgForm) {
    let email = f.controls.email.value.toString().trim();
    let senha = f.controls.senha.value.toString().trim();
    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then(t => {
        alert('Usuário criado com sucesso! \n Id: ' + t.uid);
      })
      .catch(c => {
        alert('Erro: ' + c.message);
      })
  }
}
