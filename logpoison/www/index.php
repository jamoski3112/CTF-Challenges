<?php
$ip = getenv('REMOTE_ADDR');
$userAgent = getenv('HTTP_USER_AGENT');
$msg= "IP:".$ip."\n"."UserAgent:".$userAgent;
writeToLogFile($msg);
function writeToLogFile($msg) {
     $today = date("Y_m_d"); 
     $logfile = $today."_log.log"; 
     $dir = '/tmp';
     $saveLocation=$dir . '/' . $logfile;
     if  (!$handle = @fopen($saveLocation, "a")) {
          exit;
     }
     else {
          if (@fwrite($handle,"$msg\r\n") === FALSE) {
               exit;
          }
   
          @fclose($handle);
     }
}
 
?>
<?php
if (isset($_GET['ajax']))
{
	
include($_GET['ajax']);
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap core CSS -->
   <link href="https://v4-alpha.getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="cover.css" rel="stylesheet">
    <style type="text/css">
    	div {
      background-color: #333333;
    }
    </style>
  </head>

  <body>

    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              
              <nav class="nav nav-masthead">
                <a class="nav-link active" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a type="button" class="nav-link" data-toggle="modal" data-target="#myModal">Contact</a>
              </nav>
            </div>
          </div>
<!-------------------------------MODAL----------------->

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content style=background">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <form action="index.php" method="POST">

        <div class="form-group">

            <label>Name:</label>

            <input type="text" name="name" class="form-control" required>

        </div>

        <div class="form-group">

            <label>Email:</label>

            <input type="email" name="email" class="form-control" required>

        </div>

        <div class="form-group">

            <label>Message:</label>

            <textarea class="form-control" name="message" required></textarea>

        </div>

        <div class="form-group">

            <button class="btn btn-success" name="submit" type="submit">Submit</button>

        </div>

    </form>
      </div>
    </div>

  </div>
</div>


          <div class="inner cover">
            <h1 class="cover-heading">Be Patient</h1>
            <p class="lead">Complaint Center</p>
            
          </div>

          

        </div>

      </div>

    </div>

    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://v4-alpha.getbootstrap.com/dist/js/bootstrap.min.js"></script>
  </body>
<!-- remove ajax parameter -->
</html>
<?php
require('config.php');
if (isset($_POST['submit']))
{
$name=mysqli_real_escape_string($conn,$_POST['name']);
$email=mysqli_real_escape_string($conn,$_POST['email']);
$message=mysqli_real_escape_string($conn,$_POST['message']);

$sql = "INSERT into contactus (name,email,message) VALUES('$name','$email','$message')";

$success = $conn->query($sql);



if (!$success) {

    die("Couldn't enter data: ".$conn->error);

}
else{

echo "<script>alert('Your Request has been received')</script>";
}
}
$conn->close();
?>
<?php
require ('config.php');

  if (!$success) {

    die("Couldn't enter data: ".$conn->error);

}
else{
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'data:','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'xlink:href','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'javascript:','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'onerror=','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'onload=','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'alert','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'confirm','blocked');";
  $replace = $conn->query($replace_name);
  $replace_name= "UPDATE contactus SET name = REPLACE(name,'prompt','blocked');";
  $replace = $conn->query($replace_name);

  $replace_message="UPDATE contactus SET message = REPLACE(message,'data:','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'xlink:href','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'javascript:','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'onerror=','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'onload=','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'alert','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'confirm','blocked');";
  $replace = $conn->query($replace_message);
  $replace_message="UPDATE contactus SET message = REPLACE(message,'prompt','blocked');";
  $replace = $conn->query($replace_message);
echo "<script>console.log('Hack attempt Detected')</script>";
}
$conn->close();
?>
