
var controller = new ScrollMagic.Controller()

var wipeAnimation = new TimelineMax()
  // animate to second panel
  .to(".slider-row", 1,   {x: "-3200px"})

// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: ".slider-pin",
    triggerHook: 0.2,
    duration: "350%"
  })
  .setPin(".slider-pin")
  .setTween(wipeAnimation)
  .addTo(controller);


  $(".h2s").each(function() {
    var tl = new TimelineMax();
    var cov = $(this).find(".span");
    
  
    tl.to(cov, 0.1, { opacity: 1 });

  
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.19
    })
      .setTween(tl)
      // .addIndicators()
      .addTo(controller);
  });


  // $(".h2s").each(function() {
  //   var tl = new TimelineMax();
  //   var cov = $(this).find(".span");
    
  
  //   tl.to(cov, 0.1, { opacity: 0.3 });

  
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement: this,
  //     triggerHook: 0.05
  //   })
  //     .setTween(tl)
  //     // .addIndicators()
  //     .addTo(controller);
  // });




function pinimg() {
           
    new ScrollMagic.Scene({
      triggerElement: '.img-pin',
      duration: '1550',
      top: 0,
      left: 0,
      right: 0,
      triggerHook: 0,
    })

    .setPin('.img-pin')
    .addTo(controller)
    scene.offset(0)
}

pinimg()



// var scene = new ScrollMagic.Scene({
//     triggerElement: ".slider-row"
// })
// .setTween(".slider-row", 0.22, {x: -100%}) // trigger a TweenMax.to tween
// // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
// .addTo(controller);


// function pinslide() {
           
//     new ScrollMagic.Scene({
//       triggerElement: '.slider-pin',
//       duration: '100%',
//       top: 0,
//       left: 0,
//       right: 0,
//       triggerHook: 0.2,
//     })

//     .setPin('.slider-pin')
//     .addTo(controller)
//     scene.offset(0)
// }

// pinslide()

// init


// define movement of panels


  


