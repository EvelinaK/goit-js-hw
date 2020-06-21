'use strict'


const ADMIN_PASSWORD = 'jqueryismyjam';

let parol = prompt(' Введите пароль!', '');

let message = (parol == null) ? 'отменено пользователем!' :
    (parol === ADMIN_PASSWORD) ? 'Добро пожаловать!' :
    'Доступ запрещен, неверный пароль!';

alert(message);