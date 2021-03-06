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

        <table class="table" style="background-color: #eee;">
            <thead>
                <tr>
                    <th>
                        <form>
                            <input type="text" class="form-control rounded-pill form-control-lg" placeholder="Buscar Mês e Ano" required>
                        </form>
                    </th>
                </tr>
                <tr>
                    <th scope="col" style="color: #06285b;">
                        <h4>DETALHES DO MEU PLANO</h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Nome do Plano</h6>
                    </th>
                    <td><a> <?php
                            $db->fetchplanId();
                            $db->fetchplanName();
                            echo $_SESSION['PlanName'];
                            ?></a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Valor Mensal</h6>
                    </th>
                    <td><a>
                            <?php
                            $db->fetchplanId();
                            $db->fetchplanName();
                            echo $_SESSION['SMSCredits'];
                            ?>
                        </a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Valor por Mensagem</h6>
                    </th>
                    <td><a>R$<?php
                                $db->fetchplanId();
                                $db->fetchplanName();
                                echo $_SESSION['PlanPrice'];
                                ?>

                        </a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Quantidade Máxima Extra</h6>
                    </th>
                    <td><a>1000</a></td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th scope="col" style="color: #06285b;">
                        <h4>MEU USO</h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Quantidade</h6>
                    </th>
                    <td><a>
                            <?php
                            $db->fetchplanId();
                            $db->fetchplanName();
                            echo $_SESSION['RequestsQuantity'];
                            ?>
                        </a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Usados</h6>
                    </th>
                    <td><a>0</a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Disponíveis</h6>
                    </th>
                    <td><a>
                            <?php
                            $db->fetchplanId();
                            $db->fetchplanName();
                            echo $_SESSION['RequestsQuantity'];
                            ?></a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Extras</h6>
                    </th>
                    <td><a>100</a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Valor Mensal</h6>
                    </th>
                    <td><a>R$500,00</a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Valor Adicional Por Extra</h6>
                    </th>
                    <td><a>R$0,80</a></td>
                </tr>
                <tr>
                    <th scope="row">
                        <h6 style="font-size: medium;">Valor Total</h6>
                    </th>
                    <td><a>R$0,00</a></td>
                </tr>
            </tbody>
        </table>

</body>

</html>