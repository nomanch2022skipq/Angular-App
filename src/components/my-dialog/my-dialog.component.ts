import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [MatDialogModule, MyDialogComponent, MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './my-dialog.component.html',
  styleUrl: './my-dialog.component.css'
})

export class MyDialogComponent {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);  // FormControl for the input field

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close(this.name.value);
  }

  confirm(): void {
    this.dialogRef.close(this.name.value);
  }

  // Close dialog without passing any data
  cancel(): void {
    this.dialogRef.close();
  }

  
}
