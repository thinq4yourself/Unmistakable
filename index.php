<!DOCTYPE html>
<html lang="en">
<head>
  <title>Tyler Goelz - Helping people to find and live their passion while making the world a better place through technology.</title>
  <meta name="description" content="Helping people to find and live their passion while making the world a better place through technology."/>

  <?php include( $_SERVER['DOCUMENT_ROOT'].'/includes/head.php'); ?>
</head>
<body>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><div class="logo-header"></div> Tyler Goelz</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#approach">Lean Approach</a></li>
          <li><a href="#muses">Muses</a></li>
          <li><a href="#about">About</a></li>
          <li class="hidden-xs"><button type="button" class="btn btn-default navbar-btn">#ABAA</button></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="jumbotron">
    <div class="container super-hero">
      <h1>Tyler Goelz
        <small>Inspiring people find and live their passion <br class="visible-lg" /> while making the world a better place through technology.</small>
      </h1>
    </div>
  </div>

  <?php include( $_SERVER['DOCUMENT_ROOT'].'/includes/scripts.php'); ?>
  <script type="text/javascript">
  $(".super-hero>h1").fitText();

  $(function(){
    $('nav').data('size','big');
  });

  $(window).scroll(function(){
    var $nav = $('nav');
    if ($('body').scrollTop() > 0) {
      if ($nav.data('size') == 'big') {
        $nav.data('size','small').stop().animate({
          height:'53px'
        }, 600);
      }
    } else {
      if ($nav.data('size') == 'small') {
        $nav.data('size','big').stop().animate({
          height:'100px'
        }, 600);
      }  
    }
  });
  </script>
</body>
</html>
