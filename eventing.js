class Events {
    on(name, callback) {
        window.addEventListener(name, callback);
    }

    trigger(name) {}

    off(name) {
        window.removeEventListener(name);
    }
}
