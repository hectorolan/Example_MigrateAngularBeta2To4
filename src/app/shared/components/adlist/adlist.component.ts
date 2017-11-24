import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Ad } from '../../../models/ad';
import { Section } from '../../../models/section';
import { Console } from '../../../models/console';
import { AuthService } from '../../../services/auth.service';
import { AdService } from '../../../services/ad.service';
import { YesCancelDialogComponent } from '../../dialogs/yes-cancel-dialog/yes-cancel-dialog.component';

@Component({
  selector: 'app-adlist',
  templateUrl: './adlist.component.html',
  styleUrls: ['./adlist.component.css']
})
export class AdlistComponent implements OnInit {
  sections = Section.Sections;
  consoles = Console.Consoles;
  dialogRef: MatDialogRef<YesCancelDialogComponent>;

  @Input()
  ads: Ad[];

  constructor(
    private authService: AuthService,
    private adService: AdService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteAd(ad: Ad) {
    this.dialogRef = this.dialog.open(YesCancelDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.message = 'Are you sure you want to delete your ad?';
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
      if (result['response'] === true) {
        this.adService.deleteAd(ad, this.authService.user).then(() => {
          let snackRef = this.snackBar.open('Ad deleted');
          setTimeout(() => { snackRef.dismiss(); }, 2000);
          location.reload();
        });
      }
    });
  }

  getImageSrc(imageKey: string): string {
    if (imageKey.indexOf('image') >= 0) {
      return imageKey;
    }
    return null;
  }

}
