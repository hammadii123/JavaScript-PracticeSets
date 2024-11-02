const randomValues = "ABCSWHDAUERM!@#$%^&^%$#32145278175asandjhrwdasuasdmumasas";

    function generatePassword() {
        let randomPass = "";
        for (let i = 0; i < 10; i++) {
            const randomNum = Math.floor(Math.random() * randomValues.length);
            randomPass += randomValues[randomNum];
        }
        document.getElementById("passwordDisplay").value = randomPass;
    }

    