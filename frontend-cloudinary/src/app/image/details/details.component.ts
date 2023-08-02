import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  images: Image[] = [];
  constructor(public dialogRef: MatDialogRef<DetailsComponent>,
    private imageService: ImageService) { }

  ngOnInit(): void {
    this.fillGalery()
  }
  closeDialog() {
    this.dialogRef.close();
  }
  fillGalery(){
    this.imageService.list().subscribe(
      data => {
        this.images = data;
      }
    );
  }
}
