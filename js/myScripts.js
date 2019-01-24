
 
// Header change on scroll
 window.onscroll = function() {scrollHeader()};
        function scrollHeader() {
          if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
              document.getElementById("headerBar").className = "scrolledHeader";
              document.getElementById("dropdown-content").className = "scrolledDropdown";
              
            } else {
              document.getElementById("headerBar").className = "";
              document.getElementById("dropdown-content").className = "dropdownLinks";
                 
          }
      }

 // Get the modal
            var modal = document.getElementById('theModal');

            // Get the button that opens the modal
            var btn = document.getElementById("busStopButton");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            btn.onclick = function() {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

// Maps toggle 
$('.changeMap').on('click', () => {
	$('.maps').toggle();
})