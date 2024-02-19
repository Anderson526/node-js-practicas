const EventEmitter = require('events'); // Se corrige EventEmmiter a EventEmitter

class ChatRoom extends EventEmitter {
    join(user) {
        console.log(`${user} ha ingresado a la sala`); // Se corrige el uso de comillas invertidas para la interpolación de cadenas
        this.emit("join", user);
    }

    sendMessage(user, message) {
        console.log(`mensaje: ${message} - ${user}`); // Se corrige el uso de comillas invertidas para la interpolación de cadenas
        this.emit('message', user, message);
    }
}

const chatRoom = new ChatRoom();

chatRoom.on("join", (user) => {
    console.log(`bienvenido ${user}!`); // Se corrige el uso de comillas invertidas para la interpolación de cadenas
});

chatRoom.on("message", (user, message) => {
    console.log(`nuevo mensaje ${message}`); // Se corrige el uso de comillas invertidas para la interpolación de cadenas
});

chatRoom.join("pepe"); // Se cambia ChatRoom.join("pepe") a chatRoom.join("pepe")
chatRoom.sendMessage("pepe", "Hola soy nuevo"); // Se cambia ChatRoom.sendMessage("pepe", "Hola soy nuevo") a chatRoom.sendMessage("pepe", "Hola soy nuevo")
