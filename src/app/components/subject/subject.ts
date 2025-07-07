import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../Services/subject-service';
import { BehaviorSubjectService } from '../../Services/behavior-subject-service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class Subject implements OnInit {
  data: number = 0;
  data2:number=0;
  constructor(private subService: SubjectService,private behaviorSubjService : BehaviorSubjectService) {}
  ngOnInit(): void {
    this.subService.data.next(2);
    this.subService.data.subscribe({
      next: (res) => {
        this.data = res;
      },
    });
    this.subService.data.next(3);
    this.subService.data.next(10);//new value it will get updated 

    //for BehaviorSubject 
    this.behaviorSubjService.data.next(150);
    this.behaviorSubjService.data.subscribe({
      next: (res) => {
        this.data2 = res;
      },
    });
  }
  onSendData() {
    this.subService.data.next(Math.random());
  }
  onSendData2(){
    this.behaviorSubjService.data.next(Math.random());

  }
}
