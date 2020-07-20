import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router) { }

  cadastrar() {
    let login = (<HTMLInputElement>document.querySelector("#login"));
    let nome = (<HTMLInputElement>document.querySelector("#nome"));
    let email = (<HTMLInputElement>document.querySelector("#email"));
    let senha = (<HTMLInputElement>document.querySelector("#senha"));
    let confirmar = (<HTMLInputElement>document.querySelector("#confirmar"));

    var oReq = new XMLHttpRequest();

    if (senha.value != confirmar.value) {
      alert("OS campos 'senha' e 'confirmar senha' devem ser iguais");

    } else {
      oReq.open("POST", "http://52.91.139.190/fsapi/users/auth/register-jwt", true);
      oReq.setRequestHeader("content-type", "application/json");


      oReq.onreadystatechange = function () {
        if (oReq.readyState == 4 && oReq.status == 404) {
          alert("Falaha ao conectar-se com a API");

        } else if (oReq.readyState == 4 && oReq.status == 200) {
          alert("conta criada com sucesso!");
        }
      }

      oReq.send(JSON.stringify({
        "login": login.value,
        "name": nome.value,
        "email": email.value,
        "password": senha.value,
        "confirma_password": confirmar.value,
        "idEmpresa": "13",
        "Status": "Aprovado",
        "role": "Client",
        "regId": "",
        "status": "Aprovado"
      }));

      this.route.navigate(['']);
    }
  }
  back() {
    this.route.navigate(['']);
  }
  ngOnInit(): void {
  }

}
