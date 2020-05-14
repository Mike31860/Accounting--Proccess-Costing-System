import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { cifService } from 'src/app/services/cifTasa.service';
import { cifTasa } from 'src/app/model/cifTasa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasa-cif',
  templateUrl: './tasa-cif.component.html',
  styleUrls: ['./tasa-cif.component.scss'],
})
export class TasaCifComponent implements OnInit {
  cifForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cifService: cifService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cifForm = this.formBuilder.group({
      valorI: new FormControl('', [Validators.required]),
    });
  }

  createCif() {
    if (!this.cifForm.invalid) {
      let cif: cifTasa = new cifTasa();
      cif.valorI = this.cifForm.controls['valorI'].value;

      console.log(cif);
      this.cifService.createtasaCif(cif).subscribe(
        (resp) => {
          console.log(resp);
          this.cifForm.reset();
          this.router.navigate(['cifaplicados']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
