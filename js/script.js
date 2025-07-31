/*Name this external file gallery.js*/

function upDate(previewPic){

      console.log("Mouseover triggered");
      console.log("Image source: " + previewPic.src);
      console.log("Image alt: " + previewPic.alt);
    
      const imageDiv = document.getElementById('image');

      imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";


      imageDiv.innerHTML = previewPic.alt;
	}

	function unDo(){
   
    console.log("Mouseout triggered");
    const imageDiv = document.getElementById('image');

    imageDiv.style.backgroundImage = "url('')";


     imageDiv.innerHTML = "Hover over an image below to display here.";
		
	}