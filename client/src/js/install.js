const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    //Store the triggered events 
    window.deferredPrompt = event;

    //Remove the hidden attribute from the install button
    butInstall.classList.toggle('hidden', false);

});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    //Show the install prompt
    promptEvent.prompt();

    //Reset the deferred prompt variable
    window.deferredPrompt = null;

    //Hide the install button
    butInstall.setAttribute('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
