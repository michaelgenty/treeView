import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public ajaxSettings: any;
  public hostUrl: string = 'http://localhost:8090/';

  ngOnInit(): void {
    // Initializing the File Manager with NodeJS service.
    this.ajaxSettings = {
      url: this.hostUrl,
      downloadUrl: this.hostUrl+ "Download",
      uploadUrl: this.hostUrl+ "Upload",
      getImageUrl: this.hostUrl+ "GetImage"
    };
  }
}
