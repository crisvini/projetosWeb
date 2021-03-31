<?php

class DB
{
    private $dbhost = '192.168.56.1';
    private $dbusername = 'gabriel';
    private $dbpassword = 'root';
    private $database = 'banco';

    public function __construct()
    {
        $this->connect();
    }

    public function getConnection()
    {
        return $this->conn;
    }

    private function connect()
    {
        $this->conn = mysqli_connect(
            $this->dbhost,
            $this->dbusername,
            $this->dbpassword,
            $this->database
        );
    }

    public function fetchplanId()
    {
        $conn = $this->getConnection();

        if ($conn->connect_error) {
            trigger_error('Connection failed: ' . $conn->error);
        }

        $sql =
            "SELECT * FROM ClientPlan WHERE ClientId = '" .
            $_SESSION['UserId'] .
            "'";

        $result = $conn->query($sql);

        if (!$result) {
            trigger_error('Invalid query: ' . $conn->error);
        }
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $_SESSION['PlanId'] = $row['PlanId'];
                $_SESSION['SMSCredits'] = $row['SMSCredits'];
            }
        } else {
            echo '0';
        }
    }

    public function fetchplanName()
    {
        $conn = $this->getConnection();

        if ($conn->connect_error) {
            trigger_error('Connection failed: ' . $conn->error);
        }

        $sql =
            "SELECT * FROM Planx WHERE Planx.ID = '" .
            $_SESSION['PlanId'] .
            "'";

        $result = $conn->query($sql);

        if (!$result) {
            trigger_error('Invalid query: ' . $conn->error);
        }
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $_SESSION['PlanName'] = $row['Name'];
                $_SESSION['PlanPrice'] = $row['Price'];
                $_SESSION['RequestsQuantity'] = $row['RequestsQuantity'];
            }
        } else {
            echo '0';
        }
    }
}
