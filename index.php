<!DOCTYPE HTML>
<html>

<head>
    <title>Instructacus</title>
    <link rel="stylesheet" type="text/css" href="css/swift.css">
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
    <script src="js/swift.js"></script>
    <script type="text/javascript" src="js/jQuery.print.js"></script>
    <link rel="icon" type="image/ico" href="logoSmall.png" />

</head>

<body>
    <div id="overlay"></div>
    <div id="breakOverlay"></div>
    <div id="close">&#10006</div>
    <input type="button" id="print" value="Print" onclick="$('#reportBox').print()" />

    <div id="customHeader">
        <h1 id="top">Math Facts Sorting Exercises</h1>
        <h2 id="sub">Please select a sorting exercise.</h2>
        <a href="/"><img class="logoLarge" src="logoLarge.svg" alt="logo"></a> 
    </div>

    <div class="wrapper">
        <button id="addition" class="button operator">Addition
            <br>+</button>
        <button id="subtraction" class="button operator">Subtraction
            <br>&#8722</button>
        <button id="multiplication" class="button operator">Multiplication
        	<br>&times</button>
       	<button id="division" class="button operator">Division
       		<br>&divide</button>
        <!-- animation -->
        <div id="fun">
            <ul id="funList">
                <li id="1">1</li>
                <li id="2">2</li>
                <li id="3">3</li>
                <li id="4">4</li>
                <li id="5">5</li>
            </ul>
        </div>

        <!--levels-->
        <button id="1" class="button level">Level 1</button>
        <button id="2" class="button level">Level 2</button>
        <button id="3" class="button level">Level 3</button>
        <button id="4" class="button level">Level 4</button>

        <div id="getReady">
        <input id="firstName" autocomplete="off" placeholder="first name" required/>
        <input id="lastName" autocomplete="off" placeholder="last name" required />
                <button id="go" class="button">Go!</button>
        </div>


        <div id="timerCheck">Don't show timer</div>
        <div id="break">Take a break</div>
        <div id="breakWindow">
            <h1>Take a little time to relax.</h1>
            <h2>You're almost done. Keep going!</h2>
            <div id="continue">Continue</div>
            <div id="end" onclick="window.location='/'">End</div>
            <div id="breakTimer"></div>
        </div>
        <div id="test">
            <div id="question">4 + 3 =</div>
            <form id="form" autocomplete="off" onsubmit="checkifCorrect()">
                <input id="userInput" type="text" min='1' name="yourAnswer" autofocus required>
            </form>
        </div>
        <div id="done">
            <span style="color:green; font-size:5em">Done!</span>
            <br>
            <br>
            <span id='click4report'>View report</span>
        </div>

        <div id="reportBox"></div>
        <div id="terms">
            <h2>Privacy & Terms of Agreement</h2>
            <br>
            <br> The Bedford Central School District, Bedford, NY, has special permission to pilot The Math Sorting Exercises Game (<i>&#169 2014 Instructacus</i>), a web application designed specifically for the students of the BCSD. Unapproved distribution of this web application will be considered an infringement of copyright. Use of this website is an acknowledgment of these terms of agreement.
        </div>

        <div id="contact">

            <?php if ($_POST[ "email"]<>'') { $ToEmail = 'jpmg@princeton.edu'; $EmailSubject = 'Instructacus Feedback'; $mailheader = "From: ".$_POST["email"]."\r\n"; $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; $MESSAGE_BODY = "Name: ".$_POST["name"]."\n"; $MESSAGE_BODY .= "Email: ".$_POST["email"]."\n\n"; $MESSAGE_BODY .= "Comment: ".nl2br($_POST["comment"]).""; mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); echo '
            <script>
                window.location = "/";
            </script>'; } else { ?>
            <h2>Let us know how we're doing.</h2>
            <h4>Questions? Comments? Concerns? We'd love to hear from you.</h4>
            <form action="/" method="post">
                <table width="50%" border="0" cellspacing="3" cellpadding="0">
                    <tr>
                        <td align="middle">
                            <input class="contactForm" name="name" type="text" id="name" size="32" placeholder="Your name" required>
                        </td>
                    </tr>
                    <tr>
                        <td align="middle">
                            <input class="contactForm" name="email" type="text" id="email" size="32" placeholder="Your email address" required>
                        </td>
                    </tr>
                    <tr>
                        <td align="middle">
                            <textarea class="contactForm" name="comment" cols="45" rows="6" id="comment" class="bodytext" placeholder="Write a comment..." required></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" id="send" name="Submit" value="Send">
                        </td>
                    </tr>
                </table>
            </form>
            <?php }; ?>
        </div>

        <input type="button" value="Home" id="goHome" onClick="window.location.reload()">
        <div id="timer">
        </div>
    </div>
    <footer>
        <ul>
            <li class="first">Privacy & Terms</li>
            <li class="second">Contact Us</li>
            <li class="third">&#169 2014 Instructacus</li>
        </ul>
    </footer>
</body>

</html>