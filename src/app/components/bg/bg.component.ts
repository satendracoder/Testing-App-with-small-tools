import { Component, ElementRef, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-bg',
  imports: [MateriallistModule],
  templateUrl: './bg.component.html',
  styleUrl: './bg.component.scss'
})
export class BgComponent {
  @ViewChild('canvasElement', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  imageSrc: string | null = null;
  loading = false;

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  removeBackground() {
    if (!this.imageSrc) return;
    this.loading = true;
    setTimeout(() => {
      const canvas = this.canvasRef.nativeElement;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const img = new Image();
      if (this.imageSrc) {
        img.src = this.imageSrc;
      }
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Improved background removal using color distance algorithm
        const targetColor = { r: data[0], g: data[1], b: data[2] }; // Take top-left pixel as background
        const threshold = 50; // Adjust for stricter or looser background detection

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2];
          const distance = Math.sqrt(
            Math.pow(r - targetColor.r, 2) +
            Math.pow(g - targetColor.g, 2) +
            Math.pow(b - targetColor.b, 2)
          );
          if (distance < threshold) {
            data[i + 3] = 0; // Make transparent
          }
        }

        ctx.putImageData(imageData, 0, 0);
        this.loading = false;
      };
    }, 1000);
  }

  exportImage(format: string) {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `image.${format}`;
    link.href = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : format}`);
    link.click();
  }
}