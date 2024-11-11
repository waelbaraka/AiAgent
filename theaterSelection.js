 const TheaterSelection = {
      name: 'TheaterSelection',
      type: 'response',
      match: ({ trace }) =>
        trace.type === 'theater_selection' || trace.payload.name === 'theater_selection',
      render: ({ trace, element }) => {
        const formContainer = document.createElement('div');
    
        // Sample list of theaters
        const theaters = [
            { name: "AMC The Grove 14", id: "QDOf6yimbT0qHpn" },
            { name: "Cinépolis Luxury Cinemas", id: "DGbfBrfVnFb2UDw" },
            { name: "Regal Edwards", id: "80bClRfwJiNjhMv" },
            { name: "Cinemark Baldwin", id: "bJ9faWfljCM9cBg" },
            { name: "Harkins Cerritos", id: "QDOf6yimbT0qHpn" }
        ];
    
 
        // HTML structure for the theater selection
        const theatersHTML = `
        <div class="theater-selection">
                <h1 class="animated-title">Select a Theater</h1>
                <div class="theaters" id="theaterButtons">
                    ${theaters.map(theater => `<button class="theater-button" data-id="${theater.id}">${theater.name}</button>`).join('')}
                </div>
                <div class="payload-info"></div>
            </div>
    <style>
    /* Container for the theater selection */
    .theater-selection {
        background: url('https://img.freepik.com/premium-vector/open-theater-blue-curtains-with-light-seats_165488-1650.jpg') center center/cover no-repeat; /* Replace with your image URL */
        border-radius: 15px;
        padding: 30px;
        text-align: center;
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1); /* Softer shadow */
        position: relative;
    }
    
    /* Animation for the heading */
    .animated-title {
        font-size: 28px;
        margin-bottom: 25px;
        color: #f0f0f0; /* Light gray for better contrast */
        font-family: 'Poppins', sans-serif; /* Modern and clean font */
        letter-spacing: 1px;
        text-transform: uppercase;
        animation: fadeSlideUp 1s ease-in-out forwards;
        opacity: 0; /* Initial state for animation */
    }
    
    /* Keyframe animation for fade in and slide up */
    @keyframes fadeSlideUp {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8); /* Slightly down and scaled */
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1); /* Final position */
        }
    }
    
    /* Theater button container */
    .theaters {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px; /* Space between buttons */
    }
    
    /* Styling for theater buttons */
    .theater-button {
        background: #00d2ff; /* Bright cyan */
        background: linear-gradient(45deg, #00d2ff, #3a7bd5); /* Gradient for depth */
        color: #ffffff;
        border: none;
        border-radius: 30px; /* Softly rounded corners */
        padding: 12px 25px;
        font-size: 16px;
        margin: 5px;
        cursor: pointer;
        transition: all 0.3s ease; /* Smooth transitions */
        font-family: 'Poppins', sans-serif; /* Clean modern font */
        text-transform: uppercase;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        position: relative;
        z-index: 1;
    }
    
    .theater-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        background: #ffffff;
        z-index: -1;
        transition: transform 0.4s ease;
        transform: scaleX(0); /* Hidden initially */
        transform-origin: left;
    }
    
    .theater-button:hover::before {
        transform: scaleX(1); /* Reveal background on hover */
    }
    
    .theater-button:hover {
        color: #000000;
        transform: scale(1.05); /* Scale up slightly on hover */
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* More shadow when hovered */
    }
    
    .theater-button.selected {
        background-color: #28a745; /* Green for selected button */
        color: #ffffff;
        box-shadow: 0 4px 15px rgba(40, 167, 69, 0.5); /* Shadow with green tint */
    }
    
    .theater-button:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.5); /* Cyan focus ring */
    }
    </style>
    
        `;
    
        formContainer.innerHTML = theatersHTML;

// Append the container to the provided element
element.appendChild(formContainer);

// Add event listeners for the theater buttons
const buttons = formContainer.querySelectorAll('.theater-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the selected class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));

        // Add the selected class to the clicked button
        button.classList.add('selected');

        const selectedTheater = button.textContent;
        const selectedTheaterId = button.dataset.id; // Retrieve the ID

        console.log( selectedTheaterId);

        // Send data back to Voiceflow
        window.voiceflow.chat.interact({
            type: 'theater_selection', // Updated to match your requirement
            payload: {
                selectedTheater: selectedTheater,
                selectedTheaterId: selectedTheaterId // Send the ID too
            }
        });
    });
});
}
};;
    
 
   