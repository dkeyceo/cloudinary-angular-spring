import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  images: Image[] = [];
  loading: boolean;

  constructor(private imageService: ImageService,
    private matDialog: MatDialog
    ) { }

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
    this.loading=true;
    this.imageService.delete(id).subscribe(
      data => {
        this.loading=false;
        this.fillGalery();
      },
      err => {
        this.loading=false;
        console.log(err);
      }
    )
  }

  showDetails(){
    this.matDialog.open(DetailsComponent)
  }

}
