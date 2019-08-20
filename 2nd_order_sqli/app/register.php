
<!doctype html>
<html lang="en">
  <head>
    <title>VictimCorp Register</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="css/register.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
  <body>
  <?php
require('config.php');
if(isset($_POST['submit']))
{
  $username=mysqli_real_escape_string($conn,$_POST['username']);
  $password=mysqli_real_escape_string($conn,$_POST['password']);
  $email=mysqli_real_escape_string($conn,$_POST['email']);
  $sql_u = "SELECT * FROM victimcorp_manager WHERE username='$username'";
  $res_u = mysqli_query($conn, $sql_u);
  if (mysqli_num_rows($res_u) > 0) {
    $name_error = "Sorry... username already taken"; 	
  }else{
  $sql = "INSERT into victimcorp_manager (username,email,password) VALUES('$username','$email',md5('$password'))";
  $success = $conn->query($sql);
  if (!$success) {
    die("Couldn't enter data: ".$conn->error);
}
else{
echo"
<center>
<span class=\"alert alert-success\">
User Registered
</span></center>";
}
}
}
else{

}
?>
  <div class="login-page">
  <div class="form">
    <form class="login-form" action="register.php" method="post">
    <div <?php if (isset($name_error)): ?> class="form_error" <?php endif ?> >
      <input type="text" name="username" required placeholder="username" />
      <?php if (isset($name_error)): ?>
	  	<span class="alert alert-danger" role="alert"><?php echo $name_error; ?></span>
	  <?php endif ?>
      </div>
      
      <input type="password" name="password" required placeholder="password"/>
      <input type="email" name="email" required placeholder="email address"/>
      <button type="submit" name="submit">create</button>
      <p class="message">Already registered? <a href="login.php">Sign In</a></p>
</form>
  </div>
</div>






    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
