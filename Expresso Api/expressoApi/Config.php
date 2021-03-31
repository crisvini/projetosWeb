<?php
include 'DB.php';
include 'VerifySession.php';


$conn = new DB();

$con = $conn->getConnection();

if (isset($_POST['planoptions'])) {

  $options = mysqli_real_escape_string($con, $_POST['planoptions']);
  mysqli_query($con, "UPDATE ClientPlan SET PlanId=($options) WHERE ClientId ='" . $_SESSION['UserId'] . "'");
  header('Location: Dashboard.php');
}
?>


<!doctype html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style/config.css">
  <link href="https://fonts.googleapis.com/css?family=Muli:300,700&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">
  <link rel="shortcut icon" href="images/truckIcon.png" type="image/x-icon" />
  <title>Configurações</title>
</head>

<body>

  <div class="d-flex" id="content-wrapper">
    <!-- sidebar -->
    <div id="sidebar-container" class="bg-primary">
      <div class="logo">
        <h3 class="font-weight-light mb-0" style="color: #fff;">EXPRESSO API</h3>
      </div>
      <div class="menu">
        <a href="Dashboard.php" class="d-block text-light p-3 border-0"><i class="icon ion-md-stats lead mr-2"></i>Dashboard</a>
        <a href="Config.php" class="d-block text-light p-3 border-0"> <i class="icon ion-md-settings lead mr-2"></i>Configurações </a>
        <a href="Detail.php" class="d-block text-light p-3 border-0"> <i class="iconify" data-icon="bx:bx-detail" data-inline="false"></i> Detalhes SMS</a>
        <a href="Logout.php" class="d-block text-light p-3 border-0"> <i class="iconify" data-icon="ri:logout-box-fill" data-inline="false"></i> Logout</a>
      </div>
    </div>
    <!-- sidebar end -->
    <!-- page content -->
    <div id="content" class="bg-grey w-100" align="center">
      <h4 style="color: #fff; background-color: #06285b; font-weight: 300;"> SEUS PROVEDORES:</h4>
      <form action="Config.php" method="POST">
        <div class="form-group">
          <select name="planoptions" class="form-control" id="options">
            <option value="3">RTE</option>
            <option value="4">ABC</option>
            <option value="1">GBC</option>
            <option value="2">ACD</option>
          </select>
        </div>
        <div>
          <input type="submit" class="btn btn-primary"></button>
        </div>
      </form>
    </div>
</body>