<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8" />
      <title>Interpol Secret Document</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" crossorigin="anonymous">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" crossorigin="anonymous">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" crossorigin="anonymous"></script>
   </head>
   <body>
   	<h1 align="center"> Uploader </h1>
<div class="container">
    <div class="col-md-4"></div>
    <div class="col-md-4">
        <form action="" method="post" enctype="multipart/form-data">
            <input type="file" id="file" name="file" multiple="multiple" />
            <p style="text-align: right; margin-top: 20px;">
                <input type="submit" name="submit" value="Upload Files" class="btn btn-lg btn-primary" />
            </p>
        </form>
    </div>
    <div class="col-md-4"></div>
</div>
</body>
<?php
error_reporting(0);
if(isset($_POST["submit"])) {
	$rand_number = rand(1,100);
	$target_dir = "uploads/";
	$target_file = $target_dir . md5(basename($_FILES["file"]["name"].$rand_number));
	$file_name = $target_dir . basename($_FILES["file"]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($file_name,PATHINFO_EXTENSION));
	$type = $_FILES["file"]["type"];
	$check = getimagesize($_FILES["file"]["tmp_name"]);
	if($check["mime"] == "image/png" || $check["mime"] == "image/gif"){
		$uploadOk = 1;
	}else{
		$uploadOk = 0;
		echo "<p align=\"center\">Only PNG and GIF can be Uploaded <p>";
	} 
  if($uploadOk == 1){
      move_uploaded_file($_FILES["file"]["tmp_name"], $target_file.".".$imageFileType);
      echo "<p align=\"center\">File uploaded at /uploads </p>";
  }
}
?>
<!--md5sum(filename.ext+randomint(100)).ext -->
