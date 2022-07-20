import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Student } from '../../models/students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  students: Array<Student> = this.studentsService.getStudents()

  constructor(private studentsService: StudentsService,
    private router : Router) { }

    studentsDetails(id: number) {
      this.router.navigateByUrl(`students-details/${id}`)
    }

  ngOnInit(): void {
  }

}
