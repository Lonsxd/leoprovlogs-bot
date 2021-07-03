module.exports = {
    name: 'hi',
    description: "this is hola command!",
    execute(message, args){
        message.channel.send('hi whats up bro');
    }
}