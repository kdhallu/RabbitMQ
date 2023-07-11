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

        channel.assertQueue(queueName, {
            durable: true
        });

        channel.consume(queueName, (msg) => {
           console.log(`Message Received from Publisher:  ${msg.content.toString()}`);
        }, {
            noAck: true
        });
    })
})