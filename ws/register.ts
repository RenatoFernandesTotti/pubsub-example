import { argv } from "process";

console.log(argv);


const socket = new WebSocket("ws://0.tcp.sa.ngrok.io:13889/chat", {
    headers: {
        "test": `${argv[2]}`
    },
});




const startMessageChat = async () => {

    for await (const line of console) {
        socket.send(line)
    }
}




socket.addEventListener("open", event => {
    console.log('connected');
    startMessageChat()

});


socket.addEventListener("message", event => {
    console.log(event.data);

});

