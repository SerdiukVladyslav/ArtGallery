// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component, OnInit } from "@angular/core";
import { ImagesService } from "./images.service";
import { Images } from "./images";


// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
    template: `
    <div class="container">
    <table style="display: flex; justify-content: center; align-items: center;" class="selected-image">
      <tr>
        <td *ngFor="let image of images" style="position: relative;">
          <img [src]="image.imageUrl" (click)="onSelectImage(image)" width="180" height="130">
        </td>
      </tr>
    </table>
    
    <div *ngIf="selectedImageUrl">
      <h3 style="text-align: center; font-size: 30px;">Вибране зображення:</h3>
      <div style="display: flex; justify-content: center; align-items: center;">
        <img [src]="selectedImageUrl.imageUrl" style="height: 700px;">
          <div style="margin-left: 20px;">
            <div style="font-size: 30px;"><strong>Назва:</strong> {{ selectedImageUrl.title }}</div>
            <div style="font-size: 30px;"><strong>Рік:</strong> {{ selectedImageUrl.year }}</div>
            <div style="font-size: 30px;"><strong>Автор:</strong> {{ selectedImageUrl.author }}</div>
            <div style="font-size: 30px;"><strong>Розміри:</strong> {{ selectedImageUrl.size }}</div>
            <div style="font-size: 30px;"><strong>Місцезнаходження:</strong> {{ selectedImageUrl.location }}</div>
          </div>
        </div>
    </div>
  </div>
  `,
    styleUrls: ['./app.component.css'],
    providers: [ImagesService]
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent implements OnInit {
  images: Images[] = [];
  selectedImageUrl: Images | null = null;

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.images = this.imagesService.getImages();
  }

  onSelectImage(imageUrl: Images) {
    this.selectedImageUrl = imageUrl;
  }
}
