# RabbitMQ 

## Installation and running the project

### Install RabbitMQ

You need to download and install RabbitMQ from [Here](https://www.rabbitmq.com/#getstarted)

For mac once the installtion is done you need to start the RabbitMQ server using the following command 

```
brew services start rabbitmq
```

Once started you should see the following message in your console 

```
==> Successfully started `rabbitmq` (label: homebrew.mxcl.rabbitmq)
```

To visit the management console you need to find the port number by running the following command 

```
brew info rabbitmq
```

Which should output

```
==> rabbitmq: stable 3.12.1 (bottled)
Messaging broker
https://www.rabbitmq.com
/opt/homebrew/Cellar/rabbitmq/3.12.1 (1,438 files, 34.2MB) *
  Poured from bottle using the formulae.brew.sh API on 2023-07-11 at 22:34:17
From: https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/rabbitmq.rb
License: MPL-2.0
==> Dependencies
Required: erlang ✔
==> Caveats
Management Plugin enabled by default at http://localhost:15672

To restart rabbitmq after an upgrade:
  brew services restart rabbitmq
Or, if you don't want/need a background service you can just run:
  CONF_ENV_FILE="/opt/homebrew/etc/rabbitmq/rabbitmq-env.conf" /opt/homebrew/opt/rabbitmq/sbin/rabbitmq-server
==> Analytics
install: 10 (30 days), 10 (90 days), 10 (365 days)
install-on-request: 10 (30 days), 10 (90 days), 10 (365 days)
build-error: 0 (30 days)
```

You can access the Management console at http://localhost:15672 (notice the port number in the above output)
The credentials by default are username: guest, Password: guest


### Running the Program

If your server has started successfully You can now run the node js code. Before you run in you should run npm install
because we need the amqplib package. AMQP stands for Advance Messaging Queue Protocol 

To install dependencies you need to have nodejs installed on your machine and you need to run npm install from the project

```
npm install
```

To publish the message you need to run 

```
node publisher.js
```

Note: You can run multiple times and the program will just send the messages to the queue and is stored at the until the
subscriber is not executed 

To View or Subscribe to the message  run 

```
node subscribe.js 
```

And you should see the following output to the console 

```
Message Received from Publisher:  This message is sent from Publisher
```

If you see the following output congratulations you have successfully ran your first RabbitMQ program
