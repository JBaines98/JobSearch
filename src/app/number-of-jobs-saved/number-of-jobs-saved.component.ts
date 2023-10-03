import { Component, OnDestroy } from '@angular/core';
import { JobStorageService } from '../job-storage.service';
import { Observable, Subject, map, takeUntil, tap, } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-number-of-jobs-saved',
  templateUrl: './number-of-jobs-saved.component.html',
  styleUrls: ['./number-of-jobs-saved.component.css']
})
export class NumberOfJobsSavedComponent implements OnDestroy{

 public jobCount: number = 0;
 public themeName: string = 'light';
 public destroyed$ = new Subject();

  constructor(public jobStorageService: JobStorageService, public userService: UserService){}

  ngOnDestroy(): void {
    this.destroyed$.next(this.destroyed$);
    this.destroyed$.complete();
  }

  ngOnInit(){
    this.userService.themeNameSelected$.pipe(
      tap(theme =>{
        this.themeName = theme;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  // ngOnInit(){
  //   this.jobStorageService.savedResults$.pipe(
  //     tap((bob) => {
  //       this.jobCount = bob.length;
  //     })
  //   ).subscribe();
  // }
}
