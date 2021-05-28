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

    for (let i = 0; i < commandObjectArray.length; i++) {
      let commandObject = commandObjectArray[i];
      let commandType = commandObject.commandType;
      let commandValue = commandObject.value;
      let resultObject = {};
      if(commandType === 'STATUS_CHECK') {
        resultObject["completed"] = true;
        resultObject['roverStatus'] = {
          mode: this.mode, 
          generatorWatts: this.generatorWatts,
          position: this.position
        }
      }
      resultsArray.push(commandObject);
    }

    returnObject['results'] = resultsArray;

    return returnObject;
    };
    // for (let i = 0; i < message.commands.length; i++) {
    //   if (message.commands[i].commandType === 'STATUS_CHECK') {
    //     response.results.push({completed: true, roverStatus; {
    //       mode: this.mode, 
    //       generatorWatts: this.generatorWatts,
    //       position: this.position}});

    //   } else 
    // }  
    }
    
//     return response
module.exports = Rover;