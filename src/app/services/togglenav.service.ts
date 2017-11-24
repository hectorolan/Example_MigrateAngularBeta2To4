import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TogglenavService {
  private togglerNavSource = new Subject<void>();
  showNavToggleBtn = false;
  togglerNav$ = this.togglerNavSource.asObservable();
  toggle() {
    this.togglerNavSource.next();
  }
}
