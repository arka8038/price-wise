import mongoose from 'mongoose'

let isConnected = false

export const connectToDb = async () => {
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URI) return console.log('No MongoDB URI')

  if (isConnected) return console.log('Using current database connection')

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}
