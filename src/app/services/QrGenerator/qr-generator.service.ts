import { Injectable } from '@angular/core';
import QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QrGeneratorService {
  async generateQR(
    text: string,
    options: {
      width: number;
      color: string;
      backgroundColor: string;
      margin: number;
      logoUrl?: string;
    }
  ): Promise<string> {
    const qrOptions = {
      width: options.width,
      margin: options.margin,
      color: {
        dark: options.color,
        light: options.backgroundColor
      }
    };

    try {
      const qrDataUrl = await QRCode.toDataURL(text, qrOptions);
      
      if (options.logoUrl) {
        try {
          return await this.addLogoToQR(qrDataUrl, options.logoUrl, options.width);
        } catch (error) {
          console.error('Error adding logo:', error);
          // Return the QR code without the logo if logo addition fails
          return qrDataUrl;
        }
      }
      
      return qrDataUrl;
    } catch (err) {
      console.error('Error generating QR code:', err);
      throw err;
    }
  }

  private async addLogoToQR(qrDataUrl: string, logoUrl: string, width: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const qrImage = new Image();
      const logoImage = new Image();
      
      // Enable CORS for the logo image
      logoImage.crossOrigin = 'anonymous';
      
      // Handle logo loading errors
      logoImage.onerror = () => {
        reject(new Error('Failed to load logo image. Make sure the image URL supports CORS.'));
      };
      
      qrImage.onload = () => {
        canvas.width = width;
        canvas.height = width;
        ctx!.drawImage(qrImage, 0, 0, width, width);
        
        logoImage.onload = () => {
          try {
            const logoSize = width * 0.2;
            const logoX = (width - logoSize) / 2;
            const logoY = (width - logoSize) / 2;
            
            ctx!.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
            resolve(canvas.toDataURL());
          } catch (error) {
            reject(new Error('Failed to add logo to QR code. The image might not support CORS.'));
          }
        };
        
        // Add cache-busting parameter to prevent caching issues
        const cacheBuster = `?t=${Date.now()}`;
        logoImage.src = logoUrl.includes('?') ? `${logoUrl}&cb=${cacheBuster}` : `${logoUrl}${cacheBuster}`;
      };
      
      qrImage.src = qrDataUrl;
    });
  }

  async downloadQR(dataUrl: string, format: 'png' | 'svg', filename: string) {
    const link = document.createElement('a');
    link.download = `${filename}.${format}`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}