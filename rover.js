class Rover {
  constructor(position, mode = 'NORMAL', generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }  
  recieveMessage(messageObject) {
    let messageName = messageObject.name;
    let commandObjectArray = messageObject.commands;

    let returnObject = {};
    returnObject['message'] = messageName;

    let resultsArray = []; 
    returnObject['results'] = resultsArray;

    for (let i = 0; i < commandObjectArray.length; i++) {
      let commandObject = commandObjectArray[i];

      let commandType = commandObject.commandType;
      let commandValue = commandObject.value;
      let resultObject = {};
    
      if(commandType === 'STATUS_CHECK') {
        resultObject["completed"] = true;
        resultObject['roverStatus'] = {
        position: this.position,
        mode: this.mode,
        generatorWatts: this.generatorWatts,
        }
      } else
      if (commandType === 'MODE_CHANGE') {
        let commandValue = "LOW _POWER";
        resultObject['completed'] = false;
        resultObject['roverStatus'] = {
        position: this.position,
        }
      } else
      if (commandType === 'MODE_CHANGE') {
        let commandValue = "NORMAL";
        resultObject['completed'] = true;
        resultObject['roverStatus'] = {
        position: this.position,
        }
      }
            
       resultsArray.push(resultObject);     
    }
    return returnObject; 
  } 
}


 

    

//     return response
module.exports = Rover;