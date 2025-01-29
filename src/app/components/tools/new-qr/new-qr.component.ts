import { Component, ElementRef, ViewChild } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { QrGeneratorService } from '../../../services/QrGenerator/qr-generator.service';

@Component({
  selector: 'app-new-qr',
  imports: [MateriallistModule],
  templateUrl: './new-qr.component.html',
  styleUrl: './new-qr.component.scss'
})
export class NewQrComponent {

  content = 'https://angular.dev';
  width = 300;
  color = '#000000';
  backgroundColor = '#ffffff';
  margin = 4;
  logoUrl = '';
  qrDataUrl = '';
  errorMessage = '';

  constructor(private qrService: QrGeneratorService) {
    this.generateQR();
  }

  async generateQR() {
    if (!this.content) return;
    this.errorMessage = '';

    try {
      this.qrDataUrl = await this.qrService.generateQR(this.content, {
        width: this.width,
        color: this.color,
        backgroundColor: this.backgroundColor,
        margin: this.margin,
        logoUrl: this.logoUrl || undefined
      });
    } catch (error) {
      console.error('Error generating QR code:', error);
      this.errorMessage = error instanceof Error ? error.message : 'Failed to generate QR code';
    }
  }

  async downloadQR(format: 'png' | 'svg') {
    if (!this.qrDataUrl) return;
    
    const filename = `qr-code-${Date.now()}`;
    await this.qrService.downloadQR(this.qrDataUrl, format, filename);
  }
}
