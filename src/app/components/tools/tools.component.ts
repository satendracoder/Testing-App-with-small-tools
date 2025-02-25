import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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

    
    // {
    //   title:"Free Generate PDF",
    //   Baseurl:"/tools/pdf"
    // },

    {
      title:"Voice Tools",
      Baseurl:"/tools/voice"
    },
    {
      title:"Json-Formatter Tools",
      Baseurl:"/tools/json-formatter"
    }
  ]
}
