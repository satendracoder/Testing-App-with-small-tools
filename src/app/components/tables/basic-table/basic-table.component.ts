import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-basic-table',
  imports: [CommonModule,MateriallistModule],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {

}
