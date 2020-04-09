'use strict'


var showButton = document.getElementById('showButton'),
    bookAddWindow = document.getElementById('addPopWindow'),
    settingsPopWindow = document.getElementById('setPopWindow'),
    settingsButton = document.getElementsByClassName('settingsButton'),
    settingSaveButton = document.getElementById('settingSaveButton'),
    addCancel = document.getElementById('addCancel'),
    editCancel = document.getElementById('editCancel'),
    newBookSave = document.getElementById('saveBook'),
    totalBooks = document.getElementById('bookNumber'),
    check = document.getElementById('check');

/*****************************Show & hide book creating window*******************************************/

function showPop() {
    bookAddWindow.style.display = 'flex';
    console.log('Window shown')

}

function hidePop() {
    bookAddWindow.style.display = 'none';
    console.log('Window closed')

}

/*****************************Book settings window*******************************************/

function showSetting(blockNumber) {
    var currentBlock = document.getElementById(blockNumber),
        currentBookTitle = currentBlock.getElementsByClassName('bookName')[0].innerText,
        currentBookAuthor = currentBlock.getElementsByClassName('bookAuthor')[0].innerText,
        currentFriendName = currentBlock.getElementsByClassName('user-name')[0].innerText;
    document.getElementById('settingBookTitle').innerText = currentBookTitle;
    document.getElementById('settingBookAuthor').innerText = currentBookAuthor;
    document.getElementById('settingFriendName').innerText = currentFriendName;
    settingsPopWindow.style.display = 'flex';
    console.log('show settigs work', currentBlock);
    settingSaveButton.addEventListener("click", checkBox)

    function checkBox() {
        if (check.checked == true) {
            document.getElementById('content').removeChild(currentBlock);
            alert('book returned');
            hideSettings()
        } else {
            hideSettings()
        }

    }
}

function hideSettings() {
    settingsPopWindow.style.display = 'none';
    console.log('close work')

}

/*****************************Animations*******************************************/

function checkAnim() {
    var checkText = document.getElementsByClassName('check-text')[0];
    if (check.checked == true) {
        checkText.style.cssText = 'transition:1s; color:green'
    } else {
        checkText.style.cssText = 'transition:1s; color:white'
    }
}


/***************************Book block creation***************************************/

var blockCounter = 1,
    period = ':)';

function createBlock() {

    var block = document.createElement('div'),
        bookTitle = document.getElementById('addBookTitle').value,
        bookAuthor = document.getElementById('addBookAuthor').value,
        friendName = document.getElementById('addFriendName').value;

    if (bookTitle == "" && bookAuthor == "" && friendName == "") {
        alert('Fill all values')
    } else {
        totalBooks.innerText = blockCounter;
        block.setAttribute('class', `book-block`);
        block.setAttribute('id', `block${blockCounter}`)
        block.innerHTML = `<div class="block-number"><span class="counter">${blockCounter}</span></div>
	<div class="book-info">
		<div class="book-name">
			<span class="bookName">${bookTitle}</span>
		</div>
		<div class="book-author">
			<span class="bookAuthor">by ${bookAuthor}</span>
		</div>
	</div>
	<div class="book-user">
		<div class="block-options settingsButton" onclick="showSetting('block${blockCounter}')"></div>
		<div class="user-info">
			<div class="user-name">${friendName}</div>
		</div>
		<div class="rent-date">here must be date${period}</div>
    </div>`;
        document.getElementById('content').appendChild(block);
        ++blockCounter;
        hidePop();
    }

}

/*****************************Function calls******************************************/

check.addEventListener("click", checkAnim)
showButton.addEventListener("click", showPop);
addCancel.addEventListener("click", hidePop);
newBookSave.addEventListener('click', createBlock)