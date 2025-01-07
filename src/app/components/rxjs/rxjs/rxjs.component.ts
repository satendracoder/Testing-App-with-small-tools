import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as QRCode from 'qrcode';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';
import { AnimationOptions
  
 } from 'ngx-lottie';
import { QRCodeComponent } from "../../qr-code/qr-code.component";

@Component({
  selector: 'app-rxjs',
  imports: [CommonModule, MateriallistModule, QRCodeComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent {
  qrData: string = ''; // User-entered URL
  qrCodeImage: string | undefined; // Generated QR Code image

 
  options: AnimationOptions = {
    path: '/assets/animation/loginexplainer.lottie',
    autoplay: true,
    loop: false,
  };

  constructor() {}
  
  
  // Generate QR Code
  generateQRCode() {
    if (this.qrData.trim() === '') {
      alert('Please enter a valid URL');
      return;
    }
    QRCode.toDataURL(this.qrData)
      .then((url) => {
        this.qrCodeImage = url;
      })
      .catch((err) => {
        console.error('Error generating QR Code', err);
      });
  }

  // Download QR Code as an image
  downloadQRCode() {
    if (!this.qrCodeImage) {
      alert('No QR Code to download. Please generate one first.');
      return;
    }
    const link = document.createElement('a');
    link.href = this.qrCodeImage;
    link.download = 'qr-code.png';
    link.click();
  }

}