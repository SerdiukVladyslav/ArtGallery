import { Images } from "./images";

export class ImagesService
{
    private data: Images[] =
    [
        { title: "Мона Ліза", imageUrl: "assets/monalisa.jpg", year: 1503, author: "Леонардо да Вінчі", size: "77 x 53 см", location: "Лувр, Париж, Франція" },
        { title: "Сікстинська Мадонна", imageUrl: "assets/madonna.jpg", year: 1514, author: "Рафаель", size: "265 x 196 см", location: "Галерея старих майстрів, Дрезден, Німеччина" },
        { title: "Запорожці пишуть листа турецькому султанові", imageUrl: "assets/zaporozhci.jpg", year: 1891, author: "Іван Рєпін", size: "203 x 358 см", location: "Харківський художній музей, Харків, Україна" },
        { title: "Катерина", imageUrl: "assets/kateryna.jpg", year: 1842, author: "Тарас Шевченко", size: "93 x 72 см", location: "Національний музей Тараса Шевченка, Київ, Україна" },
        { title: "Зоряна ніч", imageUrl: "assets/starrynight.jpg", year: 1889, author: "Вінсент ван Гог", size: "74 x 92 см", location: "Музей сучасного мистецтва, Нью-Йорк, США" }
    ];

    getImages(): Images[]
    {
        return this.data;
    }
}
