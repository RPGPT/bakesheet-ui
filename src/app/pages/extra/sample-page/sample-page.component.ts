import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { AppBlogComponent } from "../../../components/apps-blog/apps-blog.component";
import { ImageService } from 'src/app/services/image.service';
import { CreateProductModalComponent } from "../../../components/create-product-modal/create-product-modal.component";

@Component({
    selector: 'app-sample-page',
    imports: [MaterialModule, AppBlogComponent, CreateProductModalComponent],
    styleUrls: ['./sample-page.component.scss'],
    templateUrl: './sample-page.component.html'
})

export class AppSamplePageComponent {
  imageService = inject(ImageService);

  imageUrl: string;
  errorMessage: string;
  showModal: boolean = false;

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  addProduct(product: any): void {
    console.log(product);
    this.closeModal();
  }

  fetchImage(): void {
    this.imageService.searchImage('pudim').subscribe({
      next: (url) => {
        if (url) {
          this.imageUrl = url;
        } else {
          this.errorMessage = 'No images found for the given query.';
        }
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while fetching the image.';
        console.error(err);
      },
    });
  }
}
