import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  nome!: String
  crm!: String
  especialidade!: String

  medicoColumns: string[] = ['nome']

  constructor(private service: MedicoService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  cadastrar():void{
    let medico = new Medico()
    medico.nome = this.nome
    medico.crm = this.crm
    medico.especialidade = this.especialidade
    this.service.cadastrar(medico).subscribe((medico)=> {
      this.snack.open("Médico cadastrado", "medico", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
    })

  })
}

}
