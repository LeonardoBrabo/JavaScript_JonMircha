console.log(window);
        console.log(document)

        let texto = "GitHub Copilot, ¡Gobernará el mundo!. esperalo"
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto);