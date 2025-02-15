        (function() {
            // Get the overlay element
            var overlay = document.getElementById('protect-overlay');
            
            // Decode the password from base64
            var password = atob('M0xTSEFNSV9wd2Q=');
            
            // Get the login status from the cookie
            var loginStatus = getCookie("loginStatus");
            
            // If the user is already logged in, hide the overlay and exit
            if (loginStatus === password) {
                overlay.style.display = "none";
                return;
            }

            // Attach a submit event listener to the form
            overlay.getElementsByTagName('form')[0].onsubmit = function(event) {
                event.preventDefault(); // Prevent the form from submitting
                
                // Check if the entered password is correct
                if (this.answer.value === password) {
                    showCustomAlert('Congratulations! Correct password.', 'success');
                    setTimeout(function() {
                        overlay.style.display = "none"; // Hide overlay after alert is shown
                    }, 3000); // Wait for the alert to finish displaying
                    
                    // Set a cookie to remember the login status for 365 days
                    setCookie("loginStatus", password, 365);
                } else {
                    showCustomAlert('Error! Incorrect password.', 'error');
                    this.answer.value = ''; // Clear the input field
                }
            };
        })();

        /**
         * Function to get the value of a cookie by its name
         * @param {string} cname - The name of the cookie
         * @returns {string} - The value of the cookie, or an empty string if not found
         */
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookies = decodedCookie.split(';');
            
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.indexOf(name) === 0) {
                    return cookie.substring(name.length, cookie.length);
                }
            }
            return "";
        }

        /**
         * Function to set a cookie with a specified name, value, and expiration days
         * @param {string} cname - The name of the cookie
         * @param {string} cvalue - The value of the cookie
         * @param {number} exdays - The number of days until the cookie expires
         */
        function setCookie(cname, cvalue, exdays) {
            var date = new Date();
            date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }