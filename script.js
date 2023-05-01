const body = document.querySelector('body'),
      wrapper = document.createElement('div'),
      header = document.createElement('h1'),
      input = document.createElement('textarea'),
      keyboard = document.createElement('div'),
      OSDesc = document.createElement('h3'),
      light = document.createElement('div');

let lang = 'en';


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


const keysStyles = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
                    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW',
                    'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
                    'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF',
                    'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'keyL', 'Semicolon', 'Quote', 'Enter',  'ShiftLeft',
                    'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash',
                    'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft',  'AltLeft', 'Space', 'AltRight', 'ArrowLeft',
                    'ArrowDown', 'ArrowRight', 'ControlRight'];

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
input.focus();

keyboard.classList.add('keyboard');

OSDesc.classList.add('OS-desc');
OSDesc.innerText = 'Клавиатура создана в операционной системе Windows \n Смена языка LeftCtrl + LeftAlt';

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


document.querySelectorAll('.key').forEach((elem) => {
    elem.addEventListener('mousedown', () => {

        if (elem.className !== 'key CapsLock') {
            elem.classList.add('active');
        }

        console.log(elem.className);
        
        let i = getCaret(textarea);


/*         if (lang == 'en') {
            textarea.value = textarea.value.slice(0, i) + elem.children[1].innerText  + textarea.value.slice(i);
            textarea.setSelectionRange(i+1, i+1);
        } else {
            textarea.value = textarea.value.slice(0, i) + elem.children[0].innerText  + textarea.value.slice(i);
            textarea.setSelectionRange(i+1, i+1);
        } */

        

        if (lang === 'en' && elem.className !== 'key Tab active' && elem.className !== 'key Delete active' &&
            elem.className !== 'key Backspace active' && elem.className !== 'key Enter active' && elem.className !== 'key ShiftLeft active' &&
            elem.className !== 'key ArrowUp active' && elem.className !== 'key ShiftRight active' && elem.className !== 'key ControlLeft active' &&
            elem.className !== 'key ControlLeft active' && elem.className !== 'key AltLeft active' && elem.className !== 'key Space active' &&
            elem.className !== 'key AltRight active' && elem.className !== 'key ArrowLeft active' && elem.className !== 'key ArrowDown active' &&
            elem.className !== 'key ArrowRight active' && elem.className !== 'key CapsLock active' && elem.className !== 'key CapsLock') {
                textarea.value = textarea.value.slice(0, i) + elem.children[1].innerText  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (lang === 'ru' && elem.className !== 'key Tab active' && elem.className !== 'key Delete active' &&
            elem.className !== 'key Backspace active' && elem.className !== 'key Enter active' && elem.className !== 'key ShiftLeft active' &&
            elem.className !== 'key ArrowUp active' && elem.className !== 'key ShiftRight active' && elem.className !== 'key ControlLeft active' &&
            elem.className !== 'key ControlLeft active' && elem.className !== 'key AltLeft active' && elem.className !== 'key Space active' &&
            elem.className !== 'key AltRight active' && elem.className !== 'key ArrowLeft active' && elem.className !== 'key ArrowDown active' &&
            elem.className !== 'key ArrowRight active' && elem.className !== 'key CapsLock active' && elem.className !== 'key CapsLock') {
                textarea.value = textarea.value.slice(0, i) + elem.children[0].innerText  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key Tab active') {
                textarea.value = textarea.value.slice(0, i) + '  '  + textarea.value.slice(i);
                textarea.setSelectionRange(i+2, i+2);
            } else if (elem.className == 'key Space active') {
                textarea.value = textarea.value.slice(0, i) + ' '  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key Backspace active') {
                if (i != 0) {
                    textarea.value = textarea.value.slice(0, i - 1) + textarea.value.slice(i);
                    textarea.setSelectionRange(i-1, i-1);
                }
            } else if (elem.className == 'key Enter active') {
                textarea.value = textarea.value.slice(0, i) + '\n'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key ArrowLeft active') {
                textarea.value = textarea.value.slice(0, i) + '◄'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key ArrowRight active') {
                textarea.value = textarea.value.slice(0, i) + '►'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key ArrowUp active') {
                textarea.value = textarea.value.slice(0, i) + '▲'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key ArrowDown active') {
                textarea.value = textarea.value.slice(0, i) + '▼' + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (elem.className == 'key Delete active') {
                textarea.value = textarea.value.slice(0, i) + textarea.value.slice(i + 1);
                textarea.setSelectionRange(i, i);
            }


   

           if (elem.className == 'key CapsLock active') {
               for (let i = 0; i < capsKeys.length; i++) {
                lowKeys[i].classList.remove('hidden');
                capsKeys[i].classList.add('hidden');
                shiftKeys[i].classList.add('hidden');
                shiftCapsKeys[i].classList.add('hidden');
               }
               elem.classList.remove('active');
           } else if (elem.className == 'key CapsLock') {
               for (let i = 0; i < capsKeys.length; i++) {
                   lowKeys[i].classList.add('hidden');
                   capsKeys[i].classList.remove('hidden');
                   shiftKeys[i].classList.add('hidden');
                   shiftCapsKeys[i].classList.add('hidden');
               }
               elem.classList.add('active');
           }


    });
    elem.addEventListener('mouseup', () => {
        if (elem.className !== 'key CapsLock active') {
            elem.classList.remove('active');
        }

    });
});

/* document.querySelectorAll('.key').forEach((elem) => {
    if (elem == document.onkeydown.code)
}); */

function getCaret(el) { 
    if (el.selectionStart) { 
      return el.selectionStart; 
    } else if (document.selection) { 
      el.focus(); 
   
      var r = document.selection.createRange(); 
      if (r == null) { 
        return 0; 
      } 
   
      var re = el.createTextRange(), 
          rc = re.duplicate(); 
      re.moveToBookmark(r.getBookmark()); 
      rc.setEndPoint('EndToStart', re); 
   
      return rc.text.length; 
    }  
    return 0; 
  }


let rightShift = document.querySelector('.ShiftRight'),
    leftShift = document.querySelector('.ShiftLeft'),
    capslock = document.querySelector('.CapsLock');

let lowKeys = document.querySelectorAll('.low-key'),
    shiftKeys = document.querySelectorAll('.shift-key'),
    capsKeys = document.querySelectorAll('.caps-key'),
    shiftCapsKeys = document.querySelectorAll('.shift-caps-key');

let textarea = document.querySelector('.input-text');

let ruLang = document.querySelectorAll('.lang-ru'),
    enLang = document.querySelectorAll('.lang-en');


document.onkeydown = function(element) {
    document.querySelectorAll('.key').forEach((elem) => {
        let i = getCaret(textarea);
        if (elem.classList.contains(element.code) && elem != capslock) {
            elem.classList.add('active');
            if (lang === 'en' && element.code != 'Tab' && element.code != 'Delete' &&
            element.code != 'Backspace' && element.code != 'Enter' && element.code != 'ShiftLeft' &&
            element.code != 'ArrowUp' && element.code != 'ShiftRight' && element.code != 'ControlLeft' &&
            element.code != 'ControlRight' && element.code != 'AltLeft' && element.code != 'Space' &&
            element.code != 'AltRight' && element.code != 'ArrowLeft' && element.code != 'ArrowDown' &&
            element.code != 'ArrowRight') {
                textarea.value = textarea.value.slice(0, i) + elem.children[1].innerText  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (lang === 'ru' && element.code != 'Tab' && element.code != 'Delete' &&
            element.code != 'Backspace' && element.code != 'Enter' && element.code != 'ShiftLeft' &&
            element.code != 'ArrowUp' && element.code != 'ShiftRight' && element.code != 'ControlLeft' &&
            element.code != 'ControlRight' && element.code != 'AltLeft' && element.code != 'Space' &&
            element.code != 'AltRight' && element.code != 'ArrowLeft' && element.code != 'ArrowDown' &&
            element.code != 'ArrowRight') {
                textarea.value = textarea.value.slice(0, i) + elem.children[0].innerText  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'Tab') {
                textarea.value = textarea.value.slice(0, i) + '  '  + textarea.value.slice(i);
                textarea.setSelectionRange(i+2, i+2);
            } else if (element.code == 'Space') {
                textarea.value = textarea.value.slice(0, i) + ' '  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'Backspace') {
                if (i != 0) {
                    textarea.value = textarea.value.slice(0, i - 1) + textarea.value.slice(i);
                    textarea.setSelectionRange(i-1, i-1);
                }
            } else if (element.code == 'Enter') {
                textarea.value = textarea.value.slice(0, i) + '\n'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'ArrowLeft') {
                textarea.value = textarea.value.slice(0, i) + '◄'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'ArrowRight') {
                textarea.value = textarea.value.slice(0, i) + '►'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'ArrowUp') {
                textarea.value = textarea.value.slice(0, i) + '▲'  + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'ArrowDown') {
                textarea.value = textarea.value.slice(0, i) + '▼' + textarea.value.slice(i);
                textarea.setSelectionRange(i+1, i+1);
            } else if (element.code == 'Delete') {
                textarea.value = textarea.value.slice(0, i) + textarea.value.slice(i + 1);
                textarea.setSelectionRange(i, i);
            }
        }
    });

    if ((element.code == 'ShiftLeft' && !capslock.classList.contains('active')) || (element.code == 'ShiftRight' &&
         !capslock.classList.contains('active'))) {
        for (let i = 0; i < lowKeys.length; i++) {
            lowKeys[i].classList.add('hidden');
            shiftKeys[i].classList.remove('hidden');
        }
    } else if ((element.code == 'ShiftLeft' && capslock.classList.contains('active')) || (element.code == 'ShiftRight' &&
                capslock.classList.contains('active'))) {
        for (let i = 0; i < shiftCapsKeys.length; i++) {
            capsKeys[i].classList.add('hidden');
            shiftCapsKeys[i].classList.remove('hidden');
        }
    }

    if (element.code == 'CapsLock') {
        capslock.classList.toggle('active');
        if (capslock.classList.contains('active') && !leftShift.classList.contains('active') && !rightShift.classList.contains('active')) {
            for (let i = 0; i < capsKeys.length; i++) {
                lowKeys[i].classList.add('hidden');
                capsKeys[i].classList.remove('hidden');
            }
        } else if (!capslock.classList.contains('active') && !leftShift.classList.contains('active') && !rightShift.classList.contains('active')) {
            for (let i = 0; i < capsKeys.length; i++) {
                lowKeys[i].classList.remove('hidden');
                capsKeys[i].classList.add('hidden');
            }
        } else if (capslock.classList.contains('active') && (leftShift.classList.contains('active') || rightShift.classList.contains('active'))) {
            for (let i = 0; i < capsKeys.length; i++) {
                lowKeys[i].classList.add('hidden');
                capsKeys[i].classList.add('hidden');
                shiftKeys[i].classList.add('hidden');
                shiftCapsKeys[i].classList.remove('hidden');
            }
        } else if (!capslock.classList.contains('active') && (leftShift.classList.contains('active') || rightShift.classList.contains('active'))) {
            for (let i = 0; i < capsKeys.length; i++) {
                capsKeys[i].classList.add('hidden');
                shiftKeys[i].classList.remove('hidden');
                shiftCapsKeys[i].classList.add('hidden');
            }
        }
    }

    if (element.code == 'AltLeft' && document.querySelector('.ControlLeft').classList.contains('active') && lang == 'en') {

        for (let i = 0; i < ruLang.length; i++) {
            ruLang[i].classList.remove('hidden');
            enLang[i].classList.add('hidden');
        }
        lang = 'ru';

    } else if (element.code == 'AltLeft' && document.querySelector('.ControlLeft').classList.contains('active') && lang == 'ru') {

        for (let i = 0; i < enLang.length; i++) {
            enLang[i].classList.remove('hidden');
            ruLang[i].classList.add('hidden');
        }
        lang = 'en';

    }

};

document.onkeyup = function(element) {
    document.querySelectorAll('.key').forEach((elem) => {
        if (elem.classList.contains(element.code) && elem != capslock) {
            elem.classList.remove('active');
        }
    });

    if ((element.code == 'ShiftLeft' && !capslock.classList.contains('active')) || (element.code == 'ShiftRight' && !capslock.classList.contains('active'))) {
        for (let i = 0; i < lowKeys.length; i++) {
            lowKeys[i].classList.remove('hidden');
            shiftKeys[i].classList.add('hidden');
        }
    } else if ((element.code == 'ShiftLeft' && capslock.classList.contains('active')) || (element.code == 'ShiftRight' && capslock.classList.contains('active'))) {
        for (let i = 0; i < shiftCapsKeys.length; i++) {
            capsKeys[i].classList.remove('hidden');
            shiftCapsKeys[i].classList.add('hidden');
        }
    }



};

/* var focusableElements = document.querySelectorAll('div, span');

for (var i = 0; i < focusableElements.length; i++) {
  focusableElements[i].addEventListener('focus', function(event) {
    event.preventDefault();
    document.querySelector('.input-text').focus();
  });
} */


/* document.addEventListener('click', function(elem) {
    for (let i = 0; i < keysStyles.length; i++) {
        if (elem.srcElement.classList.contains(keysStyles[i])) {
            document.querySelector('.input-text').insertAdjacentText('beforeend', keysStyles[i]);
        }
    }
}); */


/* const enterInput = function (key) {

}; */



document.addEventListener('keydown', function(event) {
    event.preventDefault();
});

document.addEventListener('click', function(e) {
    console.log(e.target.classList[1]);
});

/* document.querySelector('button').addEventListener('click', function() {
    var textarea = document.querySelector('.input-text');
    textarea.value += 'Добавленный текст';
}); */