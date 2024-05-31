const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = Math.max(...score) * 100;

    const classes = ['Melanocytic nevus', 'Squamous cell carcinoma', 'Vascular lesion'];

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    let result, explanation, suggestion;

    if (label === 'Melanocytic nevus') {
      result = "Cancer";
      explanation = "Melanocytic nevus adalah kondisi permukaan kulit memiliki bercak warna yang berasal dari sel-sel melanosit, yakni pembentukan warna kulit dan rambut.";
      suggestion = "Segera periksa ke dokter!";
    } else if (label === 'Squamous cell carcinoma') {
      result = "Cancer";
      explanation = "Squamous cell carcinoma adalah jenis kanker kulit yang umum dijumpai. Penyakit ini sering tumbuh pada bagian-bagian tubuh yang sering terkena sinar UV.";
      suggestion = "Segera periksa ke dokter!";
    } else if (label === 'Vascular lesion') {
      result = "Cancer";
      explanation = "Vascular lesion adalah penyakit yang dikategorikan sebagai kanker atau tumor. Penyakit ini sering muncul pada bagian kepala dan leher.";
      suggestion = "Segera periksa ke dokter!";
    }


    return { confidenceScore, label: result, explanation, suggestion };
  } catch (error) {
    throw new InputError(`Terjadi kesalahan input: ${error.message}`);
  }
}

module.exports = predictClassification;