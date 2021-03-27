import { MongoClient } from 'mongodb'

const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin123@maincluster.mwx7j.mongodb.net/auth-demo?retryWrites=true&w=majority'
  )
  return client
}

export { connectToDatabase }
