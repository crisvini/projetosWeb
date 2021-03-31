<?php
session_start();

if(!$_SESSION['UserId'])
{
    header('Location: Index.php');
    exit();
}