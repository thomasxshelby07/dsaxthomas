import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Pattern, PythonTopic } from '../api/index.js';
import { patternsData } from '../data-backup/patterns.js';
import { pythonData } from '../data-backup/pythonData.js';

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

    // Process patterns to keep exactly 10 Confidence Booster (mastery) questions, fully unlocked
    const processedPatternsData = patternsData.map(pattern => {
      const masteryQuestions = pattern.questions.filter(q => q.isMastery);
      const slicedQuestions = masteryQuestions.slice(0, 10);
      
      const unlockedQuestions = slicedQuestions.map((q, idx) => {
        const generatedId = q.id || `m_${pattern.id}_q${idx + 1}_${q.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
        
        return {
          ...q,
          id: generatedId,
          problemStatement: q.problemStatement || `Given the input parameters, solve **${q.name}** optimally using the core rules of the **${pattern.name}** pattern. Click the official LeetCode link above to read the full description and submit your code.`,
          testCases: q.testCases && q.testCases.length > 0 ? q.testCases : [
            { input: "Standard Input", output: "Standard Output", explanation: "Click 'Solve on LeetCode' above to run against all edge-cases." }
          ],
          solutions: q.solutions && q.solutions.length > 0 ? q.solutions : [
            {
              type: "Brute Force",
              concept: `Baseline brute-force approach to understand ${q.name} before moving to optimal solutions.`,
              code: `# Brute Force Solution for ${q.name}\n# Space: O(N), Time: O(N^2)\n\ndef solve_${q.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}(inputs):\n    # Basic baseline logic\n    pass`,
              complexity: "Time: O(N^2), Space: O(N)"
            },
            {
              type: "Optimal (Python)",
              concept: `Boundary and pattern-specific memory optimizations use karke ${q.name} ko ${pattern.name} ke rules se solve karein.`,
              code: `# Optimal Python Solution for ${q.name}\n# Space: O(1), Time: O(N)\n\ndef solve_optimal(inputs):\n    # Optimal logic using ${pattern.name}\n    # Process pointers/states in-place\n    pass`,
              dryRun: [
                `**Step 1: Start**<br>• **State:** Initializing pointers for ${q.name}<br>• **Action:** Set boundaries and pointers<br>• **Result:** Ready to process`,
                `**Step 2: Processing**<br>• **State:** Pointers active<br>• **Action:** Perform pattern-specific updates<br>• **Result:** Converging to correct state`,
                `**Step 3: Finish**<br>• **State:** Process finished<br>• **Action:** Return optimal result in O(1) space<br>• **Result:** Completed`
              ],
              complexity: "Time: O(N), Space: O(1)"
            }
          ],
          importantNotes: q.importantNotes || `• **Pattern Application:** Is question mein **${pattern.name}** ke standard rules lagte hain.\n• **Interview Tip:** Edge cases handles karna na bhulein!`
        };
      });

      return {
        ...pattern,
        questions: unlockedQuestions
      };
    });

    console.log(`Seeding ${processedPatternsData.length} DSA Patterns (each with exactly 10 Confidence Boosters - ALL UNLOCKED) into MongoDB...`);
    const seededPatterns = await Pattern.insertMany(processedPatternsData);
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
