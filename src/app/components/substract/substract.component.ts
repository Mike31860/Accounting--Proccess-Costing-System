import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-substract',
  templateUrl: './substract.component.html',
  styleUrls: ['./substract.component.scss'],
})
export class SubstractComponent implements OnInit {
  substractForm: FormGroup;
  quantity: number;

  constructor(
    public dialogRef: MatDialogRef<SubstractComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuider: FormBuilder
  ) {}

  ngOnInit(): void {
    this.substractForm = this.formBuider.group({
      quantity: new FormControl('', [Validators.required]),
    });
    this.substractForm.controls['quantity'].valueChanges.subscribe((value) => {
      this.quantity = value;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
