const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home', { mang : arrTin }));

class Tin {
    constructor(title, desc, idVideo, image) {
        this.title = title;
        this.desc = desc;
        this.idVideo = idVideo;
        this.image= image;
    }
}

const arrTin = [
    new Tin('NodeJS Khoa Pham', 'NodeJS duoc phat trien nam 2009 boi Dahl', 203803551,'1.jpg' ), 
    new Tin('ReactJS Khoa Pham', 'ReactJS la 1 thu vien javascript de xay dung UI', 208130024,'2.png')
];
