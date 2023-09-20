import { Injectable } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public readonly SUCCESS_MESSAGE = "Success.";
  public readonly RATED_SUCCESS_MESSAGE = "Job successfully rated.";
  public readonly LIKED_SUCCESS_MESSAGE = "Job successfully liked/disliked.";
  public readonly DELETED_SUCCESS_MESSAGE = "Successfully deleted.";
  public readonly CLEAR_SUCCESS_MESSAGE = "Successfully cleared.";
  public readonly ERROR_MESSAGE = "Error.";
  public readonly DATA_ERROR_MESSAGE = "Error: No data returned.";
  public readonly SAVED_MESSAGE = "All saved.";
  public readonly ALREADY_SAVED_MESSAGE = "Already been saved.";
  public readonly REMOVED_MESSAGE = "Job successfully removed.";
  public readonly SUBMITTED_MESSAGE = "Successfully submitted.";

  public logMessage$ = new Subject<string>();

  logError(message: string, err: any){
    this.logMessage$.next(message);
    console.error(message, err);
  }

  // logDataError(){
  //   console.log("Error: No data returned.");
  // }

  // logJobRated(){
  //   console.log("")
  // }

  // logJobLiked(){
  //   console.log("Job successfully liked/disliked.");
  // }

  // logDeleteSuccess(){
  //   console.log("Successfully deleted.");
  // }

  // logClearSuccess(){
  //   console.log("Successfully cleared.")
  // }

  logInfo(message:string, payload?: any){
    this.logMessage$.next(message);
    console.log(message, payload);
  }
}
