let counter = 0;
setInterval(() => {
    postMessage(++counter);
}, 1000);
