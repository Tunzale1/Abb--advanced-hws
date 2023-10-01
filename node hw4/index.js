import express from "express";
import bodyParser from "body-parser";
import fs from "fs/promises"

const app=express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(bodyParser.json());

let myArray = [
    {
        "id": 1,
        "title": 'Breaking News: New Discovery in Space!',
        "text": 'Astronomers have made an astonishing discovery of a new exoplanet in a distant galaxy.',
      },
      {
        "id": 2,
        "title": 'Short Story: “Tell Her I Was Kind”',
        "text": 'Join us this weekend for a charity run to raise funds for a local children\'s hospital.',
      },
    {
        "id": 3,
        "title": "A Fox in Chernihiv Zoo Gives Birth to a Cub",
        "text": "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!"
      },
      {
        "id": 4,
        "title": "A Beautiful Boat Ride in Kashmir",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 5,
        "title": "Can You See the Link Between God and Justice?",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 6,
        "title": "Dissidents And Women Are Targeted By Iran’s High-Tech Surveillance",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 7,
        "title": "Are You Sure Multiculturalism Has Failed, Ms. Braverman?",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 8,
        "title": "Canada’s Prime Minister Should Not Be So Quick to Condemn India",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 9,
        "title": "Is the German Economy Now Destined to Decline?",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 10,
        "title": "A General Shows How to Deflate a Hysteria Balloon",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
      "id": 11,
      "title": "‘This is history’: UAW workers from the picket lines",
      "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    }
  ];
  
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} query:${JSON.stringify(req.query)} body:${JSON.stringify(req.body)}`);
    next();
  });

  
//get all articles
app.get('/api/newsposts', (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const size = parseInt(req.query.size) || 10;
      const start = (page - 1) * size;
      const end = start + size;
      const myNews = myArray.slice(start, end);
      res.json(myNews);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

//get specific article
  app.get('/api/newsposts/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const newsArticle = myArray.find((article) => article.id === id);
      if (!newsArticle) {
        res.status(404).send('There are have not any article');
      } else {
        res.json(newsArticle);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

//create new article
  app.post('/api/newsposts', (req, res) => {
    try {
      const newNewsArticle = {
        id: myArray.length + 1,
        title: req.body.title,
        text: req.body.text,
      };
      myArray.push(newNewsArticle);
      res.json(newNewsArticle);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  //change any information of specific article
  app.put('/api/newsposts/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedNewsArticle = myArray.find((article) => article.id === id);
      if (!updatedNewsArticle) {
        res.status(404).send('There are have not any article');
      } else {
        if (req.body.title) {
          updatedNewsArticle.title = req.body.title;
        }
        if (req.body.text) {
          updatedNewsArticle.text = req.body.text;
        }
        res.json(updatedNewsArticle);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

//remove specific article
  app.delete('/api/newsposts/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const index = myArray.findIndex((article) => article.id === id);
      if (index === -1) {
        res.status(404).send('There are have not any article');
      } else {
        myArray.splice(index, 1);
        res.sendStatus(200);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

  app.listen(PORT, HOST, () => {
    console.log(`My server is running on http://${HOST}:${PORT}`);
  });