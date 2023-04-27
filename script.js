const body = document.querySelector('body'),
      wrapper = document.createElement('div'),
      header = document.createElement('h1'),
      input = document.createElement('textarea'),
      keyboard = document.createElement('div'),
      OSDesc = document.createElement('h3'),
      light = document.createElement('div');


const lowKeysEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
                    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
                    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
                    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
      capsKeysEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                     'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
                     'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
                     'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift',
                     'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
      shiftKeysEng = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
                      'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
                      'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
                      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
                      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
      shiftCapsKeysEng = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
                          'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del',
                          'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
                          'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift',
                          'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];


const lowKeysRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
                    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
                    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
                    'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
      capsKeysRus = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                     'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
                     'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
                     'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift',
                     'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
      shiftKeysRus = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
                      'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
                      'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter',
                      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift',
                      'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
      shiftCapsKeysRus = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
                          'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
                          'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter',
                          'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '▲', 'Shift',
                          'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];


const keysStyles = ['backquote', 'digit1', 'digit2', 'digit3', 'digit4', 'digit5', 'digit6', 'digit7',
                    'digit8', 'digit9', 'digit0', 'minus', 'equal', 'backspace', 'tab', 'key-q', 'key-w',
                    'key-e', 'key-r', 'key-t', 'key-y', 'key-u', 'key-i', 'key-o', 'key-p', 'bracket-left',
                    'bracket-right', 'backslash', 'delete', 'capslock', 'key-a', 'key-s', 'key-d', 'key-f',
                    'key-g', 'key-h', 'key-j', 'key-k', 'key-l', 'semicolon', 'quote', 'enter',  'shift-left',
                    'key-z', 'key-x', 'key-c', 'key-v', 'key-b', 'key-n', 'key-m', 'comma', 'period', 'slash',
                    'arrow-up', 'shift-right', 'ctrl-left', 'win',  'alt-left', 'space', 'alt-right', 'arrow-left',
                    'arrow-down', 'arrow-right', 'ctrl-right',];

const addRows = function (num) {
    for (let i = 0; i < num; i++) {
        let keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard-row');
        keyboard.appendChild(keyboardRow);
    }
};

const addKeys = function (keysNum, rowNum) {
    let allRows = document.querySelectorAll('.keyboard-row');
    for (let i = 0; i < keysNum; i++) {
        let key = document.createElement('div');
        key.classList.add('key');
        allRows[rowNum - 1].appendChild(key);
    }
};

const addLangs = function () {
    let allKeys = document.querySelectorAll('.key');
    allKeys.forEach(e => {
        let langRu = document.createElement('span'),
            langEn = document.createElement('span');
        langRu.classList.add('lang-ru', 'hidden');
        langEn.classList.add('lang-en');
        e.appendChild(langRu);
        e.appendChild(langEn); 
    });
};

const addSymbolsEn = function () {
    let allEng = document.querySelectorAll('.lang-en');

    for (let i = 0; i < allEng.length; i++) {
        let lowKey = document.createElement('span'),
            capsKey = document.createElement('span'),
            shiftKey = document.createElement('span'),
            shiftCapsKey = document.createElement('span');

        lowKey.classList.add('low-key');
        capsKey.classList.add('caps-key');
        capsKey.classList.add('hidden');
        shiftKey.classList.add('shift-key');
        shiftKey.classList.add('hidden');
        shiftCapsKey.classList.add('shift-caps-key');
        shiftCapsKey.classList.add('hidden');

        lowKey.textContent = lowKeysEng[i];
        capsKey.textContent = capsKeysEng[i];
        shiftKey.textContent = shiftKeysEng[i];
        shiftCapsKey.textContent = shiftCapsKeysEng[i];

        allEng[i].appendChild(lowKey);
        allEng[i].appendChild(capsKey);
        allEng[i].appendChild(shiftKey);
        allEng[i].appendChild(shiftCapsKey);
    }
};

const addSymbolsRu = function () {
    let allRus = document.querySelectorAll('.lang-ru');

    for (let i = 0; i < allRus.length; i++) {
        let lowKey = document.createElement('span'),
            capsKey = document.createElement('span'),
            shiftKey = document.createElement('span'),
            shiftCapsKey = document.createElement('span');

        lowKey.classList.add('low-key');
        capsKey.classList.add('caps-key');
        capsKey.classList.add('hidden');
        shiftKey.classList.add('shift-key');
        shiftKey.classList.add('hidden');
        shiftCapsKey.classList.add('shift-caps-key');
        shiftCapsKey.classList.add('hidden');

        lowKey.textContent = lowKeysRus[i];
        capsKey.textContent = capsKeysRus[i];
        shiftKey.textContent = shiftKeysRus[i];
        shiftCapsKey.textContent = shiftCapsKeysRus[i];

        allRus[i].appendChild(lowKey);
        allRus[i].appendChild(capsKey);
        allRus[i].appendChild(shiftKey);
        allRus[i].appendChild(shiftCapsKey);
    }
};

const addKeysStyles = function () {
    let allKeys = document.querySelectorAll('.key');

    for (let i = 0; i < allKeys.length; i++) {
        allKeys[i].classList.add(keysStyles[i]);
    }
}

/* add classes start*/

wrapper.classList.add('wrapper-container');

header.classList.add('header');
header.innerText = 'RSS Virtual Keyboard';

input.classList.add('input-text');

keyboard.classList.add('keyboard');

OSDesc.classList.add('OS-desc');
OSDesc.innerText = 'Клавиатура создана в операционной системе Windows';

light.classList.add('button-light');
light.innerText = 'LIGHT';

/* add classes end*/

body.appendChild(wrapper);
wrapper.appendChild(header);
wrapper.appendChild(input);
wrapper.appendChild(keyboard);
wrapper.appendChild(OSDesc);
wrapper.appendChild(light);
addRows(5);
addKeys(14, 1);
addKeys(15, 2);
addKeys(13, 3);
addKeys(13, 4);
addKeys(9, 5);
addLangs();
addSymbolsEn();
addSymbolsRu();
addKeysStyles();


document.querySelector('.button-light').addEventListener('click', function () {
    document.querySelectorAll('.key').forEach(e => {
        e.classList.toggle('key-light');
    });
    document.querySelector('.button-light').classList.toggle('btn-active');
    document.querySelector('.keyboard').classList.toggle('keyboard-light');
    document.querySelector('body').classList.toggle('body-dakr');
    document.querySelector('.input-text').classList.toggle('input-text-light');
});