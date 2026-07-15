
        // Disable right-click
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        // Disable common DevTools shortcuts
        document.addEventListener("keydown", function (e) {
            // F12
            if (e.key === "F12") {
                e.preventDefault();
            }

            // Ctrl+Shift+I
            if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "I") {
                e.preventDefault();
            }

            // Ctrl+Shift+J
            if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "J") {
                e.preventDefault();
            }

            // Ctrl+Shift+C
            if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === "C") {
                e.preventDefault();
            }

            // Ctrl+U (View Source)
            if (e.ctrlKey && e.key.toUpperCase() === "U") {
                e.preventDefault();
            }

            // Ctrl+S (optional)
            if (e.ctrlKey && e.key.toUpperCase() === "S") {
                e.preventDefault();
            }
        });

        // Basic DevTools detection
        setInterval(function () {
            if (
                window.outerWidth - window.innerWidth > 160 ||
                window.outerHeight - window.innerHeight > 160
            ) {
                document.body.innerHTML = "<h1>Developer Tools Detected</h1>";
            }
        }, 1000);

