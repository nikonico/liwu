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
<div class="blog-teaser">
	<div class="top">
		<div class="title">
			<?php if (!empty($fields['title'])): ?>
		    	<?php print $fields['title']->content ?>
		  	<?php endif; ?>
		</div>
		<div class="date">
			<?php if (!empty($fields['created'])): ?>
		    	<?php print $fields['created']->content ?>
		  	<?php endif; ?>
		</div>
	</div>
	<div class="content">
		<div class="content-left">
			<?php if (!empty($fields['field_banner'])): ?>
		    	<?php print $fields['field_banner']->content ?>
		  	<?php endif; ?>
		 </div>
		<div class="content-right">
			<div class="body">
				<?php if (!empty($fields['body'])): ?>
			    	<?php print $fields['body']->content ?>
			  	<?php endif; ?>
			</div>
			<div class="tag">
				<?php if (!empty($fields['term_node_tid'])): ?>
			    	<?php print $fields['term_node_tid']->content ?>
			  	<?php endif; ?>
			</div>
			<div class="bottom">
				<span class="comment">
					<?php if (!empty($fields['comment_count'])): ?>
				    	<?php print $fields['comment_count']->content ?>
				  	<?php endif; ?>
					<img src="/sites/all/themes/custom/liwu/images/blog/blog-article-comment-count.png" />
			  	</span>
			  	<span class="user">
					<?php if (!empty($fields['name'])): ?>
				    	<?php print $fields['name']->content ?>
				  	<?php endif; ?>
					<img src="/sites/all/themes/custom/liwu/images/blog/blog-article-user.png" />
				</span>
			</span>
			</div>
		</div>
	</div>
</div>
