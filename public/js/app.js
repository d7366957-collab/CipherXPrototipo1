const tg = window.Telegram.WebApp;
tg.expand();

// Cargar datos del usuario de Telegram
const user = tg.initDataUnsafe?.user;
if (user) {
    console.log('Usuario de Telegram:', user.first_name, 'ID:', user.id);
}
