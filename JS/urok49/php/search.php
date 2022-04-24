<?php

if ($_GET['query'] == "jack") {
    $result = array(
        array(
            "text" => "Jacket",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=jacket"
        ),
        array(
            "text" => "Jacket Women",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Jacket%20Women"
        ),
        array(
            "text" => "Jacket Men",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Jacket%20Men"
        ),
        array(
            "text" => "Jackets and Coats",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Jackets%20And%20Coats"
        )
    );
} elseif ($_GET['query'] == "sweat") {
    $result = array(
        array(
            "text" => "Sweater",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater"
        ),
        array(
            "text" => "Sweater Women",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Women"
        ),
        array(
            "text" => "Sweater Men",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Men"
        ),
        array(
            "text" => "Sweater Vest",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Vest"
        ),
        array(
            "text" => "Sweater Cotton",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Cotton"
        ),
    );
}

echo json_encode($result);



?>