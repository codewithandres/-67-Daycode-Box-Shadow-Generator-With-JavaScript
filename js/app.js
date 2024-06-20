
const box = document.getElementById('box');
const hOffsetInput = document.getElementById('h-offet');
const vOffsetInput = document.getElementById('v-offset');
const blurInput = document.getElementById('blur');
const spreadInput = document.getElementById('spread');
const colorInput = document.getElementById('color');
const codeTextarea = document.getElementById('code');
const copyButton = document.getElementById('copy-button');
const resetButton = document.getElementById('rest-button');

const updateBoxShadow = () => {
    const hOffset = `${hOffsetInput.value}px`;
    const vOffset = `${vOffsetInput}px`;
    const blur = `${blurInput.value}px`;
    const spread = `${spreadInput.value}`;
    const color = `${colorInput.value}px`;

    const boxShadowValues = `${hOffset} ${vOffset} ${blur} ${spread} ${color}`;

    box.style.boxShadow = boxShadowValues;
    codeTextarea.value = `box-shadow: ${boxShadowValues}`;
};

const copyCodeToClipboard = () => {
    codeTextarea.select();
    document.execCommand('copy');
};

const resetValues = () => {
    hOffsetInput.value = 0;
    vOffsetInput.value = 0
    blurInput.value = 0;
    spreadInput.value = 0;
    colorInput.value = '#291165';

    updateBoxShadow();
};

hOffsetInput.addEventListener('input', updateBoxShadow);
vOffsetInput.addEventListener('input', updateBoxShadow);
blurInput.addEventListener('input', updateBoxShadow);
spreadInput.addEventListener('input', updateBoxShadow);
colorInput.addEventListener('input', updateBoxShadow);
copyButton.addEventListener('click', copyCodeToClipboard);
resetButton.addEventListener('click', resetValues);

updateBoxShadow();