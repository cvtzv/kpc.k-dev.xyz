document.getElementById('application-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Останавливаем стандартную отправку формы

    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const reason = document.getElementById('reason').value;

    const data = {
        username: username,
        name: name,
        reason: reason
    };

    // Отправляем данные на Pipedream
    fetch('https://YOUR_PIPEWEBOOK_URL', { // Здесь вставить URL Webhook от Pipedream
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = 'Заявка успешно отправлена!';
    })
    .catch(error => {
        document.getElementById('responseMessage').innerText = 'Ошибка при отправке заявки.';
    });
});