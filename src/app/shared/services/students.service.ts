import { Injectable } from '@angular/core';
import { Student } from 'src/app/features/home/models/students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Array<Student> =  [
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
      id: 289,
      name: 'João  Silva',
      valorMensalidade: 200,
      dataUltimoPgto: '05-03-2022',
      dataInclusaoSistema: '05-07-2022',
    }
  ]

  constructor() { }

  getStudents() {
    return this.students;
  }

  getById (id: number) {
    return this.students.find((student) => student.id === id)
  }

}
