// Elementos DOM
// Analizar texto
const buttonAnazyzeText = "btn-txt-analyzer";
const textToAnalyze = "txt-analyzer";
const cleanText = "clean-txt";
const textLength = "txt-len";
const textUp = "upper-txt";
const textLow = "lower-txt";
const textFirst = "start-letter";
const textLast = "end-letter";
// Generador de números aleatorios
const buttonGenerateRandom = "btn-get-rnd";
const randomNumber = "rnd-num";
const randomInteger = "rnd-int";
const randomEven = "rnd-even";
const randomSquare = "rnd-sqrt";
const randomCeil = "rnd-ceil";
const randomFloor = "rnd-floor";
// Fecha y hora
const dateDate = "date-date";
const dateTime = "date-time";
const dateDay = "date-day";
const dateGreet = "date-greet";
// Navegador
const navigatorLanguage = "nav-lang";
const navigatorBasic = "nav-basic";
const navigatorScreen = "nav-res-scr";
const navigatorWindow = "nav-res-win";
const navigatorUrl = "nav-url";
// Local Storage
const storageName = "txt-name";
const buttonSaveName = "btn-save-prefs";
const buttonDelName = "btn-del-prefs";
const storageExit = "prefs-name";
// Countdown
const buttonCountdown = "btn-countdown";
const countdownExit = "countdown-exit";
let countdownInterval;
let countdownValue = 0;

/**
 * @param {string} value Valor a analizar
 * @returns True si la cadena es vacía o null
 */
function isNullOrEmpty(value) {
	return value == null || value.trim() === "";
}

/**
 * Muestra un mensaje de error por alerta y consola
 * @param {string} message Mensaje de error a mostrar
 */
function handleError(message) {
    alert(message);
    console.error(message);
}

/**
 * Analiza un campo de texto y muestra el resultado
 */
function analyzeText() {
	// Guardamos los elementos a utilizar
	const text = document.getElementById(textToAnalyze);
	const fieldClean = document.getElementById(cleanText);
	const fieldLength = document.getElementById(textLength);
	const fieldUppercase = document.getElementById(textUp);
	const fieldLowercase = document.getElementById(textLow);
	const fieldFirst = document.getElementById(textFirst);
	const fieldLast = document.getElementById(textLast);

	// Comprobamos si alguno de los elementos clave no existe en el DOM
	if (!text || !fieldClean || !fieldLength || !fieldUppercase || !fieldLowercase || !fieldFirst || !fieldLast) {
		handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
		return;
	}

	// Obtenemos el text limpio
	const clean = text.value.trim();

	// Si no hay texto a analizar avisamos, si existe procesamos
	if (isNullOrEmpty(clean)) {
		const errorMsg = "No aplicable";
		fieldClean.textContent = errorMsg;
		fieldLength.textContent = errorMsg;
		fieldUppercase.textContent = errorMsg;
		fieldLowercase.textContent = errorMsg;
		fieldFirst.textContent = errorMsg;
		fieldLast.textContent = errorMsg;
		console.log("Nada que analizar.");
		alert("Nada que analizar.");
	} else {
		fieldClean.textContent = clean;
		const length = clean.length;
		fieldLength.textContent = length;
		fieldUppercase.textContent = clean.toUpperCase();
		fieldLowercase.textContent = clean.toLowerCase();
		fieldFirst.textContent = clean.charAt(0);
		fieldLast.textContent = clean.charAt(length - 1);
		console.log("Texto analizado.");
	}
}

/**
 * Genera un número aleatorio y lo procesa
 */
function generateRandom() {
	// Guardamos los elementos a utilizar
	const fieldNumber = document.getElementById(randomNumber);
	const fieldInteger = document.getElementById(randomInteger);
	const fieldEven = document.getElementById(randomEven);
	const fieldSquare = document.getElementById(randomSquare);
	const fieldCeil = document.getElementById(randomCeil);
	const fieldFloor = document.getElementById(randomFloor);

	// Comprobamos si alguno de los elementos clave no existe en el DOM
	if (!fieldNumber || !fieldInteger || !fieldEven || !fieldSquare || !fieldCeil || !fieldFloor) {
		handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
		return;
	}

	// Procesamos
	const num = Math.random() * 100;
	const integer = Math.floor(num) + 1;
	fieldNumber.textContent = num.toFixed(1);
	fieldInteger.textContent = integer;
	fieldEven.textContent = (integer % 2 === 0) ? "Es par" : "Es impar";
	fieldSquare.textContent = Math.sqrt(integer).toFixed(2);
	fieldCeil.textContent = Math.ceil(num);
	fieldFloor.textContent = Math.floor(num);
	console.log("Número generado y analizado.")
}

/**
 * Muestra la información de fecha y hora
 */
function showDate() {
	// Guardamos los elementos a utilizar
	const fieldDate = document.getElementById(dateDate);
	const fieldTime = document.getElementById(dateTime);
	const fieldDay = document.getElementById(dateDay);
	const fieldGreet = document.getElementById(dateGreet);

	// Comprobamos si alguno de los elementos clave no existe en el DOM
	if (!fieldDate || !fieldTime || !fieldDay || !fieldGreet) {
		handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
		return;
	}

	// Procesamos
	const now = new Date();
	fieldDate.textContent = now.toLocaleDateString();
	fieldTime.textContent = now.toLocaleTimeString();
	const weekDay = now.getDay();
	const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	fieldDay.textContent = days[weekDay];
	const hours = now.getHours();
	let greetText = "";
	if (hours < 12) {
		greetText = "Buenos días";
	} else if (hours < 20) {
		greetText = "Buenas tardes"
	} else {
		greetText = "Buenas noches"
	}
	fieldGreet.textContent = greetText;
}

/**
 * Mostrar información del navegador
 */
function showNav() {
	// Guardamos los elementos a utilizar
	const fieldLanguage = document.getElementById(navigatorLanguage);
	const fieldBasic = document.getElementById(navigatorBasic);
	const fieldScreen = document.getElementById(navigatorScreen);
	const fieldWindow = document.getElementById(navigatorWindow);
	const fieldUrl = document.getElementById(navigatorUrl);

	// Comprobamos si alguno de los elementos clave no existe en el DOM
	if (!fieldLanguage || !fieldBasic || !fieldScreen || !fieldWindow || !fieldUrl) {
		handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
		return;
	}

	// Procesamos
	fieldLanguage.textContent = navigator.language;
	fieldBasic.textContent = navigator.userAgent;
	const screenRes = screen.width + " x " + screen.height;
	const windowRes = window.innerWidth + "x" + window.innerHeight;
	fieldScreen.textContent = screenRes;
	fieldWindow.textContent = windowRes;
	fieldUrl.textContent = location.href;
}

/**
 * Mostrar nombre guardado
 */
function showStoredName() {
	// Guardamos los elementos a utilizar
	const storedName = localStorage.getItem("userName");
	const storedExit = document.getElementById(storageExit);

	// Comprobar si hay preferencia de nombre guardada
	if (storedName) {
		// Si existe elemento DOM mostrar nombre
		if (storedExit) {
			console.log("Nombre recuperado. Mostrando");
			storedExit.textContent = "Bienvenido " + storedName;
		} else {
			handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
			return;
		}
	} else {

		// Si existe elemento DOM mostrar nombre
		if (storedExit) {
			console.log("No hay nombre almacenado.");
			storedExit.textContent = "Bienvenido invitado";
		} else {
			handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
			return;
		}
	}
}

/**
 * Guardar nombre de usuario en Local Storage
 */
function saveName() {
	// Guardamos los elementos a utilizar
	const nameInput = document.getElementById(storageName);

	// Comprobamos si alguno de los elementos clave no existe en el DOM
	if (!nameInput) {
		handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
		return;
	}

	// Procesar
	localStorage.setItem("userName", nameInput.value);
	console.log("Nombre guardado");
}

/**
 * Borrar nombre de usuario de Local Storage
 */
function deleteName() {
	localStorage.removeItem("userName");
	console.log("Nombre borrado");
}

/**
 * Empezar contador
 */
function startCountdown() {
	clearInterval(countdownInterval);
	countdownValue = 5;
	updateCoundownExit();
	console.log("Empezando contador");
	countdownInterval = setInterval(function () {
		countdownValue--;
		updateCoundownExit();
		if (countdownValue <= 0) {
			console.log("Contador a 0")
			clearInterval(countdownInterval);
		}
	}, 1000);
}

/**
 * Actualiza el texto de salida del contador
 */
function updateCoundownExit() {
	// Guardamos los elementos a utilizar
	const timeoutExit = document.getElementById(countdownExit);
	// Comprobamos si alguno de los elementos clave no existe en el DOM
	if (!timeoutExit) {
		handleError("Error: No se han encontrado todos los elementos necesarios en la página.");
		return;
	}
	if (countdownValue <= 0) {
		timeoutExit.textContent = "¡Cuenta atrás finalizada!";
	} else {
		timeoutExit.textContent = countdownValue;
	}
}

document.getElementById(buttonAnazyzeText).addEventListener("click", function () {
	analyzeText();
	showDate();
});

document.getElementById(buttonGenerateRandom).addEventListener("click", function () {
	generateRandom();
	showDate();
});

document.getElementById(buttonSaveName).addEventListener("click", function () {
	showDate();
	saveName();
	showStoredName();
});

document.getElementById(buttonDelName).addEventListener("click", function () {
	showDate();
	deleteName();
	showStoredName();
});

document.getElementById(buttonCountdown).addEventListener("click", function () {
	showDate();
	startCountdown();
});

window.addEventListener('load', function () {
	showDate();
	showNav();
	showStoredName();
});