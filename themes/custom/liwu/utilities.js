Drupal.behaviors.resizedImagesLink = function(context) {
  $('a.whatever-class', context).attr('target', '_blank');
}