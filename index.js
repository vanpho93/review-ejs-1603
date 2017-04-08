const express = require('express');
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home', { mang: arrTin }));

app.get('/admin', (req, res) => res.render('admin', { mang: arrTin }));

app.get('/abcd', (req, res) => res.redirect('/admin'));

app.post('/add', parser, (req, res) => {
    const { title, desc, image, video } = req.body;
    arrTin.push(new Tin(title, desc, video, image));
    res.redirect('/admin');
});
//npm install eslint -g
//yarn add eslint-config-rallycoding --dev
app.get('/xoa/:index', (req, res) => {
    const { index } = req.params;
    arrTin.splice(index, 1);
    res.redirect('/admin');
});

app.get('/sua/:index', (req, res) => {
    const { index } = req.params;
    const tin = arrTin[index];
    res.render('update', tin);
});

class Tin {
    constructor(title, desc, idVideo, image) {
        this.title = title;
        this.desc = desc;
        this.idVideo = idVideo;
        this.image = image;
    }
}

const arrTin = [
    new Tin('NodeJS Khoa Pham', 'NodeJS duoc phat trien nam 2009 boi Dahl', 203803551, '1.jpg'),
    new Tin('ReactJS Khoa Pham', 'ReactJS la 1 thu vien javascript de xay dung UI', 208130024, '2.png')
];
