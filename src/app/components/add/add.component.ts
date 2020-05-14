import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  Form,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  quantity: number = 0;

  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addForm = this.formBuider.group({
      quantity: new FormControl('', [Validators.required]),
    });
    this.addForm.controls['quantity'].valueChanges.subscribe((value) => {
      if (value >= 0) {
        this.quantity = value;
      } else {
        this.quantity = 0;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
