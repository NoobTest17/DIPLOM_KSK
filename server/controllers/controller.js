const axios = require('axios');

class ArduinoСontroller {
  constructor(ip, type, params = {}) {
    this.ip = `http://192.168.0.${ip}:80/control/`;
    this.type = type;
    this.params = params;
  }

  set setParams(params) {
    this.params = params;
  }

  get getType() {
    return this.type;
  }

  get getIp() {
    return this.ip;
  }

  async controllerAction() {
    try {
      const response = await axios.get(
        this.ip + this.type,
        {
          params: { ...this.params },
        },
      );

      console.log('Arduino response:', response.data);
    } catch (error) {
      console.error('Error sending request to Arduino:', error);
    }
  }
}

const lightСontroller = new ArduinoСontroller(13, 'light', {});
const musicСontroller = new ArduinoСontroller(14, 'music', {});
const blindsСontroller = new ArduinoСontroller(15, 'blinds', {});
const televisionСontroller = new ArduinoСontroller(16, 'television', {});
const waterСontroller = new ArduinoСontroller(17, 'water', {});
const woodСontroller = new ArduinoСontroller(18, 'wood', {});


module.exports = {
  ArduinoСontroller,
  lightСontroller,
  musicСontroller,
  blindsСontroller,
  televisionСontroller,
  waterСontroller,
  woodСontroller
};