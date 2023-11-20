AOS.init();

const dataDoEvento = new Date("May 28, 2023 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contadorDoEvento = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaHoraEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaHoraEvento / diasEmMs);
    const horasAteOEvento = Math.floor(
        (distanciaHoraEvento % diasEmMs) / horasEmMs
    );
    const minAteOEvento = Math.floor(
        (distanciaHoraEvento % horasEmMs) / minutosEmMs
    );
    const secAteOEvento = Math.floor(
        (distanciaHoraEvento % minutosEmMs) / 1000
    );



    if (timeStampAtual >= timeStampDoEvento) {
        document.getElementById(
            "contador"
        ).innerHTML = "28 de Maio de 2023";
        clearInterval(contadorDoEvento);
        document.querySelector("body").style.position = "relative";
        document.getElementById("hidden").style.removeProperty("display");
    } else {
        document.getElementById(
            "contador"
        ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minAteOEvento}m ${secAteOEvento}s`;
    }
}, 1000);
