import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph } from 'docx';

@Component({
  selector: 'app-editor-text',
  imports: [],
  templateUrl: './editor-text.component.html',
  styleUrl: './editor-text.component.scss'
})
export class EditorTextComponent {
  @ViewChild('editorContent') editorContent!: ElementRef;
  convertedOutput: string = '';

  executeCommand(command: string) {
    document?.execCommand(command, false);
  }

  formatBlock(event: any) {
    document?.execCommand('formatBlock', false, event.target.value);
  }

  insertLink() {
    const url = prompt('Enter Link URL:');
    if (url) document?.execCommand('createLink', false, url);
  }

  insertBookmark() {
    const name = prompt('Enter Bookmark Name:');
    if (name) document?.execCommand('insertHTML', false, `<a name="${name}"></a>`);
  }

  insertImage() {
    const imageUrl = prompt('Enter Image URL:');
    if (imageUrl) document?.execCommand('insertImage', false, imageUrl);
  }

  uploadImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      document?.execCommand('insertImage', false, e.target.result);
    };
    reader.readAsDataURL(file);
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();
    this.uploadImage(event);
  }

  insertTable() {
    document?.execCommand('insertHTML', false, '<table><tr><td>Cell</td></tr></table>');
  }

  insertQuote() {
    document?.execCommand('formatBlock', false, 'blockquote');
  }

  insertVideo() {
    const videoUrl = prompt('Enter Video URL:');
    if (videoUrl) document.execCommand('insertHTML', false, `<iframe src="${videoUrl}"></iframe>`);
  }

  insertCodeBlock() {
    document.execCommand('insertHTML', false, '<pre><code>Code</code></pre>');
  }

  insertSymbol() {
    const symbol = prompt('Enter Symbol (Ω, ±, ∞, ∑, π, etc.):');
    if (symbol) document.execCommand('insertText', false, symbol);
  }

  exportAsWord() {
    const doc = new Document({ sections: [{ children: [new Paragraph(this.editorContent.nativeElement.innerHTML)] }] });
    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.docx';
      a.click();
    });
  }

  exportAsPDF() {
    html2canvas(this.editorContent.nativeElement).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL(), 'PNG', 10, 10, canvas.width, canvas.height, '', 'FAST');
      pdf.save('document.pdf');
    });
  }

  convertToJSON() {
    this.convertedOutput = JSON.stringify({ content: this.editorContent.nativeElement.innerHTML }, null, 2);
  }

  onContentChange() {
    this.convertedOutput = this.editorContent.nativeElement.innerHTML;
  }
}