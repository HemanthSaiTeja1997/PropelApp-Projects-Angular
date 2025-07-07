import { Component } from '@angular/core';
import { combineLatest, concat, concatMap, delay, exhaustMap, forkJoin, mergeMap, of, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'app-practice-rxjs',
  imports: [],
  templateUrl: './practice-rxjs.html',
  styleUrl: './practice-rxjs.css'
})
export class PracticeRxjs {
   source$=of(1,2,3,4,5);
   getData=(val:number)=>{
    return of(`value-mergemap: ${val}`).pipe(delay(2000));
   }
      source2$=of(6,7,8,9,10);
   getData2=(val:number)=>{
    return of(`value2-switchmap: ${val}`).pipe(delay(2000));
   }
   getData3=(val:number)=>{
    return of(`value3-concatmap-after 1sec apart: ${val}`).pipe(delay(2000));
   }
    getData4=(val:number)=>{
    return of(`value4-exhaustmap-only 1st ignore rest until first complete: ${val}`).pipe(delay(2000));
   }
   
constructor(){
  //mergemap -- all inner observable runs in parrel

  this.source$.pipe(
    mergeMap(val=>this.getData(val))
  ).subscribe(console.log)
  //switch map
   this.source$.pipe(
    switchMap(val=>this.getData2(val))
  ).subscribe(console.log)
  //concatmap
     this.source$.pipe(
    concatMap(val=>this.getData3(val))
  ).subscribe(console.log)
    //exhaustmap
     this.source$.pipe(
    exhaustMap(val=>this.getData4(val))
  ).subscribe(console.log)
//combineLatest
combineLatest([this.source$, this.source2$]).subscribe( {
  next:([a, b]) =>{console.log('combineLatest:', a, b);}
})
  //forkjoin with toarray for printing all the values

    //forkjoin
forkJoin([this.source$.pipe(toArray()),this.source2$.pipe(toArray())]).subscribe({
  next:([res1,res2])=>{
    console.log("ForkJoin-ToArray>>>>>",res1);
    console.log("ForkJoin-ToArray>>>>>",res2);   
  }
})


  //forkjoin
forkJoin([this.source$,this.source2$]).subscribe({
  next:([res1,res2])=>{
    console.log("ForkJoin>>>>>",res1);
    console.log("ForkJoin>>>>>",res2);   
  }
})


}



}
