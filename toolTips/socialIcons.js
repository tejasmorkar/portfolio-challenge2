// Create the tooltips only when document ready
 $(document).ready(function()
 {
     $('#Medium').qtip({
         content: 'Medium Blogs',
         style: {
            classes: 'qtip-bootstrap'
         },
         position: {
             target: 'mouse', // Track the mouse as the positioning target
             adjust: { x: 10, y: 20 } // Offset it slightly from under the mouse
         }
     });
     $('#Facebook').qtip({
         content: 'Facebook Profile',
         style: {
            classes: 'qtip-bootstrap'
         },
         position: {
             target: 'mouse', // Track the mouse as the positioning target
             adjust: { x: 10, y: 20 } // Offset it slightly from under the mouse
         }
     });
     $('#Twitter').qtip({
         content: 'Twitter Posts',
         style: {
            classes: 'qtip-bootstrap'
         },
         position: {
             target: 'mouse', // Track the mouse as the positioning target
             adjust: { x: 10, y: 20 } // Offset it slightly from under the mouse
         }
     });
 });
