// Goal: Rearrange an array so that result is uniformly random permutation in linear time.

const KnuthShuffle = (array) => {

  for (let i = 0; i < array.length; i++) {

    let r = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[r];
    array[r] = temp;

  }
  return array;
}


module.exports = KnuthShuffle;