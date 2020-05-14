import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { cifRealService } from 'src/app/services/cifReales.service';
import { cifReal } from 'src/app/model/cifReal.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cifreal',
  templateUrl: './cifreal.component.html',
  styleUrls: ['./cifreal.component.scss']
})
export class CifrealComponent implements OnInit {
  cifRealForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private cifRealService: cifRealService, private router: Router) { }
  ngOnInit(): void {
    this.cifRealForm = this.formBuilder.group({
      valorI: new FormControl('', [Validators.required]),
    });
  }
  createCifReal() {
    if (!this.cifRealForm.invalid) {
      let cif: cifReal = new cifReal();
      cif.valorI = this.cifRealForm.controls['valorI'].value;
      cif.descripcion = this.cifRealForm.controls['Description'].value;
      console.log(cif);
      this.cifRealService.createtasaCif(cif).subscribe((resp) => {
        console.log(resp);
        this.cifRealForm.reset();
        this.router.navigate(['cifaplicados']);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
