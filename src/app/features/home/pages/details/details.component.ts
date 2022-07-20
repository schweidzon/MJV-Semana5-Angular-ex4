import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/shared/services/students.service';
import { Student } from '../../models/students.model';

@Component({
   templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  student?: Student

  constructor(private activedRouter: ActivatedRoute,
    private studentsService: StudentsService) { }

  ngOnInit(): void {
   this.activedRouter.params.subscribe((params) => {
    const id = parseInt(params['studentId'])
    this.student = this.studentsService.getById(id)
   
   })
  }

}
