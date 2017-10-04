function theBeatlesPlay(musiciansArray, instrumentsArray) {

  var storageArray = new Array;

  for (var i = 0; i < musiciansArray.length; i++) {

    storageArray.push(musiciansArray[i] + " plays " + instrumentsArray[i]);
    console.log(storageArray[i]);

  }

  return storageArray;

}

function johnLennonFacts(johnArray) {

  var counter = johnArray.length;

  while (counter > 0) {

    johnArray[counter] = johnArray[counter] + '!!!'

    counter++
  }
}
