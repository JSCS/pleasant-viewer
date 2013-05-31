<div id="takeover">
  <form action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post" enctype="multipart/form-data">

    <div style="width: 30%; float: left;">
      <input type="text" name="post_topic" size="60" style="width: 80%; margin: 5px;" value="<?php echo strip_tags(stripslashes($_POST['post_topic'])); ?>" /><br>
      <select name="post_category_id" style="margin: 5px;"><?php echo $category_options; ?></select>
    </div>

    <div style="float: left; width: 60%;">
      <textarea name="post_introduction" rows="3" cols="20" style="width: 80%;"><?php echo strip_tags(stripslashes($_POST['post_introduction'])); ?></textarea>
    </div>

    
    <div style="clear: both; width: 30%; float: left; margin-top: 30px; overflow:auto;">    
      <strong>Citations</strong><br /><span id="tooltip">Type your citation and hit <b>enter</b>..</span>
      <textarea name="post_citations" id="citations" rows="16" cols="200"><?php echo strip_tags(stripslashes($_POST['post_citations'])); ?></textarea>
    </div>

        
    <div style="width: 65%; float: right; margin-top: 30px;">    
      <strong>Preview</strong><span id="detected_book">Book</span><br />
        <div id="sortable">
	  <dl id="cite" class="ui-state-default">      	
	  </dl>
	</div>		
    </div>

    

    <div style="clear: both;"><input type="submit" name="submit" value="Submit" /></div>
    
  </form>
</div>
