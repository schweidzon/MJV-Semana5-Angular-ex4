import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Array<Student> = [
    {
      id: 300,
      name: 'Gerson Ciclano',
      valorMensalidade: 200,
      dataUltimoPgto: '07-07-2022',
      dataInclusaoSistema: '07-07-2022',
    }, 
    {
      id: 248,
      name: 'Anderon  Fulano',
      valorMensalidade: 300,
      dataUltimoPgto: '12-07-2022',
      dataInclusaoSistema: '12-07-2022',
    },
    {
      id: 248,
      name: 'João  Silva',
      valorMensalidade: 200,
      dataUltimoPgto: '05-03-2022',
      dataInclusaoSistema: '05-07-2022',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
