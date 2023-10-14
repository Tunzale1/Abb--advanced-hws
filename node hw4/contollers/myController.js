let myArray = [
    {
        "id": 1,
        "title": "A Fox in Chernihiv Zoo Gives Birth to a Cub",
        "text": "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!"
      },
      {
        "id": 2,
        "title": "A Beautiful Boat Ride in Kashmir",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 3,
        "title": "Can You See the Link Between God and Justice?",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 4,
        "title": "Dissidents And Women Are Targeted By Iran’s High-Tech Surveillance",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 5,
        "title": "Are You Sure Multiculturalism Has Failed, Ms. Braverman?",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 6,
        "title": "Canada’s Prime Minister Should Not Be So Quick to Condemn India",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 7,
        "title": "Is the German Economy Now Destined to Decline?",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
        "id": 8,
        "title": "A General Shows How to Deflate a Hysteria Balloon",
        "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
      },
      {
      "id": 9,
      "title": "‘This is history’: UAW workers from the picket lines",
      "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    },
    {
      "id": 10,
      "title": "A Fox in Chernihiv Zoo Gives Birth to a Cub",
      "text": "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!"
    },
    {
      "id": 11,
      "title": "A Beautiful Boat Ride in Kashmir",
      "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    },
    {
      "id": 12,
      "title": "Can You See the Link Between God and Justice?",
      "text": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    }
    ]


export function getArticles(req, res) {
    try{
    const page = +(req.query.page) || 1
    const size = +(req.query.size) || 10
    const start = (page - 1) * size
    const end = start + size
    console.log(page, size, start, end);
    res.json(myArray.slice(start, end))
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}



export function getArticlesById(req, res) {
    try{
    console.log(req.params);
    const post = myArray.find(p => p.id === +req.params.id)
    if (!post) return res.status(404).send("There are have not any article")
    res.json(post)
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}



export function createArticle(req, res) {
    try {
        const newPost = {
            id: myArray.length + 1,
            title: req.body.title,
            text: req.body.text
        }
        myArray.push(newPost);
        res.json(newPost)
    } catch (error) {
        res.status(500).send("Error occured while creating")
    }
}



export function updateArticle(req, res) {
    try{
    const post = myArray.find(p => p.id === +req.params.id);
    if (!post) return res.status(404).send("There are have not any article");
    post.title = req.body.title || post.title
    post.text = req.body.text || post.text
    res.json(post)
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}



export function deleteArticle(req, res) {
    try{
    const id = +req.params.id
    const post = myArray.find(p => p.id === id);
    if (!post) return res.status(404).send('There are have not any article');

    myArray = myArray.filter(p => p.id !== id);
    res.status(200).json(post);
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}