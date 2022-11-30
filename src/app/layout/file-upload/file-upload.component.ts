import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: any = null; // Variable to store file

    // Inject service
    constructor(private fileUploadService: FileUploadService) { }

    ngOnInit(): void {
    }

    // On file Select
    onChange(event: any) {
        this.file = event.target.files[0];
        this.onUpload()
    }

    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        this.fileUploadService.upload(this.file).subscribe(
          (event: any) => {
            if (typeof (event) === 'object') {
              this.shortLink = event.link;
              this.loading = false;
              location.reload();
            }

          },
          (error: any) => {
            this.loading = false;
            console.log(error)
          }
        );
    }
}
