<?php
	@session_start();
	if(!isset($_SESSION['user_id'])) {
		echo '<script>window.location.assign("index.php");</script>';
	}
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>Project-IB</title>
	<meta name="robots" content="index, follow"/>
    <meta name="keywords" content="audio visualization javascript html"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css">

     <link rel="stylesheet" type="text/css" href="assets/css/main.css" />
    <!-- <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css" /> -->

    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <style type="text/css">
    	#add-points input[type="text"] {
    		font-size: 40px;
    		padding: 10px;
    		text-align: center;
    	}

    	#transfer-points input[type="text"] {
    		font-size: 40px;
    		padding: 10px;
    		text-align: center;
    	}

    	#create-user input[type="text"] {
    		font-size: 20px;
    		padding: 10px;
    		margin-bottom: 10px;
    		/*text-align: center;*/
    	}
    	.full {
    width: 100%;	
}
.gap {
	height: 30px;
	width: 100%;
	clear: both;
	display: block;
}
.footer {
	background: #EDEFF1;
	height: auto;
	padding-bottom: 30px;
	position: relative;
	width: 100%;
	border-bottom: 1px solid #CCCCCC;
	border-top: 1px solid #DDDDDD;
}
.footer p {
	margin: 0;
}
.footer img {
	max-width: 100%;
}
.footer h3 {
	border-bottom: 1px solid #BAC1C8;
	color: #54697E;
	font-size: 18px;
	font-weight: 600;
	line-height: 27px;
	padding: 40px 0 10px;
	text-transform: uppercase;
}
.footer ul {
	font-size: 13px;
	list-style-type: none;
	margin-left: 0;
	padding-left: 0;
	margin-top: 15px;
	color: #7F8C8D;
}
.footer ul li a {
	padding: 0 0 5px 0;
	display: block;
}
.footer a {
	color: #78828D
}
.supportLi h4 {
	font-size: 20px;
	font-weight: lighter;
	line-height: normal;
	margin-bottom: 0 !important;
	padding-bottom: 0;
}
.newsletter-box input#appendedInputButton {
	background: #FFFFFF;
	display: inline-block;
	float: left;
	height: 30px;
	clear: both;
	width: 100%;
}
.newsletter-box .btn {
	border: medium none;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	-o-border-radius: 3px;
	-ms-border-radius: 3px;
	border-radius: 3px;
	display: inline-block;
	height: 40px;
	padding: 0;
	width: 100%;
	color: #fff;
}
.newsletter-box {
	overflow: hidden;
}
.bg-gray {
	background-image: -moz-linear-gradient(center bottom, #BBBBBB 0%, #F0F0F0 100%);
	box-shadow: 0 1px 0 #B4B3B3;
}
.social li {
	background: none repeat scroll 0 0 #B5B5B5;
	border: 2px solid #B5B5B5;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-o-border-radius: 50%;
	-ms-border-radius: 50%;
	border-radius: 50%;
	float: left;
	height: 36px;
	line-height: 36px;
	margin: 0 8px 0 0;
	padding: 0;
	text-align: center;
	width: 36px;
	transition: all 0.5s ease 0s;
	-moz-transition: all 0.5s ease 0s;
	-webkit-transition: all 0.5s ease 0s;
	-ms-transition: all 0.5s ease 0s;
	-o-transition: all 0.5s ease 0s;
}
.social li:hover {
	transform: scale(1.15) rotate(360deg);
	-webkit-transform: scale(1.1) rotate(360deg);
	-moz-transform: scale(1.1) rotate(360deg);
	-ms-transform: scale(1.1) rotate(360deg);
	-o-transform: scale(1.1) rotate(360deg);
}
.social li a {
	color: #EDEFF1;
}
.social li:hover {
	border: 2px solid #2c3e50;
	background: #2c3e50;
}
.social li a i {
	font-size: 16px;
	margin: 0 0 0 5px;
	color: #EDEFF1 !important;
}
.footer-bottom {
	background: #E3E3E3;
	border-top: 1px solid #DDDDDD;
	padding-top: 10px;
	padding-bottom: 10px;
}
.footer-bottom p.pull-left {
	padding-top: 6px;
}
.payments {
	font-size: 1.5em;	
}
    </style>
</head>
<body>
	<div class="container">
		<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
    	
									<img src="assets/img/Project.jpg"  width="200" height="200" class="img-responsive" align="right" alt="">
								
      
    </div>
   
  </div>
</nav>
		<!-- <div class="row">
			<div class="col-md-12">
				<h1>Project-IB</h1>
			</div>
		</div> -->
		<div class="row profile">
			<div class="col-md-12">
					<!-- <div class="row profile"> -->
						<div class="col-md-3">
							<div class="profile-sidebar">
								<!-- SIDEBAR USERPIC -->
								<div class="profile-userpic">
									<img src="assets/img/default-user-icon-profile.png" class="img-responsive" alt="">
								</div>
								<!-- END SIDEBAR USERPIC -->
								<!-- SIDEBAR USER TITLE -->
								<div class="profile-usertitle">
									<div class="profile-usertitle-name">
										<?php echo $_SESSION['firstname']; ?> <?php echo $_SESSION['lastname']; ?>
									</div>
									<div class="profile-usertitle-job">
										Administrator
									</div>
								</div>
								<!-- END SIDEBAR USER TITLE -->
								<!-- SIDEBAR BUTTONS -->
								<div class="profile-userbuttons">
									<!-- <a href="create-new-user.php"><button type="button" class="btn btn-success btn-sm">Create User</button></a> -->

									<button type="button" class="btn btn-success btn-sm button-create-user" data-toggle="modal" data-target="#create-user">Create User</button>

									<!-- Create User Modal -->
									<div id="create-user" class="modal fade" role="dialog">
									  <div class="modal-dialog">

									    <!-- Modal content-->
									    <div class="modal-content">
									      <div class="modal-header">
									        <button type="button" class="close" data-dismiss="modal">&times;</button>
									        <h4 class="modal-title">Create User</h4>
									      </div>
									      <div class="modal-body">
						                    <div class="form-group">
						                    	<h2 id="new_barcode"></h2>
						                        <input id="lastname" value='' placeholder="Last Name" type="text" class="form-control" />
						                        <input id="firstname" value='' placeholder="First Name" type="text" class="form-control" />
						                        <input id="contact_number" value='' placeholder="Contact No." type="text" class="form-control" />
						                        <input id="email" value='' placeholder="Email" type="text" class="form-control" />
						                    </div>
									      </div>
									      <div class="modal-footer">
									      	<button type="button" class="btn btn-success btn-sm button-create-user-modal">Create</button>
									        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
									      </div>
									    </div>

									  </div>
									</div>

									<a href="logout.php"><button type="button" class="btn btn-danger">Logout</button></a>
								</div>
								<!-- END SIDEBAR BUTTONS -->
								<!-- SIDEBAR MENU -->
								<div class="profile-usermenu">
									<ul class="nav">
										<li>
											<a href="customer-information.php">
											<!-- <i class="glyphicon glyphicon-home"></i> -->
											Customer Information </a>
										</li>
										<li>
											<a href="manage-account.php">
											Manage Account 	 </a>
										</li>
										<li class="active">
											<a href="user-account.php">
											User Account 	 </a>
										</li>
										<!-- <li>
											<a href="#">
											<i class="glyphicon glyphicon-user"></i>
											 </a>
										</li> -->
										<!-- <li>
											<a href="#" target="_blank">
											<i class="glyphicon glyphicon-ok"></i>
											Check Points </a>
										</li> -->
										<li>
											<a href="reward.php">
											<!-- <i class="glyphicon glyphicon-ok"></i> -->
											Rewards </a>
										</li>
										<li>
											<a href="history.php">
											<!-- <i class="glyphicon glyphicon-flag"></i> -->
											History </a>
										</li>
									</ul>
								</div>
								<!-- END MENU -->
							</div>
						</div>
						<div class="col-md-9">
				            <div class="profile-content">
							   
							   <div class="row">
							   		<div class="col-md-12">
							   			<h3>User Account</h3>
							   			<hr>
							   		</div>
							   		<div class="col-md-12">
						
												<div class="panel panel-primary">
													<div class="panel-heading">
														<h3 class="panel-title">User Account</h3>
														<div class="pull-right">
															<!-- <span class="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
																<i class="glyphicon glyphicon-filter"></i>
															</span> -->
														</div>
													</div>
													<!-- <div class="panel-body">
														<input type="text" class="form-control" id="dev-table-filter" data-action="filter" data-filters="#dev-table" placeholder="Filter Developers" />
													</div> -->
													<table class="table table-hover" id="dev-table">
														<thead>
															<tr>
																<th>#</th>
																<th>Full Name</th>
																<th>Contact Number</th>
																<th>Email</th>
																<th>Date Created</th>
															</tr>
														</thead>
														<tbody id="history">
															<!-- <tr>
																<td>7</td>
																<td>'jessie.jamola' transfered points from '123456789' to '321654987'</td>
																<td>TRANSFER</td>
																<td>
																30 seconds ago
																</td>
															</tr> -->
														</tbody>
													</table>
												</div>
									
							   		</div>
							   </div>
				            </div>
						</div>
					<!-- </div> -->

					<!-- https://bootsnipp.com/snippets/featured/user-profile-sidebar -->
			</div>
		</div>
		<div class="row text-center">
			<!-- <div class="col-md-4"></div> -->
			<footer>
    <div class="footer" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> About Us </h3>
                    <ul>
                        <li> <a href="#">  </a> An Internet Cafe Shop . . . .</li>
                      
                    </ul>
                </div>
                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Location </h3>
                    <ul>
                        <li> <a href="#">  Bonifacio St,</a> </li>
                        <li> <a href="#">  Poblacion District,  </a> </li>
                        <li> <a href="#"> Davao City </a> </li>
                       
                    </ul>
                </div>
                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Contact Us </h3>
                    <ul>
                        <li> <a href="#"> 09161342837 </a> </li>
                        
                    </ul>
                </div>
                <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                    <h3> Follow Us </h3>
                    <ul>
                        <li> <a href="#"> Facebook </a> </li>
                        <li> <a href="#"> Twitter </a> </li>
                        <li> <a href="#"> Instagram </a> </li>
                        
                    </ul>
                </div>
                <div class="col-lg-3  col-md-3 col-sm-6 col-xs-12 ">
                    <h3> Email Us </h3>
                    <ul>
                        <li>
                            <div class="input-append newsletter-box text-center">
                                <input type="text" class="full text-center" placeholder="Email ">
                                <button class="btn  bg-gray" type="button"> Project-Ib@gmail.com <i class="fa fa-long-arrow-right"> </i> </button>
                            </div>
                        </li>
                    </ul>
                  
                </div>
            </div>
            <!--/.row--> 
        </div>
        <!--/.container--> 
    </div>
    <!--/.footer-->
    
    <div class="footer-bottom">
        <div class="container">
            <p class="pull-left"> Project-IB 2017 </p>
            <div class="pull-right">
                <ul class="nav nav-pills payments">
                	<li><i class="fa fa-cc-visa"></i></li>
                    <li><i class="fa fa-cc-mastercard"></i></li>
                    <li><i class="fa fa-cc-amex"></i></li>
                    <li><i class="fa fa-cc-paypal"></i></li>
                </ul> 
            </div>
        </div>
    </div>
    <!--/.footer-bottom--> 
</footer>
		</div>
	</div>
	<script src="https://www.gstatic.com/firebasejs/4.2.0/firebase.js"></script>
	<script>
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDK-2nM0rSrtxL4KTSl9h0I0hoBO6GTF_M",
	    authDomain: "project-ib.firebaseapp.com",
	    databaseURL: "https://project-ib.firebaseio.com",
	    projectId: "project-ib",
	    storageBucket: "project-ib.appspot.com",
	    messagingSenderId: "539100574152"
	  };
	  firebase.initializeApp(config);

	  firebase.auth().signInAnonymously().catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});

	  firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
		    var isAnonymous = user.isAnonymous;
		    var uid = user.uid;
		    // ...
		  } else {
		    // User is signed out.
		    // ...
		  }
		  // ...
		});
	</script>
	<script type="text/javascript" src="assets/js/function.js"></script>
	<script type="text/javascript" src="assets/js/main.js"></script>
	<script type="text/javascript">setScanner();</script>
	<script type="text/javascript">showReward();</script>
</body>
</html>