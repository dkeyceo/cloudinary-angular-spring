import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  images: Image[] = [];
  constructor(private imageService: ImageService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.fillGalery();
  }

  fillGalery(){
    this.imageService.list().subscribe(
      data => {
        this.images = data;
      }
    );
  }

  delete(id: number){
    this.spinner.show();
    this.imageService.delete(id).subscribe(
      data => {
        this.spinner.hide();
        this.fillGalery();
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    )
  }

  showModal(i: number){
    alert('showing modal...')
  }

}
