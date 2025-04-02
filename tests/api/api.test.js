import fetch from 'node-fetch';

describe('API тести', () => {

    it('Отримання списку постів', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toHaveProperty('id');
    });

    it('Помилка при авторизації з некоректним паролем', async () => {
        const response = await fetch('https://www.saucedemo.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'standard_user',
                password: 'wrong_password'
            })
        });

        expect(response.status).toBe(405);
    });

    it('Створення нового поста', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'Test Post',
                body: 'This is a test post',
                userId: 1
            })
        });

        expect(response.status).toBe(201);
        const data = await response.json();
        expect(data).toHaveProperty('id');
    });

    it('Оновлення поста', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: 1,
                title: 'Updated Post',
                body: 'Updated post content',
                userId: 1
            })
        });

        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data.title).toBe('Updated Post');
    });

    it('Видалення поста', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        });

        expect(response.status).toBe(200);
    });

});
