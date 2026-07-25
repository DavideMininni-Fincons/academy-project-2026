import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerService } from '../service/beer.service';
import { Beer } from '../model/beer-model';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrl: './new-beer.component.scss',
  imports: [ReactiveFormsModule]
})
export class NewBeerComponent implements OnInit {

  private fb = inject(FormBuilder);
  private beerService = inject(BeerService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected editMode = false;
  protected beerId!: number;

  protected beerForm = this.fb.group({
    beerName: ['', Validators.required],
    beerStyle: ['', Validators.required],
    upc: [''],
    price: [0, [Validators.required, Validators.min(1)]],
    quantityOnHand: [0, [Validators.required, Validators.min(1)]],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editMode = true;
      this.beerId = Number(id);

      this.beerService.getBeerById(this.beerId)
        .subscribe({
          next: (beer) => {
            this.beerForm.patchValue({
              beerName: beer.beerName,
              beerStyle: beer.beerStyle,
              upc: beer.upc,
              price: beer.price,
              quantityOnHand: beer.quantityOnHand,
            });
          },
          error: (error) => {
            console.error('Error loading beer', error);
          }
        });
    }
  }

  protected submit(): void {
    if (this.beerForm.invalid) {
      this.beerForm.markAllAsTouched();
      return;
    }

    const now = new Date();
    const beer: Beer = {
      ...this.beerForm.value as Beer,
      beerId: this.beerId,
      ...(this.editMode ? { lastModifiedDate: now } : { createdDate: now, lastModifiedDate: now }),
    };

    const request = this.editMode ? this.beerService.editBeer(beer) : this.beerService.addBeer(beer);

    request.subscribe({
      next: () => {
        this.router.navigate(['/beers']);
      },
      error: (error) => {
        console.error('Save beer error', error);
      },
    });
  }
}