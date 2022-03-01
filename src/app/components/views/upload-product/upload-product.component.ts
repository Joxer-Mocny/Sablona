import { Component, OnInit } from '@angular/core';

interface Text{
  writing: string
}

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.css']
})
export class UploadProductComponent implements OnInit {
  // This is for add text
  newWriting: string= ''
  article: Text[]= []

  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  constructor() { }

  ngOnInit(): void {
    fetch('https://api.json.com/bins/zg7ze')
      .then(res => res.json())
      .then(json => (this.article = json))

  }

  addText(){
    this.article.push({
      writing: this.newWriting
    })
  }


}
