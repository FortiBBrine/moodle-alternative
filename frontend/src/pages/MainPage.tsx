import React, {FC} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import '../App.css'

const MainPage: FC = () => {
    return (
        <Container className="d-flex flex-column gap-2">
            <p className="font-monospace indent-text">Сайт було створено для спрощення керуванням електронним щоденником
                учнями і вчителями,
                що забезпечує легкий доступ до розкладу занять,
                домашніх завдань та оцінок.</p>
            <p className="font-monospace indent-text">Завдяки цьому ресурсу,
                вчителі можуть ефективно відслідковувати академічний прогрес учнів,
                залишати коментарі щодо їхньої успішності,
                а також інформувати батьків про важливі події та досягнення.
                </p>
            <p className="font-monospace indent-text">Учні, в свою чергу, мають можливість зручно переглядати свої завдання,
                плани уроків та отримувати зворотний зв'язок,
                що сприяє їхньому кращому розумінню матеріалу та підвищенню мотивації до навчання.</p>
        </Container>
    );
};

export default MainPage;