import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  logar() {
    let email = (<HTMLInputElement>document.querySelector("#email"));
    let senha = (<HTMLInputElement>document.querySelector("#senha"));
    let resultado = (<HTMLInputElement>document.querySelector("#resultado"));

    var oReq = new XMLHttpRequest();

    if (email.value == "" || senha.value == "") {
      alert("Os dois campos precisam estar preenchidos");

    } else {
      oReq.open("POST", "http://52.91.139.190/fsapi/users/login", true);
      oReq.setRequestHeader("content-type", "application/json");

      oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 404) {
          alert("Usuário não cadastrado");

        } else if (oReq.readyState == 4 && oReq.status == 200) {
          var resposta = JSON.parse(this.responseText);
          resultado.innerHTML = `Seja bem-vindo, ${resposta.user.name}!`;
        }
      }

      oReq.send(JSON.stringify({
        "email": email.value,
        "password": senha.value,
      }));

      event.preventDefault();
    }
  }
  registerOn() {
    this.route.navigate(['/cadastro']);
  }
  ngOnInit(): void {
  }

}
