import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @ViewChild('imageInputFile', {static: false}) imageFile: ElementRef;

  image: File;
  imageMin: File;

  loading: boolean;

  constructor(private imageService: ImageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onFileChange(event){
    this.image = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (event: any) => {
      this.imageMin = event.target.result;
    };
    fr.readAsDataURL(this.image);
  }

  onUpload(): void {
    this.loading = true;
    this.imageService.upload(this.image).subscribe(
      data => {
        this.loading=false;
        this.router.navigate(['/']);
      },
      err => {
        alert(err.error.message);
        this.loading=false;
        this.reset();
      }
    );
  }

  reset(){
    this.image = null;
    this.imageMin = null;
    this.imageFile.nativeElement.value = '';
  }
}
