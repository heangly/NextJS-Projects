import { MongoClient } from 'mongodb'

const connectDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin123@maincluster.mwx7j.mongodb.net/events?retryWrites=true&w=majority'
  )
  return client
}

const insertDocument = async (client, document) => {
  const db = client.db()
  await db.collection('newsletter').insertOne(document)
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const userEmail = req.body.email
    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' })
      return
    }

    try {
      const client = await connectDatabase()
      await insertDocument(client, { email: userEmail })
      client.close()
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' })
      return
    }

    res.status(201).json({ message: 'Signed Up!' })
  }
}

export default handler
