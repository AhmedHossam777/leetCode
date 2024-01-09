/**
 * @param {number} millis
 * @return {Promise}
 */

function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

let t = Date.now()
sleep(1000).then(() => console.log((Date.now() - t))) 
