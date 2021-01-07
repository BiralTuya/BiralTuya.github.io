import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Pdf/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
