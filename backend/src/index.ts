import { PrismaClient } from '@prisma/client';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT;
const prisma = new PrismaClient();

app.post('/api/create-banner', async (req, res) => {
  try {
    const newBanner = await prisma.banner.create({
      data: {
        description:
          'Master Data Structures & Algorithms: Boost Your Coding Skills Today!',
        link: 'https://google.com/',
        duration: 1,
        isVisible: true,
      },
    });

    res.status(200).json({ banner: newBanner });
  } catch (e) {
    if (e) console.log(e);
    res.status(404).json({ error: 'Some error occurred' });
  }
});

app.post('/api/update-banner/:id', async (req, res) => {
  try {
    const bannerId = parseInt(req.params.id);
    const body = req.body;

    const updateBanner = await prisma.banner.update({
      where: { id: bannerId },
      data: {
        description: body.description,
        link: body.link,
        duration: body.duration,
        isVisible: body.isVisible,
      },
    });

    res.status(200).json({ banner: updateBanner });
  } catch (e) {
    if (e) console.log(e);
    res.status(404).json({ error: 'Some error occured' });
  }
});

app.post('/api/delete-banner', async (req, res) => {
  try {
    const bannerDelete = await prisma.banner.deleteMany({});
    res.status(200).json({ message: 'Deleted Banners' });
  } catch (e) {
    if (e) console.log(e);
    res.status(404).json({ error: 'Some error occured' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at port`);
});
