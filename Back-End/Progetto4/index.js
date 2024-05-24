const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer  = require('multer')
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
require('dotenv').config();

const app = express();
const port = 3001;
const dbName = 'Progetto2';

// Models
// Lo schema sarà la struttura che deve avere ogni oggetto che salverò nella Collection di Mongo DB
const imageSchema = new mongoose.Schema( { 
    name: { type: String, required: true },
    path: { type: String, required: true }
} );

// Model mi permette di creare un oggetto e definire la collection di riferimento e lo schema da utilizzare
const imageModel = mongoose.model('Images', imageSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Utilizzo di Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'uploads/') }, // cartella di destinazione
    filename: function (req, file, cb) { cb(null, file.originalname) } // nome del file
})

function fileFilter (req, file, cb) {

    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        // To accept the file pass `true`, like so:
        cb(null, true)
    } else {
        cb(null, false)
        // You can always pass an error if something goes wrong:
        return cb(new Error('I don\'t have a clue!'))
    }

  }

const upload = multer({ storage: storage, fileFilter: fileFilter }) // Setto la cartella di destinazione per i file caricati sul server

// Utilizzo di Cloudinary 
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY 
});

const storageCloud = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'cloud-upload',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => file.originalname,
    },
  });

  const cloud = multer({ storage: storageCloud })




// Routes
app.post('/upload', upload.single('uploaded_file'),  (req, res) => {
    const file = req.file;
    console.log(file)
    res.status(200).json({ message: 'File salvato nella cartella uploads' })
})

app.post('/upload-cloud', cloud.single('uploaded_file_cloud'), async (req, res) => {
    const file = req.file;
    console.log(file)
    let obj = {
        name: file.originalname, 
        path: file.path
    }

    try{
        const newImage = imageModel(obj);
        const imageSave = await newImage.save();
        return res.status(201).json({ message: 'File salvato nel cloud', image: imageSave });
    } catch (error) {
        return res.status(500).json({message: 'Problemi nel salvataggio nel cloud', error: error})
    }
})

app.get('/send-email', async (req, res) => { 
  console.log("send-email");
  const msg = {
    to: 'example@example.com', // Change to your recipient
    from: 'example@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
  try {
    await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
      return res.status(response[0].statusCode).json({...response[0]})
    })
    .catch((error) => {
      console.error(error)
      return res.status(response[0].statusCode).json({error: {...error}})
    }) 
  } catch(error) {
      console.error(error)
      return res.status(404).json({error: "Errore Try!!!"})
    }
  
})


// Connect to DB and Start the server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(response => app.listen(port, () => console.log('Server attivo sulla porta: ' + port)))
        .catch(error => console.log(error))
