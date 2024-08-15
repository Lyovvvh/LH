const form = document.querySelector('#registration');
form.onsubmit = async (e) => {
    e.preventDefault();

    const payload = {
        name: document.querySelector('[name="name"]').value || undefined,
        email: document.querySelector('[name="email"]').value || undefined,
        number: document.querySelector('[name="number"]').value || undefined,
    }

    const data = await axios({
        method: 'post',
        url: '/users/registration',
        data: payload

    })
        .then(({data}) => {
            return {
                error: false,
                result: data
            }
        })
        .catch((e) => {
            return {
                error: true,
                result: e.response.data
            }
        });
    const keys = Object.keys(payload)
    const errors = data.result
    if (data.error) {
        keys.forEach((key) => {
            const errorMessage = document.querySelector(`span[data-name="${key}"]`)
            errorMessage.style.color = 'red'
            errorMessage.innerText = errors.errors[key] || '';
        })
    } else {
        keys.forEach((key) => {
            document.querySelector(`span[data-name="${key}"]`).innerText = '';
        })
        document.querySelector('#message').innerText = 'Registration successful';

        setTimeout(() => {
            location.href = '/users/login'
        }, 1000)
    }

}