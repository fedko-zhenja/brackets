module.exports = function check (string, config) {
    const newConfig = config.map(item => item.join(''));
    
    function findValue () {
        for (let i = 0; i < newConfig.length; i++) {
            if (string.includes(newConfig[i]) === true) {
                return true;
            }
        }

        return false;
    }

    while(findValue(string, config)) {
        for (let i = 0; i < newConfig.length; i++) {
            string = string.replaceAll(newConfig[i], '');
        }
      }

      if (string.length === 0) {
        return true;
      } else {
        return false;
    }

}
