import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-bg-image-card',
  imports: [CommonModule],
  templateUrl: './bg-image-card.component.html',
  styleUrl: './bg-image-card.component.scss'
})
export class BgImageCardComponent {

  imagePreview: string | ArrayBuffer | null = null;
  outputImage: string | null = null;
  selectedFile: File | null = null;
    isLoading: boolean = false;

  private apiKey = 'WEvpWNA6CaiMPoD7tkupj7Vi'; // Replace with your remove.bg API key

  constructor(private http: HttpClient) { }

  // Handle file input change
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  // Call remove.bg API to remove background
  removeBackground(): void {
    if (!this.selectedFile) {
      alert('Please select an image!');
      return;
    }

    this.isLoading = true; // Start loading animation

    const formData = new FormData();
    formData.append('image_file', this.selectedFile);
    formData.append('size', 'auto');

    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    this.http
      .post('https://api.remove.bg/v1.0/removebg', formData, {
        headers,
        responseType: 'blob', // Expect a binary response
      })
      .subscribe({
        next: (blob) => {
          const url = URL.createObjectURL(blob);
          this.outputImage = url;
          this.isLoading = false; // Stop loading animation
        },
        error: (error) => {
          console.error('Error:', error);
          alert('Failed to remove background. Please try again.');
          this.isLoading = false; // Stop loading animation
        },
      });
  }

  // Download the processed image
  downloadImage(): void {
    if (this.outputImage) {
      const link = document.createElement('a');
      link.href = this.outputImage;
      link.download = 'image_with_no_background.png';
      link.click();
    }
  }
}