/* Slider.js */

    // Simple Javascript image slider with some help from JavascriptKit.com
    var sliderimg = new Array() // create new array to preload images
    sliderimg[0] = new Image() // create new instance of image object
    sliderimg[0].src = "images/ew-small.jpg" // set image src property to image path, preloading image in the process
    sliderimg[1] = new Image()
    sliderimg[1].src = "images/udacity-small.jpg"
    sliderimg[2] = new Image()
    sliderimg[2].src = "images/bootstrap-small.jpg"

/* The other bit of Javascript to make my image slider do it! */

    //variable that will increment through the images
    var step=0

    function slideit(){
     //if browser does not support the image object, exit.
     if (!document.images)
      return
     document.getElementById('slide').src = sliderimg[step].src
     if (step<2)
      step++
     else
      step=0
     //call function "slideit()" every 2 seconds
     setTimeout("slideit()",2000)
    }

    //Do it!
    slideit()