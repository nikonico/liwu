<?php
drupal_add_js(drupal_get_path('theme', 'liwu') .'/liwu.js');
?>
<div class="header">
	<div class="header-left">
		<div class="header-logo clearFix">
	
			<?php if ($logo): ?>
		     	<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
		        		<img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
		      	</a>
		    <?php endif; ?>
		</div>
		
		<div class="header-log">
			<?php if ($logged_in): ?>
      			 <a href="<?php base_path(); ?>user/logout">
      			   <img src="<?php print render($base_path); ?>sites/all/themes/custom/liwu/images/header/logout.png" alt="Log-out" />
      			 </a>
    			<?php else: ?>
    				 <a href="#login">
    				   <img src="<?php print render($base_path); ?>sites/all/themes/custom/liwu/images/header/login.png" alt="Log-in" />
    				 </a>
    			<?php endif; ?>
		</div>
	
	</div>
	
	<div class="header-right">
	 
		<div class="header-text">
			<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo-text">
				<img src="<?php print render($base_path); ?>sites/all/themes/custom/liwu/images/header/text.png" alt="liwu" />
			</a>
			<div class="search">
				<?php print $mysearchblock; ?>
			</div>
		</div>
		
		<div class="header-menu">
			<?php print render($page['main_menu']); ?>
		</div>
	</div>
	
</div>
<div id="main">
	<div class="liwu-content-container-div clearfix">
	  <?php if ($messages): ?>
	    <div id="messages">
	      <div class="section clearfix">
	        <?php print $messages; ?>
	      </div>
	    </div>
	  <?php endif; ?>
	   
	  <?php if ($breadcrumb): ?>
	    <div id="breadcrumb"><?php print $breadcrumb; ?></div>
	  <?php endif; ?>
	   
	  <?php if ($tabs): ?>
	    <div class="tabs">
	      <?php print render($tabs); ?>
	    </div>
	  <?php endif; ?> 
	   
	  <?php print render($page['content']); ?>
	  	<div class="hidden">
	  		<?php print render($page['hidden']); ?>
		</div>
	</div>
</div>