// Selección de elementos del DOM
const box = document.getElementById('box');
const hOffsetInput = document.getElementById('h-offset');
const vOffsetInput = document.getElementById('v-offset');
const blurInput = document.getElementById('blur');
const spreadInput = document.getElementById('spread');
const colorInput = document.getElementById('color');
const codeTextarea = document.getElementById('code');
const copyButton = document.getElementById('copy-button');
const resetButton = document.getElementById('reset-button');

// Función para actualizar la sombra del cuadro
const updateBoxShadow = () => {
    // Obtener valores de los inputs y convertirlos a cadenas de texto adecuadas para CSS
    const hOffset = `${hOffsetInput.value}px`;
    const vOffset = `${vOffsetInput.value}px`;
    const blur = `${blurInput.value}px`;
    const spread = `${spreadInput.value}px`;
    const color = `${colorInput.value}`;

    // Crear la cadena de texto para la propiedad box-shadow
    const boxShadowValues = `${hOffset} ${vOffset} ${blur} ${spread} ${color}`;

    // Aplicar la sombra al cuadro y actualizar el textarea con el código CSS
    box.style.boxShadow = boxShadowValues;
    codeTextarea.value = `box-shadow: ${boxShadowValues}`;
};

// Función para copiar el código CSS al portapapeles
const copyCodeToClipboard = () => {
    // Seleccionar el texto en el textarea y copiarlo al portapapeles
    codeTextarea.select();
    document.execCommand('copy');
};

// Función para restablecer los valores de los inputs
const resetValues = () => {
    // Restablecer los valores de los inputs a sus valores predeterminados
    hOffsetInput.value = 0;
    vOffsetInput.value = 0;
    blurInput.value = 0;
    spreadInput.value = 0;
    colorInput.value = '#291165';

    // Actualizar la sombra del cuadro con los valores predeterminados
    updateBoxShadow();
};

// Asignación de eventos a los inputs y botones
hOffsetInput.addEventListener('input', updateBoxShadow);
vOffsetInput.addEventListener('input', updateBoxShadow);
blurInput.addEventListener('input', updateBoxShadow);
spreadInput.addEventListener('input', updateBoxShadow);
colorInput.addEventListener('input', updateBoxShadow);
copyButton.addEventListener('click', copyCodeToClipboard);
resetButton.addEventListener('click', resetValues);

// Inicialización de la sombra del cuadro
updateBoxShadow();
