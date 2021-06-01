class Message {
  constructor(name, commands) {
    if (!name) {
      throw Error('Message name required.');
    }
    this.name = name;
    this.commands = commands;
  }      
   // Write code here!
}

module.exports = Message;