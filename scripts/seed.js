import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Pattern, PythonTopic } from '../api/index.js';
import { patternsData } from '../src/data/patterns.js';
import { pythonData } from '../src/data/pythonData.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI is missing from environment variables.");
  process.exit(1);
}

const seedDatabase = async () => {
  try {
    console.log("Connecting to MongoDB for seeding...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected successfully.");

    // 1. Seed DSA Patterns
    console.log("Dropping existing Patterns collection...");
    await Pattern.deleteMany({});
    console.log("Collection dropped.");

    console.log(`Seeding ${patternsData.length} DSA Patterns into MongoDB...`);
    const seededPatterns = await Pattern.insertMany(patternsData);
    console.log(`Successfully seeded ${seededPatterns.length} Patterns!`);

    // 2. Seed Python Lessons
    console.log("Dropping existing PythonTopics collection...");
    await PythonTopic.deleteMany({});
    console.log("Collection dropped.");

    console.log(`Seeding ${pythonData.length} Python Lessons into MongoDB...`);
    const seededPython = await PythonTopic.insertMany(pythonData);
    console.log(`Successfully seeded ${seededPython.length} Python Lessons!`);

    console.log("Database Seeding Completed Successfully! 🎉");
  } catch (error) {
    console.error("Critical seeding error occurred:", error);
  } finally {
    console.log("Disconnecting from database...");
    await mongoose.disconnect();
    console.log("Disconnected.");
    process.exit(0);
  }
};

seedDatabase();
