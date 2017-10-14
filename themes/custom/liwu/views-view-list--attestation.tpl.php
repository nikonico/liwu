<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  <?php print $list_type_prefix; ?>
    <?php foreach ($rows as $id => $row): ?>
      <li class="attestation <?php print $classes_array[$id]; ?>"><?php print $row; ?>
        <div class="download"></div>
      	<div class="red-band">
      		<div class="red-band-left">
				    <div class="red-band-up">
		          <div class="title"></div>   
		        </div>
		        <div class="red-band-down">
              <div class="cours"></div>
              <div class="section"></div>
		          <div class="module"></div>
              <div class="date"></div>
		        </div>
      		</div>
        </div>
        <div class="stamp"></div>
        <div class="preview">
          <div class="tags"></div>
          <div class="resume"></div>
        </div>
      </li>
    <?php endforeach; ?>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
