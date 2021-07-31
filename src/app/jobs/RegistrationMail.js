import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'DIO <contato_171@dio.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá ${user.name}, bem-vindo a DIO.`
        }); 
    }
}

/* await Mail.sendMail({
    from: 'DIO <contato_171@dio.com.br>',
    to: `${name} <${email}>`,
    subject: 'Cadastro de usuário',
    html: `Olá ${name}, bem-vindo a DIO.`
}); */