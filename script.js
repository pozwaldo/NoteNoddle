window.onload = startAudio(); //Starts listening for notes

//Settings Popup 
document.getElementById("settingsButton").addEventListener("click", function() {
  
  document.getElementById("scorePopup").style.display = "none"; // Make the popup visible
  const settingsPopup = document.getElementById("settingsPopup");
  this.classList.add("popup-hidden"); // Hide the Settings button
  settingsPopup.classList.toggle("popup-hidden");
  	
});

//Settings Popup -  Start button functionality
document.getElementById("startButton").addEventListener("click", function() {
  const settingsPopup = document.getElementById("settingsPopup");
  settingsPopup.classList.add("popup-hidden"); // Hide the popup
  document.getElementById("clefimage").style.display = "block"; // Make the clef visible
  document.getElementById("note1").style.display = "block"; // Make note1 visible
  document.getElementById("timer").style.display = "block"; // Make time visible 
  document.getElementById("scoreDisplay").style.display = "block"; // Make time visible 
  document.getElementById("scoreDisplay").textContent = "Score: " + 0;
  startTimer(); // Run the startTimer function
  changeImage(); // Run the changeImage function
  audioContext = new AudioContext();
  score = 0	
  	
});

// Try Again button functionality
const tryagainbutton = document.getElementById("tryAgainButton");
document.getElementById("tryAgainButton").addEventListener("click", function() {
  const scorePopup = document.getElementById("scorePopup");
  document.getElementById("scorePopup").style.display = "none"; // Make the popup invisible
  document.getElementById("clefimage").style.display = "block"; // Make the clef visible
  document.getElementById("note1").style.display = "block"; // Make note1 visible
  document.getElementById("timer").style.display = "block"; // Make time visible 
  document.getElementById("scoreDisplay").style.display = "block"; // Make time visible 		
  document.getElementById("scoreDisplay").textContent = "Score: " + 0;
  startTimer(); // Run the startTimer function
  changeImage(); // Run the changeImage function
  audioContext = new AudioContext();
  score = 0	
});


//Timer
const timerElement = document.getElementById("timer");


function startTimer() {
  const timevalue = document.getElementById("timedropdown").value;
  // Prepare countdown stages
  const stages = ["GO!"];
  let secondsRemaining = timevalue;
  timerElement.textContent = "Ready";	

 
	
  // Loop through preparation stages
  const intervalId = setInterval(() => {
    timerElement.textContent = stages.shift(); // Show and remove next stage
    if (stages.length === 0) {
      clearInterval(intervalId); // Done with preparation

      // Start actual countdown
      const countdownInterval = setInterval(() => {
        timerElement.textContent = secondsRemaining--;
		  
		  if (secondsRemaining === 0) {
		  console.log(score);
		  clearInterval(countdownInterval);
          timerElement.textContent = "--";
          document.getElementById("scorePopup").style.display = "block"; // Make the popup visible
          document.getElementById("finalscore").textContent = "Final Score: " + score; // Display the Score value			
	      document.getElementById("clefimage").style.display = "none"; // Make the clef visible
		  document.getElementById("note1").style.display = "none"; // Make note1 visible	  
		  document.getElementById("timer").style.display = "none"; // Make time visible 
          document.getElementById("scoreDisplay").style.display = "none"; // Make time visible 	
			  
			  
			  
			  audioContext = false;
			
        }
      }, 1000); // Update timer every second
    }
  }, 1000); // Show each stage for 1 second
}




let currentRandomNote1;

let score = 0; // Initialize Score with -1

//Set Target Image and Note Number  
      const imageElement1 = document.getElementById("note1");
      const note1display = document.getElementById("displaynote1");
     




//Based on Clef and Key, Generates a random note and corresponding image
function changeImage() {
	
	
	//Major Scale Transforming List 

      const arrayOfNotes = {};
	
	                          //  G   A   B   C   D   E   F   G   A   B   C   D   E   F   G   A   B   C   D   E  
	  arrayOfNotes["treble0"] = [55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84, 86, 88];
	  arrayOfNotes["treble1"] = [55, 57, 59, 60, 62, 64, 66, 67, 69, 71, 72, 74, 76, 78, 79, 81, 83, 84, 86, 88];
	  arrayOfNotes["treble2"] = [55, 57, 59, 61, 62, 64, 66, 67, 69, 71, 73, 74, 76, 78, 79, 81, 83, 85, 86, 88];
	  arrayOfNotes["treble3"] = [56, 57, 59, 61, 62, 64, 66, 68, 69, 71, 73, 74, 76, 78, 80, 81, 83, 85, 86, 88];
	  arrayOfNotes["treble4"] = [56, 57, 59, 61, 63, 64, 66, 68, 69, 71, 73, 74, 76, 78, 80, 81, 83, 85, 87, 88]; 
	  arrayOfNotes["treble5"] = [56, 58, 59, 61, 63, 64, 66, 68, 70, 71, 73, 74, 76, 78, 80, 82, 83, 85, 87, 88];
	  arrayOfNotes["treble6"] = [56, 58, 59, 61, 63, 65, 66, 68, 70, 71, 73, 74, 77, 78, 80, 82, 83, 85, 87, 89];
	  arrayOfNotes["treble-1"] = [55, 57, 58, 60, 62, 64, 65, 67, 69, 70, 72, 74, 76, 77, 79, 81, 82, 84, 86, 88];
	  arrayOfNotes["treble-2"] = [55, 57, 58, 60, 62, 63, 65, 67, 69, 70, 72, 74, 75, 77, 79, 81, 82, 84, 86, 87];           
    arrayOfNotes["treble-3"] = [55, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74, 75, 77, 79, 80, 82, 84, 86, 87];         
	  arrayOfNotes["treble-4"] = [55, 56, 58, 60, 61, 63, 65, 67, 68, 70, 72, 73, 75, 77, 79, 80, 82, 84, 85, 87]; 
	  arrayOfNotes["treble-5"] = [54, 56, 58, 60, 61, 63, 65, 66, 68, 70, 72, 73, 75, 77, 78, 80, 82, 84, 85, 87]; 
	
	                        // A   B   C   D   E   F   G   A   B   C   D   E   F   G   A   B   C   D   E   F
	  arrayOfNotes["alto0"] = [45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77];
	  arrayOfNotes["alto1"] = [45, 47, 48, 50, 52, 54, 55, 57, 59, 60, 62, 64, 66, 67, 69, 71, 72, 74, 76, 78];
	  arrayOfNotes["alto2"] = [45, 47, 49, 50, 52, 54, 55, 57, 59, 61, 62, 64, 66, 67, 69, 71, 73, 74, 76, 78];
	  arrayOfNotes["alto3"] = [45, 47, 49, 50, 52, 54, 56, 57, 59, 61, 62, 64, 66, 68, 69, 71, 73, 74, 76, 78];
	  arrayOfNotes["alto4"] = [45, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63, 64, 66, 68, 69, 71, 73, 75, 76, 78];
	  arrayOfNotes["alto5"] = [46, 47, 49, 51, 52, 54, 56, 58, 59, 61, 63, 64, 66, 68, 70, 71, 73, 75, 76, 78];
	  arrayOfNotes["alto6"] = [46, 47, 49, 51, 53, 54, 56, 58, 59, 61, 63, 65, 66, 68, 70, 71, 73, 75, 77, 78];
	  arrayOfNotes["alto-1"] = [45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62, 64, 65, 67, 69, 70, 72, 74, 76, 77];
	  arrayOfNotes["alto-2"] = [45, 46, 48, 50, 51, 53, 55, 57, 58, 60, 62, 63, 65, 67, 69, 70, 72, 74, 75, 77];
	  arrayOfNotes["alto-3"] = [44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74, 75, 77];
	  arrayOfNotes["alto-4"] = [44, 46, 48, 49, 51, 53, 55, 56, 58, 60, 61, 63, 65, 67, 68, 70, 72, 73, 75, 77];
	  arrayOfNotes["alto-5"] = [44, 46, 48, 49, 51, 53, 54, 56, 58, 60, 61, 63, 65, 66, 68, 70, 72, 73, 75, 77];
	           
	                         //B   C   D   E   F   G   A   B   C   D   E   F   G   A   B   C   D   E   F   G   A
	  arrayOfNotes["bass0"] = [35, 36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69];
	  arrayOfNotes["bass1"] = [35, 36, 38, 40, 42, 43, 45, 47, 48, 50, 52, 54, 55, 57, 59, 60, 62, 64, 66, 67, 69];
	  arrayOfNotes["bass2"] = [35, 37, 38, 40, 42, 43, 45, 47, 49, 50, 52, 54, 55, 57, 59, 61, 62, 64, 66, 67, 69];
	  arrayOfNotes["bass3"] = [35, 37, 38, 40, 42, 44, 45, 47, 49, 50, 52, 54, 56, 57, 59, 61, 62, 64, 66, 68, 69];
	  arrayOfNotes["bass4"] = [35, 37, 39, 40, 42, 44, 45, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63, 64, 66, 68, 69];
	  arrayOfNotes["bass5"] = [35, 37, 39, 40, 42, 44, 46, 47, 49, 51, 52, 54, 56, 58, 59, 61, 63, 64, 66, 68, 70];
	  arrayOfNotes["bass6"] = [35, 37, 39, 41, 42, 44, 46, 47, 49, 51, 53, 54, 56, 58, 59, 61, 63, 65, 66, 68, 70]; 
	  arrayOfNotes["bass-1"] = [34, 36, 38, 40, 41, 43, 45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62, 64, 65, 67, 69];
	  arrayOfNotes["bass-2"] = [34, 36, 38, 39, 41, 43, 45, 46, 48, 50, 51, 53, 55, 57, 58, 60, 62, 63, 65, 67, 69];
	  arrayOfNotes["bass-3"] = [34, 36, 38, 39, 41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 68];
	  arrayOfNotes["bass-4"] = [34, 36, 37, 39, 41, 43, 44, 46, 48, 49, 51, 53, 55, 56, 58, 60, 61, 63, 65, 67, 68];
	  arrayOfNotes["bass-5"] = [34, 36, 37, 39, 41, 42, 44, 46, 48, 49, 51, 53, 54, 56, 58, 60, 61, 63, 65, 66, 68];
	 
	
	//Get Dropdown Values
	const clefvalue = document.getElementById("clefdropdown").value;
	const keyvalue = document.getElementById("keydropdown").value;															  
  const range = document.getElementById("rangedropdown").value;
	const lowestnoteString = document.getElementById("lowestnotedropdown").value;

    // Ensure lowestnote is a number
    const lowestnote = parseInt(lowestnoteString);
	

    //Note 1
	  const randomNumber1 = Math.min(Math.floor(Math.random() * range) + lowestnote, 19);
	  
	  const randomNote1 = arrayOfNotes[`${clefvalue}${keyvalue}`][randomNumber1];
	  
	 imageElement1.src = "note" + (randomNumber1 + 1) + ".png";

	 note1display.textContent  = randomNote1;
	 const targetnote1 = randomNote1 
	 
	 currentRandomNote1 = randomNote1;
	  
  }

//Note Listening
const startButton = document.getElementById("startButton");
const frequencyDisplay = document.getElementById("frequency");
const midinoteDisplay = document.getElementById("midinote");
let audioContext = null;
let analyser = null;
let microphoneStream = null;

function startAudio() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphoneStream = audioContext.createMediaStreamSource(stream);

        // Noise reduction filter
        const biquadFilter = audioContext.createBiquadFilter();
        biquadFilter.type = "lowpass";
        biquadFilter.frequency.value = 41; // Adjust cutoff frequency as needed

        // Add GainNode for volume control
        const gainNode = audioContext.createGain();
        microphoneStream.connect(gainNode);
        gainNode.connect(biquadFilter);

        biquadFilter.connect(analyser);

        analyser.fftSize = 4096; // Adjust for desired frequency resolution

        const frequencyData = new Uint8Array(analyser.frequencyBinCount);


let midinoteHistory = [];
let longMidinote = null;

function renderFrame() {
  analyser.getByteFrequencyData(frequencyData);

  // Find the dominant frequency (simple approach)
  let maxIndex = 0;
  let maxValue = frequencyData[0];
  for (let i = 1; i < frequencyData.length; i++) {
    if (frequencyData[i] > maxValue) {
      maxIndex = i;
      maxValue = frequencyData[i];
    }
  }

  const frequency = (maxIndex / analyser.frequencyBinCount) * audioContext.sampleRate / 2;
  frequencyDisplay.textContent = frequency.toFixed(2) + " Hz";

  const midinote = Math.round(12 * Math.log2(frequency / 440) + 69);
  midinoteDisplay.textContent = midinote;

  // Add the current midinote to the history
  midinoteHistory.push(midinote);
  
   // Keep the history to the last 10 midinotes
   if (midinoteHistory.length > 15) {
    midinoteHistory.shift();
  }

    // Check if all 10 midinotes are the same
    if (midinoteHistory.every(note => note === midinoteHistory[0])) {
      longMidinote = midinote;
      // Do something with the longMidinote, e.g., trigger an action
      console.log("Long note detected:", longMidinote);
    } else {
      longMidinote = null;
    }


  const randomNote1 = imageElement1.src.slice(0, -4); // Get current random note

          if (currentRandomNote1 === longMidinote || currentRandomNote1 === longMidinote - 12) {

          score++; // Increment the score if notes match

                document.getElementById("scoreDisplay").textContent = "Score: " + score;

            {
              const correctmessage = document.getElementById("correct");
              correctmessage.style.opacity = 1; // Make text visible
              setTimeout(() => {
                correctmessage.style.opacity = 0; // Make text invisible after 1 second
              }, 500); // 1000 milliseconds is 1 second

            }
            changeImage(); // Re-run the changeImage function when notes match

          }
          requestAnimationFrame(renderFrame);
        }
        requestAnimationFrame(renderFrame);
  
      })
      .catch(error => {
        console.error("Error accessing microphone:", error);
      });
  } else {
    console.error("MediaDevices API not supported.");
  }
}

//Clef Dispalay and Dropdown Menu

const clefNoteOptions = {
  treble: {
    "0": "G3",
    "1": "A3",
    "2": "B3",
    "3": "C4",
    "4": "D4",
    "5": "E4",
    "6": "F4",
    "7": "G4",
    "8": "A4",
    "9": "B4",
    "10": "C5",
    "11": "D5",
    "12": "E5",
    "13": "F5",
    "14": "G5",
    "15": "A5",
    "16": "B5",
    "17": "C6",
    "18": "D6",
  },
  alto: {
    "3": "C3",
    "4": "D3",
    "5": "E3",
    "6": "F3",
    "7": "G3",
    "8": "A3",
    "9": "B3",
    "10": "C4",
    "11": "D4",
    "12": "E4",
    "13": "F4",
    "14": "G4",
    "15": "A4",
    "16": "B4",
    "17": "C5",
    "18": "D5",
  },
  bass: {
    "1": "C2",
    "2": "D2",
    "3": "E2",
    "4": "F2",
    "5": "G2",
    "6": "A2",
    "7": "B2",
    "8": "C3",
    "9": "D3",
    "10": "E3",
    "11": "F3",
    "12": "G3",
    "13": "A3",
    "14": "B3",
    "15": "C4",
    "16": "D4",
    "17": "D4",
    "18": "E4",
    "19": "F4",
    "20": "G4",
    "21": "A5",

  }
};


function changeclef() {

  const clefDropdown = document.getElementById("clefdropdown");
  const lowestNoteDropdown = document.getElementById("lowestnotedropdown");
  const selectedClef = clefDropdown.value;

  // Clear existing options
  lowestNoteDropdown.innerHTML = "";

  // Get the note options for the selected clef
  const noteOptions = clefNoteOptions[selectedClef];

  // Create and append new options
  for (const [value, text] of Object.entries(noteOptions)) {
    const option = document.createElement("option");
    option.value = value;
    option.text = text;
    lowestNoteDropdown.appendChild(option);
  }

  
    
					   // Get the selected value from the dropdown
    var imagevalue1 = document.getElementById("clefdropdown").value;
    var imagevalue2 = document.getElementById("keydropdown").value;
    
					  // Update the source of the image
    document.getElementById("clefimage").src = imagevalue1 + imagevalue2 + ".png";
    
   
  
  }






