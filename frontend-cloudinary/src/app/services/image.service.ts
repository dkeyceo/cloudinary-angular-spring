import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageURL = 'http://localhost:8080/cloudinary/';

  constructor(private http: HttpClient) { }

  public list():Observable<Image[]>{
    return this.http.get<Image[]>(this.imageURL + 'list');
  }

  public upload(image: File): Observable<any>{
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.http.post<any>(this.imageURL+'upload', formData);
  }

  public delete (id: number): Observable<any>{
    return this.http.delete<any>(this.imageURL+`delete/${id}`);
  }
}
