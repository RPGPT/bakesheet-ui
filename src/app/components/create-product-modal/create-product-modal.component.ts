import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormArray,
  NonNullableFormBuilder,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from 'src/app/material.module';
import { Ingredient } from 'src/app/models/ingredient';
import { RecipeIngredient } from 'src/app/models/recipeIngredient';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product-modal',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './create-product-modal.component.html',
  styleUrl: './create-product-modal.component.scss'
})
export class CreateProductModalComponent implements OnInit {
  @Output() productCreated = new EventEmitter<any>();
  @Output() modalClosed = new EventEmitter<void>();

  productForm: FormGroup;
  ingredients: Ingredient[] = [];
  selectedIngredient!: Ingredient;
  quantity: number = 1;

  constructor(private fb: NonNullableFormBuilder) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      imgSrc: [''],
      price: ['', [Validators.required, Validators.min(1)]],
      rprice: ['', [Validators.min(0)]],
      recipe: this.fb.array([]),
    });
  }
  ngOnInit(): void {
    this.ingredients = [{ name: 'sugar', price: 2 }, { name: 'flour', price: 4 }];
    console.log(this.ingredients)
  }

  addIngredient(): void {
    console.log('addIngredient');
    console.log(this.selectedIngredient);
    if (this.selectedIngredient && this.quantity > 0) {
      const newRecipeIngredient: RecipeIngredient = {
        ingredient: this.selectedIngredient,
        quantity: this.quantity,
      };
      const recipeForm = this.getRecipeFormArray();

      recipeForm.push(new FormControl(newRecipeIngredient));

      // Reset the ingredient and quantity
      this.selectedIngredient = null!;
      this.quantity = 1;
      console.log('Value');
      console.log(this.productForm.getRawValue())
    }
    console.log(this.productForm.errors);
    console.log(this.productForm);

  }

  // Remove a recipe ingredient from the form
  removeIngredient(index: number): void {
    const recipeForm = this.getRecipeFormArray();
    recipeForm.removeAt(index);
  }

  save(): void {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.productCreated.emit(this.productForm.value);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.modalClosed.emit();
  }

  private getRecipeFormArray(): FormArray {
    return this.productForm.get('recipe') as FormArray;
  }
}
