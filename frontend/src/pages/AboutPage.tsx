import React, {FC} from 'react';
import {Container} from "react-bootstrap";
import '../App.css'

const AboutPage: FC = () => {
    return (
        <Container className="d-flex flex-column gap-2">
            <p className="indent-text-sm">
                Основною метою проекту є розробка освітньої платформи,
                що надає функціонал, схожий тому, що пропонує Moodle.
                Ви можете ознайомитися з роботою їх системи, перейшовши за цим посиланням,
                щоб отримати глибше розуміння завдань, що стоять перед вами.
            </p>
            <b>Наша програма складається із:</b>
            <ul>
                <li>Викладач (teacher)</li>
                <li>Викладач-Керівник (chief-teacher)</li>
                <li>Учень (student)</li>
                <li>Предмет (subject)</li>
            </ul>
            <b>Викладач</b>
            <ul>
                <li>Перелік <b>Предметів</b>, що викладає <b>Викладач</b></li>
                <li>Може додавати або видаляти <b>Учнів</b> у <b>Предметі</b></li>
                <li>Може виставляти оцінки <b>Учням</b> по <b>Предметах</b> у журналі оцінок </li>
                <li>Перегляд (сортування по прізвищах) та пошук доступних <b>Викладачів</b></li>
            </ul>
            <b>Викладач-Керівник</b>
            <ul>
                <li>Доручає <b>Викладачеві</b> викладання <b>Предмету</b></li>
                <li>Може додавати або видаляти <b>Викладачів</b></li>
            </ul>
            <b>Предмет</b>
            <ul>
                <li>Клас (класи) викладання <b>Предмету</b></li>
                <li>Перелік <b>Учнів</b>, які вивчають <b>Предмет</b></li>
                <li>Перегляд (сортування по назвах та по класах) та пошук <b>Предметів</b></li>
            </ul>
            <b>Учень</b>
            <ul>
                <li><b>Предмети</b>, що вивчає <b>Учень</b></li>
                <li>Успішність (перелік оцінок та середній бал)</li>
                <li>Перегляд (сортування по прізвищах, по класах, по успішності) всіх учнів</li>
                <li><a href="https://cityhost.ua/uk/blog/chto-takoe-paginaciya-sayta-i-kak-ee-nastroit.html">Пагінація</a></li>
                <li>Пошук по учнях</li>
            </ul>
            <br />
            <br />
        </Container>
    );
};

export default AboutPage;