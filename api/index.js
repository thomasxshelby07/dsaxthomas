import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Support larger body sizes if needed for data seeding

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is missing.");
  process.exit(1);
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB Atlas.'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// ─── MONGOOSE MODELS & SCHEMAS ──────────────────────────────────────────────

// Solution Schema
const SolutionSchema = new mongoose.Schema({
  type: String,
  concept: String,
  code: String,
  dryRun: [String],
  complexity: String
}, { _id: false });

// Question Schema
const QuestionSchema = new mongoose.Schema({
  isMastery: Boolean,
  id: String,
  difficulty: String,
  name: { type: String, required: true },
  companies: [String],
  link: String,
  problemStatement: String,
  testCases: [{
    input: String,
    output: String,
    explanation: String
  }],
  solutions: [SolutionSchema],
  importantNotes: String
}, { _id: false });

// Pattern Schema
const PatternSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  coreRule: String,
  keywords: [String],
  subPatterns: [{
    name: String,
    points: [String]
  }],
  confusionZone: [{
    trigger: String,
    pattern: String
  }],
  questions: [QuestionSchema]
}, { timestamps: true });

// Code Snippet Schema
const CodeSnippetSchema = new mongoose.Schema({
  language: String,
  title: String,
  code: String
}, { _id: false });

// Subsection Schema
const SubsectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: [String],
  codeSnippet: CodeSnippetSchema
}, { _id: false });

// Exercise Schema
const ExerciseSchema = new mongoose.Schema({
  id: String,
  q: String,
  a: String
}, { _id: false });

// Section Schema
const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: [String],
  subSections: [SubsectionSchema],
  exercises: [ExerciseSchema]
}, { _id: false });

// Python Topic Schema
const PythonTopicSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  objectives: [String],
  sections: [SectionSchema],
  keyTakeaways: [String],
  conceptQuestions: [{ q: String, a: String }],
  codingQuestions: [{ q: String, a: String }]
}, { timestamps: true });

// Create models
const Pattern = mongoose.model('Pattern', PatternSchema);
const PythonTopic = mongoose.model('PythonTopic', PythonTopicSchema);

// ─── API ENDPOINTS ──────────────────────────────────────────────────────────

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

// GET all DSA Patterns
app.get('/api/patterns', async (req, res) => {
  try {
    const patterns = await Pattern.find().sort({ id: 1 });
    res.json(patterns);
  } catch (error) {
    console.error('Error fetching patterns:', error);
    res.status(500).json({ error: 'Failed to fetch patterns data from MongoDB' });
  }
});

// GET all Python Lessons
app.get('/api/python', async (req, res) => {
  try {
    const topics = await PythonTopic.find().sort({ id: 1 });
    res.json(topics);
  } catch (error) {
    console.error('Error fetching Python topics:', error);
    res.status(500).json({ error: 'Failed to fetch Python topics from MongoDB' });
  }
});

// Fallback error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong inside the server' });
});

// Local Development Server Listener
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}

// Export Express app for Vercel Serverless Function deployment
export default app;
export { Pattern, PythonTopic };
