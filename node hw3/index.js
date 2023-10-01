import express from "express";
import dotenv from "dotenv";
const app=express();

dotenv.config();
const array =[
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
]

app.use(express.json())

app.get('/', (req, res) => {
    const { page, size } = req.query;
    const pagenum = parseInt(page) || 1;
    const pagesize = parseInt(size) || 10;
  
    const start = (pagenum - 1) * pagesize;
    const end = start + pagesize;
    const newsArray = array.slice(start, end);
  
    if (newsArray.length === 0) {
      res.status(200).json([]);
    } else {
      res.status(200).json(newsArray);
    }
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error occurred');
  });
 
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;
  
  app.listen(port, host, () => {
    console.log(`My server is running on http://${host}:${port}`);
  });
