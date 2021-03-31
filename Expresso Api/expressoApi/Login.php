<?php
session_start();
require_once 'DB.php';

Class login
{   
    private $conn;

    public function __construct()
    {
        $this->conn = new DB();
    }

    public function login()
    {
       $this->conn->getConnection();
        
        if (empty($_POST['usuario']) || empty($_POST['senha'])) {
            header('Location: index.php');
            exit();
        }
        
        $usuario = mysqli_real_escape_string($this->conn->getConnection(), $_POST['usuario']);
        $senha = mysqli_real_escape_string($this->conn->getConnection(), $_POST['senha']);
        
        $query = "select * from ClientApi where Username = '{$usuario}' and Password = md5('{$senha}')";
        
        $result = mysqli_query($this->conn->getConnection(), $query);
        
        $row = mysqli_num_rows($result);
        
        if ($row == 1) {
            while ($row = $result->fetch_assoc()) {
                $_SESSION['Name'] = $row['Username'];
                $_SESSION['UserId'] = $row['ClientId'];
            }
            header('Location: Dashboard.php');
            exit();
        } else {
            header('Location: Index.php');
            $_SESSION['nao_autenticado'] = true;
            exit();
        }
    }

}



$login = new Login();
$login->login();
