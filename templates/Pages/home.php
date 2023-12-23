<?php
$this->disableAutoLayout();

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  <link rel="preload" as="style" onload="this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap">

  <meta charset="UTF-8" />
  <link rel="icon" href="/logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rekrytor</title>
  <script type="module" crossorigin src="/assets/index-55751b84.js"></script>
  <link rel="stylesheet" href="/assets/index-ac31c98d.css">
</head>


<body>
  <div id="app"></div>
  <script>
    window.baseUrl = 'rekrytor.fi';
    window.url = 'https://rekrytor.fi';
    window.auth_token = '<?= $token ?>';
  </script>
</body>

</html>

