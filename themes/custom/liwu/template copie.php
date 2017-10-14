<?php


  /*
  * Fonction qui va changer le layout des pages
  * de login, lost pass et register
  */
function liwu_theme() {

  $items = array();
    
  $items['user_login'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'liwu') . '/templates',
    'template' => 'user-login',
    'preprocess functions' => array(
       'liwu_preprocess_user_login'
    ),
  );
  $items['user_register_form'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'liwu') . '/templates',
    'template' => 'user-register-form',
    'preprocess functions' => array(
      'liwu_preprocess_user_register_form'
    ),
  );
  $items['user_pass'] = array(
    'render element' => 'form',
    'path' => drupal_get_path('theme', 'liwu') . '/templates',
    'template' => 'user-pass',
    'preprocess functions' => array(
      'liwu_preprocess_user_pass'
    ),
  );
  return $items;
}
?>



<?php
function liwu_preprocess_user_login(&$vars) {
  $vars['intro_text'] = t('This is my awesome login form');
}

function liwu_preprocess_user_register_form(&$vars) {
  $vars['intro_text'] = t('This is my super awesome reg form');
}

function liwu_preprocess_user_pass(&$vars) {
  $vars['intro_text'] = t('This is my super awesome request new password form');
}


/*
  Affiche et change le search

*/
function liwu_preprocess_page(&$variables)
{
    $block = module_invoke('search','block_view','search');
    $rendered_block = render($block);
    $variables['mysearchblock'] = $rendered_block;
}

function liwu_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['search_block_form']['#title'] = t('Rechercher'); // Change the text on the label element
    $form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    $form['search_block_form']['#size'] = 40;  // define size of the textfield
    $form['search_block_form']['#default_value'] = t('Rechercher'); // Set a default value for the textfield
    $form['actions']['submit']['#value'] = t('search'); // Change the text on the submit button
    $form['actions']['submit']['#attributes']['class'][] = 'your-custom-class'; 
    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/header/loupe.png');

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Rechercher';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Rechercher') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Rechercher'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Rechercher');
  }

  if ($form_id == 'search-form') {
    $form['search-form']['#title'] = t('Search'); // Change the text on the label element
    $form['search-form']['#title_display'] = 'invisible'; // Toggle label visibilty
    $form['search-form']['#size'] = 40;  // define size of the textfield
    $form['search-form']['#default_value'] = t('asd'); // Set a default value for the textfield
    $form['actions']['submit']['#value'] = t('search'); // Change the text on the submit button
    $form['actions']['submit']['#attributes']['class'][] = 'your-custom-class'; 
    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/header/loupe.png');

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }
} 

/**
 * Implementation of hook_form_alter().
 */function my_module_form_alter(&$form, $form_state, $form_id) {
if ($form_id == 'user_register_form') {
	array_unshift($form['#validate'], 'email_check_validate');
}
}
  
 /**
  * Validate profile form
  * Force form error if new email address matches current email address
  *
  */
 function email_check_validate ($form, &$form_state) {
	 print "hello";
	 $new_email = $form_state['values']['mail'];
	  
	 if ("plop" != $new_email) {
	 form_set_error('mail', t('Your email could not be changed'));
	 }
 }
 ?>