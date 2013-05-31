$j=jQuery.noConflict();
$j(function(){
  function Citation(citation){
    that = this;
    this.ready = function(cb){
      if (!isNaN(citation.charAt(0))) {
	citation = 'science_health ' + citation	
      }
      else {
	citation = 'bible ' + citation	
      }
      $j.getJSON(
        that.url = "http://cskit-server.herokuapp.com/v1/text.json?"
        + "callback=?&citations=" + citation
      )
      .success(function(data){
        citation = data[0];
        that.volume = citation.volume;
        that.citation = citation.citation;
        that.text = citation.text;
        cb();
      })
      .error(function(jqxhr, status, error){ //Why isn't this working!!!! -> Apparently by design, there's a bug filed for it :(      
        that.volume = status + " : " + error; // This will support error handling https://github.com/jaubourg/jquery-jsonp
      });
    };
  }

  function current_line(){
    return $j('#citations').val().substr(0, $j('#citations')[0].selectionStart).split("\n").length;
  }
  
  function update_preview(){
    if ($j('#x' + current_line()).length == 0) {
      	$j('#sortable').append('<dl id="x'+current_line()+'">      	  <dt id="citation_citation_'+current_line()+'">Citation #'+current_line()+'</dt>	  <dd id="citation_text_'+current_line()+'">Please type eg 4:4 or Gen 1:1...</dd> </dl>');      
    }
    reload_citation();
  }
  function reload_citation(){
    $j('#tooltip').text("Looking up citation, keep typing if I don't find anything..");    
    console.log(current_line());    
    
      if (!isNaN($j('#citations').val().charAt(0))) {
	$j('#detected_book').text('S&H');    
      }
      else {
	$j('#detected_book').text('KJV');    
      }	    
    cl = current_line();
    cit = $j('#citations').val().split('\n')[cl-1];
    console.log($j('#citations').val().split('\n')[0]);
    citation = new Citation(cit);
    citation.ready(function(){  
      if (!isNaN(citation.citation.charAt(0))) {
	citation.citation = 'S&H ' + citation.citation
      }
      $j('#citation_citation_'+cl).text(citation.citation);
      $j('#citation_text_'+cl).text(citation.text);  
      $j('#tooltip').text("Citation retrieved, hit enter for the next one..");
    });
  }

  $j('#citations').change(update_preview);
  $j('#citations').keyup(update_preview);  
  
  update_preview();
  console.log('just loaded citations');
  $j('#masthead').remove();
  $j('header').remove();
  //$j('#page').html($j('#takeover').html());
  
  
$j( document ).ready(function() {
  $j('#citations').focus();
  $j('#citations').val("Gen. 12:1-4 the (to :)");
  update_preview();
});

});

