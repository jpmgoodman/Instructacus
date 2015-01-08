function loadArrays(type, level) {
    if (type == 'addition' && level == '1') {
        console.log('loading up level 1 addition...');
        //load up both arrays correctly
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i + j <= 10) {
                    questionArray[arrayCounter] = i + ' + ' + j;
                    answerArray[arrayCounter] = i + j;
                    arrayCounter++;
                }
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'addition' && level == '2') {
        console.log('loading up level 2 addition...');
        //load up both arrays correctly
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i + j <= 12) {
                    questionArray[arrayCounter] = i + ' + ' + j;
                    answerArray[arrayCounter] = i + j;
                    arrayCounter++;
                }
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'addition' && level == '3') {

        console.log('loading up level 3 addition...');
        //load up both arrays correctly
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i + j <= 15) {
                    questionArray[arrayCounter] = i + ' + ' + j;
                    answerArray[arrayCounter] = i + j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'addition' && level == '4') {

        console.log('loading up level 4 addition...');
        //load up both arrays correctly
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i + j <= 20) {
                    questionArray[arrayCounter] = i + ' + ' + j;
                    answerArray[arrayCounter] = i + j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'subtraction' && level == '1') {
        console.log('loading up level 1 subtraction...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i - j >= 0) {
                    questionArray[arrayCounter] = i + ' - ' + j;
                    answerArray[arrayCounter] = i - j;
                    arrayCounter++;
                }
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'subtraction' && level == '2') {
        console.log('loading up level 2 subtraction...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 12; i++) {
            for (var j = 0; j <= 12; j++) {
                if ((i - j >= 0) && (i - j <= 10) && j <= 10) {
                    questionArray[arrayCounter] = i + ' - ' + j;
                    answerArray[arrayCounter] = i - j;
                    arrayCounter++;
                }
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'subtraction' && level == '3') {
        console.log('loading up level 3 subtraction...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 15; i++) {
            for (var j = 0; j <= 15; j++) {
                if ((i - j >= 0) && (i - j <= 10) && j <= 10) {
                    questionArray[arrayCounter] = i + ' - ' + j;
                    answerArray[arrayCounter] = i - j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);        
    } else if (type == 'subtraction' && level == '4') {
        console.log('loading up level 4 subtraction...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 20; i++) {
            for (var j = 0; j <= 20; j++) {
                if ((i - j >= 0) && (i - j <= 10) && j <= 10) {
                    questionArray[arrayCounter] = i + ' - ' + j;
                    answerArray[arrayCounter] = i - j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'multiplication' && level == '1') {
        console.log('loading up level 1 multiplication...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 5; i++) {
            for (var j = 0; j <= 10; j++) {
                questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00D7) + ' ' + j;
                answerArray[arrayCounter] = i * j;
                arrayCounter++;
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'multiplication' && level == '2') {
        console.log('loading up level 2 multiplication...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i * j <= 50) {
                    questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00D7) + ' ' + j;
                    answerArray[arrayCounter] = i * j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'multiplication' && level == '3') {
        console.log('loading up level 3 multiplication...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00D7) + ' ' + j;
                answerArray[arrayCounter] = i * j;
                arrayCounter++;
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'multiplication' && level == '4') {
        console.log('loading up level 4 multiplication...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 12; i++) {
            for (var j = 0; j <= 12; j++) {
                if (i * j <= 144) {
                    questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00D7) + ' ' + j;
                    answerArray[arrayCounter] = i * j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'division' && level == '1') {
        console.log('loading up level 1 division...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 50; i++) {
            for (var j = 0; j <= 5; j++) {
                if (i % j == 0 && (i / j) <= 10) {
                    questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00F7) + ' ' + j;
                    answerArray[arrayCounter] = i / j;
                    arrayCounter++;
                }
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'division' && level == '2') {
        console.log('loading up level 2 division...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 50; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i % j == 0 && (i / j) <= 10) {
                    questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00F7) + ' ' + j;
                    answerArray[arrayCounter] = i / j;
                    arrayCounter++;
                }
            }
        }
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'division' && level == '3') {
        console.log('loading up level 3 division...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 100; i++) {
            for (var j = 0; j <= 10; j++) {
                if (i % j == 0 && (i / j) <= 10) {
                    questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00F7) + ' ' + j;
                    answerArray[arrayCounter] = i / j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);

    } else if (type == 'division' && level == '4') {
        console.log('loading up level 4 division...');
        questionArray = new Array();
        answerArray = new Array();
        arrayCounter = 0;
        for (var i = 0; i <= 144; i++) {
            for (var j = 0; j <= 12; j++) {
                if (i % j == 0 && (i / j) <= 12) {
                    questionArray[arrayCounter] = i + ' ' + String.fromCharCode(0x00F7) + ' ' + j;
                    answerArray[arrayCounter] = i / j;
                    arrayCounter++;
                }
            }
        }
        trimArray();
        numQs = questionArray.length;
        console.log('loaded. facts in this group: ' + numQs);
    }
}

/*trim arrays to 100 elements*/
function trimArray() {
    while (questionArray.length > 100) {
        index = Math.floor(Math.random() * questionArray.length);
        question = questionArray[index];
        answer = answerArray[index];
        questionArray.splice(index, 1);
        answerArray.splice(index, 1);
    }
}



$(function() {
    var timerOn = false;

    $('#timerCheck').mouseenter(function() {
        if (!timerOn)
            $(this).text('Show timer?');
        else
            $(this).text('Don\'t show timer?');

    });
    $('#timerCheck').mouseleave(function() {
        if (!timerOn)
            $(this).text('Don\'t show timer');
        else
            $(this).text('Show timer');
    });
    $('#timerCheck').click(function() {
        if (!timerOn) {
            $(this).css('border', 'solid red 2px');
            $(this).css('color', 'red');
            $(this).text('Show timer');
            timerOn = true;
        } else {
            $(this).css('border', 'solid black 2px');
            $(this).css('color', 'black');
            $(this).text('Don\'t show timer');
            timerOn = false;
        }
    });

    $('#break').click(function() {
        $('#breakOverlay').show();
        $('#breakWindow').show('drop');
        startBreak();
    });
    $('#continue').click(function() {
        clearInterval(breakInterval);
        $('#breakWindow').hide('drop');
        $('#breakOverlay').hide();
        $('#userInput').focus();
        startTimer();
    })


    //footer actions
    $('.first').click(function() {
        $('#overlay').show();
        $('#terms').show('drop');
        $('#close').show();
    });
    $('#close').click(function() {
        $(this).hide();
        $('#print').hide();
        $('#terms').hide('drop');
        $('#overlay').hide();
    });
    $('#overlay').click(function() {
        $('#close').hide();
        $('#terms').hide('drop');
        $(this).hide();
    });
    $('.second').click(function() {
        $('#overlay').show();
        $('#contact').show('drop');
        $('#close').show();
        $('#name').focus();
    });
    $('#close').click(function() {
        $(this).hide();
        $('#contact').hide('drop');
        $('#overlay').hide();
    });
    $('#overlay').click(function() {
        $('#close').hide();
        $('#contact').hide('drop');
        $(this).hide();
    });



    //fun animation
    crawl();
    counter = 0;
    $('.level').click(function() {
        $('#fun').css('display', 'none');
    });


    studentName = '';
    $('#go').hide();
    $('.level').hide();


    //ADDITION STUFF
    $('#addition').click(function() {
        type = 'Addition';
        $('.level').show();
        $('.operator').hide();
        $('#top').text('Please select your level for addition');
        $('#sub').text('Which do you want to take?');
        $('.level').click(function() {
            levelSelect = $(this).attr('id');
            loadArrays('addition', levelSelect);
            $('.level').hide();
            $('#top').html('Welcome to <span style="color:white">level ' + levelSelect + '</span> addition! ');
            $('#sub').text('You have 5 seconds to answer each question.');
            $('#getReady').show();
            $('#firstName').focus();

            $('#go').show();
            $('#timerCheck').show();
            $('#go').click(function() {
                if ($('#firstName').val().replace(/\s+/g, '') == '' || $('#lastName').val().replace(/\s+/g, '') == '') {
                    alert('Don\'t forget to enter your name!');
                } else {
                    studentName = $('#firstName').val() + ' ' + $('#lastName').val();
                    console.log('student name is : ' + studentName);
                    $('#getReady').hide();
                    $('#timerCheck').hide();
                    $(this).hide();
                    $('#sub').html('Go!');
                    if (timerOn) {
                        $('#timer').show();
                        $('#timerLabel').show();
                    }
                    $('#break').show();
                    runTest();
                }
            });
        });
});

    //SUBTRACTION STUFF
    $('#subtraction').click(function() {
        type = 'Subtraction';
        $('.level').show();

        $('.operator').hide();
        $('#top').text('Please select your level for subtraction');
        $('#sub').text('Which do you want to take?');
        $('.level').click(function() {
            levelSelect = $(this).attr('id');
            loadArrays('subtraction', levelSelect);
            $('.level').hide();
            $('#top').html('Welcome to <span style="color:white">level ' + levelSelect + '</span> subtraction! ');
            $('#sub').text('You have 5 seconds to answer each question.');
            $('#getReady').show();
            $('#firstName').focus();

            $('#go').show();
            $('#timerCheck').show();
            $('#go').click(function() {
                if ($('#firstName').val().replace(/\s+/g, '') == '' || $('#lastName').val().replace(/\s+/g, '') == '') {
                    alert('Don\'t forget to enter your name!');
                } else {
                    studentName = $('#firstName').val() + ' ' + $('#lastName').val();
                    console.log('student name is : ' + studentName);
                    $('#getReady').hide();
                    $('#timerCheck').hide();
                    $(this).hide();
                    $('#sub').html('Go!');
                    if (timerOn) {
                        $('#timer').show();
                        $('#timerLabel').show();
                    }
                    $('#break').show();
                    runTest();
                }
            });
        });
});

    //MULTIPLICATION STUFF
    $('#multiplication').click(function() {
        type = 'Multiplication';
        $('.level').show();
        $('.operator').hide();
        $('#top').text('Please select your level for multiplication');
        $('#sub').text('Which do you want to take?');
        $('.level').click(function() {
            levelSelect = $(this).attr('id');
            loadArrays('multiplication', levelSelect);
            $('.level').hide();
            $('#top').html('Welcome to <span style="color:white">level ' + levelSelect + '</span> multiplication! ');
            $('#sub').text('You have 5 seconds to answer each question.');
            $('#getReady').show();
            $('#firstName').focus();

            $('#go').show();
            $('#timerCheck').show();
            $('#go').click(function() {
                if ($('#firstName').val().replace(/\s+/g, '') == '' || $('#lastName').val().replace(/\s+/g, '') == '') {
                    alert('Don\'t forget to enter your full name!');
                } else {
                    studentName = $('#firstName').val() + ' ' + $('#lastName').val();
                    console.log('student name is : ' + studentName);
                    $('#getReady').hide();
                    $('#timerCheck').hide();
                    $(this).hide();
                    $('#sub').html('Go!');
                    if (timerOn) {
                        $('#timer').show();
                        $('#timerLabel').show();
                    }
                    $('#break').show();
                    runTest();
                }
            });
        });
});

    //DIVISION STUFF
    $('#division').click(function() {
        type = 'Division';
        $('.level').show();
        $('.operator').hide();
        $('#top').text('Please select your level for division');
        $('#sub').text('Which do you want to take?');
        $('.level').click(function() {
            levelSelect = $(this).attr('id');
            loadArrays('division', levelSelect);
            $('.level').hide();
            $('#top').html('Welcome to <span style="color:white">level ' + levelSelect + '</span> division! ');
            $('#sub').text('You have 5 seconds to answer each question.');
            $('#getReady').show();
            $('#firstName').focus();

            $('#go').show();
            $('#timerCheck').show();
            $('#go').click(function() {
                if ($('#firstName').val().replace(/\s+/g, '') == '' || $('#lastName').val().replace(/\s+/g, '') == '') {
                    alert('Don\'t forget to enter your full name!');
                } else {
                    studentName = $('#firstName').val() + ' ' + $('#lastName').val();
                    console.log('student name is : ' + studentName);
                    $('#getReady').hide();
                    $('#timerCheck').hide();
                    $(this).hide();
                    $('#sub').html('Go!');
                    if (timerOn) {
                        $('#timer').show();
                        $('#timerLabel').show();
                    }
                    $('#break').show();
                    runTest();
                }
            });
        });
});


$("#form").submit(function(e) {
    e.preventDefault();
    document.getElementById('userInput').value = "";
});
$('#submitName').submit(function(e) {
    e.preventDefault();
});
});

function runTest() {
    autoSet = false;
    isDone = false;


    correctAnswers = 0;
    incorrectAnswers = 0;

    index = Math.floor(Math.random() * questionArray.length);
    question = questionArray[index];
    answer = answerArray[index];

    $('#test').show();
    $('#question').text(question + " = ");

    questionArray.splice(index, 1);
    answerArray.splice(index, 1);

    startTimer();
}

function checkifCorrect() {
    window.clearTimeout(firstTimer);
    if (typeof secondTimer != 'undefined')
        window.clearTimeout(secondTimer);
    if (typeof thirdTimer != 'undefined')
        window.clearTimeout(thirdTimer);
    if (typeof fourthTimer != 'undefined')
        window.clearTimeout(fourthTimer);
    if (typeof fifthTimer != 'undefined')
        window.clearTimeout(fifthTimer);

    if (!autoSet)
        userAttempt = $('#userInput').val();



    if (questionArray.length == 0) {
        isDone = true;
        if (userAttempt != '' && userAttempt == answer) {
            correctAnswers++;
            timeFinished = calcTimeFinished();
        } else {
            incorrectAnswers++;
            if (userAttempt == '')
                userAttempt = '(ran out of time)';
            $('#reportBox').append('Question: ' + question + '. Given answer: ' + userAttempt + '<br>');
            timeFinished = calcTimeFinished();
        }
        $('#test').hide();
        $('#timer').hide();
        $('#timerLabel').hide();
        $('#done').show();
        $('#sub').html('Done!');
        $('#break').hide();

        $('#reportBox').prepend('TESTING DETAILS <br> <div id="testDetails"></div> <br><span style="color:red">INCORRECT ANSWERS</span><br><br>')
        $('#reportBox').prepend('Time finished: ' + timeFinished + '<br><br>');
        $('#reportBox').prepend('Student name: ' + studentName + '<br>');
        $('#reportBox').prepend('<b>' + type + ' Sorting Exercise Report, Level ' + levelSelect + '</b><br><br>');
        $('#reportBox').append('<br><div id="split2"><br>Correct answers: ' + correctAnswers + '<br>Incorrect answers: ' + incorrectAnswers + '<br><br><span style="color:red">Percent correct: ' + ((correctAnswers / (correctAnswers + incorrectAnswers)) * 100).toFixed(2) + '%</span><br><br></div>');

        $('#reportBox').append('<br><br>Report generated by Instructacus. &#169 2014 All rights reserved.');
        $('#click4report').click(function() {
            $('#overlay').show();
            $('#reportBox').show('drop');
            $('#print').show();
            $('#close').show();
        });

        $('#close').click(function() {
            $(this).hide();
            $('#print').hide();
            $('#reportBox').hide('drop');
            $('#overlay').hide();
        });
        $('#overlay').click(function() {
            $('#close').hide();
            $('#print').hide();
            $('#reportBox').hide('drop');
            $(this).hide();
        });
    } else {
        if (userAttempt != '' && userAttempt == answer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
            if (userAttempt == '')
                userAttempt = '(none)';
            $('#reportBox').append('Question: ' + question + '. Given answer: ' + userAttempt + '<br>');
        }


        index = Math.floor(Math.random() * questionArray.length);
        question = questionArray[index];
        answer = answerArray[index];

        $('#question').text(question + " = ");

        questionArray.splice(index, 1);
        answerArray.splice(index, 1);
    }
    startTimer();
}

function startBreak() {
    /*pause current question timer*/
    if (typeof firstTimer != 'undefined')
        window.clearTimeout(firstTimer);
    if (typeof secondTimer != 'undefined')
        window.clearTimeout(secondTimer);
    if (typeof thirdTimer != 'undefined')
        window.clearTimeout(thirdTimer);
    if (typeof fourthTimer != 'undefined')
        window.clearTimeout(fourthTimer);
    if (typeof fifthTimer != 'undefined')
        window.clearTimeout(fifthTimer);

    $('#break').hide();
    breakatQ = questionArray.length;


    /*start break timer*/
    breakSeconds = 30;
    $('#breakTimer').text(breakSeconds);
    breakInterval = setInterval(function() {
        $('#breakTimer').text(breakSeconds - 1);
        breakSeconds--;
        if (breakSeconds == 0) {
            clearInterval(breakInterval);
            $('#breakWindow').hide('drop');
            $('#breakOverlay').hide();
            $('#userInput').focus();
            startTimer();
        }
    }, 1000);
}
    //submit in 5 seconds if user has not submitted
    function startTimer() {
        $('#timer').html(5);
        firstTimer = setTimeout(function() {
            $('#timer').html(4);
            fourSecs();
        }, 1000);
    }

    function fourSecs() {
        secondTimer = setTimeout(function() {
            $('#timer').html(3);
            threeSecs();
        }, 1000);
    }

    function threeSecs() {
        thirdTimer = setTimeout(function() {
            $('#timer').html(2);
            twoSecs();
        }, 1000)
    }

    function twoSecs() {
        fourthTimer = setTimeout(function() {
            $('#timer').html(1)
            oneSec();
        }, 1000);
    }

    function oneSec() {
        fifthTimer = setTimeout(function() {
            $('#timer').html(0)
            if (isDone != true) {
                userAttempt = $('#userInput').val();
                autoSet = true;
                $('#form').submit();
                autoSet = false;
            }
        }, 1000);
    }


    function crawl() {
        $('#1').animate({
            'margin-left': '+=500'
        }, 1000);
        setTimeout(function() {
            $('#2').animate({
                'margin-left': '+=500'
            }, 1000);
            setTimeout(function() {
                $('#3').animate({
                    'margin-left': '+=500'
                }, 1000);
                setTimeout(function() {
                    $('#4').animate({
                        'margin-left': '+=500'
                    }, 1000);
                    setTimeout(function() {
                        $('#5').animate({
                            'margin-left': '+=500'
                        }, 1000);
                        setTimeout(function() {
                            if (counter <= 3) {
                                crawl();
                                counter++;
                            }
                        }, 1000)
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    function calcTimeFinished() {
        var date = new Date();
    //var todaysdate= (date.getMonth()+ 1) + '/' + date.getDate() + '/' + date.getFullYear();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var dateString = hour + ':' + minutes + ':' + seconds + ' on ' + month + '/' + day + '/' + year;
    return dateString;

}