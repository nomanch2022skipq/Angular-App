import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatListModule,MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MyDialogComponent, CommonModule],
})
export class NavbarComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();

  constructor(public dialog: MatDialog) { }

  name :string = ""

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result
    });
  }

}
