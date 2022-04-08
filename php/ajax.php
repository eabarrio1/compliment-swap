
<?php

$array = json_decode(stripslashes(strip_tags($_POST['data'])));

echo '<pre>'; 
print_r($array); 
echo '</pre>';

$a = array_map(
    function ($array) {
        return explode(' - ', $array);
    }, 
    explode(' ', $str)
);
var_dump($a);

$line = explode("-", $array);

$newLine = array('from' => '','to' => ''); // add the rest of the columns.....address,etc

foreach($line as $value){
    list($name,$phone,$address,$date,$postcode) = explode(" ",$value);

    $newLine['name'] .= (empty($newLine['name'])? $name : " ". $name);
    $newLine['phone'] .= (empty($newLine['phone'])? $phone : " ". $phone);
    // etc
}

// echo '<pre>'; 
// print_r($newLine); 
// echo '</pre>';

//   foreach($data as $d){
//      echo $d;
//      print_r($d +'whattt');
//   }
//trying

// $date = "04/30/1973";

// list($month, $day, $year) = split('[/.-]', $date);
// echo "Month: $month; Day: $day; Year: $year<br />\n";

// print_r($arr + 'whattt');  

//   // here i would like use foreach:


    

// if($_POST){
//     $name = "elena.a.barrio@gmail.com";
//     $email = "elena.a.barrio@gmail.com";
//     $message = "hello bay";

// //send email
//     mail("elena.a.barrio@gmail.com", "This is an email from:" . "elena.a.barrio@gmail.com", $message);
//     mail("elena.a.barrio+1@gmail.com", "jejejje:" . "elena.a.barrio+1@gmail.com", $message);

// }
?> 


<!-- <?php
$to      = 'elena.a.barrio@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: elena.a.barrio@gmail.com' . "\r\n" .
    'Reply-To: elena.a.barrio@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>   -->

<!-- <?php
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'insert':
                insert();
                break;
            case 'select':
                select();
                break;
        }
    }

    function select() {
        echo "The select function is called.";
        exit;
    }

    function insert() {
        echo "The insert function is called.";
        exit;
    }
?> -->