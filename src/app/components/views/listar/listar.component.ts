import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  medicos!: MatTableDataSource<Medico>

  listarColumns: string[] = ['id', 'nome', 'crm', 'especialidade', 'createdAt'];

  constructor(private service: MedicoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.medicos = new MatTableDataSource<Medico>(lista)
      
    }) 

  }
}
