<?php 
if ($_POST["email"]<>'') { 
    $ToEmail = 'jpmg@princeton.edu'; 
    $EmailSubject = 'Instructacus Feedback'; 
    $mailheader = "From: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
    $MESSAGE_BODY = "Name: ".$_POST["name"]."\n"; 
    $MESSAGE_BODY .= "Email: ".$_POST["email"]."\n\n"; 
    $MESSAGE_BODY .= "Comment: ".nl2br($_POST["comment"]).""; 
    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
?> 
Thanks for your message! <br> We will respond to your email shortly.
<?php 
} else { 
?>
<h1>Let us know how we're doing.</h1> 
<h4>Questions? Comments? Concerns? We'd love to hear from you.</h4>
<form action="test.php" method="post">
<table width="50%" border="0" cellspacing="3" cellpadding="0">
<tr>
<td><input name="name" type="text" id="name" size="32" placeholder="Your name" required></td>
</tr>
<tr>
<td><input name="email" type="text" id="email" size="32" placeholder="Your email address" required></td>
</tr>
<tr>
<td><textarea name="comment" cols="45" rows="6" id="comment" class="bodytext" placeholder="Write a message..." required></textarea></td>
</tr>
<tr>
<td valign="top"><input type="submit" name="Submit" value="Send"></td>
</tr>
</table>
</form> 
<?php 
}; 
?>