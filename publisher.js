const amqp = require('amqplib/callback_api');


amqp.connect("amqp://localhost", (err, connection) => {
    if(err) {
        throw err;
    }

    connection.createChannel((err, channel) => {
        if(err) {
            throw err;
        }

        let queueName = 'testQueue';
        let message = 'This message is sent from Publisher';

        channel.assertQueue(queueName, {
            durable: true
        });

        channel.sendToQueue(queueName, Buffer.from(message));
        setTimeout(() => {
            connection.close();
        }, 1000)

    })
})