// Create the tooltips only when document ready
 $(document).ready(function()
 {
     $('#mypic').qtip({
         content: 'This Is Me!',
         style: {
         	classes: 'qtip-youtube'
         },
         position: {
             target: 'mouse', // Track the mouse as the positioning target
             adjust: { x: 10, y: 20 } // Offset it slightly from under the mouse
         }
     });
 });