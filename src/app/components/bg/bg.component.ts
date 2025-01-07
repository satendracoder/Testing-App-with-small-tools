import { Component } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-bg',
  imports: [MateriallistModule],
  templateUrl: './bg.component.html',
  styleUrl: './bg.component.scss'
})
export class BgComponent {

  canvas: HTMLCanvasElement | null = null;
  ctx: CanvasRenderingContext2D | null = null;
  isLoading: boolean = false; // To show/hide the loading spinner

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
  
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.src = url;
  
    img.onload = () => {
      this.isLoading = true; // Show loading spinner
  
      if (this.canvas && this.ctx) {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
  
        // Draw the image onto the canvas
        this.ctx.drawImage(img, 0, 0);
  
        // Get image data
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = imageData.data;
  
        // Background removal logic
        const threshold = 240; // Adjust this value for background detection
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];     // Red
          const g = data[i + 1]; // Green
          const b = data[i + 2]; // Blue
  
          // Check if pixel is close to white (or any background color)
          if (r > threshold && g > threshold && b > threshold) {
            data[i + 3] = 0; // Make pixel transparent
          }
        }
  
        // Put modified image data back onto the canvas
        this.ctx.putImageData(imageData, 0, 0);
  
        this.isLoading = false; // Hide loading spinner
        URL.revokeObjectURL(url);
      }
    };
  }

  exportImage(quality: 'high' | 'medium' | 'low'): void {
    if (!this.canvas) return;

    let qualityFactor: number;

    switch (quality) {
      case 'high':
        qualityFactor = 1.0; // High quality
        break;
      case 'medium':
        qualityFactor = 0.7; // Medium quality
        break;
      case 'low':
        qualityFactor = 0.4; // Low quality
        break;
      default:
        qualityFactor = 1.0;
    }

    const dataURL = this.canvas.toDataURL('image/png', qualityFactor);
    this.downloadImage(dataURL, `exported-image-${quality}.png`);
  }

  private downloadImage(dataURL: string, filename: string): void {
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = filename;
    link.click();
  }

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }
}