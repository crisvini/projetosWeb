<?php

include_once 'DB.php';
include 'VerifySession.php';

$db = new DB();
?>

<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style/dashStyle.css">
    <link href="https://fonts.googleapis.com/css?family=Muli:300,700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">
    <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    <link rel="shortcut icon" href="images/truckIcon.png" type="image/x-icon" />
    <title>Dashboard Expresso API</title>
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
        <div id="content" class="bg-grey w-100">

            <div class="container">
                <div class="row">
                    <div class="col-lg-8 my-3">
                        <div class="card rounded-0">
                            <div class="card-header bg-light">
                                <h4>NÚMERO DIÁRIO SMS</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="myChart" width="300" height="150"></canvas>
                            </div>
                        </div>
                        <table class="table" style="background-color: #fff;">
                            <thead>
                                <tr>
                                    <th scope="col" style="color: #06285b;">
                                        <h4>
                                            <div class="container" id="piechart2"></div>
                                        </h4>
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" style="color: #06285b;">
                                        <h4>RESUMO DO PLANO PACOTE SMS</h4>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <h6 style="font-size: medium;">Nome do Plano</h6>
                                    </th>

                                    <td><a>
                                            <?php
                                            $db->fetchplanId();
                                            $db->fetchplanName();
                                            echo $_SESSION['PlanName'];
                                            ?></a>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">
                                        <h6 style="font-size: medium;">Valor Mensal</h6>
                                    </th>
                                    <td><a><?php
                                            $db->fetchplanId();
                                            $db->fetchplanName();
                                            echo $_SESSION['SMSCredits'];
                                            ?></a></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <h6 style="font-size: medium;">Valor por Mensagem</h6>
                                    </th>
                                    <td><a>R$<?php
                                                $db->fetchplanId();
                                                $db->fetchplanName();
                                                echo $_SESSION['PlanPrice'];
                                                ?></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- page content end-->
            <!-- grafico -->
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
            <script>
                var ctx = document.getElementById('myChart').getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                        datasets: [{
                            label: 'Número Diário SMS',
                            data: [50, 100, 150, 100, 70, 100, 150],
                            backgroundColor: [
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873'
                            ],
                            maxBarThickness: 30,
                            maxBarLength: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            </script>
            <script>
                var ctx = document.getElementById('myChart2').getContext('2d');
                var myChart2 = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                        datasets: [{
                            label: 'Número Chamadas Diárias',
                            data: [50, 100, 150, 100, 70, 100, 150],
                            backgroundColor: [
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873',
                                '#053873'
                            ],
                            maxBarThickness: 30,
                            maxBarLength: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            </script>
            <!-- grafico end-->
</body>

</html>