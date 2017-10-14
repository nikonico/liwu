<!-- Custom login form -->

<p>Login with your Facebook account or e-mail address.</p>

<!-- Print Fb connect button if fboauth module loaded -->
<div>
 <?php if (module_exists('fboauth')) {
   print fboauth_action_display('connect');
   }
 ?>
</div>

<!-- Print login form -->
<div>
 <?php print drupal_render_children($form) ?>
</div>

<!-- Print create account and password reset links -->
<div>
 <a href="/user/register" title="Create an account">Sign up</a> |
 <a href="/user/password" title="Reset your password">Forgot your password?</a>
</div>