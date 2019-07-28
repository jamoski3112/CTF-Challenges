<?php
include('session.php');
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
  

    <title>Admin Panel</title>
    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/dashboard/">

    <!-- Bootstrap core CSS -->
    <link href="https://v4-alpha.getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="https://v4-alpha.getbootstrap.com/examples/dashboard/dashboard.css" rel="stylesheet">
  </head>

  <body>
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Welcome: <?php echo $_SESSION['username']; ?></a>

      
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Overview <span class="sr-only">(current)</span></a>
            </li>
            
         
            
          </ul>
        </nav>

        <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          <h1>Dashboard</h1>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                
                	<?php
                	include('config.php');
                	$sql="SELECT id,name,email,message FROM contactus";
					$success = $conn->query($sql);
					if ($success->num_rows > 0) {
					while($row = $success->fetch_assoc()) {
						echo "<tr><td>". $row["id"]. " </td> " . "<td>".$row["name"]. "</td> ". "<td>".$row["email"]. "</td> "."<td>".$row["message"]."</td></tr>";
				    }
				} else {
				    echo "0 results";
				}


$conn->close();
                  // <td>1,001</td>
                  // <td>Lorem</td>
                  // <td>ipsum</td>
                  // <td>dolor</td>
                  ?>
                
              </tbody>
            </table>
          </div>
          <div class="table-responsive">
          	<h2>Internal Messages</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                
                	<?php
                	include('config.php');
                	$sql="SELECT id,name,message FROM secret_contact";
					$success = $conn->query($sql);
					if ($success->num_rows > 0) {
					while($row = $success->fetch_assoc()) {
						echo "<tr><td>". $row["id"]. " </td> " . "<td>".$row["name"]. "</td> ". "<td>".$row["message"]."</td></tr>";
				    }
				} else {
				    echo "0 results";
				}


$conn->close();
                  // <td>1,001</td>
                  // <td>Lorem</td>
                  // <td>ipsum</td>
                  // <td>dolor</td>
                  ?>
                
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://v4-alpha.getbootstrap.com/dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->

  </body>
</html>
