import { MongoClient } from 'mongodb'

const connectDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin123$@maincluster.p03sz.mongodb.net/events?retryWrites=true&w=majority'
  )
  return client
}

const insertDocument = async (client, document) => {
  const db = client.db('newsletter')
  await db.collection('emails').insertOne(document)
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email: userEmail } = req.body

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' })
      return
    }

    let client

    try {
      client = await connectDatabase()
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed' })
      return
    }

    try {
      await insertDocument(client, { email: userEmail })
      client.close()
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed' })
    }

    res.status(201).json({ message: 'Signed Up' })
  }
}

export default handler
