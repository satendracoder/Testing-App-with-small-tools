import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'process';
import { MateriallistModule } from '../../shared/materiallist/materiallist.module';

@Component({
  selector: 'app-tools',
  imports: [RouterOutlet, MateriallistModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

  tools=[
    {
      title:"QR Code Generate",
      Baseurl:"/tools/qe_code"
    },
    {
      title:"Background remove",
      Baseurl:"/tools/bg"
    },
    {
      title:"Count Word",
      Baseurl:"/tools/count_word"
    },

    {
      title:"Grammar Checker",
      Baseurl:"/tools/grammar_checker"
    },

    
    {
      title:"QR new_qr",
      Baseurl:"/tools/new_qr"
    },

    
  ]
}
