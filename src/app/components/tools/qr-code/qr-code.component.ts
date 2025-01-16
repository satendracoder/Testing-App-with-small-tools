import { Component, ElementRef, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { NewQrComponent } from '../new-qr/new-qr.component';

@Component({
  selector: 'app-qr-code',
  imports: [MateriallistModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})
export class QRCodeComponent {
  qrData: string = ''; // User input
  qrCodeMatrix: number[][] = []; // QR Code binary matrix
  @ViewChild('qrCanvas', { static: false }) qrCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  // Generate a dummy QR Code matrix
  generateQRCode() {
    if (this.qrData.trim() === '') {
      alert('Please enter some data to generate a QR Code');
      return;
    }
    this.qrCodeMatrix = this.createDummyQRMatrix(this.qrData);
    this.drawQRCodeOnCanvas();
  }

  // Create a dummy QR Code matrix with padding
  createDummyQRMatrix(data: string): number[][] {
    const size = 21; // QR Code size (fixed for simplicity)
    const padding = 4; // Add padding around QR Code
    const matrix = Array.from({ length: size + padding * 2 }, () =>
      Array.from({ length: size + padding * 2 }, () => 0)
    );

    // Fill random data for QR Code (demo purpose)
    for (let i = padding; i < size + padding; i++) {
      for (let j = padding; j < size + padding; j++) {
        matrix[i][j] = Math.random() > 0.5 ? 1 : 0;
      }
    }

    // Add fixed patterns for visualization
    this.addFixedPatterns(matrix, padding);
    return matrix;
  }

  // Add fixed finder patterns to QR Code
  addFixedPatterns(matrix: number[][], padding: number) {
    const size = matrix.length - padding * 2;

    // Top-left finder pattern
    for (let i = padding; i < padding + 7; i++) {
      for (let j = padding; j < padding + 7; j++) {
        matrix[i][j] = (i === padding || i === padding + 6 || j === padding || j === padding + 6 || (i > padding + 1 && i < padding + 5 && j > padding + 1 && j < padding + 5)) ? 1 : 0;
      }
    }
  }

  // Draw QR Code on Canvas
  drawQRCodeOnCanvas() {
    const canvas = this.qrCanvas.nativeElement;
    const context = canvas.getContext('2d');
    const cellSize = 10; // Size of each cell
    const size = this.qrCodeMatrix.length;

    if (context) {
      canvas.width = size * cellSize;
      canvas.height = size * cellSize;

      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw QR Code
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          context.fillStyle = this.qrCodeMatrix[i][j] === 1 ? 'black' : 'white';
          context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  // Export QR Code as an image
  exportQRCode() {
    const canvas = this.qrCanvas.nativeElement;
    const dataUrl = canvas.toDataURL('image/png'); // Get image data
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'qr-code.png'; // File name
    link.click();
  }
}