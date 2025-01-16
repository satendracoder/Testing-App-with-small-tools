import { Component, ElementRef, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-crop-image',
  imports: [MateriallistModule],
  templateUrl: './crop-image.component.html',
  styleUrl: './crop-image.component.scss'
})
export class CropImageComponent {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cropBox', { static: true }) cropBox!: ElementRef<HTMLDivElement>;
  @ViewChild('downloadLink', { static: true }) downloadLink!: ElementRef<HTMLAnchorElement>;

  private ctx!: CanvasRenderingContext2D;
  private image!: HTMLImageElement;
  private isDragging = false;
  private isResizing = false;
  private resizeDirection: string | null = null;
  private startX = 0;
  private startY = 0;

  croppedImage: string | null = null;

  resizeHandles = [
    { position: 'top-left', style: { left: '-5px', top: '-5px' } },
    { position: 'top-right', style: { right: '-5px', top: '-5px' } },
    { position: 'bottom-left', style: { left: '-5px', bottom: '-5px' } },
    { position: 'bottom-right', style: { right: '-5px', bottom: '-5px' } },
  ];

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
  }

  fileName: string = '';

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.fileName = file ? file.name : '';
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = new Image();
        this.image.src = reader.result as string;

        this.image.onload = () => {
          this.drawImageToCanvas();
        };
      };
      reader.readAsDataURL(file);
    }
  }

  drawImageToCanvas(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = this.ctx;

    const scale = Math.min(
      canvas.width / this.image.width,
      canvas.height / this.image.height
    );

    const x = (canvas.width - this.image.width * scale) / 2;
    const y = (canvas.height - this.image.height * scale) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      x,
      y,
      this.image.width * scale,
      this.image.height * scale
    );
  }

  startDragOrResize(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('crop-box')) {
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
  }

  startResizing(event: MouseEvent, direction: string): void {
    this.isResizing = true;
    this.resizeDirection = direction;
    this.startX = event.clientX;
    this.startY = event.clientY;
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent): void {
    const cropBox = this.cropBox.nativeElement;

    if (this.isDragging) {
      const dx = event.clientX - this.startX;
      const dy = event.clientY - this.startY;

      const currentLeft = parseInt(cropBox.style.left, 10) || 0;
      const currentTop = parseInt(cropBox.style.top, 10) || 0;

      cropBox.style.left = `${currentLeft + dx}px`;
      cropBox.style.top = `${currentTop + dy}px`;

      this.startX = event.clientX;
      this.startY = event.clientY;
    }

    if (this.isResizing) {
      this.resizeCropBox(event);
    }
  }

  resizeCropBox(event: MouseEvent): void {
    const cropBox = this.cropBox.nativeElement;
    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;

    const currentWidth = cropBox.offsetWidth;
    const currentHeight = cropBox.offsetHeight;

    if (this.resizeDirection === 'top-left') {
      cropBox.style.width = `${currentWidth - dx}px`;
      cropBox.style.height = `${currentHeight - dy}px`;
      cropBox.style.left = `${parseInt(cropBox.style.left, 10) + dx}px`;
      cropBox.style.top = `${parseInt(cropBox.style.top, 10) + dy}px`;
    } else if (this.resizeDirection === 'top-right') {
      cropBox.style.width = `${currentWidth + dx}px`;
      cropBox.style.height = `${currentHeight - dy}px`;
      cropBox.style.top = `${parseInt(cropBox.style.top, 10) + dy}px`;
    } else if (this.resizeDirection === 'bottom-left') {
      cropBox.style.width = `${currentWidth - dx}px`;
      cropBox.style.height = `${currentHeight + dy}px`;
      cropBox.style.left = `${parseInt(cropBox.style.left, 10) + dx}px`;
    } else if (this.resizeDirection === 'bottom-right') {
      cropBox.style.width = `${currentWidth + dx}px`;
      cropBox.style.height = `${currentHeight + dy}px`;
    }

    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  onMouseUp(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

  exportCroppedImage(): void {
    const canvas = this.canvas.nativeElement;
    const cropBox = this.cropBox.nativeElement;

    const cropX = parseInt(cropBox.style.left, 10) || 0;
    const cropY = parseInt(cropBox.style.top, 10) || 0;
    const cropWidth = cropBox.offsetWidth;
    const cropHeight = cropBox.offsetHeight;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = cropWidth;
    tempCanvas.height = cropHeight;

    const tempCtx = tempCanvas.getContext('2d')!;
    tempCtx.drawImage(
      canvas,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight
    );

    this.croppedImage = tempCanvas.toDataURL('image/png');
  }

  downloadimg(){
     // Set the download link for the cropped image
  const downloadLink = this.downloadLink.nativeElement;
  if (this.croppedImage) {
    downloadLink.href = this.croppedImage;
  }
  downloadLink.download = 'cropped-image.png';
  downloadLink.click(); // Trigger download
  }
}