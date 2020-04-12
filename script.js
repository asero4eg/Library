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

/*****************************Book settings window*******************************************/

function showSetting(blockNumber) {
    var currentBlock = document.getElementById(blockNumber),
        currentBookTitle = currentBlock.getElementsByClassName('bookName')[0].innerText,
        currentBookAuthor = currentBlock.getElementsByClassName('bookAuthor')[0].innerText,
        currentFriendName = currentBlock.getElementsByClassName('user-name')[0].innerText,
        currentDate = currentBlock.getElementsByClassName('rent-date')[0].innerText;;
    document.getElementById('settingBookTitle').innerText = currentBookTitle;
    document.getElementById('settingBookAuthor').innerText = currentBookAuthor;
    document.getElementById('settingFriendName').innerText = currentFriendName;
    document.getElementById('settingDate').innerText = currentDate;
    settingsPopWindow.style.display = 'flex';
    console.log('show settigs work', currentBlock);
    settingSaveButton.addEventListener("click", checkBox)

    function checkBox() {
        if (check.checked == true) {
            document.getElementById('content').removeChild(currentBlock);
            totalBooks.innerText = document.getElementsByClassName('counter').length;
            alert('book returned');
            hideSettings();
            numerationCheck()
        } else {
            // hideSettings()
        }

    }
}

function hideSettings() {
    settingsPopWindow.style.display = 'none';
    console.log('close work');

}

/*****************************Animations*******************************************/

function checkAnim() {
    var checkText = document.getElementsByClassName('check-text')[0];
    if (check.checked == true) {
        checkText.style.cssText = 'transition:0.5s; color:green'
    } else {
        checkText.style.cssText = 'transition:0.5s; color:gray'
    }
}


/***************************Book block creation***************************************/

var generator = 1;

function createBlock() {

    var block = document.createElement('div'),
        bookTitle = document.getElementById('addBookTitle').value,
        bookAuthor = document.getElementById('addBookAuthor').value,
        friendName = document.getElementById('addFriendName').value,
        period=document.getElementById('addDate').value,
        counterHtml = document.getElementsByClassName('counter').length;

    if (bookTitle == "" && bookAuthor == "" && friendName == "") {
        alert('Fill all values')
    } else {
        totalBooks.innerText = ++counterHtml;
        block.setAttribute('class', `book-block`);
        block.setAttribute('id', `block${generator}`)
        block.innerHTML = `<div class="block-number"><span class="counter">${counterHtml++}</span></div>
	<div class="book-info">
		<div class="book-name">
			<span class="bookName">${bookTitle}</span>
		</div>
		<div class="book-author">
			<span class="bookAuthor">${bookAuthor}</span>
		</div>
	</div>
	<div class="book-user">
		<div class="block-options settingsButton" onclick="showSetting('block${generator}')"><span class="icon-cog"></span></div>
		<div class="user-info">
			<div class="user-name">${friendName}</div>
		</div>
		<div class="rent-date">${period}</div>
    </div>`;
        document.getElementById('content').appendChild(block);
        generator++;
        document.getElementById('addBookTitle').value = '';
        document.getElementById('addBookAuthor').value = '';
        document.getElementById('addFriendName').value = '';
        hidePop();
    }

}

/*****************************Show & hide book creating window*******************************************/

function showPop() {
    bookAddWindow.style.display = 'flex';
    console.log('Window shown')

}

function hidePop() {
    bookAddWindow.style.display = 'none';
    console.log('Window closed');

}

/*****************************Date picker*******************************************/

$(function() {
    $('#addDate').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });


function numerationCheck() {
    var startNumber = 1,
        counterHtml = document.getElementsByClassName('counter')

    for (var i = 0; i <= counterHtml.length; i++) {
        document.getElementsByClassName('counter')[i].innerText = startNumber++;
    }

}

/*****************************Function calls******************************************/

check.addEventListener("click", checkAnim)
showButton.addEventListener("click", showPop);
addCancel.addEventListener("click", hidePop);
newBookSave.addEventListener('click', createBlock)