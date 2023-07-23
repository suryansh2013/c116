function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nWjpZKkIh/model.json', modelReady);
}
function modelReady(error, results) { 
}