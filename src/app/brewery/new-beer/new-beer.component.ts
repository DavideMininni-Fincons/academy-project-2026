import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BeerService } from '../service/beer.service';
import { Beer } from '../model/beer-model';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrl: './new-beer.component.scss',
  imports: [ReactiveFormsModule]
})
export class NewBeerComponent {

  private fb = inject(FormBuilder);
  private beerService = inject(BeerService);
  private router = inject(Router);

  protected beerForm = this.fb.group({
    beerName: ['', Validators.required],
    beerStyle: ['', Validators.required],
    upc: [''],
    price: [0, [Validators.required, Validators.min(1)]],
    quantityOnHand: [0, [Validators.required, Validators.min(1)]],
  });


  protected submit(): void {
    if (this.beerForm.invalid) {
      this.beerForm.markAllAsTouched();
      return;
    }

    const newBeer: Beer = {
      ...this.beerForm.value as Beer,
      createdDate: new Date(),
      lastModifiedDate: new Date()
    };

    this.beerService.addBeer(newBeer)
      .subscribe({
        next: () => {
          this.router.navigate(['/beers']);
        },
        error: (error) => {
          console.error('Create beer error', error);
        },
      });
  }
}